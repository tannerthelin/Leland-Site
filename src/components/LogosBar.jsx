import forbesLogo from '../assets/logos/press-logos/Forbes.svg'
import techcrunchLogo from '../assets/logos/press-logos/TechCrunch.svg'
import businessInsiderLogo from '../assets/logos/press-logos/Business-Insider.svg'
import protocolLogo from '../assets/logos/press-logos/Protocol.svg'

export default function LogosBar() {
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
