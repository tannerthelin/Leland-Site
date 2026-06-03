import googleLogo from '../assets/logos/google.svg'
import linkedinLogo from '../assets/logos/linkedin.svg'
import mckinseyLogo from '../assets/logos/mckinsey.svg'
import bcgLogo from '../assets/logos/bcg.svg'
import appleLogo from '../assets/logos/apple.svg'
import placeholderImg from '../assets/img/placeholder-images/placeholder.png'
import './PlatformSection.css'

const TICKER_LOGOS = [
  { src: googleLogo, alt: 'Google' },
  { src: mckinseyLogo, alt: 'McKinsey & Company' },
  { src: linkedinLogo, alt: 'LinkedIn' },
  { src: bcgLogo, alt: 'BCG' },
  { src: appleLogo, alt: 'Apple' },
]

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function PlatformSection() {
  return (
    <section className="platform-section">
      <div className="section-container">
        <div className="platform-grid">
          <div className="platform-panels">
            <div className="platform-panel platform-panel--photo">
              <img src={placeholderImg} alt="" className="platform-panel-img" />
            </div>
            <div className="platform-panel platform-panel--blue">
              <div className="platform-rating">
                <div className="platform-rating-stars">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                </div>
                <span className="platform-rating-score">4.9</span>
                <span className="platform-rating-label">Average rating</span>
                <span className="platform-rating-count">20,000+ reviews</span>
              </div>
            </div>
            <div className="platform-panel platform-panel--cream">
              <div className="platform-ticker-content">
                <p className="platform-ticker-label">Get into places like</p>
                <div className="platform-ticker">
                  <div className="platform-ticker-track">
                    {[...TICKER_LOGOS, ...TICKER_LOGOS].map((logo, i) => (
                      <img
                        key={`${logo.alt}-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        className="platform-ticker-logo"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="platform-info">
            <p className="platform-description">
              Leland connects ambitious people with world-class experts to help them reach their biggest goals.
            </p>
            <a href="#" className="platform-cta">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  )
}
