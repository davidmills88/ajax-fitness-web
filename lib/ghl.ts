import { site } from "./site";

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

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
        source: "ajaxfitness.com contact form",
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
      source: "ajaxfitness.com contact form",
      tags: ["website-contact", payload.interest.toLowerCase().replace(/\s+/g, "-")],
      notes,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GHL contacts API failed (${res.status}): ${body.slice(0, 240)}`);
  }

  return { via: "contacts" as const };
}
