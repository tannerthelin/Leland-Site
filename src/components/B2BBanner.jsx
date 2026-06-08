const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default function B2BBanner() {
  return (
    <section className="b2b-section">
      <div className="section-container">
        <div className="testimonials-header">
          <h2 className="testimonials-heading">Leland for Teams</h2>
        </div>
        <div className="b2b-grid">
          {/* Top row — two large cards */}
          <a href="#" className="b2b-card b2b-card-lg" style={{ background: 'var(--cream)' }}>
            <div className="b2b-card-lg-content">
              <h3 className="b2b-card-lg-title">Train your team</h3>
              <div className="b2b-card-lg-footer">
                <span className="b2b-card-lg-sub">Learn more</span>
                <ChevronRight />
              </div>
            </div>
          </a>

          <a href="#" className="b2b-card b2b-card-lg" style={{ background: 'var(--gray-dark)', color: 'var(--white)' }}>
            <div className="b2b-card-lg-content">
              <h3 className="b2b-card-lg-title" style={{ color: 'var(--white)' }}>Deploy AI in your company</h3>
              <div className="b2b-card-lg-footer">
                <span className="b2b-card-lg-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Learn more</span>
                <ChevronRight />
              </div>
            </div>
          </a>

          {/* Bottom row — three compact cards */}
          <a href="#" className="b2b-card b2b-card-sm">
            <span className="b2b-card-sm-label">Reach top talent</span>
            <ChevronRight />
          </a>

          <a href="#" className="b2b-card b2b-card-sm">
            <span className="b2b-card-sm-label">Transition employees</span>
            <ChevronRight />
          </a>

          <a href="#" className="b2b-card b2b-card-sm">
            <span className="b2b-card-sm-label">Advertising</span>
            <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  )
}
