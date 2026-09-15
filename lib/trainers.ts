import { placeholders } from "@/lib/placeholders";

export type Trainer = {
  slug: string;
  name: string;
  firstName: string;
  role: string;
  forWhom: string;
  bio: string;
  photo: string;
};

export const trainers: Trainer[] = [
  {
    slug: "roman-garcia",
    name: "Roman Garcia",
    firstName: "Roman",
    role: "Lead trainer and management",
    forWhom:
      "For members who want the person who leads the floor in the work with them.",
    bio: "Roman leads training and the day-to-day at Ajax Fitness in Aspen. Coaching is one-to-one — strength, recovery, and longevity written for the life you actually live here. Packages after a conversation. We don’t publish coaching rates.",
    photo: placeholders.strength,
  },
  {
    slug: "erin-young",
    name: "Erin Young",
    firstName: "Erin",
    role: "Personal trainer",
    forWhom:
      "For members who want a personal trainer on the floor — a plan and honest eyes, not a class.",
    bio: "Erin is a personal trainer at Ajax Fitness in Aspen. One-to-one coaching for strength, recovery, and longevity — written for this place, not a generic program. Talk through packages or call.",
    photo: placeholders.longevity,
  },
  {
    slug: "alie-james",
    name: "Alie James",
    firstName: "Alie",
    role: "Personal trainer",
    forWhom:
      "For members who already take the floor seriously and want a coach so the years add up.",
    bio: "Alie is a personal trainer at Ajax Fitness in Aspen. One-to-one coaching on the same floor members use 6:00 AM–9:00 PM. Packages after we talk. We don’t publish coaching rates.",
    photo: placeholders.recovery,
  },
];

export function trainerHref(slug: string) {
  return `/personal-training/${slug}`;
}

export function getTrainer(slug: string) {
  return trainers.find((trainer) => trainer.slug === slug);
}

export function otherTrainers(slug: string) {
  return trainers.filter((trainer) => trainer.slug !== slug);
}

export function trainerNamesLine() {
  const names = trainers.map((trainer) => trainer.name);
  if (names.length < 2) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}
