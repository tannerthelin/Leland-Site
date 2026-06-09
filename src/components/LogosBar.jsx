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

const COMPANY_LOGOS = [
  { src: accentureLogo, alt: 'Accenture', h: 20 },
  { src: atlassianLogo, alt: 'Atlassian', h: 15 },
  { src: bainLogo, alt: 'Bain', h: 16 },
  { src: bcgLogo, alt: 'BCG' },
  { src: capitalOneLogo, alt: 'Capital One', h: 24 },
  { src: coinbaseLogo, alt: 'Coinbase' },
  { src: deloitteLogo, alt: 'Deloitte' },
  { src: eyLogo, alt: 'EY', h: 24 },
  { src: googleLogo, alt: 'Google', h: 20 },
  { src: kearneyLogo, alt: 'Kearney', h: 14 },
  { src: lekLogo, alt: 'LEK' },
  { src: linkedinLogo, alt: 'LinkedIn' },
  { src: mckinseyLogo, alt: 'McKinsey', h: 17 },
  { src: metaLogo, alt: 'Meta' },
  { src: salesforceLogo, alt: 'Salesforce', h: 26 },
  { src: uberLogo, alt: 'Uber' },
  { src: yahooLogo, alt: 'Yahoo' },
]

export default function LogosBar({ heroVersion }) {
  if (heroVersion !== 'v1') {
    return null
  }

  const doubled = [...COMPANY_LOGOS, ...COMPANY_LOGOS]

  return (
    <div className="logos-bar">
      <div className="hbs-logos-row">
        <span className="hbs-logos-label logos-bar-label-v1">Join people from</span>
        <div className="hbs-logos-ticker">
          <div className="hbs-logos-track">
            {doubled.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} className="hbs-logo" style={logo.h ? { height: logo.h } : undefined} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
