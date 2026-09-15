import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { type Trainer, trainerHref } from "@/lib/trainers";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="card feature-card trainer-card">
      <PlaceholderMedia
        src={trainer.photo}
        className="card-media"
        sizes="(max-width: 720px) 100vw, 33vw"
      />
      <div className="card-body">
        <p className="eyebrow">{trainer.role}</p>
        <h3>{trainer.name}</h3>
        <p>{trainer.forWhom}</p>
        <Link className="text-link" href={trainerHref(trainer.slug)}>
          About {trainer.firstName}
        </Link>
      </div>
    </article>
  );
}
