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
    "Contact Ajax Fitness in Aspen about membership, a visitor pass, personal training, or a walkthrough.",
};

export default function ContactPage() {
  return (
    <section className="section page-hero">
      <div className="container split">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1>Talk to us</h1>
          <p className="lede">
            Questions about membership, a visitor pass, coaching, or anything
            else? Send a note, or call {site.phoneDisplay}.
          </p>
          <ContactForm />
        </div>
        <aside className="visit-stack">
          <PlaceholderMedia
            src={placeholders.strengthAlt}
            className="aside-media"
            sizes="(max-width: 720px) 100vw, 40vw"
          />
          <div className="map-frame">
            <iframe
              title={`Map to Ajax Fitness at ${formatFullAddress()}`}
              src={site.address.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
              Open every day, {site.hours.access}
            </p>
            <p>
              <Link href="/tour">Prefer to request a walkthrough?</Link>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
