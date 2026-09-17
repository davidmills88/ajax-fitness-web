export const placeholders = {
  hero: "/placeholders/hero-functional.jpg",
  strength: "/placeholders/strength.jpg",
  recovery: "/placeholders/recovery.jpg",
  longevity: "/placeholders/longevity.jpg",
  photoBand: "/placeholders/photo-band.jpg",
  pricing: "/placeholders/pricing-spacious.jpg",
  hours: "/placeholders/hours.jpg",
  visit: "/placeholders/visit-runner.jpg",
  floor: "/placeholders/hero-aisle.jpg",
  training: "/placeholders/talk-strength-alt.jpg",
  trainingBand: "/placeholders/pricing-band.jpg",
} as const;

export type PlaceholderSlot = keyof typeof placeholders;

export const placeholderAlts: Record<PlaceholderSlot, string> = {
  hero: "Open functional training floor with a rig, kettlebells, and members training",
  strength: "Member pressing hex dumbbells on an incline bench while a coach spots",
  recovery: "Blue-lit cold plunge beside a glowing infrared sauna in the Ajax recovery suite",
  longevity: "Older member performing an ab-wheel rollout with a trainer guiding form",
  photoBand: "Coach standing with a member on an incline bench beside a treadmill",
  pricing: "Wide functional floor with murals, a rig, and open space between stations",
  hours: "Empty training floor in front of Ajax Fitness’s snowy mountain wall mural",
  visit: "Member running on a Precor treadmill by large windows",
  floor: "Empty strength aisle toward the windows, with Matrix machines and Rogue racks",
  training: "Member jumping rope on the functional floor beside plyo boxes",
  trainingBand: "Strength floor with Rogue plates, Matrix machines, and drink fridge toward the windows",
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
