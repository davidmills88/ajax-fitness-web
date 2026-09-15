export const site = {
  name: "Ajax Fitness",
  domain: "ajaxfitness.com",
  tagline: "Strength, recovery, and longevity in Aspen",
  description:
    "Ajax Fitness is Aspen’s premium gym for strength, recovery, and longevity. Members train independently during open hours, 6:00 AM–9:00 PM daily.",
  phoneDisplay: "(970) 670-8974",
  phoneHref: "tel:+19706708974",
  email: "hello@ajaxgym.com",
  address: {
    line1: "100 Obermeyer Place",
    line2: "Unit 105",
    city: "Aspen",
    region: "CO",
    postalCode: "81611",
    country: "US",
    mapsUrl:
      "https://maps.google.com/?q=100+Obermeyer+Place,+Unit+105,+Aspen,+CO+81611",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=100%20Obermeyer%20Place%2C%20Unit%20105%2C%20Aspen%2C%20CO%2081611&z=16&output=embed",
  },
  hours: {
    access: "6:00 AM–9:00 PM",
    days: "Daily / year-round",
    note: "Ajax Fitness is not open 24 hours. Front desk hours may differ from member access.",
    schema: {
      opens: "06:00",
      closes: "21:00",
    },
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
  interests: [
    "Membership",
    "Day pass",
    "Personal training",
    "Tour",
    "Other",
  ] as const,
};

export type PlanId = keyof typeof site.plans;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/hours", label: "Hours" },
  { href: "/pricing", label: "Pricing" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/contact", label: "Contact" },
] as const;

export const trainingNavHrefs = ["/personal-training"] as const;

export function formatStreetAddress() {
  return `${site.address.line1}, ${site.address.line2}`;
}

export function formatLocality() {
  return `${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
}

export function formatFullAddress() {
  return `${formatStreetAddress()}, ${formatLocality()}`;
}
