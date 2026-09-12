import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sports performance",
  description:
    "Sports performance coaching at Ajax Fitness in Aspen — strength, mobility, and durability for sport. Book a consult or call (970) 670-8974.",
};

export default function SportsPerformancePage() {
  return (
    <>
      <section className="hero">
        <PlaceholderMedia
          src={placeholders.longevity}
          className="hero-media"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Sports performance · Aspen</p>
          <h1>Stronger for the sport. Available for the season.</h1>
          <p className="lede lede-light">
            Coaching for athletes who want strength, mobility, and durability
            that shows up on the mountain, field, or court.
          </p>
          <div className="button-row">
            <Link className="button button-inverse" href="/contact">
              Talk through packages
            </Link>
            <a className="button button-ghost" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">The work</p>
          <h2>Strength, speed, and staying in the game.</h2>
          <div className="card-grid feature-grid">
            <article className="card">
              <h3>For the sport</h3>
              <p>
                In-gym work aimed at strength, speed, agility, and endurance
                you can use.
              </p>
            </article>
            <article className="card">
              <h3>Coached</h3>
              <p>
                Technique and load managed so you can keep showing up — not a
                class you have to lock to.
              </p>
            </article>
            <article className="card">
              <h3>Longer career</h3>
              <p>
                Injury-aware patterns, so performance lasts more than a season.
              </p>
            </article>
          </div>
          <p className="center-note">
            Membership is still open access, {site.hours.access} daily. Coaching
            is optional.{" "}
            <Link href="/personal-training">Personal training</Link> is the
            1-to-1 path.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>A conversation first.</h2>
            <p>
              Tell us the sport and what you want next. Packages are tailored
              after we talk — no rates listed here.
            </p>
          </div>
          <div className="panel">
            <p className="eyebrow">Talk through packages</p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <br />
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
