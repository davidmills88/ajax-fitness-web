export const site = {
  name: "Ajax Fitness",
  domain: "ajaxfitness.com",
  tagline: "Strength, recovery, and longevity in Aspen",
  description:
    "Ajax Fitness is a full gym in Aspen for strength, recovery, and longevity — open to members and visitors every day, 6:00 AM–9:00 PM.",
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
    days: "Daily, 365 days a year",
    note: "Ajax Fitness is not open 24 hours. Front desk hours may differ from member access.",
    schema: {
      opens: "06:00",
      closes: "21:00",
    },
  },
  plans: {
    monthly: {
      id: "monthly" as const,
      kind: "membership" as const,
      name: "Monthly membership",
      price: "$229",
      cadence: "/month",
      detail: "Minimum 3 months. Billed bi-weekly.",
    },
    annual: {
      id: "annual" as const,
      kind: "membership" as const,
      name: "Annual membership",
      price: "$2100",
      cadence: "/year",
      detail: "Paid once. The best value if you’re here year-round.",
    },
    day: {
      id: "day" as const,
      kind: "temporary" as const,
      name: "Day pass",
      price: "$49",
      cadence: "",
      detail: "Full gym access for a day.",
    },
    week: {
      id: "week" as const,
      kind: "temporary" as const,
      name: "Week pass",
      price: "$150",
      cadence: "",
      detail: "Full gym access for seven days.",
    },
    twoWeek: {
      id: "twoWeek" as const,
      kind: "temporary" as const,
      name: "2-week pass",
      price: "$225",
      cadence: "",
      detail: "Full gym access for two weeks.",
    },
    oneMonth: {
      id: "oneMonth" as const,
      kind: "temporary" as const,
      name: "1-month pass",
      price: "$295",
      cadence: "",
      detail: "Full gym access for a month.",
    },
  },
  /**
   * Flip `activeOfferVariant` to restore the 6-week-only promo.
   * This draft tests $0 initiation on Monthly / Annual signup.
   */
  activeOfferVariant: "zeroInitiation" as "sixWeek" | "zeroInitiation",
  offerVariants: {
    sixWeek: {
      eyebrow: "With membership",
      headline: "Free 6-week custom training program with membership",
      sub: "Included with every membership signup.",
      secondary: "",
      exclusion: "Not included with a day pass.",
    },
    zeroInitiation: {
      eyebrow: "Limited offer",
      headline: "$0 initiation with membership signup",
      sub: "Join Monthly or Annual and we’ll waive the initiation fee.",
      secondary: "You’ll also get a free 6-week training program, written for you by one of our coaches.",
      exclusion: "Day, week, and month passes aren’t eligible.",
    },
  },
  get offer() {
    return this.offerVariants[this.activeOfferVariant];
  },
  reviews: {
    rating: "4.9",
    count: 71,
    label: "Google reviews",
    quotes: [
      {
        name: "Paradise",
        text: "Great atmosphere. Most weights in aspen. Never have to wait for equipment even when it gets busy",
      },
      {
        name: "Julia Clark Russo",
        text: "New equipment, great personal trainers and space. Love the infrared sauna and cold plunge the most.",
      },
      {
        name: "Taine de Buys",
        text: "Great gym with a strong community around it. Love the range of equipment here, certainly the best facilities in aspen.",
      },
      {
        name: "Hana Bowers",
        text: "Best gym in Aspen, hands down! The space is super open and not crowded with machines… The personal trainers here are top-notch, especially Roman…",
      },
    ],
  },
  ghlLocationId: "9s4QUTb46DnuhaD2NEca",
  interests: [
    "Membership",
    "Temporary pass",
    "Personal training",
    "Tour",
    "Other",
  ] as const,
};

export type PlanId = keyof typeof site.plans;
export type Plan = (typeof site.plans)[PlanId];

export const membershipPlanIds = ["monthly", "annual"] as const;
export const temporaryPassIds = [
  "day",
  "week",
  "twoWeek",
  "oneMonth",
] as const;
export const allPlanIds = [
  ...membershipPlanIds,
  ...temporaryPassIds,
] as const;

export const membershipPlans = membershipPlanIds.map((id) => site.plans[id]);
export const temporaryPasses = temporaryPassIds.map((id) => site.plans[id]);
export const allPlans = allPlanIds.map((id) => site.plans[id]);

export function offerPriceLine() {
  return `Monthly ${site.plans.monthly.price} · Annual ${site.plans.annual.price}`;
}

export function lockedPriceLine() {
  return `Monthly ${site.plans.monthly.price} (min 3 mo, billed bi-weekly) · Annual ${site.plans.annual.price} · Day ${site.plans.day.price} · Week ${site.plans.week.price} · 2-week ${site.plans.twoWeek.price} · 1-month ${site.plans.oneMonth.price}`;
}

export function formatNapShort() {
  return `${formatStreetAddress()}, ${site.address.city}, ${site.address.region}`;
}

export const nav = [
  { href: "/", label: "Home" },
  { href: "/hours", label: "Hours" },
  { href: "/pricing", label: "Pricing" },
  { href: "/recovery", label: "Recovery" },
  { href: "/personal-training", label: "Personal Training" },
  { href: "/contact", label: "Contact" },
] as const;

export function formatStreetAddress() {
  return `${site.address.line1}, ${site.address.line2}`;
}

export function formatLocality() {
  return `${site.address.city}, ${site.address.region} ${site.address.postalCode}`;
}

export function formatFullAddress() {
  return `${formatStreetAddress()}, ${formatLocality()}`;
}
