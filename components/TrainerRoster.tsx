import { TrainerCard } from "@/components/TrainerCard";
import { trainers } from "@/lib/trainers";

export function TrainerRoster() {
  return (
    <div className="card-grid feature-grid trainer-grid">
      {trainers.map((trainer) => (
        <TrainerCard key={trainer.slug} trainer={trainer} />
      ))}
    </div>
  );
}
