import { site } from "./site";

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  source?: string;
  tags?: string[];
};

const DEFAULT_SOURCE = "ajaxfitness.com contact form";

function leadSource(payload: ContactPayload) {
  return payload.source?.trim() || DEFAULT_SOURCE;
}

function leadTags(payload: ContactPayload) {
  if (payload.tags && payload.tags.length > 0) return payload.tags;
  return [
    "website-contact",
    payload.interest.toLowerCase().replace(/\s+/g, "-"),
  ];
}

const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/upsert";
const GHL_VERSION = "2021-07-28";

export function isGhlConfigured() {
  return Boolean(process.env.GHL_PIT || process.env.GHL_WEBHOOK_URL);
}

export async function forwardContactToGhl(payload: ContactPayload) {
  const locationId = process.env.GHL_LOCATION_ID || site.ghlLocationId;
  const notes = [
    payload.interest ? `Interested in: ${payload.interest}` : "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n\n");

  if (process.env.GHL_WEBHOOK_URL) {
    const res = await fetch(process.env.GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locationId,
        ...payload,
        source: leadSource(payload),
        ...(payload.tags && payload.tags.length > 0
          ? { tags: payload.tags }
          : {}),
      }),
    });

    if (!res.ok) {
      throw new Error(`GHL webhook failed (${res.status})`);
    }

    return { via: "webhook" as const };
  }

  if (!process.env.GHL_PIT) {
    return { via: "stub" as const };
  }

  const res = await fetch(GHL_CONTACTS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GHL_PIT}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      phone: payload.phone,
      source: leadSource(payload),
      tags: leadTags(payload),
      notes,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL contacts API failed (${res.status}): ${body.slice(0, 240)}`);
  }

  return { via: "contacts" as const };
}
