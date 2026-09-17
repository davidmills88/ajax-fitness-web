export const placeholders = {
  hero: "/placeholders/hero-training.jpg",
  strength: "/placeholders/strength.jpg",
  recovery: "/placeholders/recovery.jpg",
  longevity: "/placeholders/longevity.jpg",
  pricing: "/placeholders/pricing-band.jpg",
  visit: "/placeholders/visit-exterior.jpg",
} as const;

export type PlaceholderSlot = keyof typeof placeholders;

export const placeholderAlts: Record<PlaceholderSlot, string> = {
  hero: "Empty strength aisle toward the windows, with Matrix machines and Rogue racks",
  strength: "Member pressing hex dumbbells on an incline bench while a coach spots",
  recovery: "Blue-lit cold plunge beside a glowing infrared sauna in the Ajax recovery suite",
  longevity: "Older member performing an ab-wheel rollout with a trainer guiding form",
  pricing: "Strength floor with Rogue plates, Matrix machines, and drink fridge toward the windows",
  visit: "Member running on a Precor treadmill by large windows",
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
