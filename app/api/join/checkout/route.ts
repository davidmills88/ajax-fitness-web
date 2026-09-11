import { NextResponse } from "next/server";
import { site, type PlanId } from "@/lib/site";

const plans = new Set<PlanId>(["monthly", "annual", "day"]);

export async function POST(request: Request) {
  let plan: string | undefined;

  try {
    const body = (await request.json()) as { plan?: string };
    plan = body.plan;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!plan || !plans.has(plan as PlanId)) {
    return NextResponse.json({ error: "Please choose a plan." }, { status: 400 });
  }

  const selected = site.plans[plan as PlanId];

  return NextResponse.json({
    ok: false,
    stub: true,
    plan,
    message: `${selected.name} checkout isn’t live yet. Call ${site.phoneDisplay} to join, or use the contact form.`,
  });
}
