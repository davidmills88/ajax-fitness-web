import { localBusinessJsonLd } from "@/lib/schema";

export function JsonLd({ data }: { data?: object }) {
  const jsonLd = data ?? localBusinessJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
