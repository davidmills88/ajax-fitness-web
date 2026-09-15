import type { Metadata } from "next";
import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Ajax Fitness memberships: $229 monthly, $2100 annual, $49 day pass. Call (970) 670-8974 to join.",
};

export default function PricingPage() {
  const plans = [site.plans.monthly, site.plans.annual, site.plans.day];

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <div className="narrow">
            <p className="eyebrow">Membership</p>
            <h1>Membership & day pass</h1>
            <p className="lede">
              Simple pricing. No clutter. Built for Aspen training that sticks.
            </p>
          </div>
          <div className="card-grid pricing-grid">
            {plans.map((plan) => (
              <article className="card pricing-card" key={plan.id}>
                <h2>{plan.name}</h2>
                <p className="price">
                  {plan.price}
                  <span>{plan.cadence}</span>
                </p>
                <p>{plan.detail}</p>
                {plan.id !== "day" ? (
                  <p className="muted">Full member access 6:00 AM–9:00 PM daily.</p>
                ) : (
                  <p className="muted">Same gym-hour access for one day. Not 24/7.</p>
                )}
                <a className="button" href={site.phoneHref}>
                  Call to join
                </a>
                <Link className="text-link" href={`/join?plan=${plan.id}`}>
                  Start online (coming soon)
                </Link>
              </article>
            ))}
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
