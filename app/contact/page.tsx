import type { Metadata } from "next";
import Link from "next/link";
import { AddressBlock } from "@/components/AddressBlock";
import { ContactForm } from "@/components/ContactForm";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { placeholders } from "@/lib/placeholders";
import { formatFullAddress, site } from "@/lib/site";

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
        <aside className="visit-stack">
          <div className="map-frame">
            <iframe
              title={`Map to Ajax Fitness at ${formatFullAddress()}`}
              src={site.address.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <PlaceholderMedia
            src={placeholders.visit}
            className="aside-media"
            sizes="(max-width: 720px) 100vw, 40vw"
          />
          <div className="panel">
            <p className="eyebrow">Ajax Fitness</p>
            <p>
              <AddressBlock />
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
          </div>
        </aside>
      </div>
    </section>
  );
}
