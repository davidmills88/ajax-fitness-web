import {
  formatFullAddress,
  formatStreetAddress,
  site,
} from "@/lib/site";
import { trainers } from "@/lib/trainers";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    name: site.name,
    description: site.description,
    url: `https://${site.domain}`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: `https://${site.domain}${placeholdersPath()}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: formatStreetAddress(),
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: site.hours.schema.opens,
        closes: site.hours.schema.closes,
      },
    ],
    priceRange: "$$",
    slogan: site.tagline,
    hasMap: site.address.mapsUrl,
    identifier: formatFullAddress(),
    employee: trainers.map((trainer) => ({
      "@type": "Person",
      name: trainer.name,
      jobTitle: trainer.role,
      url: `https://${site.domain}/personal-training`,
      telephone: site.phoneHref.replace("tel:", ""),
      worksFor: {
        "@type": "HealthClub",
        name: site.name,
      },
    })),
  };
}

function placeholdersPath() {
  return "/placeholders/hero-training.jpg";
}
