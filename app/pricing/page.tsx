import type { Metadata } from "next";
import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import {
  membershipPlans,
  site,
  temporaryPasses,
  type Plan,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `Ajax Fitness memberships: ${site.plans.monthly.price} monthly, ${site.plans.annual.price} annual. Temporary passes: day ${site.plans.day.price}, week ${site.plans.week.price}, 2 week ${site.plans.twoWeek.price}, 1 month ${site.plans.oneMonth.price}. Call ${site.phoneDisplay} to join.`,
};

function PlanCard({ plan }: { plan: Plan }) {
  const isTemporary = plan.kind === "temporary";

  return (
    <article className="card pricing-card">
      <h3>{plan.name}</h3>
      <p className="price">
        {plan.price}
        {plan.cadence ? <span>{plan.cadence}</span> : null}
      </p>
      <p>{plan.detail}</p>
      {isTemporary ? (
        <p className="muted">Same gym-hour access. Not 24/7.</p>
      ) : (
        <p className="muted">Full member access {site.hours.access} daily.</p>
      )}
      <a className="button" href={site.phoneHref}>
        Call to join
      </a>
      <Link className="text-link" href={`/join?plan=${plan.id}`}>
        Start online (coming soon)
      </Link>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="narrow">
            <p className="eyebrow">Pricing</p>
            <h1>Membership & temporary passes</h1>
            <p className="lede">
              Simple pricing. No clutter. Built for Aspen training that sticks.
            </p>
          </div>

          <div className="pricing-group">
            <div className="pricing-group-intro">
              <p className="eyebrow">Year-round</p>
              <h2>Membership</h2>
              <p className="muted">
                The floor, year-round. Train on your own, {site.hours.access}{" "}
                daily.
              </p>
            </div>
            <div className="card-grid membership-grid">
              {membershipPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>

          <div className="pricing-group">
            <div className="pricing-group-intro">
              <p className="eyebrow">Visiting</p>
              <h2>Temporary passes</h2>
              <p className="muted">
                A day, a week, or a month on the same floor. Same hours. Not
                24/7.
              </p>
            </div>
            <div className="card-grid temporary-grid">
              {temporaryPasses.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>

          <p className="center-note">
            Questions? <a href={site.phoneHref}>{site.phoneDisplay}</a>
            <span aria-hidden="true"> · </span>
            <Link href="/contact">Contact us to get started</Link>
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split visit-split">
          <PlaceholderMedia
            src={placeholders.pricing}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="panel visit-panel">
            <p className="eyebrow">Visit</p>
            <h2>See the gym before you commit.</h2>
            <p>
              <AddressBlock />
            </p>
            <p>
              Member access {site.hours.access} daily. Not 24/7.
            </p>
            <Link className="button" href="/tour">
              Book a tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
