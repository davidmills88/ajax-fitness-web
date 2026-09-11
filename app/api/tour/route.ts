import { NextResponse } from "next/server";
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

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return NextResponse.json(
      { error: "Please include your name, email, phone, date, and time." },
      { status: 400 },
    );
  }

  console.info("[tour] stub request", { email, date, time });

  return NextResponse.json({
    ok: true,
    stub: true,
    message: `Tour booking isn’t wired yet. We’ll treat this as a request and follow up, or call ${site.phoneDisplay}.`,
  });
}
