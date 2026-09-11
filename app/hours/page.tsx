import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hours",
  description:
    "Ajax Fitness member access is 6:00 AM–9:00 PM daily, year-round. Not 24/7. Front desk hours may differ.",
};

export default function HoursPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div className="narrow">
          <p className="eyebrow">Member access</p>
          <h1>Gym hours</h1>
          <p className="lede">
            Members can train from 6:00 AM to 9:00 PM, every day — 365 days a
            year.
          </p>
          <p className="callout">Ajax Fitness is not open 24 hours.</p>
          <p>
            Access is 6:00 AM–9:00 PM daily. Front desk hours vary; members can
            enter during open gym hours even when the desk isn’t staffed.
          </p>
          <p>
            Questions? Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or{" "}
            <Link href="/contact">contact us</Link>.
          </p>
        </div>
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
              <dt>Always open?</dt>
              <dd>No — not 24/7</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
