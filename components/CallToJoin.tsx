import { site } from "@/lib/site";

export function CallToJoin({
  inverse = false,
}: {
  inverse?: boolean;
}) {
  return (
    <div className="button-row">
      <a
        className={inverse ? "button button-inverse" : "button"}
        href={site.phoneHref}
      >
        Call to join
      </a>
      <a
        className={inverse ? "button button-ghost" : "button button-outline"}
        href={site.phoneHref}
      >
        {site.phoneDisplay}
      </a>
    </div>
  );
}
