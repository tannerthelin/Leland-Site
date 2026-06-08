import forbesLogo from '../assets/logos/press-logos/Forbes.svg'
import techcrunchLogo from '../assets/logos/press-logos/TechCrunch.svg'
import businessInsiderLogo from '../assets/logos/press-logos/Business-Insider.svg'
import protocolLogo from '../assets/logos/press-logos/Protocol.svg'

import linkedinLogo from '../assets/logos/linkedin.svg'
import googleLogo from '../assets/logos/google.svg'
import stanfordLogo from '../assets/logos/stanford.svg'
import harvardLogo from '../assets/logos/harvard.svg'
import mckinseyLogo from '../assets/logos/mckinsey.svg'
import bcgLogo from '../assets/logos/bcg.svg'
import goldmanSachsLogo from '../assets/logos/goldman-sachs.svg'
import appleLogo from '../assets/logos/apple.svg'
import tiktokLogo from '../assets/logos/tiktok.svg'
import doordashLogo from '../assets/logos/doordash.svg'
import atlassianLogo from '../assets/logos/atlassian.svg'

const COMPANY_LOGOS = [
  { src: linkedinLogo, alt: 'LinkedIn' },
  { src: googleLogo, alt: 'Google' },
  { src: stanfordLogo, alt: 'Stanford' },
  { src: harvardLogo, alt: 'Harvard' },
  { src: mckinseyLogo, alt: 'McKinsey' },
  { src: bcgLogo, alt: 'BCG' },
  { src: goldmanSachsLogo, alt: 'Goldman Sachs' },
  { src: appleLogo, alt: 'Apple' },
  { src: tiktokLogo, alt: 'TikTok' },
  { src: doordashLogo, alt: 'DoorDash' },
  { src: atlassianLogo, alt: 'Atlassian' },
]

export default function LogosBar({ heroVersion }) {
  if (heroVersion !== 'v1') {
    return null
  }

  return (
    <div className="logos-bar">
      <div className="section-container">
        <span className="logos-bar-label">Featured in:</span>
        <div className="logos-bar-items">
          <img src={forbesLogo} alt="Forbes" className="company-logo" />
          <img src={techcrunchLogo} alt="TechCrunch" className="company-logo" />
          <img src={businessInsiderLogo} alt="Business Insider" className="company-logo" />
          <img src={protocolLogo} alt="Protocol" className="company-logo" />
        </div>
      </div>
    </div>
  )
}
