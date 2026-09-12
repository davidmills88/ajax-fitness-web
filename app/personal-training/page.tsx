import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { trainerLevels, trainingIncludes } from "@/lib/training";

export const metadata: Metadata = {
  title: "Personal training",
  description:
    "Optional personal training at Ajax Fitness in Aspen. Membership is open-gym access; coaching is an add-on. Packages are tailored after a conversation — call (970) 670-8974.",
};

export default function PersonalTrainingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container split">
          <div className="narrow">
            <p className="eyebrow">Optional coaching</p>
            <h1>Personal training</h1>
            <p className="lede">
              Work with a coach if you want one. Ajax is still an access gym —
              members train on their own during open hours. Personal training is
              an add-on, not the product, and we are not a CrossFit box.
            </p>
            <p>
              You and your trainer build a plan around your goals — strength,
              longevity, recovery, performance, or injury-aware work. Packages
              are tailored after a conversation. We do not publish rates here;
              call or write and we will walk you through what fits.
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
            src={placeholders.strength}
            className="page-aside-media"
            sizes="(max-width: 720px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <p className="eyebrow">What’s included</p>
          <h2>Every personal training package</h2>
          <p className="lede">
            Standard and Elite paths share the same package bones. The
            difference is the trainer’s experience and credentials.
          </p>
          <ul className="include-list">
            {trainingIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Trainer levels</p>
          <h2>Standard and Elite</h2>
          <div className="card-grid">
            {trainerLevels.map((level) => (
              <article className="card" key={level.id}>
                <h3>{level.name}</h3>
                <p>{level.detail}</p>
              </article>
            ))}
          </div>
          <p className="center-note">
            We’ll match you after a consult — not from a rate card online.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">Athletes</p>
            <h2>Sports performance is available too.</h2>
            <p>
              Strength, mobility, and injury-aware work for sport — still
              optional coaching on top of open-gym membership.
            </p>
            <Link className="button" href="/sports-performance">
              Sports performance
            </Link>
          </div>
          <div className="panel">
            <p className="eyebrow">Start with a conversation</p>
            <p>
              Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
              <Link href="/contact">contact us</Link>. Tell us what you want
              from training. We’ll follow up from{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
            <p className="muted">
              Prefer just the floor? <Link href="/pricing">See membership</Link>{" "}
              — access {site.hours.access} daily, not 24/7.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
