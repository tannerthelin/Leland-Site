import { Link } from 'react-router-dom'
import REVIEWS from '../data/reviews'
import kelloggLogo from '../assets/logos/kellogg.avif'
import thumb1 from '../assets/img/video-thumbnails/image 1276.png'
import thumb2 from '../assets/img/video-thumbnails/image 1277.png'
import thumb3 from '../assets/img/video-thumbnails/image 1278.png'
import thumb4 from '../assets/img/video-thumbnails/image 1279.png'
import thumb5 from '../assets/img/video-thumbnails/image 1280.png'

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="white" />
  </svg>
)

const CARDS = [
  // Column 1
  { type: 'video', thumb: thumb1, name: 'Sarah K.', role: 'Career Changer → Product Manager', tall: true },
  { type: 'review', reviewIndex: 0 },
  { type: 'video', thumb: thumb2, name: 'James L.', role: 'MBA Admit, Harvard Business School', tall: true },
  { type: 'review', reviewIndex: 5 },
  { type: 'review', reviewIndex: 8 },

  // Column 2
  { type: 'review', reviewIndex: 2 },
  { type: 'case-study', logo: kelloggLogo, stat: '+74%', statLabel: 'increase in IB offers', desc: 'Kellogg partnered with Leland to provide career coaching for MBA candidates across consulting, tech, and finance tracks.' },
  { type: 'review', reviewIndex: 4 },
  { type: 'review', reviewIndex: 9 },

  // Column 3
  { type: 'video', thumb: thumb3, name: 'Priya M.', role: 'Consultant at McKinsey' },
  { type: 'review', reviewIndex: 1 },
  { type: 'video', thumb: thumb4, name: 'Alex W.', role: 'AI Product Lead', tall: false },
  { type: 'review', reviewIndex: 6 },
  { type: 'review', reviewIndex: 10 },

  // Column 4
  { type: 'review', reviewIndex: 3 },
  { type: 'video', thumb: thumb5, name: 'Jordan P.', role: 'Stanford MBA Admit', tall: true },
  { type: 'review', reviewIndex: 7 },
  { type: 'review', reviewIndex: 11 },
]

const COLUMNS = [
  [CARDS[0], CARDS[1], CARDS[2], CARDS[3], CARDS[4]],
  [CARDS[5], CARDS[6], CARDS[7], CARDS[8]],
  [CARDS[9], CARDS[10], CARDS[11], CARDS[12], CARDS[13]],
  [CARDS[14], CARDS[15], CARDS[16], CARDS[17]],
]

function VideoCard({ card }) {
  return (
    <div className={`tcard tcard-video${card.tall ? ' tcard-tall' : ''}`}>
      <img src={card.thumb} alt="" className="tcard-img" />
      <div className="tcard-overlay" />
      <span className="tcard-play">
        <PlayIcon />
      </span>
      <div className="tcard-caption">
        <span className="tcard-name">{card.name}</span>
        <span className="tcard-role">{card.role}</span>
      </div>
    </div>
  )
}

function StarRow({ count }) {
  return (
    <div className="review-card-stars">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="var(--gray-dark)">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ card }) {
  const review = REVIEWS[card.reviewIndex]
  return (
    <div className="tcard tcard-review">
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
  )
}

function CaseStudyCard({ card }) {
  return (
    <div className="tcard tcard-case-study">
      {card.logo && (
        <div className="tcard-cs-logo-wrap">
          <img src={card.logo} alt="" className="tcard-cs-logo" />
        </div>
      )}
      <div className="tcard-cs-stat-row">
        <span className="tcard-cs-stat">{card.stat}</span>
        <span className="tcard-cs-stat-label">{card.statLabel}</span>
      </div>
      <p className="tcard-cs-desc">{card.desc}</p>
    </div>
  )
}

function Card({ card }) {
  if (card.type === 'video') return <VideoCard card={card} />
  if (card.type === 'review') return <ReviewCard card={card} />
  if (card.type === 'case-study') return <CaseStudyCard card={card} />
  return null
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="testimonials-header">
          <p className="testimonials-label">
            <span className="testimonials-dot" />
            Testimonials
          </p>
          <h2 className="testimonials-heading">Don&rsquo;t just take our word for it.</h2>
        </div>

        <div className="tboard-wrap">
          <div className="tboard">
            {COLUMNS.map((col, i) => (
              <div className="tboard-col" key={i}>
                {col.map((card, j) => (
                  <Card card={card} key={j} />
                ))}
              </div>
            ))}
          </div>
          <div className="tboard-fade" />
          <div className="tboard-cta">
            <Link to="/reviews" className="tboard-show-more">See all 22,264 reviews</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
