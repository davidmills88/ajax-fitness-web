import type { MetadataRoute } from "next";
import { trainerHref, trainers } from "@/lib/trainers";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ajaxfitness.com";
  const paths = [
    "",
    "/hours",
    "/pricing",
    "/personal-training",
    ...trainers.map((trainer) => trainerHref(trainer.slug)),
    "/contact",
    "/join",
    "/tour",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/personal-training/") ? 0.6 : 0.7,
  }));
}
