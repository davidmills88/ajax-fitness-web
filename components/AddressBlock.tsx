import {
  formatLocality,
  formatNapShort,
  formatStreetAddress,
  site,
} from "@/lib/site";

export function AddressBlock({
  className,
  inline = false,
}: {
  className?: string;
  inline?: boolean;
}) {
  return (
    <a
      href={site.address.mapsUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {inline ? (
        formatNapShort()
      ) : (
        <>
          {formatStreetAddress()}
          <br />
          {formatLocality()}
        </>
      )}
    </a>
  );
}
