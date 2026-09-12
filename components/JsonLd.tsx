import { localBusinessJsonLd } from "@/lib/schema";

export function JsonLd() {
  const jsonLd = localBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
