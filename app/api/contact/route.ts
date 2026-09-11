import { NextResponse } from "next/server";
import { forwardContactToGhl, isGhlConfigured } from "@/lib/ghl";
import { site } from "@/lib/site";

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

function clean(value?: string) {
  return (value ?? "").toString().trim();
}

export async function POST(request: Request) {
  let body: Body;

  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const interest = clean(body.interest) || "Membership";
  const message = clean(body.message);

  if (!firstName || !lastName || !email || !phone) {
    return NextResponse.json(
      { error: "Please include your name, email, and phone." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "Please use a valid email." }, { status: 400 });
  }

  if (!site.interests.includes(interest as (typeof site.interests)[number])) {
    return NextResponse.json({ error: "Please choose a valid interest." }, { status: 400 });
  }

  const payload = { firstName, lastName, email, phone, interest, message };

  if (!isGhlConfigured()) {
    console.info("[contact] GHL not configured; accepting stub lead", {
      email,
      interest,
      locationId: process.env.GHL_LOCATION_ID || site.ghlLocationId,
    });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const result = await forwardContactToGhl(payload);
    return NextResponse.json({ ok: true, forwarded: true, via: result.via });
  } catch (error) {
    console.error("[contact] GHL forward failed", error);
    return NextResponse.json(
      {
        error: `We couldn’t send that just now. Please call ${site.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }
}
