import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <p className="eyebrow">Aspen’s premium gym</p>
          <h1>Strength training for life in Aspen</h1>
          <p className="lede">
            A focused gym for people who want to stay strong, move well, and
            recover properly — in and out of season.
          </p>
          <div className="button-row">
            <Link className="button" href="/pricing">
              Get a membership
            </Link>
            <Link className="button button-secondary" href="/contact">
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
        <div className="container narrow">
          <p className="eyebrow">What Ajax is</p>
          <h2>Small enough to feel personal. Serious enough that your training compounds.</h2>
          <p>
            Ajax Fitness is a premium strength gym in Aspen. We train for
            strength, recovery, and longevity — not a six-week spike, and not a
            crowded afterthought.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="card-grid">
            <article className="card">
              <h3>Strength</h3>
              <p>Progressive training built around how you actually live here.</p>
            </article>
            <article className="card">
              <h3>Longevity</h3>
              <p>Train for decades, not a short season of intensity.</p>
            </article>
            <article className="card">
              <h3>Recovery</h3>
              <p>Space and coaching so hard work lands clean.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Membership</p>
            <h2>Simple pricing. Year-round access.</h2>
            <p>
              Monthly {site.plans.monthly.price} · Annual {site.plans.annual.price} ·
              Day pass {site.plans.day.price}
            </p>
            <p>
              Members train {site.hours.access}, every day of the year. Not 24/7.
            </p>
            <Link className="button" href="/pricing">
              View pricing
            </Link>
          </div>
          <div className="panel">
            <p className="eyebrow">Visit</p>
            <p>
              <a href={site.address.mapsUrl} target="_blank" rel="noreferrer">
                {site.address.line1}
                <br />
                {site.address.city}
              </a>
            </p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <Link className="text-link" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
