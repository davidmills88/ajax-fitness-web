import Link from "next/link";
import { offerPriceLine, site } from "@/lib/site";

type OfferVariant = "hero" | "page";

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

  return (
    <div className={isHero ? undefined : "offer-band"}>
      <p className={isHero ? "eyebrow eyebrow-light" : "eyebrow"}>
        {offer.eyebrow}
      </p>
      <Heading>{offer.headline}</Heading>
      <p className={isHero ? "lede lede-light" : "lede"}>
        {offer.sub} {offerPriceLine()}
      </p>
      {isHero ? null : <p className="muted">{offer.exclusion}</p>}
      <div className="button-row">
        <a
          className={isHero ? "button button-inverse" : "button"}
          href={site.phoneHref}
        >
          Call to join
        </a>
        {isHero ? (
          <Link className="button button-ghost" href="/pricing">
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
