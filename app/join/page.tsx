import type { Metadata } from "next";
import Link from "next/link";
import { JoinCheckout } from "@/components/JoinCheckout";
import { site, type PlanId } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Choose an Ajax Fitness plan. Online checkout is coming; call (970) 670-8974 to join today.",
};

const plans = new Set<PlanId>(["monthly", "annual", "day"]);

export default async function JoinPage({
  searchParams,
}: PageProps<"/join">) {
  const params = await searchParams;
  const requested = typeof params.plan === "string" ? params.plan : "";
  const initialPlan = plans.has(requested as PlanId)
    ? (requested as PlanId)
    : undefined;

  return (
    <section className="section page-hero">
      <div className="container narrow">
        <p className="eyebrow">Join Ajax Fitness</p>
        <h1>Choose a plan</h1>
        <p className="lede">
          Online checkout is a placeholder until we move off Wellyx. To join
          now, call <a href={site.phoneHref}>{site.phoneDisplay}</a>.
        </p>
        <JoinCheckout initialPlan={initialPlan} />
        <p>
          Questions? <Link href="/contact">Contact us</Link> or{" "}
          <Link href="/tour">book a tour</Link>.
        </p>
      </div>
    </section>
  );
}
