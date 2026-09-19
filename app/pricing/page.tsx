import type { Metadata } from "next";
import Link from "next/link";
import { MembershipOffer } from "@/components/MembershipOffer";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import {
  formatNapShort,
  lockedPriceLine,
  membershipPlans,
  site,
  temporaryPasses,
  type Plan,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: `${site.offer.headline}. ${formatNapShort()}. ${lockedPriceLine()}. Member access ${site.hours.access} daily, 365 days a year — not 24/7. Call ${site.phoneDisplay} to join.`,
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
          Same gym-hour access. Not 24/7. {site.offer.headline} applies to
          membership only.
        </p>
      ) : (
        <p className="muted">
          Full member access {site.hours.access} daily. {site.offer.headline}.
        </p>
      )}
      <a className="button" href={site.phoneHref}>
        Call {site.phoneDisplay}
      </a>
      <Link className="text-link" href={`/join?plan=${plan.id}`}>
        Online join — coming soon
      </Link>
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
            <h2>Membership & temporary passes</h2>
            <p className="lede">{lockedPriceLine()}.</p>
            <p className="muted">
              Simple pricing. Call {site.phoneDisplay} to join. Online join is
              coming soon.
              Member access {site.hours.access} daily, 365 days a year. Not
              24/7.
            </p>
          </div>

          <div className="pricing-group">
            <div className="pricing-group-intro">
              <p className="eyebrow">Year-round</p>
              <h2>Membership</h2>
              <p className="muted">
                {site.offer.headline}. Train on your own, {site.hours.access}{" "}
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
                24/7. Initiation offer is for Monthly and Annual only.
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
            <p>Member access {site.hours.access} daily. Not 24/7.</p>
            <Link className="button" href="/tour">
              Book a tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
