import type { Metadata } from "next";
import Link from "next/link";
import { MembershipOffer } from "@/components/MembershipOffer";
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
  description: `Ajax Fitness pricing: Monthly ${site.plans.monthly.price}, Annual ${site.plans.annual.price}, Day ${site.plans.day.price}, Week ${site.plans.week.price}, 2 weeks ${site.plans.twoWeek.price}, 1 month ${site.plans.oneMonth.price}. ${site.offer.headline}. Open daily ${site.hours.access}.`,
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
        <p className="muted">
          Open every day, {site.hours.access}.
        </p>
      ) : (
        <p className="muted">
          Open every day, {site.hours.access}. {site.offer.headline}.
        </p>
      )}
      <a className="button" href={site.phoneHref}>
        Call {site.phoneDisplay}
      </a>
    </article>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <MembershipOffer variant="page" />

          <div className="narrow">
            <p className="eyebrow">Pricing</p>
            <h2>Memberships and passes</h2>
            <p className="lede">
              Join for the year, or train with us by the day, week, or month.
              Every option includes full gym access.
            </p>
            <p className="muted">
              Call {site.phoneDisplay} to join.
            </p>
          </div>

          <div className="pricing-group">
            <div className="pricing-group-intro">
              <p className="eyebrow">Year-round</p>
              <h2>Membership</h2>
              <p className="muted">
                For locals and second-home owners. Cold plunge and sauna
                included.
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
              <h2>Passes</h2>
              <p className="muted">
                In town for a few days or a season? Keep your routine with a
                day, week, or month pass.
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
            <Link href="/contact">Contact us</Link>
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split visit-split">
          <PlaceholderMedia
            src={placeholders.pricingSpacious}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="panel visit-panel">
            <p className="eyebrow">Visit</p>
            <h2>See the gym before you commit.</h2>
            <p>
              Come in any day between 6 AM and 9 PM. We’ll show you around.
            </p>
            <div className="button-row">
              <a className="button" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
              <Link className="text-link" href="/tour">
                Request a walkthrough
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
