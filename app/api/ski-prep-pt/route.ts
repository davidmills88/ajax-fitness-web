import { NextResponse } from "next/server";
import { forwardContactToGhl, isGhlConfigured } from "@/lib/ghl";
import { site } from "@/lib/site";

export const skiPrepSource = "ski-prep-pt";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  note?: string;
};

function clean(value?: string) {
  return (value ?? "").toString().trim();
}

function splitName(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  const firstName = parts[0] ?? "";
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName: lastName || "n/a" };
}

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const note = clean(body.note);

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Please include your name, email, and phone." },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 200 || phone.length > 40 || note.length > 2000) {
    return NextResponse.json(
      { error: "Please shorten that and try again." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "Please use a valid email." }, { status: 400 });
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) {
    return NextResponse.json({ error: "Please use a valid phone number." }, { status: 400 });
  }

  const { firstName, lastName } = splitName(name);
  const payload = {
    firstName,
    lastName,
    email,
    phone,
    interest: skiPrepSource,
    message: note || "Ski goal / note: none provided.",
    source: skiPrepSource,
    tags: [skiPrepSource],
  };

  if (!isGhlConfigured()) {
    console.info("[ski-prep-pt] GHL not configured; accepting stub lead", {
      email,
      source: skiPrepSource,
      locationId: process.env.GHL_LOCATION_ID || site.ghlLocationId,
    });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const result = await forwardContactToGhl(payload);
    return NextResponse.json({ ok: true, forwarded: true, via: result.via });
  } catch (error) {
    console.error("[ski-prep-pt] GHL forward failed", error);
    return NextResponse.json(
      {
        error: `We couldn’t send that just now. Please call ${site.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }
}
