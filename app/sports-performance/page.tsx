import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sports performance",
  description:
    "Optional sports performance coaching at Ajax Fitness in Aspen. Membership is open-gym access. Book a consult or call (970) 670-8974 — packages are tailored after a conversation.",
};

export default function SportsPerformancePage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container split">
          <div className="narrow">
            <p className="eyebrow">Optional coaching</p>
            <h1>Sports performance</h1>
            <p className="lede">
              Coaching for athletes who want strength, mobility, and durability
              for sport. Ajax remains an access gym — you can still train on
              your own during open hours. This is not a CrossFit box, and it is
              not a personal-training-only studio.
            </p>
            <p>
              Programming is built after we talk — aim, sport, and calendar.
              Rates are not listed here. Book a consult or call and we’ll
              outline a fit.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">
                Book a consult
              </Link>
              <a className="button button-outline" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <PlaceholderMedia
            src={placeholders.longevity}
            className="page-aside-media"
            sizes="(max-width: 720px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <p className="eyebrow">Why this work</p>
          <h2>Strength, mobility, and staying available.</h2>
          <div className="card-grid feature-grid">
            <article className="card">
              <h3>For the sport</h3>
              <p>
                In-gym work aimed at strength, speed, agility, and endurance
                that shows up on the mountain, field, or court.
              </p>
            </article>
            <article className="card">
              <h3>Coached, not class-locked</h3>
              <p>
                Trainers who work with athletes — technique and load managed so
                you can keep showing up.
              </p>
            </article>
            <article className="card">
              <h3>Longer career</h3>
              <p>
                Emphasis on injury prevention and sound patterns, so performance
                lasts more than a season.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">How to start</p>
            <h2>A conversation first.</h2>
            <p>
              Tell us the sport and what you want next. We’ll follow up from{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> or by phone.
            </p>
            <p className="muted">
              Membership is still open access, {site.hours.access} daily. Not
              24/7.{" "}
              <Link href="/personal-training">Personal training</Link> is the
              1-to-1 path if you want a dedicated coach.
            </p>
          </div>
          <div className="panel">
            <p className="eyebrow">Book a consult</p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
              <br />
              <Link href="/contact">Contact form</Link>
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
