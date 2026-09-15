import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CallToJoin } from "@/components/CallToJoin";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { TrainerCard } from "@/components/TrainerCard";
import { personJsonLd } from "@/lib/schema";
import { formatNapShort, site } from "@/lib/site";
import { getTrainer, otherTrainers, trainers } from "@/lib/trainers";

export const dynamicParams = false;

export function generateStaticParams() {
  return trainers.map((trainer) => ({ slug: trainer.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/personal-training/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const trainer = getTrainer(slug);
  if (!trainer) {
    return { title: "Personal training" };
  }

  return {
    title: `${trainer.name} — ${trainer.role}`,
    description: `${trainer.name} is ${trainer.role} at Ajax Fitness, ${formatNapShort()}. ${trainer.forWhom} Call ${site.phoneDisplay}.`,
  };
}

export default async function TrainerPage({
  params,
}: PageProps<"/personal-training/[slug]">) {
  const { slug } = await params;
  const trainer = getTrainer(slug);
  if (!trainer) notFound();

  const jsonLd = personJsonLd(trainer.slug);
  const others = otherTrainers(trainer.slug);

  return (
    <>
      {jsonLd ? <JsonLd data={jsonLd} /> : null}
      <section className="hero">
        <PlaceholderMedia
          src={trainer.photo}
          className="hero-media"
          sizes="100vw"
          preload
        />
        <div className="hero-shade" />
        <div className="container hero-inner">
          <p className="eyebrow eyebrow-light">{trainer.role}</p>
          <h1>{trainer.name}</h1>
          <p className="lede lede-light">{trainer.forWhom}</p>
          <CallToJoin inverse />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="narrow">
            <p className="eyebrow">About {trainer.firstName}</p>
            <h2>Personal training at Ajax Fitness in Aspen.</h2>
            <p className="lede">{trainer.bio}</p>
            <p className="muted">
              {formatNapShort()}. Member access {site.hours.access} daily, 365
              days a year. Not 24/7.
            </p>
            <CallToJoin />
            <p>
              <Link href="/personal-training">All coaches</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/contact">Contact</Link>
            </p>
          </div>
          <PlaceholderMedia
            src={trainer.photo}
            className="page-aside-media"
            sizes="(max-width: 720px) 100vw, 40vw"
          />
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="narrow">
            <p className="eyebrow">The team</p>
            <h2>Other coaches on the floor.</h2>
          </div>
          <div className="card-grid trainer-grid trainer-pair">
            {others.map((other) => (
              <TrainerCard key={other.slug} trainer={other} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
