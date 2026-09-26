import type { Metadata } from "next";
import Link from "next/link";
import { TourForm } from "@/components/TourForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a walkthrough",
  description:
    "Come for a walkthrough of Ajax Fitness in Aspen. See the floor during gym hours, 6:00 AM–9:00 PM daily. Call (970) 670-8974 or request a time.",
};

export default function TourPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div className="narrow">
          <p className="eyebrow">Visit the gym</p>
          <h1>Come for a walkthrough</h1>
          <p className="lede">
            See the gym, meet the team, and decide if Ajax fits. Fastest is a
            call: <a href={site.phoneHref}>{site.phoneDisplay}</a>. Or send a
            time below and we’ll call you back to confirm.
          </p>
          <TourForm />
          <p>
            Looking at membership instead? <Link href="/pricing">See pricing</Link>
            .
          </p>
        </div>
        <aside className="visit-stack">
          <div className="panel">
            <p className="eyebrow">Find us</p>
            <p>
              Ajax Fitness in Aspen.{" "}
              <Link href="/contact">Address on Contact</Link>.
            </p>
            <p className="muted">
              Open every day, {site.hours.access}.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
