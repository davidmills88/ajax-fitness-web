import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ajaxfitness.com";
  const paths = [
    "",
    "/hours",
    "/pricing",
    "/recovery",
    "/personal-training",
    "/contact",
    "/join",
    "/tour",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
