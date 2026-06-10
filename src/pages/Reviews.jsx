import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import REVIEWS from '../data/reviews'
import './Reviews.css'

const RATING_CATEGORIES = [
  { label: 'Expertise', score: 4.99 },
  { label: 'Communication', score: 4.98 },
  { label: 'Helpfulness', score: 4.99 },
  { label: 'Responsiveness', score: 4.97 },
  { label: 'Value', score: 4.95 },
  { label: 'Results', score: 4.99 },
]

const RATING_BARS = [
  { stars: 5, pct: 97 },
  { stars: 4, pct: 2 },
  { stars: 3, pct: 0.5 },
  { stars: 2, pct: 0.3 },
  { stars: 1, pct: 0.2 },
]

function StarRow({ count }) {
  return (
    <div className="reviews-star-row">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="var(--gray-dark)">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <>
      <Navbar variant="sticky" />

      <section className="reviews-hero">
        <div className="section-container">
          <h1 className="reviews-heading">
            22,264 reviews and counting
          </h1>
          <p className="reviews-subtext">
            People are reaching their goals every day on Leland.
          </p>
          <div className="reviews-counter">
            <div className="reviews-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD667">
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </div>
            <span className="reviews-count">22,264 reviews</span>
            <span className="reviews-sep">&middot;</span>
            <span className="reviews-avg">Avg 4.99</span>
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="reviews-list">
        <div className="section-container">
          <div className="reviews-grid">
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.name}>
                <div className="review-card-header">
                  <img src={review.avatar} alt={review.name} className="review-card-avatar" />
                  <div className="review-card-info">
                    <span className="review-card-name">{review.name}</span>
                    <span className="review-card-subtitle">{review.subtitle}</span>
                  </div>
                </div>
                <div className="review-card-meta">
                  <StarRow count={review.stars} />
                  <span className="review-card-sep">&middot;</span>
                  <span className="review-card-date">{review.date}</span>
                </div>
                <p className="review-card-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
