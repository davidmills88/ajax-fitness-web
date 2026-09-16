export type Trainer = {
  name: string;
  role: string;
  paragraphs: string[];
};

export const trainers: Trainer[] = [
  {
    name: "Roman Garcia",
    role: "Lead trainer and management",
    paragraphs: [
      "Roman leads training and the day-to-day at Ajax Fitness in Aspen. Roman runs the floor, and is in the work with you.",
      "Coaching is one-to-one: strength, recovery, and longevity written for the life you actually live here. Travel, altitude, ski season, a quiet May. The plan follows the year, not a template you abandon in week three.",
      "This is for members who want the person who leads the gym in the session with them. Honest eyes on the bar, the calendar, and the week you actually had. Packages after a conversation.",
    ],
  },
  {
    name: "Erin Young",
    role: "Personal trainer",
    paragraphs: [
      "Erin is a personal trainer at Ajax Fitness in Aspen. Sessions are one-to-one on the same floor members use — a plan and honest eyes, not a class.",
      "The work is strength, recovery, and longevity written for this place, not a generic program. Erin keeps the load honest so hard sessions can land and the next one is still possible.",
      "This is for members who want a coach in the room: accountability without the noise, a plan that fits how they actually live. Talk through packages when you are ready.",
    ],
  },
  {
    name: "Alie James",
    role: "Personal trainer",
    paragraphs: [
      "Alie is a personal trainer at Ajax Fitness in Aspen. Coaching is for members who already take the floor seriously and want a pair of eyes so the years add up.",
      "Sessions are one-to-one on the same floor — strength that still matters in twenty years, recovery that lets hard work land, a plan that stays useful on the mountain and steady in town.",
      "Ski, ride, compete, or simply stay capable here. Tell us. The coaching is still one-to-one. Packages after we talk.",
    ],
  },
];
