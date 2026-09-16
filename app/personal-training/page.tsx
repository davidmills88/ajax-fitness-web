import type { Metadata } from "next";
import Link from "next/link";
import { CallToJoin } from "@/components/CallToJoin";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { formatNapShort, site } from "@/lib/site";
import { trainers } from "@/lib/trainers";

export const metadata: Metadata = {
  title: "Personal training",
  description: `Personal training at Ajax Fitness, ${formatNapShort()}. Strength, longevity, and performance — written for Aspen seasons. Call ${site.phoneDisplay} to join.`,
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
          <p className="eyebrow eyebrow-light">Personal training</p>
          <h1>A coach for the life you actually live here.</h1>
          <p className="lede lede-light">
            Strength, longevity, recovery, and performance — written for Aspen
            seasons, not a generic program. Someone in the work with you.
          </p>
          <CallToJoin inverse />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What it is</p>
          <h2>One-to-one coaching on the same Aspen floor.</h2>
          <div className="card-grid feature-grid">
            <article className="card">
              <h3>A plan that fits this place</h3>
              <p>
                Travel, altitude, ski season, a quiet May. The work is written
                around how you live — not a template you abandon in week three.
              </p>
            </article>
            <article className="card">
              <h3>Someone who sees you</h3>
              <p>
                Honest eyes on the bar, the calendar, and the week you actually
                had. Accountability without the noise.
              </p>
            </article>
            <article className="card">
              <h3>Recovery that lets it land</h3>
              <p>
                Hard sessions only matter if the next one is possible. Your
                coach keeps the load honest so strength compounds.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>A conversation, then the work.</h2>
            <p className="muted">
              Packages are tailored after we talk. We don’t publish coaching
              rates.
            </p>
          </div>
          <ol className="step-list">
            <li>
              <strong>Consult</strong>
              How you live, what you want, what the year looks like.
            </li>
            <li>
              <strong>Plan</strong>
              Your coach writes the work — strength, recovery, and the rest.
            </li>
            <li>
              <strong>Sessions</strong>
              Together on the floor. You leave knowing the next one.
            </li>
            <li>
              <strong>Adjust</strong>
              The season changes. The plan does too.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2>Members who want a coach — not a class.</h2>
            <p>
              People who already take the floor seriously, and want a plan and
              a pair of eyes so the years add up. Ski, ride, compete, or simply
              stay capable in town — tell us. The coaching is still one-to-one.
            </p>
            <p className="muted">
              The gym is still yours {site.hours.access}. Coaching is extra, if
              you want it.
            </p>
          </div>
          <div className="panel">
            <p className="eyebrow">Who it’s not</p>
            <p>
              If you want a packed class calendar or a gym that only works when
              a trainer is booked, this isn’t that. If you want the floor and,
              some weeks, a coach — we should talk.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">What it should feel like</p>
            <h2>Stronger in the life you already have.</h2>
          </div>
          <p className="lede">
            More useful on the mountain. Steadier in town. Capable in twenty
            years. We won’t put words in other people’s mouths — come see the
            floor and decide if the work fits.
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
          <p className="eyebrow eyebrow-light">Next</p>
          <h2>Talk through packages.</h2>
          <p>
            Call {site.phoneDisplay} or write {site.email}. We’ll listen, then
            outline a fit.
          </p>
          <CallToJoin inverse />
          <p>
            <Link href="/contact">Or write us</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">The trainers</p>
          <h2>Who you’ll work with.</h2>
          <ul className="trainer-notes">
            {trainers.map((trainer) => (
              <li key={trainer.name}>
                <strong>{trainer.name}</strong>
                <span className="muted">{trainer.role}</span>
                {trainer.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </li>
            ))}
          </ul>
          <CallToJoin />
        </div>
      </section>
    </>
  );
}
