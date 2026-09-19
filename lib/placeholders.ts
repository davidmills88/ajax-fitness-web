export const placeholders = {
  hero: "/images/hero.jpg",
  strength: "/images/strength.jpg",
  recovery: "/images/recovery.jpg",
  longevity: "/images/longevity.jpg",
  pricing: "/images/pricing.jpg",
  visit: "/images/visit.jpg",
  hours: "/images/hours.jpg",
  photoBand: "/images/photo-band.jpg",
  pricingSpacious: "/images/pricing-spacious.jpg",
  strengthAlt: "/images/strength-alt.jpg",
  strengthPortrait: "/images/strength-portrait.jpg",
  longevityAlt: "/images/longevity-alt.jpg",
  ptExtra: "/images/pt-extra.jpg",
} as const;

export type PhotoId = keyof typeof placeholders;

export const photoAlt: Record<PhotoId, string> = {
  hero: "Ajax Fitness strength aisle looking toward the windows.",
  strength: "Coach spotting a member pressing a hex dumbbell on an incline bench.",
  recovery: "Private cold plunge beside the infrared sauna at Ajax Fitness.",
  longevity: "Older member doing ab-wheel work with a trainer on the Ajax floor.",
  pricing: "Ajax Fitness weight floor with benches, machines, and a drink fridge.",
  visit: "Member running on a Precor treadmill by the windows.",
  hours: "Cable machine on the Ajax floor in front of the snow-mountain wall.",
  photoBand: "Member on a decline bench with a coach beside the treadmills.",
  pricingSpacious: "Open Ajax training floor under the rig, with members working.",
  strengthAlt: "Member jumping rope on the Ajax floor.",
  strengthPortrait: "Member holding dumbbells during a strength session.",
  longevityAlt: "Older member on the floor with an ab wheel and a trainer nearby.",
  ptExtra: "Member holding a medicine ball in a squat while a coach spots.",
};

export function altForSrc(src: string) {
  const match = (Object.keys(placeholders) as PhotoId[]).find(
    (id) => placeholders[id] === src,
  );
  return match ? photoAlt[match] : "Ajax Fitness in Aspen.";
}
