import type { Metadata } from "next";
import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { MembershipOffer } from "@/components/MembershipOffer";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ReviewsSection } from "@/components/ReviewsSection";
import { placeholders } from "@/lib/placeholders";
import {
  formatNapShort,
  lockedPriceLine,
  offerPriceLine,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Ajax Fitness | Aspen, CO",
  },
  description: `${site.offer.headline}. ${formatNapShort()}. Member access ${site.hours.access} daily, 365 days a year — not 24/7. ${lockedPriceLine()}. Call ${site.phoneDisplay}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <PlaceholderMedia
          src={placeholders.hero}
          className="hero-media"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <MembershipOffer variant="hero" />
          <p className="hero-meta">
            <AddressBlock inline />
            <span aria-hidden="true"> · </span>
            <Link href="/hours">See hours</Link>
            <span aria-hidden="true"> · </span>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">What Ajax is</p>
            <h2>Small enough to feel personal. Serious enough that your training compounds.</h2>
          </div>
          <div>
            <p className="lede">
              A premium gym at {formatNapShort()}. We train for strength,
              longevity, and recovery — not a short-term spike, and not a
              crowded afterthought.
            </p>
            <p className="muted">
              Members use the floor on their own, {site.hours.access} daily,
              365 days a year. Not 24/7. Not CrossFit. Not a
              personal-training-only studio. Coaching is here if you want it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="card-grid feature-grid">
            <article className="card feature-card">
              <PlaceholderMedia
                src={placeholders.strength}
                className="card-media"
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>Strength</h3>
                <p>Progressive training built around how you actually live here.</p>
              </div>
            </article>
            <article className="card feature-card">
              <PlaceholderMedia
                src={placeholders.longevity}
                className="card-media"
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>Longevity</h3>
                <p>Training that still matters in twenty years.</p>
              </div>
            </article>
            <article className="card feature-card">
              <PlaceholderMedia
                src={placeholders.recovery}
                className="card-media"
                sizes="(max-width: 720px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>Recovery</h3>
                <p>Space so hard work lands clean.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <section className="photo-band">
        <PlaceholderMedia
          src={placeholders.pricing}
          className="photo-band-media"
          sizes="100vw"
          label={false}
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Membership</p>
          <h2>Simple pricing. Year-round floor.</h2>
          <p>
            {site.offer.headline}. {site.offer.sub} {offerPriceLine()}
          </p>
          <p>
            {site.plans.monthly.detail} Week, two-week, and one-month passes
            live on Pricing. Members train {site.hours.access}, every day of
            the year. Not 24/7.
          </p>
          <Link className="button button-inverse" href="/pricing">
            View pricing
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container split visit-split">
          <PlaceholderMedia
            src={placeholders.visit}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div className="panel visit-panel">
            <p className="eyebrow">Visit</p>
            <h2>Come see the floor.</h2>
            <p>
              <AddressBlock />
            </p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <span aria-hidden="true"> · </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <Link className="button" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
