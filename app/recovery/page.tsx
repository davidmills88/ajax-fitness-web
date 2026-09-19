import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recovery",
  description: `Private cold plunge and infrared sauna at Ajax Fitness in Aspen. Amenities on the same floor as the work. Member access ${site.hours.access} daily — not 24/7. Call ${site.phoneDisplay}.`,
};

export default function RecoveryPage() {
  return (
    <>
      <section className="hero hero-sparse">
        <PlaceholderMedia
          src={placeholders.recovery}
          className="hero-media"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Amenities</p>
          <h1>Recovery</h1>
          <p className="lede lede-light">
            Private cold plunge and infrared sauna — on the same floor as the
            work.
          </p>
          <div className="button-row">
            <a className="button button-inverse" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
            <Link className="button button-ghost" href="/pricing">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div>
              <p className="eyebrow">On the floor</p>
              <h2>Space to come down after you train.</h2>
            </div>
            <p className="lede">
              These are member amenities, not a clinic and not a spa menu. Use
              them during gym hours — {site.hours.access} daily. Not 24/7.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Private cold plunge</h3>
              <p>
                A private plunge after the session. Quiet, on-site, and part of
                the gym — not a treatment.
              </p>
            </article>
            <article className="card">
              <h3>Infrared sauna</h3>
              <p>
                Warm, still time before you head back out. An amenity on the
                floor, nothing more.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-ink ink-pause ink-close">
        <div className="container ink-pause-inner">
          <h2>See it in person.</h2>
          <p>
            Call {site.phoneDisplay} to join, or ask about a tour. Recovery is
            included with membership — not sold as a medical service.
          </p>
          <div className="button-row">
            <a className="button button-inverse" href={site.phoneHref}>
              Call {site.phoneDisplay}
            </a>
            <Link className="button button-ghost" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
