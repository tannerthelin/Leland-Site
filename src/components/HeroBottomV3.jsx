import accentureLogo from '../assets/logos/org-logos/accenture.svg'
import atlassianLogo from '../assets/logos/org-logos/atlassian.svg'
import bainLogo from '../assets/logos/org-logos/bain.svg'
import bcgLogo from '../assets/logos/org-logos/bcg.svg'
import capitalOneLogo from '../assets/logos/org-logos/capital-one.svg'
import coinbaseLogo from '../assets/logos/org-logos/coinbase.svg'
import deloitteLogo from '../assets/logos/org-logos/deloitte.svg'
import eyLogo from '../assets/logos/org-logos/EY.svg'
import googleLogo from '../assets/logos/org-logos/google.svg'
import kearneyLogo from '../assets/logos/org-logos/Kearney.svg'
import lekLogo from '../assets/logos/org-logos/lek.svg'
import linkedinLogo from '../assets/logos/org-logos/linkedin.svg'
import mckinseyLogo from '../assets/logos/org-logos/McKinsey.svg'
import metaLogo from '../assets/logos/org-logos/meta.svg'
import salesforceLogo from '../assets/logos/org-logos/salesforce.svg'
import uberLogo from '../assets/logos/org-logos/uber.svg'
import yahooLogo from '../assets/logos/org-logos/yahoo.svg'

const ALL_LOGOS = [
  { src: accentureLogo, alt: 'Accenture', h: 18 },
  { src: atlassianLogo, alt: 'Atlassian', h: 16 },
  { src: bainLogo, alt: 'Bain', h: 14 },
  { src: bcgLogo, alt: 'BCG', h: 20 },
  { src: capitalOneLogo, alt: 'Capital One', h: 22 },
  { src: coinbaseLogo, alt: 'Coinbase', h: 17 },
  { src: deloitteLogo, alt: 'Deloitte', h: 16 },
  { src: eyLogo, alt: 'EY', h: 24 },
  { src: googleLogo, alt: 'Google', h: 20 },
  { src: kearneyLogo, alt: 'Kearney', h: 12 },
  { src: lekLogo, alt: 'LEK', h: 16 },
  { src: linkedinLogo, alt: 'LinkedIn', h: 18 },
  { src: mckinseyLogo, alt: 'McKinsey', h: 14 },
  { src: metaLogo, alt: 'Meta', h: 18 },
  { src: salesforceLogo, alt: 'Salesforce', h: 26 },
  { src: uberLogo, alt: 'Uber', h: 18 },
  { src: yahooLogo, alt: 'Yahoo', h: 20 },
]

export default function HeroBottomV3() {
  const doubled = [...ALL_LOGOS, ...ALL_LOGOS]

  return (
    <div className="hero-bottom-v3">
      <div className="hbv3-ticker">
        <div className="hbv3-ticker-track">
          {doubled.map((logo, i) => (
            <img key={i} src={logo.src} alt={logo.alt} className="hbv3-logo" style={{ height: logo.h }} />
          ))}
        </div>
      </div>

      <div className="hbv3-stats">
        <span className="hbv3-stats-number">
          <svg className="hbv3-star" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          29k+ reviews
        </span>
        <span className="hbv3-stats-label">Avg 4.99 · 509 last month</span>
      </div>
    </div>
  )
}
