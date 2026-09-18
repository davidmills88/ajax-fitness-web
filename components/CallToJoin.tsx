import Link from "next/link";
import { site } from "@/lib/site";

export function CallToJoin({
  inverse = false,
  secondary = "pricing",
  quietSecondary = false,
}: {
  inverse?: boolean;
  secondary?: "pricing" | "contact" | "none";
  quietSecondary?: boolean;
}) {
  const secondaryClass = quietSecondary
    ? inverse
      ? "text-link-light"
      : "text-link"
    : inverse
      ? "button button-ghost"
      : "button button-outline";

  return (
    <div className="button-row">
      <a
        className={inverse ? "button button-inverse" : "button"}
        href={site.phoneHref}
      >
        Call {site.phoneDisplay}
      </a>
      {secondary === "pricing" ? (
        <Link className={secondaryClass} href="/pricing">
          View pricing
        </Link>
      ) : null}
      {secondary === "contact" ? (
        <Link className={secondaryClass} href="/contact">
          Contact us
        </Link>
      ) : null}
    </div>
  );
}
