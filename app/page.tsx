import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

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
          <p className="eyebrow eyebrow-light">Access gym · Aspen</p>
          <h1>Come train on your own.</h1>
          <p className="lede lede-light">
            Ajax Fitness is an open-access gym. Members walk in, use the floor,
            and train independently — {site.hours.access}, every day. Not 24/7.
            Not a CrossFit box. Not a personal-training-only studio.
          </p>
          <div className="button-row">
            <Link className="button button-inverse" href="/pricing">
              Get a membership
            </Link>
            <Link className="button button-ghost" href="/contact">
              Contact us
            </Link>
          </div>
          <p className="hero-meta">
            <Link href="/hours">See hours</Link>
            <span aria-hidden="true"> · </span>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">What this is</p>
            <h2>An access gym. You train independently.</h2>
          </div>
          <p className="lede">
            Membership is open-gym access — not a class pack, and not a coaching
            contract. Come during member hours and train your way. We care about
            strength, longevity, recovery, and performance that compounds — not
            a six-week spike.
          </p>
        </div>
        <div className="container card-grid feature-grid clarify-grid">
          <article className="card">
            <h3>Open access</h3>
            <p>
              Members train on their own, {site.hours.access} daily, year-round.
            </p>
          </article>
          <article className="card">
            <h3>Not CrossFit</h3>
            <p>
              We are not a CrossFit box. No class-required programming. Use the
              floor as an independent gym.
            </p>
          </article>
          <article className="card">
            <h3>Coaching is optional</h3>
            <p>
              Personal training is available as an add-on if you want a coach.
              It is not the product — and you do not need it to belong here.
            </p>
          </article>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <p className="eyebrow">What the work is for</p>
          <h2>Strength. Longevity. Recovery. Performance.</h2>
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
                <p>Space so hard work lands clean — on your own schedule.</p>
              </div>
            </article>
          </div>
          <p className="center-note">
            Want a coach beside the open floor?{" "}
            <Link href="/personal-training">See personal training</Link>
            .
          </p>
        </div>
      </section>

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
          <h2>Access, priced simply.</h2>
          <p>
            Monthly {site.plans.monthly.price} · Annual {site.plans.annual.price} ·
            Day pass {site.plans.day.price}
          </p>
          <p>
            {site.plans.monthly.detail} Members train {site.hours.access}, every
            day of the year. Not 24/7.
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
