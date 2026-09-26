import Link from "next/link";
import { offerPriceLine, site } from "@/lib/site";

type OfferVariant = "hero" | "page" | "band";

export function MembershipOffer({
  variant,
  headingLevel = "h1",
}: {
  variant: OfferVariant;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const { offer } = site;
  const isHero = variant === "hero";
  const isBand = variant === "band";

  return (
    <div
      className={
        isHero ? undefined : isBand ? "promo-offer" : "offer-band"
      }
    >
      <p className={isHero ? "eyebrow eyebrow-light" : "eyebrow"}>
        {offer.eyebrow}
      </p>
      <Heading>{offer.headline}</Heading>
      <p className={isHero ? "lede lede-light" : "lede"}>{offer.sub}</p>
      {offer.secondary ? (
        <p className={isHero ? undefined : "muted"}>{offer.secondary}</p>
      ) : null}
      {variant === "page" ? (
        <>
          <p className="muted">{offerPriceLine()}</p>
          <p className="muted">{offer.exclusion}</p>
        </>
      ) : null}
      {isBand ? (
        <p className="muted">
          {offerPriceLine()}. {offer.exclusion}
        </p>
      ) : null}
      <div className="button-row">
        <a
          className={isHero ? "button button-inverse" : "button"}
          href={site.phoneHref}
        >
          Call {site.phoneDisplay}
        </a>
        {isHero || isBand ? (
          <Link
            className={isHero ? "button button-ghost" : "button button-outline"}
            href="/pricing"
          >
            View pricing
          </Link>
        ) : (
          <Link className="button button-outline" href="/contact">
            Contact us
          </Link>
        )}
      </div>
    </div>
  );
}
