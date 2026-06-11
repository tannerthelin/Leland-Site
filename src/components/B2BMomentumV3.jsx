import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'motion/react'
import NumberFlow from '@number-flow/react'

// TODO(live data): wire to the public retraining counter when the API ships.
const TRAINED_COUNT = 97412

const MARKET_STATS = [
  { num: '~1B', label: 'people need AI upskilling in the next 4 years' },
  { num: '$2.5T', label: 'forecast AI investment in 2026' },
  { num: '10%', label: 'of HR leaders believe their teams are ready' },
]

// B2B variant 3: momentum card — one composed surface, narrative → proof → action.
export default function B2BMomentumV3() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section className="b2bv3-section" ref={ref}>
      <div className="section-container">
        <div className="b2bv3-card">
          {/* Light zone: editorial header + live counter + market stats */}
          <div className="b2bv3-body">
            <div className="b2bv3-header">
              <div className="b2bv3-header-main">
                <span className="b2bv3-label">
                  <span className="b2bv3-dot" />
                  Leland for Business
                </span>
                <h2 className="b2bv3-heading">Make your workforce AI&#8209;native.</h2>
              </div>
              <p className="b2bv3-sub">
                We&rsquo;ve made a public commitment to retrain 100 million people on AI.
                Your team can be next &mdash; Leland trains your people, builds your AI
                infrastructure, and places AI-native operators in your organization.
              </p>
            </div>

            <div className="b2bv3-counter">
              <span className="b2bv3-counter-num">
                <NumberFlow value={inView ? TRAINED_COUNT : 0} locales="en-US" />
              </span>
              <span className="b2bv3-counter-caption">
                people trained toward our 100,000,000 commitment
              </span>
            </div>

            <div className="b2bv3-stats">
              {MARKET_STATS.map((s) => (
                <div className="b2bv3-stat" key={s.num}>
                  <span className="b2bv3-stat-num">{s.num}</span>
                  <span className="b2bv3-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dark zone: leland.ai sub-brand footer, fused to the card */}
          <div className="b2bv3-foot">
            <div className="b2bv3-foot-text">
              <span className="b2bv3-foot-wordmark">
                leland<span className="b2bv3-foot-wordmark-ai">.ai</span>
              </span>
              <p className="b2bv3-foot-sub">
                Training to upskill your people, services to build your agentic workflows,
                and AI-native operators ready to join your team.
              </p>
            </div>
            <div className="b2bv3-foot-ctas">
              {/* Swap to <a href="https://leland.ai"> when the domain goes live */}
              <Link to="/ai" className="b2bv3-foot-primary">Explore business solutions</Link>
              <Link to="/ai#cta" className="b2bv3-foot-secondary">Book a strategy call</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
