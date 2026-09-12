import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">Ajax Fitness</p>
          <p className="muted">
            An access gym in Aspen. Members train on their own during open
            hours — not CrossFit, not a personal-training-only studio.
          </p>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p>
            <AddressBlock />
          </p>
          <p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <div>
          <p className="footer-label">Hours</p>
          <p>Member access {site.hours.access}, every day of the year.</p>
          <p className="muted">Not 24/7. Desk hours may differ.</p>
        </div>
        <div>
          <p className="footer-label">More</p>
          <p>
            <Link href="/personal-training">Training</Link>
          </p>
          <p>
            <Link href="/join">Join</Link>
          </p>
          <p>
            <Link href="/tour">Book a tour</Link>
          </p>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Ajax Fitness · Aspen, Colorado</p>
      </div>
    </footer>
  );
}
