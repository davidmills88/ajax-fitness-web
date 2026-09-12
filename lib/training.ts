export const trainingIncludes = [
  "InBody scan",
  "1-to-1 personal training",
  "Program creation",
  "Training app access",
  "Recovery room coaching",
  "Key metric progress tracking",
  "Goal setting and mindset coaching",
  "Unlimited communication with your coach",
] as const;

export const trainerLevels = [
  {
    id: "standard" as const,
    name: "Personal training",
    detail:
      "Trainers bring a minimum of 1,500 hours of hands-on experience across fitness, nutrition, and wellness. All are certified — many with bachelor’s degrees. They commit to at least five days of in-house education each year and progress through a structured, three-year development program.",
  },
  {
    id: "elite" as const,
    name: "Elite personal training",
    detail:
      "Elite trainers have logged more than 7,500 hours of professional practice and hold advanced qualifications. Many are longtime athletes with over a decade of real-world experience. Each holds at least a master’s degree or comparable certification, plus an intensive in-house development path.",
  },
] as const;
