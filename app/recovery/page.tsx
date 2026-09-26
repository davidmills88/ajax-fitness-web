import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recovery",
  description: `Private cold plunge and infrared sauna at Ajax Fitness in Aspen, included with membership. Open daily ${site.hours.access}. Call ${site.phoneDisplay}.`,
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
          <p className="eyebrow eyebrow-light">Recovery</p>
          <h1>Cold, then heat.</h1>
          <p className="lede lede-light">
            A private cold plunge and an infrared sauna, a few steps from where
            you train. Included with membership.
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
              <p className="eyebrow">Recovery at Ajax</p>
              <h2>Finish the session properly.</h2>
            </div>
            <p className="lede">
              Most people train hard and skip the part after. Here it’s built
              in — no separate membership, open whenever the gym is,{" "}
              {site.hours.access}.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3>Private cold plunge</h3>
              <p>
                A few minutes in cold water after a hard session or a long day
                on the mountain. Private, so it’s just you.
              </p>
            </article>
            <article className="card">
              <h3>Infrared sauna</h3>
              <p>
                Quiet, even heat. Sit, breathe, and let the day settle before
                you head back out.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-ink ink-pause ink-close">
        <div className="container ink-pause-inner">
          <h2>See it in person.</h2>
          <p>
            Call {site.phoneDisplay} or come for a walkthrough. Cold plunge and
            sauna are included with Monthly and Annual membership.
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
