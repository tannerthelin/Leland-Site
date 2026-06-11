import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
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

// Video cards: add a `video` field (mp4/webm URL) when prod assets land.
// Grid cards then autoplay muted on hover; the modal plays with sound.
const CARDS = [
  // Column 1
  { type: 'video', thumb: thumb1, name: 'Sarah K.', role: 'Career Changer → Product Manager', tall: true },
  { type: 'review', reviewIndex: 0 },
  { type: 'video', thumb: thumb2, name: 'James L.', role: 'MBA Admit, Harvard Business School', tall: true },
  { type: 'review', reviewIndex: 5 },
  { type: 'review', reviewIndex: 8 },

  // Column 2
  { type: 'review', reviewIndex: 2 },
  { type: 'case-study', logo: kelloggLogo, stat: '+74%', statLabel: 'increase in job offers', desc: 'Kellogg partnered with Leland to provide career coaching for MBA candidates across consulting, tech, and finance tracks.' },
  { type: 'review', reviewIndex: 4 },
  { type: 'review', reviewIndex: 12 }, // AI B2B review (Daniel R.) — pairs with the Kellogg B2B case study in this column

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

function VideoCard({ card, onClick }) {
  const videoRef = useRef(null)

  // Hover preview: muted autoplay, reset on leave. No-op until `card.video` exists.
  const handleEnter = () => videoRef.current?.play().catch(() => {})
  const handleLeave = () => {
    const v = videoRef.current
    if (v) {
      v.pause()
      v.currentTime = 0
    }
  }

  return (
    <div
      className={`tcard tcard-video${card.tall ? ' tcard-tall' : ''}`}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {card.video ? (
        <video
          ref={videoRef}
          className="tcard-img"
          src={card.video}
          poster={card.thumb}
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        <img src={card.thumb} alt="" className="tcard-img" />
      )}
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

function ReviewCard({ card, onClick }) {
  const review = REVIEWS[card.reviewIndex]
  return (
    <div
      className="tcard tcard-review"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
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

function CaseStudyCard({ card, onClick }) {
  return (
    <div
      className="tcard tcard-case-study"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
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

function Card({ card, onSelect }) {
  if (card.type === 'video') return <VideoCard card={card} onClick={() => onSelect(card)} />
  if (card.type === 'review') return <ReviewCard card={card} onClick={() => onSelect(card)} />
  if (card.type === 'case-study') return <CaseStudyCard card={card} onClick={() => onSelect(card)} />
  return null
}

function ReviewModal({ card, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const review = card.type === 'review' ? REVIEWS[card.reviewIndex] : null

  return (
    <motion.div
      className="tmodal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        className={`tmodal${card.type === 'video' ? ' tmodal-video-layout' : ''}${card.type === 'case-study' ? ' tmodal-cs-layout' : ''}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
      >
        <button className="tmodal-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {card.type === 'video' ? (
          <>
            <div className="tmodal-video-wrap">
              {card.video ? (
                // Sound on in the modal — user explicitly clicked in
                <video src={card.video} poster={card.thumb} controls autoPlay playsInline />
              ) : (
                <div className="tmodal-video-placeholder">
                  <img src={card.thumb} alt="" />
                  <span className="tcard-play tmodal-play">
                    <PlayIcon />
                  </span>
                </div>
              )}
            </div>
            <div className="tmodal-video-meta">
              <span className="tmodal-name">{card.name}</span>
              <span className="tmodal-role">{card.role}</span>
            </div>
          </>
        ) : card.type === 'case-study' ? (
          <div className="tmodal-cs">
            {card.logo && (
              <div className="tmodal-cs-logo-wrap">
                <img src={card.logo} alt="" />
              </div>
            )}
            <div className="tmodal-cs-body">
              <div className="tmodal-cs-stat-row">
                <span className="tmodal-cs-stat">{card.stat}</span>
                <span className="tmodal-cs-stat-label">{card.statLabel}</span>
              </div>
              <p className="tmodal-cs-desc">{card.desc}</p>
            </div>
          </div>
        ) : (
          <div className="tmodal-review">
            <div className="review-card-header">
              <img src={review.avatar} alt={review.name} className="tmodal-avatar" />
              <div className="review-card-info">
                <span className="tmodal-name">{review.name}</span>
                <span className="tmodal-role">{review.subtitle || review.category}</span>
              </div>
            </div>
            <div className="review-card-meta">
              <StarRow count={review.stars} />
              <span className="review-card-sep">&middot;</span>
              <span className="review-card-date">{review.date}</span>
            </div>
            <p className="tmodal-text">{review.text}</p>
            {review.outcome && (
              <div className="tmodal-outcome">
                {review.outcome.logo && <img src={review.outcome.logo} alt="" />}
                <span>{review.outcome.text}</span>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  const [selected, setSelected] = useState(null)

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
                  <Card card={card} key={j} onSelect={setSelected} />
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

      <AnimatePresence>
        {selected && <ReviewModal card={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
