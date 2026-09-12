import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { trainerLevels, trainingIncludes } from "@/lib/training";

export const metadata: Metadata = {
  title: "Personal training",
  description:
    "Personal training at Ajax Fitness in Aspen — coaching for strength, longevity, recovery, and performance. Packages are tailored after a conversation. Call (970) 670-8974.",
};

export default function PersonalTrainingPage() {
  return (
    <>
      <section className="hero">
        <PlaceholderMedia
          src={placeholders.strength}
          className="hero-media"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Personal training · Aspen</p>
          <h1>A coach for work that lasts.</h1>
          <p className="lede lede-light">
            One-to-one coaching for strength, longevity, recovery, and
            performance. A plan, a pair of eyes, and someone in it with you —
            in and out of season.
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
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">The relationship</p>
            <h2>You, a trainer, and a plan that compounds.</h2>
          </div>
          <p className="lede">
            You and your coach build the work around how you actually live here.
            Membership is open-gym access — you can always train on your own
            during open hours. Coaching is for people who want a plan and
            accountability. Packages are set after we talk. We don’t list rates
            here.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">What’s included</p>
            <h2>Every package.</h2>
            <p>
              Personal Training and Elite share the same bones. The difference
              is the trainer’s hours and credentials.
            </p>
          </div>
          <ul className="include-list">
            {trainingIncludes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Two levels</p>
          <h2>Personal Training and Elite.</h2>
          <div className="card-grid">
            {trainerLevels.map((level) => (
              <article className="card" key={level.id}>
                <h3>{level.name}</h3>
                <p>{level.detail}</p>
              </article>
            ))}
          </div>
          <p className="center-note">
            We’ll match you on a consult — not from a published rate card.
          </p>
        </div>
      </section>

      <section className="photo-band">
        <PlaceholderMedia
          src={placeholders.recovery}
          className="photo-band-media"
          sizes="100vw"
          label={false}
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Next step</p>
          <h2>Talk through packages.</h2>
          <p>
            Call {site.phoneDisplay} or write {site.email}. Tell us what you
            want from the work. We’ll follow up.
          </p>
          <div className="button-row">
            <Link className="button button-inverse" href="/contact">
              Contact us
            </Link>
            <a className="button button-ghost" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Athletes</p>
            <h2>Sports performance, if that’s the work.</h2>
            <p>
              Strength, mobility, and staying available for sport — same
              consult, no published rates.
            </p>
            <Link className="text-link" href="/sports-performance">
              Sports performance
            </Link>
          </div>
          <div className="panel">
            <p className="eyebrow">Just the floor</p>
            <p>
              Prefer to train on your own? Membership is open access,{" "}
              {site.hours.access} daily. Not 24/7.
            </p>
            <Link className="button" href="/pricing">
              See membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
