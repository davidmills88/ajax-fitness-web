import type { Metadata } from "next";
import Link from "next/link";
import { TourForm } from "@/components/TourForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a tour",
  description:
    "Request a tour of Ajax Fitness in Aspen. Member access is 6:00 AM–9:00 PM daily.",
};

export default function TourPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div className="narrow">
          <p className="eyebrow">Visit the gym</p>
          <h1>Book a tour</h1>
          <p className="lede">
            Come see the floor, meet the team, and decide if Ajax is the right
            fit. Scheduling is a Phase 1 stub — call{" "}
            <a href={site.phoneHref}>{site.phoneDisplay}</a> if you want a time
            confirmed today.
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
              Member access {site.hours.access} daily. Not 24/7.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
