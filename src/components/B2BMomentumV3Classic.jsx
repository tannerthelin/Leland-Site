import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'motion/react'
import NumberFlow from '@number-flow/react'

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

// TODO(live data): wire to the public retraining counter when the API ships.
const TRAINED_COUNT = 97412

const MARKET_STATS = [
  { num: '~1B', label: 'people need AI upskilling in the next 4 years' },
  { num: '$2.5T', label: 'forecast AI investment in 2026' },
  { num: '10%', label: 'of HR leaders believe their teams are ready' },
]

const OFFERINGS = [
  { title: 'Training', desc: 'Upskill your people', to: '/ai-builder-program' },
  { title: 'Services', desc: 'We build your agentic workflows', to: '/ai' },
  { title: 'Talent', desc: 'Hire AI-native operators', to: '/ai' },
]

// B2B "old V3": the original momentum band — centered header, gradient stat band,
// offering chips, yellow CTAs.
export default function B2BMomentumV3Classic() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section className="b2bv3-section" ref={ref}>
      <div className="section-container">
        <div className="b2bv3c-header">
          <span className="b2bv3c-label">
            <span className="b2bv3c-dot" />
            Leland for Business
          </span>
          <h2 className="b2bv3c-heading">Make your workforce AI&#8209;native.</h2>
          <p className="b2bv3c-sub">
            We&rsquo;ve made a public commitment to retrain 100 million people on AI.
            Your team can be next &mdash; Leland trains your people, builds your AI
            infrastructure, and places AI-native operators in your organization.
          </p>
        </div>

        <div className="b2bv3c-offerings">
          {OFFERINGS.map((o) => (
            <Link to={o.to} className="b2bv3c-chip" key={o.title}>
              <span className="b2bv3c-chip-title">{o.title}</span>
              <span className="b2bv3c-chip-desc">{o.desc}</span>
              <span className="b2bv3c-chip-arrow"><ChevronRight /></span>
            </Link>
          ))}
        </div>

        <div className="b2bv3c-band">
          <div className="b2bv3c-counter">
            <span className="b2bv3c-counter-num">
              <NumberFlow value={inView ? TRAINED_COUNT : 0} locales="en-US" />
            </span>
            <span className="b2bv3c-counter-caption">
              people trained toward our 100,000,000 commitment
            </span>
          </div>
          <div className="b2bv3c-stats">
            {MARKET_STATS.map((s) => (
              <div className="b2bv3c-stat" key={s.num}>
                <span className="b2bv3c-stat-num">{s.num}</span>
                <span className="b2bv3c-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="b2bv3c-ctas">
          {/* Swap to <a href="https://leland.ai"> when the domain goes live */}
          <Link to="/ai" className="b2bv3c-cta-primary">Explore business solutions</Link>
          <Link to="/ai#cta" className="b2bv3c-cta-secondary">Book a strategy call</Link>
        </div>
      </div>
    </section>
  )
}
