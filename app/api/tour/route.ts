import { NextResponse } from "next/server";
import { forwardContactToGhl, isGhlConfigured } from "@/lib/ghl";
import { site } from "@/lib/site";

type Body = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  notes?: string;
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
  const date = clean(body.date);
  const time = clean(body.time);
  const notes = clean(body.notes);

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return NextResponse.json(
      { error: "Please include your name, email, phone, date, and time." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return NextResponse.json({ error: "Please use a valid email." }, { status: 400 });
  }

  const message = [`Preferred walkthrough: ${date} at ${time}`, notes]
    .filter(Boolean)
    .join("\n\n");
  const payload = { firstName, lastName, email, phone, interest: "Tour", message };

  if (!isGhlConfigured()) {
    console.info("[tour] GHL not configured; accepting stub lead", { email, date, time });
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const result = await forwardContactToGhl(payload);
    return NextResponse.json({ ok: true, forwarded: true, via: result.via });
  } catch (error) {
    console.error("[tour] GHL forward failed", error);
    return NextResponse.json(
      {
        error: `We couldn’t send that just now. Please call ${site.phoneDisplay}.`,
      },
      { status: 502 },
    );
  }
}
