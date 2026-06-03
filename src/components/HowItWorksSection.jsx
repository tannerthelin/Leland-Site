import imgRecruiter from '../assets/img/how-it-works/3e0a0090e0bff6853078b807136188552aed1194-550x440.svg'
import imgLandscape from '../assets/img/how-it-works/2f8b882dd8af720f1cabce9d125ca543b0ab4725-1228x1334.webp'
import imgLivestreams from '../assets/img/placeholder-images/Hims_Homepage_Better_Sex_Default_240-3.webp'
import imgLibrary from '../assets/img/placeholder-images/Hims_Homepage_Regrow_Hair_Default_480-2.webp'
import imgAI from '../assets/img/placeholder-images/Hims_Homepage_Labs_Default_480.webp'

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default function HowItWorksSection() {
  return (
    <section className="hiw-section">
      <div className="section-container">
        <div className="hiw-grid">
          {/* Top row — two large cards */}
          <a href="#" className="hiw-card hiw-card-lg" style={{ background: 'var(--cream)' }}>
            <div className="hiw-card-lg-content">
              <h3 className="hiw-card-lg-title">Work 1&#8209;on&#8209;1 with an expert</h3>
              <div className="hiw-card-lg-footer">
                <span className="hiw-card-lg-sub">Find your perfect coach</span>
                <ChevronRight />
              </div>
            </div>
            <div className="hiw-card-lg-img">
              <img src={imgRecruiter} alt="" />
            </div>
          </a>

          <a href="#" className="hiw-card hiw-card-lg hiw-card-lg-dark" style={{ backgroundImage: `url(${imgLandscape})` }}>
            <div className="hiw-card-lg-content">
              <h3 className="hiw-card-lg-title">Work together in a group setting</h3>
              <div className="hiw-card-lg-footer">
                <span className="hiw-card-lg-sub">Browse programs &amp; bootcamps</span>
                <ChevronRight />
              </div>
            </div>
          </a>

          {/* Bottom row — three compact cards */}
          <a href="#" className="hiw-card hiw-card-sm">
            <span className="hiw-card-sm-label">Free livestreams</span>
            <img src={imgLivestreams} alt="" className="hiw-card-sm-img" />
            <ChevronRight />
          </a>

          <a href="#" className="hiw-card hiw-card-sm">
            <span className="hiw-card-sm-label">Content Library</span>
            <img src={imgLibrary} alt="" className="hiw-card-sm-img" />
            <ChevronRight />
          </a>

          <a href="#" className="hiw-card hiw-card-sm">
            <span className="hiw-card-sm-label">Level up with AI</span>
            <img src={imgAI} alt="" className="hiw-card-sm-img" />
            <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  )
}
