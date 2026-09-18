import Link from "next/link";
import { site } from "@/lib/site";

export function CallToJoin({
  inverse = false,
  secondary = "pricing",
  quietSecondary = false,
  note = false,
}: {
  inverse?: boolean;
  secondary?: "pricing" | "contact" | "none";
  quietSecondary?: boolean;
  note?: boolean;
}) {
  const secondaryClass = quietSecondary
    ? inverse
      ? "text-link-light"
      : "text-link"
    : inverse
      ? "button button-ghost"
      : "button button-outline";

  return (
    <div className={note ? "cta-block" : undefined}>
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
      {note ? (
        <p className={inverse ? "cta-note cta-note-light" : "cta-note"}>
          We’ll pick up during gym hours. No pressure.
        </p>
      ) : null}
    </div>
  );
}
