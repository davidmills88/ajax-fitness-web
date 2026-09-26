import type { Metadata } from "next";
import Link from "next/link";
import { CallToJoin } from "@/components/CallToJoin";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { trainers } from "@/lib/trainers";

export const metadata: Metadata = {
  title: "Personal training",
  description: `One-to-one personal training at Ajax Fitness in Aspen. Strength, longevity, and ski-season fitness, built around your year. Call ${site.phoneDisplay}.`,
};

export default function PersonalTrainingPage() {
  return (
    <>
      <section className="hero">
        <PlaceholderMedia
          src={placeholders.strengthPortrait}
          className="hero-media hero-media-face"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Personal training</p>
          <h1>A coach for this life.</h1>
          <p className="lede lede-light">
            One-to-one coaching for strength, longevity, and the mountain —
            written around how you actually live here.
          </p>
          <CallToJoin inverse />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What you get</p>
          <h2>Coaching that fits an Aspen year.</h2>
          <div className="card-grid feature-grid">
            <article className="card">
              <h3>A plan that fits this place</h3>
              <p>
                Travel, altitude, ski season, a quiet May. The work is written
                around how you live — not a template you abandon in week three.
              </p>
            </article>
            <article className="card">
              <h3>Someone in your corner</h3>
              <p>
                Your coach watches every rep, tracks your progress, and adjusts
                when life gets in the way. You’ll never wonder what to do next.
              </p>
            </article>
            <article className="card">
              <h3>Progress you can see</h3>
              <p>
                We check in with the InBody scanner and the OxeFit XP1, so your
                plan is built on real numbers — and you can see them move.
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
              Every package is built around you, so we start with a
              conversation. Call us and we’ll walk you through options and
              pricing.
            </p>
          </div>
          <ol className="step-list">
            <li>
              <strong>Talk</strong>
              Tell us how you live, what you want, and what your year looks
              like.
            </li>
            <li>
              <strong>Measure</strong>
              An InBody scan and an OxeFit strength check give us a starting
              point.
            </li>
            <li>
              <strong>Plan</strong>
              Your coach writes the program — strength, mobility, conditioning,
              and recovery.
            </li>
            <li>
              <strong>Train</strong>
              One-to-one sessions. You always leave knowing what’s next.
            </li>
            <li>
              <strong>Adjust</strong>
              Ski season, travel, a quiet May — the plan changes with you.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <PlaceholderMedia
            src={placeholders.longevityAlt}
            className="visit-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <div>
            <p className="eyebrow">Who it’s for</p>
            <h2>Anyone who wants a plan.</h2>
            <p>
              Plenty of people at Ajax train on their own. Others work with a
              coach year-round, or just for a season — getting ready for ski
              season, coming back after time off, or starting fresh at sixty.
            </p>
            <p className="muted">
              However you use coaching, the whole gym is yours every day,{" "}
              {site.hours.access}.
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
            More capable on the mountain. Steadier in town. Still strong in
            twenty years.
          </p>
        </div>
      </section>

      <section className="photo-band">
        <PlaceholderMedia
          src={placeholders.strengthAlt}
          className="photo-band-media"
          sizes="100vw"
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Next</p>
          <h2>Talk through packages.</h2>
          <p>
            Call {site.phoneDisplay} or email {site.email}. We’ll listen first,
            then suggest what fits.
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
          <h2>Your coaches.</h2>
          <p className="lede">
            Every Ajax coach works one-to-one and builds your plan around your
            season.
          </p>
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
