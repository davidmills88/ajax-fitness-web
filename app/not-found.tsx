import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section page-hero">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>That page isn’t here.</h1>
        <p className="lede">
          Try home, hours, pricing, recovery, or contact — or call us if you
          were looking for membership details.
        </p>
        <Link className="button" href="/">
          Back home
        </Link>
      </div>
    </section>
  );
}
