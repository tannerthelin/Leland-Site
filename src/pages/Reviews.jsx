import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import NumberFlow from '@number-flow/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import REVIEWS from '../data/reviews'
import filterIcon from '../assets/icons/filter.svg'
import careerIcon from '../assets/icons/arrow-up-chart.svg'
import schoolIcon from '../assets/icons/school.svg'
import testIcon from '../assets/icons/test.svg'
import './Reviews.css'

const GOALS = [
  { label: 'Build your career', icon: careerIcon },
  { label: 'Get into school', icon: schoolIcon },
  { label: 'Take a test', icon: testIcon },
]

const RATING_BARS = [
  { stars: 5, count: '29k', pct: 97 },
  { stars: 4, count: '160', pct: 2 },
  { stars: 3, count: '29', pct: 0.5 },
  { stars: 2, count: '18', pct: 0.3 },
  { stars: 1, count: '38', pct: 0.2 },
]

function StarRow({ count, size = 14, color = 'var(--gray-dark)' }) {
  return (
    <div className="reviews-star-row">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill={color}>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="review-card"
      key={review.name}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
    >
      <div className="review-card-header">
        <img src={review.avatar} alt={review.name} className="review-card-avatar" />
        <div className="review-card-info">
          <span className="review-card-name">{review.name}</span>
          <span className="review-card-subtitle">{review.category} &middot; worked with <span className="review-card-coach">{review.coach}</span></span>
        </div>
      </div>
      <div className="review-card-meta">
        <StarRow count={review.stars} />
        <span className="review-card-sep">&middot;</span>
        <span className="review-card-date">{review.date}</span>
      </div>
      <div
        className={`review-card-text-wrap${expanded ? ' review-card-text-expanded' : ' review-card-text-clamped'}`}
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer' }}
      >
        <p className="review-card-text">{review.text}</p>
        <div className="review-card-text-fade" />
      </div>
      {review.outcome && (
        <div className="review-card-outcome">
          {review.outcome.type === 'test' ? (
            <img src={review.outcome.icon} alt="" className="review-outcome-check" />
          ) : (
            <img src={review.outcome.logo} alt="" className="review-outcome-logo" />
          )}
          <span className="review-outcome-text">{review.outcome.text}</span>
        </div>
      )}
    </motion.div>
  )
}

function RatingSidebar({ activeGoal, setActiveGoal }) {
  return (
    <aside className="reviews-sidebar">
      <h3 className="sidebar-title">Overall rating</h3>
      <div className="sidebar-score-row">
        <span className="sidebar-score">4.99</span>
        <StarRow count={5} size={20} color="#FFD667" />
      </div>
      <div className="sidebar-bars">
        {RATING_BARS.map((bar) => (
          <button key={bar.stars} className="sidebar-bar-row">
            <span className="sidebar-bar-label">
              <svg width="12" height="12" viewBox="0 0 20 20" fill="var(--gray-dark)">
                <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
              </svg>
              {bar.stars}
            </span>
            <div className="sidebar-bar-track">
              <div className="sidebar-bar-fill" style={{ width: `${bar.pct}%` }} />
            </div>
            <span className="sidebar-bar-count">{bar.count}</span>
          </button>
        ))}
      </div>

      <div className="sidebar-filters">
        <div className="sidebar-filter-list">
          {[{ label: 'All', icon: null }, ...GOALS].map((goal) => {
            const isAll = goal.label === 'All'
            const isActive = isAll ? !activeGoal : activeGoal === goal.label
            return (
              <label key={goal.label} className="sidebar-radio">
                <span className="sidebar-radio-icon-wrap">
                  {goal.icon ? (
                    <img src={goal.icon} alt="" className="sidebar-radio-icon" />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" vectorEffect="nonScalingStroke" /><rect x="14" y="3" width="7" height="7" vectorEffect="nonScalingStroke" /><rect x="3" y="14" width="7" height="7" vectorEffect="nonScalingStroke" /><rect x="14" y="14" width="7" height="7" vectorEffect="nonScalingStroke" />
                    </svg>
                  )}
                </span>
                <span className="sidebar-radio-label">{goal.label}</span>
                <input
                  type="radio"
                  name="goal"
                  checked={isActive}
                  onChange={() => setActiveGoal(isAll ? null : goal.label)}
                />
                <span className="sidebar-radio-dot" />
              </label>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default function Reviews() {
  const [count, setCount] = useState(12000)
  const [activeGoal, setActiveGoal] = useState(null)

  useEffect(() => {
    const t1 = setTimeout(() => setCount(22264), 250)
    const t2 = setTimeout(() => setCount(22265), 2000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <>
      <Navbar variant="sticky" />

      <section className="reviews-hero">
        <motion.div
          className="section-container"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
        >
          <div className="reviews-counter">
            <div className="reviews-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="28" height="28" viewBox="0 0 20 20" fill="#FFD667">
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="reviews-subtext" style={{ marginBottom: 0 }}>4.99 average</p>
          </div>
          <h1 className="reviews-heading">
            <NumberFlow value={count} format={{ useGrouping: true }} /> reviews and counting
          </h1>
          <p className="reviews-subtext">
            More people are reaching their goals every day on Leland.
          </p>
        </motion.div>
      </section>

      {/* Review Cards + Sidebar */}
      <section className="reviews-list">
        <div className="section-container">
          <div className="reviews-layout">
            <RatingSidebar activeGoal={activeGoal} setActiveGoal={setActiveGoal} />
            <div className="reviews-main">
              <div className="reviews-masonry">
                <div className="reviews-masonry-col">
                  {REVIEWS.filter((_, i) => i % 2 === 0).map((review) => (
                    <ReviewCard review={review} key={review.name} />
                  ))}
                </div>
                <div className="reviews-masonry-col">
                  {REVIEWS.filter((_, i) => i % 2 === 1).map((review) => (
                    <ReviewCard review={review} key={review.name} />
                  ))}
                </div>
              </div>
              <div className="reviews-load-more-wrap">
                <button className="reviews-load-more">Load more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
