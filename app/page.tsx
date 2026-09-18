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
      <section className="hero hero-canvas">
        <PlaceholderMedia
          src={placeholders.hero}
          className="hero-media"
          sizes="100vw"
          preload
          label={false}
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <h1>
            Stay strong for the mountain.
            <span className="hero-life">And for life.</span>
          </h1>
          <p className="lede lede-light">
            Strength, recovery, and longevity in Aspen. {site.hours.access}{" "}
            daily.
          </p>
          <p className="hero-proof">
            {site.reviews.rating}★ · {site.reviews.count} {site.reviews.label}
          </p>
          <CallToJoin inverse quietSecondary note />
        </div>
      </section>

      <section className="section-ink ink-pause">
        <div className="container ink-pause-inner">
          <h2>
            A serious floor.
            <br />
            Not a hotel gym.
          </h2>
          <p>Open. Equipped. Quiet enough to work.</p>
        </div>
      </section>

      <section className="section value-stack">
        <div className="container">
          <div className="card-grid feature-grid">
            <article className="feature-card pillar-card">
              <PlaceholderMedia
                src={placeholders.strength}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Train</h3>
                <p>A serious floor for progressive work. Most weights in Aspen.</p>
              </div>
            </article>
            <Link
              href="/recovery"
              className="feature-card pillar-card pillar-link"
            >
              <PlaceholderMedia
                src={placeholders.recovery}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
                label={false}
              />
              <div className="card-body">
                <h3>Recover</h3>
                <p>Private cold plunge and infrared sauna.</p>
              </div>
            </Link>
            <article className="feature-card pillar-card">
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
          </div>
        </div>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-copy">
          <h2>
            The floor,
            <br />
            year-round.
          </h2>
          <p>
            Monthly or annual. Same gym, every day of the year. Members train{" "}
            {site.hours.access} — not 24/7.
          </p>
          <Link className="button button-ghost" href="/pricing">
            View pricing
          </Link>
        </div>
        <PlaceholderMedia
          src={placeholders.pricing}
          className="editorial-split-media"
          sizes="(max-width: 900px) 100vw, 58vw"
          label={false}
        />
      </section>

      <section className="section section-tint">
        <div className="container split editorial-plan">
          <div>
            <h2>Call us. Walk through. Join.</h2>
            <ol className="step-list">
              <li>
                <strong>Call us</strong>
                {site.phoneDisplay}. We’ll point you to membership or a pass.
              </li>
              <li>
                <strong>Come for a walkthrough</strong>
                See the floor during gym hours and decide if it fits.
              </li>
              <li>
                <strong>Join membership or pass</strong>
                Start. Train {site.hours.access} daily. Not 24/7.
              </li>
            </ol>
            <CallToJoin note />
          </div>
          <PlaceholderMedia
            src={placeholders.visit}
            className="visit-media plan-media"
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
          <h2>In Aspen for a week?</h2>
          <p>
            Day {site.plans.day.price}. Week {site.plans.week.price}. 2-week{" "}
            {site.plans.twoWeek.price}. 1-month {site.plans.oneMonth.price}.
          </p>
          <CallToJoin inverse quietSecondary />
        </div>
      </section>

      <section className="section-ink ink-pause ink-close">
        <div className="container ink-pause-inner">
          <h2>Call. Come in. Start.</h2>
          <p>
            {site.phoneDisplay}. Members train {site.hours.access} daily.
          </p>
          <CallToJoin inverse secondary="contact" quietSecondary note />
        </div>
      </section>
    </>
  );
}
