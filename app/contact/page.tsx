import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ajax Fitness in Aspen about membership, a day pass, or a tour.",
};

export default function ContactPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>Contact Ajax Fitness</h1>
          <p className="lede">
            Tell us what you’re looking for — membership, day pass, or a tour.
            We’ll follow up from this inbox.
          </p>
          <ContactForm />
        </div>
        <aside className="panel">
          <p className="eyebrow">Ajax Fitness</p>
          <p>
            <a href={site.address.mapsUrl} target="_blank" rel="noreferrer">
              {site.address.line1}
              <br />
              {site.address.city}
            </a>
          </p>
          <p>
            <a href={site.phoneHref}>{site.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="muted">
            Hours: members {site.hours.access} daily (not 24/7)
          </p>
          <p>
            <Link href="/tour">Prefer to book a tour?</Link>
          </p>
        </aside>
      </div>
    </section>
  );
}
