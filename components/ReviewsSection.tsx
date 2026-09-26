import { site } from "@/lib/site";

export function ReviewsSection() {
  const { reviews } = site;

  return (
    <section className="section" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-intro">
          <p className="eyebrow">{reviews.label}</p>
          <h2 id="reviews-heading">What members say.</h2>
          <p
            className="reviews-aggregate"
            aria-label={`${reviews.rating} out of 5 from ${reviews.count} ${reviews.label}`}
          >
            <span className="reviews-score">{reviews.rating}</span>
            <span className="reviews-stars" aria-hidden="true">
              ★★★★★
            </span>
            <span>
              {reviews.count} {reviews.label}
            </span>
          </p>
        </div>
        <div className="card-grid reviews-grid">
          {reviews.quotes.map((review) => (
            <figure key={review.name} className="card review-card">
              <blockquote>
                <p>“{review.text}”</p>
              </blockquote>
              <figcaption>{review.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
