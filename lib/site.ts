export const site = {
  name: "Ajax Fitness",
  domain: "ajaxfitness.com",
  tagline: "Strength, recovery, and longevity in Aspen",
  description:
    "Ajax Fitness is Aspen’s premium gym for strength, recovery, and longevity. Small enough to feel personal. Serious enough that your training actually compounds.",
  phoneDisplay: "(970) 670-8974",
  phoneHref: "tel:+19706708974",
  email: "david@ajaxgym.com",
  address: {
    line1: "65 Paepcke Dr",
    city: "Aspen, CO",
    mapsUrl: "https://maps.google.com/?q=65+Paepcke+Dr,+Aspen,+CO",
  },
  hours: {
    access: "6:00 AM–9:00 PM",
    days: "Daily / year-round",
    note: "Ajax Fitness is not open 24 hours. Front desk hours may differ from member access.",
  },
  plans: {
    monthly: {
      id: "monthly" as const,
      name: "Monthly membership",
      price: "$229",
      cadence: "/month",
      detail: "Minimum 3 months. Billed bi-weekly.",
    },
    annual: {
      id: "annual" as const,
      name: "Annual membership",
      price: "$2100",
      cadence: "/year",
      detail: "Best value for year-round training.",
    },
    day: {
      id: "day" as const,
      name: "Day pass",
      price: "$49",
      cadence: "",
      detail: "One-day access. Call or stop by to arrange.",
    },
  },
  ghlLocationId: "9s4QUTb46DnuhaD2NEca",
  interests: ["Membership", "Day pass", "Tour", "Other"] as const,
};

export type PlanId = keyof typeof site.plans;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/hours", label: "Hours" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
