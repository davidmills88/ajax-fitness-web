import type { Metadata } from "next";
import Link from "next/link";
import { MembershipOffer } from "@/components/MembershipOffer";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ReviewsSection } from "@/components/ReviewsSection";
import { placeholders } from "@/lib/placeholders";
import { formatNapShort, lockedPriceLine, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Ajax Fitness | Aspen, CO",
  },
  description: `${site.offer.headline}. ${formatNapShort()}. Member access ${site.hours.access} daily, 365 days a year — not 24/7. ${lockedPriceLine()}. Call ${site.phoneDisplay}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-sparse">
        <PlaceholderMedia
          src={placeholders.hero}
          className="hero-media"
          sizes="100vw"
          preload
          label={false}
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Ajax Aspen</p>
          <h1>Strength. Recovery. Longevity.</h1>
          <p className="lede lede-light">
            A focused gym. Members train {site.hours.access} daily — not 24/7.
          </p>
          <div className="button-row">
            <a className="button button-inverse" href={site.phoneHref}>
              Call to join
            </a>
            <Link className="button button-ghost" href="/pricing">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card-grid feature-grid">
            <article className="card feature-card pillar-card">
              <PlaceholderMedia
                src={placeholders.strength}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Strength</h3>
                <p>A serious floor for progressive work.</p>
              </div>
            </article>
            <article className="card feature-card pillar-card">
              <PlaceholderMedia
                src={placeholders.longevity}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Longevity</h3>
                <p>Training that still matters in twenty years.</p>
              </div>
            </article>
            <article className="card feature-card pillar-card">
              <PlaceholderMedia
                src={placeholders.recovery}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Recovery</h3>
                <p>Private cold plunge and infrared sauna.</p>
                <Link className="text-link" href="/recovery">
                  See recovery
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="promo-band">
        <div className="container">
          <MembershipOffer variant="band" headingLevel="h2" />
        </div>
      </section>

      <section className="photo-band photo-band-tall">
        <PlaceholderMedia
          src={placeholders.pricing}
          className="photo-band-media"
          sizes="100vw"
          label={false}
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Membership</p>
          <h2>The floor, year-round.</h2>
          <p>Monthly or annual. Same gym, every day of the year.</p>
          <Link className="button button-inverse" href="/pricing">
            View pricing
          </Link>
        </div>
      </section>

      <ReviewsSection />

      <section className="section section-tint">
        <div className="container split visit-split">
          <PlaceholderMedia
            src={placeholders.visit}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
            label={false}
          />
          <div className="panel visit-panel">
            <p className="eyebrow">Join</p>
            <h2>Call. Come in. Start.</h2>
            <p>
              Ready to train here? Call{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a> or write us.
            </p>
            <div className="button-row">
              <a className="button" href={site.phoneHref}>
                Call to join
              </a>
              <Link className="button button-outline" href="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
