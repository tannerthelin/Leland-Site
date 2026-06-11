import { Link } from 'react-router-dom'

const ArrowRight = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const OFFERINGS = [
  {
    num: '01',
    title: 'Training',
    tagline: 'Upskill your people',
    desc: 'The AI Builder Program teaches your team to ship real agents and workflows. Graduates routinely 5–20x their impact.',
    to: '/ai-builder-program',
  },
  {
    num: '02',
    title: 'Services',
    tagline: 'Build your AI infrastructure',
    desc: 'We scope, build, and run agentic workflows and AI-native systems inside your business.',
    to: '/ai',
  },
  {
    num: '03',
    title: 'Talent',
    tagline: 'Hire AI-native operators',
    desc: 'Proven builders, assessed on real work, ready to join your team full-time.',
    to: '/ai',
  },
]

// B2B "old V2": the original editorial ledger with serif numerals (pre-illustrations).
export default function B2BLedgerV2Classic() {
  return (
    <section className="b2bv2-section">
      <div className="section-container">
        <div className="b2bv2-header">
          <div className="b2bv2-header-left">
            <span className="b2bv2-label">
              <span className="b2bv2-dot" />
              Leland for Business
            </span>
            <h2 className="b2bv2-heading">Make your organization AI&#8209;native.</h2>
          </div>
          <p className="b2bv2-sub">
            Only 10% of HR and L&amp;D leaders believe their teams have the AI
            skills they need. Leland closes that gap &mdash; training your people,
            building your workflows, and placing AI-native operators on your team.
          </p>
        </div>

        <div className="b2bv2-rows">
          {OFFERINGS.map((o) => (
            <Link to={o.to} className="b2bv2-row b2bv2-row-nums" key={o.num}>
              <span className="b2bv2-row-num">{o.num}</span>
              <span className="b2bv2-row-title">{o.title}</span>
              <span className="b2bv2-row-body">
                <span className="b2bv2-row-tagline">{o.tagline}</span>
                <span className="b2bv2-row-desc">{o.desc}</span>
              </span>
              <span className="b2bv2-row-arrow"><ArrowRight /></span>
            </Link>
          ))}
        </div>

        <div className="b2bv2-footer">
          <div className="b2bv2-ctas">
            {/* Swap to <a href="https://leland.ai"> when the domain goes live */}
            <Link to="/ai" className="b2bv2-cta-primary">Explore business solutions</Link>
            <Link to="/ai#cta" className="b2bv2-cta-secondary">Book a strategy call</Link>
          </div>
          <p className="b2bv2-proof">
            500+ trained AI experts &middot; Trusted by teams at Google, JP&nbsp;Morgan, and Bain
          </p>
        </div>
      </div>
    </section>
  )
}
