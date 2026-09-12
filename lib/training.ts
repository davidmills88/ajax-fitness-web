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
      "A minimum of 1,500 hours across fitness, nutrition, and wellness. Certified trainers — many with bachelor’s degrees. Five days of in-house education each year, and a structured three-year development path.",
  },
  {
    id: "elite" as const,
    name: "Elite personal training",
    detail:
      "More than 7,500 hours of professional practice, plus advanced credentials. Many are longtime athletes with a decade or more behind them. A master’s degree or comparable certification, and an intensive in-house path to Elite status.",
  },
] as const;
