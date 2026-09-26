import type { Metadata } from "next";
import Link from "next/link";
import { CallToJoin } from "@/components/CallToJoin";
import { MembershipOffer } from "@/components/MembershipOffer";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ReviewsSection } from "@/components/ReviewsSection";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Ajax Fitness | Aspen, CO",
  },
  description: `A full gym in Aspen, open to everyone. Memberships and day, week, or month passes, one-to-one coaching, cold plunge and sauna. Open daily ${site.hours.access}.`,
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-canvas">
        <PlaceholderMedia
          src={placeholders.strength}
          className="hero-media hero-media-top"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <h1>
            Stay strong for the mountain.
            <span className="hero-life">And for life.</span>
          </h1>
          <p className="lede lede-light">
            A full gym in Aspen for anyone who wants to stay strong — locals
            and visitors, first-timers and lifers. Open every day,{" "}
            {site.hours.access}.
          </p>
          <p className="hero-proof">
            {site.reviews.rating}★ · {site.reviews.count} {site.reviews.label}
          </p>
          <CallToJoin inverse quietSecondary note />
        </div>
      </section>

      <section className="section-ink ink-pause">
        <div className="container ink-pause-inner">
          <h2>Strength is the thing you keep.</h2>
          <p>
            It fades quietly, a little every year, until a ski day or a trail
            tells you. A few hours a week here keeps it — wherever you’re
            starting from.
          </p>
        </div>
      </section>

      <section className="section value-stack">
        <div className="container">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">Train your way</p>
              <h2>A real gym. Not a hotel gym.</h2>
            </div>
            <p className="lede">
              Racks, free weights, cardio, and room to move. Most members train
              on their own; some add a coach. Either way, it’s your gym.
            </p>
          </div>
          <div className="card-grid feature-grid">
            <article className="feature-card pillar-card">
              <PlaceholderMedia
                src={placeholders.visit}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>On your own</h3>
                <p>
                  Come in, do your workout, head out. Full access every day,{" "}
                  {site.hours.access}.
                </p>
              </div>
            </article>
            <Link
              href="/personal-training"
              className="feature-card pillar-card pillar-link"
            >
              <PlaceholderMedia
                src={placeholders.ptExtra}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>With a coach</h3>
                <p>
                  One-to-one training when you want a plan, a second set of
                  eyes, or a push.
                </p>
              </div>
            </Link>
            <Link
              href="/recovery"
              className="feature-card pillar-card pillar-link"
            >
              <PlaceholderMedia
                src={placeholders.recovery}
                className="card-media pillar-media"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
              <div className="card-body">
                <h3>Recover</h3>
                <p>
                  Private cold plunge and infrared sauna, steps from where you
                  train. Included with membership.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="editorial-split">
        <div className="editorial-split-copy">
          <p className="eyebrow eyebrow-light">Know where you stand</p>
          <h2>
            Measure it.
            <br />
            Then train it.
          </h2>
          <p>
            Our InBody scanner shows your muscle, fat, and water balance in
            about a minute. The OxeFit XP1 measures your strength and power,
            rep by rep. Check in every few months and see what’s actually
            changing.
          </p>
          <a className="button button-ghost" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>
        <PlaceholderMedia
          src={placeholders.longevity}
          className="editorial-split-media"
          sizes="(max-width: 900px) 100vw, 58vw"
        />
      </section>

      <section className="section section-tint">
        <div className="container split editorial-plan">
          <div>
            <h2>Call us. Walk through. Join.</h2>
            <ol className="step-list">
              <li>
                <strong>Call us</strong>
                {site.phoneDisplay}. Tell us what you’re after and we’ll point
                you to the right membership or pass.
              </li>
              <li>
                <strong>Come for a walkthrough</strong>
                See the gym, meet the team, and ask anything. No pressure.
              </li>
              <li>
                <strong>Join, or grab a pass</strong>
                Train on your own from day one. Add a coach whenever you want.
              </li>
            </ol>
            <CallToJoin note />
          </div>
          <PlaceholderMedia
            src={placeholders.pricingSpacious}
            className="visit-media plan-media"
            sizes="(max-width: 720px) 100vw, 50vw"
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
            src={placeholders.photoBand}
            className="photo-band-media"
            sizes="100vw"
          />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <h2>In Aspen for a week?</h2>
          <p>
            Keep your routine while you’re here. Full gym access by the day,
            week, or month.
          </p>
          <p>
            Day {site.plans.day.price} · Week {site.plans.week.price} · 2
            weeks {site.plans.twoWeek.price} · 1 month{" "}
            {site.plans.oneMonth.price}
          </p>
          <CallToJoin inverse quietSecondary />
        </div>
      </section>

      <section className="section-ink ink-pause ink-close">
        <div className="container ink-pause-inner">
          <h2>Call. Come in. Start.</h2>
          <p>
            {site.phoneDisplay}. Open every day, {site.hours.access}.
          </p>
          <CallToJoin inverse secondary="contact" quietSecondary note />
        </div>
      </section>
    </>
  );
}
