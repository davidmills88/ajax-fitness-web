import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Recovery | cold plunge & sauna at Ajax Fitness Aspen",
  },
  description: `Private cold plunge and infrared sauna at Ajax Fitness in Aspen. Open during member access ${site.hours.access} daily — not 24/7. Call ${site.phoneDisplay}.`,
};

export default function RecoveryPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div className="narrow">
          <p className="eyebrow">Recovery</p>
          <h1>A private room for the work after the work.</h1>
          <p className="lede">
            Cold plunge and infrared sauna, in a quiet room of their own.
            Members use it during gym hours — not a crowded spa floor, and not
            24/7.
          </p>
          <p>
            The plunge is cold. The sauna is infrared. Both sit off the
            training floor so the room stays still after a hard session.
          </p>
          <p className="callout">
            Available during member access {site.hours.access} daily, 365 days
            a year. Not 24/7.
          </p>
          <p className="muted">Same hours as the floor. In Aspen.</p>
          <div className="button-row">
            <a className="button" href={site.phoneHref}>
              Call to join
            </a>
            <Link className="button button-outline" href="/pricing">
              View membership
            </Link>
          </div>
          <p>
            Questions? <Link href="/contact">Contact us</Link> or call{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a>.
          </p>
        </div>
        <div className="visit-stack">
          <PlaceholderMedia
            src={placeholders.recovery}
            className="aside-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <PlaceholderMedia
            src={placeholders.sauna}
            className="aside-media"
            sizes="(max-width: 720px) 100vw, 50vw"
          />
          <aside className="panel hours-card">
            <p className="eyebrow">At a glance</p>
            <dl>
              <div>
                <dt>The room</dt>
                <dd>Private cold plunge and infrared sauna</dd>
              </div>
              <div>
                <dt>When</dt>
                <dd>
                  Member access {site.hours.access}, {site.hours.days.toLowerCase()}
                </dd>
              </div>
              <div>
                <dt>24/7</dt>
                <dd>No — recovery follows gym hours</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>
                  Aspen. <Link href="/contact">See Contact</Link>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
