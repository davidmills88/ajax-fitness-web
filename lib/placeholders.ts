export const placeholders = {
  hero: "/placeholders/hero-aisle.jpg",
  strength: "/placeholders/strength.jpg",
  recovery: "/placeholders/recovery.jpg",
  sauna: "/placeholders/sauna-detail.jpg",
  longevity: "/placeholders/longevity.jpg",
  pricing: "/placeholders/pricing-band.jpg",
  visit: "/placeholders/visit-runner.jpg",
  photoBand: "/placeholders/hero-functional.jpg",
  hours: "/placeholders/hours.jpg",
  contact: "/placeholders/photo-band.jpg",
  training: "/placeholders/talk-strength-alt.jpg",
  trainingBand: "/placeholders/pricing-spacious.jpg",
} as const;

export type PlaceholderSlot = keyof typeof placeholders;

export const placeholderAlts: Record<PlaceholderSlot, string> = {
  hero: "Empty strength aisle toward the windows, with Matrix machines and Rogue racks",
  strength: "Member pressing hex dumbbells on an incline bench while a coach spots",
  recovery: "Blue-lit cold plunge beside a glowing infrared sauna in the Ajax recovery suite",
  sauna: "Infrared sauna cabin with glowing cedar benches in the Ajax recovery room",
  longevity: "Older member performing an ab-wheel rollout with a trainer guiding form",
  pricing: "Strength floor with Rogue plates, Matrix machines, and drink fridge toward the windows",
  visit: "Member running on a Precor treadmill by large windows",
  photoBand: "Open functional training floor with a rig, kettlebells, and members training",
  hours: "Empty training floor in front of Ajax Fitness’s snowy mountain wall mural",
  contact: "Coach standing with a member on an incline bench beside a treadmill",
  training: "Member jumping rope on the functional floor beside plyo boxes",
  trainingBand: "Wide functional floor with murals, a rig, and open space between stations",
};

export const placeholderAlt = placeholderAlts.hero;

const altBySrc = Object.fromEntries(
  (Object.keys(placeholders) as PlaceholderSlot[]).map((slot) => [
    placeholders[slot],
    placeholderAlts[slot],
  ]),
) as Record<string, string>;

export function altForPlaceholder(src: string) {
  return altBySrc[src] ?? placeholderAlt;
}
