import { formatLocality, formatStreetAddress, site } from "@/lib/site";

export function AddressBlock({ className }: { className?: string }) {
  return (
    <a
      href={site.address.mapsUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {formatStreetAddress()}
      <br />
      {formatLocality()}
    </a>
  );
}
