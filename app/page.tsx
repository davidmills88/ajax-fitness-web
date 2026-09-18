import type { Metadata } from "next";
import Link from "next/link";
import { CallToJoin } from "@/components/CallToJoin";
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
          <h1>Stay strong for the mountain.</h1>
          <p className="lede lede-light">
            Strength, recovery, and longevity. Members train{" "}
            {site.hours.access} daily — not 24/7.
          </p>
          <p
            className="hero-proof"
            aria-label={`${site.reviews.rating} out of 5 from ${site.reviews.count} ${site.reviews.label}`}
          >
            {site.reviews.rating} ★ · {site.reviews.count} {site.reviews.label}
          </p>
          <CallToJoin inverse />
          <p className="hero-meta">Call during the day. We pick up.</p>
        </div>
      </section>

      <section className="section section-ink">
        <div className="container split ink-split">
          <div>
            <p className="eyebrow eyebrow-light">Why Ajax</p>
            <h2>Hotel floors and class mills don’t compound.</h2>
          </div>
          <p className="lede lede-light">
            Aspen doesn’t need another crowded rec center. It needs a serious
            floor — open, equipped, and quiet enough to work. Stay capable for
            the mountain. And for the next twenty years.
          </p>
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
            <Link href="/recovery" className="card feature-card pillar-card pillar-link">
              <PlaceholderMedia
                src={placeholders.recovery}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Recovery</h3>
                <p>Private cold plunge and infrared sauna.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">How to join</p>
            <h2>Call. See the floor. Start.</h2>
            <ol className="step-list">
              <li>
                <strong>Call</strong>
                {site.phoneDisplay}. Tell us Monthly, Annual, or a pass.
              </li>
              <li>
                <strong>See the floor</strong>
                Come during gym hours. Decide if the room fits.
              </li>
              <li>
                <strong>Start</strong>
                Join. Train {site.hours.access} daily. Not 24/7.
              </li>
            </ol>
            <CallToJoin />
          </div>
          <PlaceholderMedia
            src={placeholders.pricing}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
            label={false}
          />
        </div>
      </section>

      <section className="promo-band">
        <div className="container">
          <MembershipOffer variant="band" headingLevel="h2" />
        </div>
      </section>

      <ReviewsSection />

      <section className="photo-band photo-band-tall">
        <PlaceholderMedia
          src={placeholders.visit}
          className="photo-band-media"
          sizes="100vw"
          label={false}
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Visiting</p>
          <h2>In Aspen for a week?</h2>
          <p>
            Day {site.plans.day.price}. Week {site.plans.week.price}. 2-week{" "}
            {site.plans.twoWeek.price}. 1-month {site.plans.oneMonth.price}.
            Same floor. Same hours.
          </p>
          <Link className="button button-inverse" href="/pricing">
            View pricing
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container narrow final-cta">
          <p className="eyebrow">Join</p>
          <h2>Call. Come in. Start.</h2>
          <p className="lede">
            Ready to train here? Call {site.phoneDisplay}. View pricing if you
            want the numbers first.
          </p>
          <CallToJoin secondary="contact" />
        </div>
      </section>
    </>
  );
}
