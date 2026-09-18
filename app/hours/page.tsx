import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hours",
  description: `Ajax Fitness in Aspen is open ${site.hours.access} daily, 365 days a year. Not 24/7. Front desk hours may differ.`,
};

export default function HoursPage() {
  return (
    <>
      <section className="hero hero-sparse">
        <PlaceholderMedia
          src={placeholders.hero}
          className="hero-media"
          sizes="100vw"
          preload
          label={false}
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">Member access</p>
          <h1>6:00 AM–9:00 PM</h1>
          <p className="lede lede-light">
            Every day of the year. The gym is not open 24 hours.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="narrow">
            <p className="eyebrow">Hours</p>
            <h2>Train daily. Close at nine.</h2>
            <p className="lede">
              Members use the floor from 6:00 AM to 9:00 PM, 365 days a year.
            </p>
            <p className="callout">
              Ajax Fitness is not open 24 hours. Access is 6:00 AM–9:00 PM
              daily. Not 24/7.
            </p>
            <p>
              Front desk hours vary; members can enter during open gym hours
              even when the desk isn’t staffed.
            </p>
            <p>
              Questions? Call{" "}
              <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
              <Link href="/contact">contact us</Link>.
            </p>
          </div>
          <div className="visit-stack">
            <PlaceholderMedia
              src={placeholders.strength}
              className="aside-media"
              sizes="(max-width: 720px) 100vw, 50vw"
              label={false}
            />
            <aside className="panel hours-card">
              <p className="eyebrow">At a glance</p>
              <dl>
                <div>
                  <dt>Member access</dt>
                  <dd>{site.hours.access}</dd>
                </div>
                <div>
                  <dt>Days</dt>
                  <dd>{site.hours.days}</dd>
                </div>
                <div>
                  <dt>24/7</dt>
                  <dd>No — the gym closes at 9:00 PM</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
