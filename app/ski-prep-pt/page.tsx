import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { SkiPrepForm } from "@/components/SkiPrepForm";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";
import { trainers } from "@/lib/trainers";

const title = "Ski prep personal training in Aspen";
const description = `8-week 1:1 ski-season conditioning at Ajax Fitness in Aspen. Injury-prevention strength and prep with a coach — not a group class, and not physical therapy. Call ${site.phoneDisplay} for package pricing.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Ajax Fitness`,
    description,
    url: "/ski-prep-pt",
  },
};

const gymPhotos = {
  strengthFloor: "/images/strength-floor.jpg",
  strengthAisle: "/images/strength-aisle.jpg",
  precor: "/images/precor-cardio.jpg",
  recovery: "/images/recovery-suite.jpg",
} as const;

const outline = [
  {
    label: "Weeks 1–2 · Baseline",
    text: "Your coach watches how you move, then builds squat, hinge, and single-leg strength. Conditioning stays honest at altitude.",
  },
  {
    label: "Weeks 3–4 · Strength you can steer",
    text: "Heavier legs, lateral work, and a trunk that stays organized as the load goes up.",
  },
  {
    label: "Weeks 5–6 · Slow down and produce",
    text: "Eccentric strength, landings, and short power — the kind of force a turn asks for when it ends.",
  },
  {
    label: "Weeks 7–8 · Ski-ready",
    text: "Harder intervals, positions that hold when you are tired, and a plan for the first weeks on snow.",
  },
] as const;

export default function SkiPrepPage() {
  return (
    <>
      <section className="hero ski-hero">
        <PlaceholderMedia
          src={placeholders.strength}
          className="hero-media"
          sizes="100vw"
          preload
          alt="Placeholder — strength floor at Ajax Fitness"
        />
        <div className="hero-shade" />
        <div className="container ski-hero-grid">
          <div className="ski-hero-copy">
            <p className="eyebrow eyebrow-light">8-week · 1:1 · Aspen</p>
            <h1>Eight weeks of ski-season conditioning.</h1>
            <p className="lede lede-light">
              Injury-prevention prep with one coach — strength, control, and
              the work that lets you ski the season you want. Not a group
              class.
            </p>
            <div className="button-row">
              <a className="button button-inverse" href={site.phoneHref}>
                Call {site.phoneDisplay}
              </a>
            </div>
            <p>
              <a className="quiet-link" href="#pricing">
                Package pricing
              </a>
            </p>
          </div>
          <div className="ski-form-panel">
            <SkiPrepForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Who it’s for</p>
          <h2>Pre-season skiers, and a cautious way back.</h2>
          <div className="card-grid">
            <article className="card feature-card">
              <PlaceholderMedia
                src={gymPhotos.strengthFloor}
                className="ski-card-media"
                label={false}
                sizes="(max-width: 720px) 100vw, 50vw"
                alt="Strength floor at Ajax Fitness, with a member pressing dumbbells and a coach spotting"
              />
              <div className="card-body">
                <h3>Before the season</h3>
                <p>
                  You ski, and you want legs, trunk, and an engine that hold up
                  on long days. Eight weeks of one-to-one conditioning before the
                  mountain gets serious.
                </p>
              </div>
            </article>
            <article className="card feature-card">
              <PlaceholderMedia
                src={gymPhotos.strengthAisle}
                className="ski-card-media"
                label={false}
                sizes="(max-width: 720px) 100vw, 50vw"
                alt="Empty strength aisle at Ajax Fitness, with cable machines and racks toward the windows"
              />
              <div className="card-body">
                <h3>Coming back carefully</h3>
                <p>
                  You have been off, or you are returning after an injury, and
                  you want to train at a pace that fits. Your coach uses that
                  history to set the load. The work is prep — not care for the
                  injury itself.
                </p>
              </div>
            </article>
          </div>
          <p className="callout ski-callout">
            This is personal training. It is not physical therapy. We do not
            diagnose, treat, or heal an injury, including an ACL. If you need
            medical care, see a clinician first.
          </p>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container split">
          <div>
            <p className="eyebrow">Sample outline</p>
            <h2>Eight weeks, pending a coach assessment.</h2>
            <p>
              Themes only. Your coach rewrites the plan after seeing how you
              move and what the season asks of you. It is not a fixed program.
            </p>
            <p className="muted">
              Sample outline — subject to coach assessment. Nothing here is
              medical care.
            </p>
          </div>
          <ol className="step-list">
            {outline.map((block) => (
              <li key={block.label}>
                <strong>{block.label}</strong>
                {block.text}
              </li>
            ))}
          </ol>
        </div>
        <div
          className="container ski-gallery"
          role="group"
          aria-label="Cardio floor and recovery room at Ajax Fitness"
        >
          <PlaceholderMedia
            src={gymPhotos.precor}
            className="ski-gallery-photo"
            label={false}
            sizes="(max-width: 720px) 100vw, 42vw"
            alt="Member on a Precor treadmill by the windows at Ajax Fitness"
          />
          <PlaceholderMedia
            src={gymPhotos.recovery}
            className="ski-gallery-photo"
            label={false}
            sizes="(max-width: 720px) 100vw, 55vw"
            alt="Cold plunge and infrared sauna in the Ajax recovery room"
          />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="eyebrow">1:1 coaching</p>
          <h2>One coach in the session. Not a class.</h2>
          <p>
            Roman Garcia, Erin Young, and Alie James coach one-to-one at Ajax.
            Who takes your eight weeks depends on the calendar — call and we’ll
            confirm who has room.
          </p>
          <ul className="trainer-notes">
            {trainers.map((trainer) => (
              <li key={trainer.name}>
                <strong>{trainer.name}</strong>
                <span className="muted">{trainer.role}</span>
                <p>{trainer.paragraphs[0]}</p>
              </li>
            ))}
          </ul>
          <p>
            <Link href="/personal-training">More on personal training</Link>
          </p>
        </div>
      </section>

      <section className="section section-tint" id="pricing">
        <div className="container narrow">
          <p className="eyebrow">Pricing</p>
          <h2>Call for package pricing.</h2>
          <p className="price">TBD</p>
          <p>
            This 8-week plan does not have a published rate. Call{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a> and we’ll walk
            through the package.
          </p>
          <div className="button-row">
            <a className="button" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container narrow">
          <p className="eyebrow">FAQ</p>
          <h2>Before you call.</h2>
          <dl className="faq-list">
            <div>
              <dt>How does booking work?</dt>
              <dd>
                Call {site.phoneDisplay} or send the form. We follow up, match
                you with Roman, Erin, or Alie based on the calendar, and
                confirm the eight weeks. There is no group signup.
              </dd>
            </div>
            <div>
              <dt>What are the sessions?</dt>
              <dd>
                One-to-one with your coach on the Ajax floor. Session length
                and how many days you train each week are set when you book —
                we don’t lock a length on this page.
              </dd>
            </div>
            <div>
              <dt>Where is it?</dt>
              <dd>
                Ajax Fitness in Aspen. The street address is in the footer.
              </dd>
            </div>
            <div>
              <dt>Do I need a membership?</dt>
              <dd>
                No. This is an 8-week 1:1 coaching package. You do not need a
                monthly or annual membership to book it.
              </dd>
            </div>
            <div>
              <dt>I have an injury history. Can I still train?</dt>
              <dd>
                Tell your coach — on the form or on the call. They screen that
                history so the conditioning plan matches what you can train.
                This is not physical therapy. We do not diagnose, treat, or
                heal an injury.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="photo-band">
        <PlaceholderMedia
          src={placeholders.pricing}
          className="photo-band-media"
          sizes="100vw"
          label={false}
          alt="Placeholder — training floor at Ajax Fitness"
        />
        <div className="photo-band-shade" />
        <div className="container photo-band-inner">
          <p className="eyebrow eyebrow-light">Next</p>
          <h2>Call and we’ll place you with a coach.</h2>
          <p>
            Eight weeks of ski prep, one-to-one. Package pricing when we talk.
          </p>
          <a className="button button-inverse" href={site.phoneHref}>
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
