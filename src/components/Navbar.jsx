import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import logoWhite from '../assets/logos/logo-white.svg'
import logoBlack from '../assets/logos/logo-black.svg'
import profilePic from '../assets/img/profile-photos/pic-15.png'

const NotificationsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ vectorEffect: 'non-scaling-stroke' }}>
    <path vectorEffect="non-scaling-stroke" d="M18 13.75L19.7071 15.4571C19.8946 15.6446 20 15.899 20 16.1642V17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V16.1642C4 15.899 4.10536 15.6446 4.29289 15.4571L6 13.75V9.5C6 7.9087 6.63214 6.38258 7.75736 5.25736C8.88258 4.13214 10.4087 3.5 12 3.5C13.5913 3.5 15.1174 4.13214 16.2426 5.25736C17.3679 6.38258 18 7.9087 18 9.5V13.75Z"/>
    <path vectorEffect="non-scaling-stroke" d="M9 18V18.25C9 19.0456 9.31607 19.8087 9.87868 20.3713C10.4413 20.9339 11.2044 21.25 12 21.25C12.7956 21.25 13.5587 20.9339 14.1213 20.3713C14.6839 19.8087 15 19.0456 15 18.25V18"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5882" strokeLinecap="round" strokeLinejoin="round">
    <path vectorEffect="non-scaling-stroke" d="M4.541 17.003C3.577 15.571 3 13.857 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C10.474 21 9.04 20.613 7.78 19.943C6.434 20.661 4.907 21.084 3.276 21.084C2.842 21.084 2.419 21.045 2 20.99C3.173 19.923 4.055 18.553 4.541 17.003Z"/>
  </svg>
)

const ChevronDown = () => (
  <svg className="nav-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
)

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6"/>
  </svg>
)

const UniversityIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M9.17916 3.3265L3.68495 4.45591C2.87401 4.62035 2.34992 5.41104 2.51436 6.22198C2.5705 6.49885 2.70378 6.7542 2.89881 6.95857L6.76035 11.0268C7.65389 11.9656 8.96773 12.3783 10.2376 12.1191L15.7318 10.9896C16.5427 10.8252 17.0668 10.0345 16.9024 9.22358C16.8462 8.94672 16.713 8.69136 16.5179 8.48699L12.6564 4.41876C11.7628 3.48 10.449 3.0673 9.17916 3.3265Z" vectorEffect="non-scaling-stroke"/>
    <path d="M16.8549 9.96496C16.8549 9.96496 16.0961 11.397 16.2034 12.4977C16.3107 13.5983 16.6867 14.02 16.6867 14.02" vectorEffect="non-scaling-stroke"/>
    <path d="M4.44287 8.57617L3.46939 11.6753C3.24358 12.3929 3.39207 13.1759 3.86494 13.7611L4.8269 14.9527C5.96493 16.3613 7.83714 16.9494 9.57624 16.4445L11.0468 16.017C11.7697 15.8078 12.3398 15.2505 12.5653 14.5325L13.5383 11.4346" vectorEffect="non-scaling-stroke"/>
    <path d="M15.9425 13.9471L16.9719 13.2202L19.1346 15.1908L17.0757 16.6445L15.9425 13.9471Z" vectorEffect="non-scaling-stroke"/>
  </svg>
)

const TeamsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M15.8333 17.0833H4.16667C3.24583 17.0833 2.5 16.3375 2.5 15.4167V7.91667C2.5 6.99583 3.24583 6.25 4.16667 6.25H15.8333C16.7542 6.25 17.5 6.99583 17.5 7.91667V15.4167C17.5 16.3375 16.7542 17.0833 15.8333 17.0833Z" vectorEffect="non-scaling-stroke"/>
    <path d="M13.4783 6.24935V4.58268C13.4783 3.66185 12.7325 2.91602 11.8117 2.91602H8.18833C7.2675 2.91602 6.52167 3.66185 6.52167 4.58268V6.24935" vectorEffect="non-scaling-stroke"/>
    <path d="M2.5 7.91602L7.7925 11.4085C8.065 11.5885 8.38417 11.6843 8.71083 11.6843H11.2892C11.6158 11.6843 11.935 11.5885 12.2075 11.4085L17.5 7.91602" vectorEffect="non-scaling-stroke"/>
  </svg>
)

const ORG_NAV_ITEMS = [
  { label: 'For universities', to: '/career-centers', icon: <UniversityIcon /> },
  { label: 'For teams',        to: '/organizations',  icon: <TeamsIcon /> },
]

function NavLinks({ loggedIn }) {
  const [orgOpen, setOrgOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOrgOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="nav-links">
      {loggedIn && <Link to="/" className="nav-link">Home</Link>}
      <a href="#" className="nav-link">
        Browse <ChevronDown />
      </a>
      {loggedIn ? (
        <>
          <a href="#" className="nav-link">Livestreams</a>
          <a href="#" className="nav-link">Programs</a>
          <a href="#" className="nav-link">Leland+</a>
        </>
      ) : (
        <>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          <Link to="/become-an-expert" className="nav-link">Become an expert</Link>
          <div className="nav-dropdown-wrapper" ref={wrapperRef}>
            <button className={`nav-link${orgOpen ? ' nav-link-active' : ''}`} onClick={() => setOrgOpen(o => !o)}>
              For organizations <ChevronDown />
            </button>
            <AnimatePresence>
              {orgOpen && (
                <motion.div
                  className="nav-dropdown"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {ORG_NAV_ITEMS.map(item => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="nav-dropdown-item"
                      onClick={() => setOrgOpen(false)}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                  <div className="nav-dropdown-divider" />
                  <a href="#" className="nav-dropdown-cta" onClick={() => setOrgOpen(false)}>
                    Talk to a team member
                    <ChevronRight />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </>
      )}
    </div>
  )
}

const SUB_NAV_ITEMS = [
  'Popular', 'General', 'AI', 'School Admissions', 'Test Prep',
  'Business', 'Finance & Accounting', 'Product', 'Technology',
  'Health & Medicine', 'Law & Public Service', 'Arts, Music & Design',
]

const SubNav = () => (
  <div className="sub-nav">
    <div className="sub-nav-track">
      {SUB_NAV_ITEMS.map((item) => (
        <a href="#" className="sub-nav-link" key={item}>{item}</a>
      ))}
    </div>
    <span className="sub-nav-fade" />
  </div>
)

const NavActions = ({ scrolled }) => (
  <div className="nav-actions">
    <Link to="/login" className={`nav-login${scrolled ? ' nav-login-dark' : ''}`}>Sign in</Link>
    <Link to="/login" className="nav-cta">Get started</Link>
  </div>
)

const HamburgerButton = ({ open, light, onClick }) => (
  <button
    className={`nav-hamburger${light ? ' nav-hamburger-light' : ''}`}
    onClick={onClick}
    aria-label="Menu"
    aria-expanded={open}
  >
    {open ? (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    ) : (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 6h18M3 12h18M3 18h18" />
      </svg>
    )}
  </button>
)

// Mobile dropdown with the links the narrow nav can't fit
const MobileMenu = ({ loggedIn, onClose }) => (
  <motion.div
    className="mobile-menu"
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.22, ease: 'easeOut' }}
  >
    <div className="mobile-menu-inner">
      {loggedIn && <Link to="/" className="mobile-menu-link" onClick={onClose}>Home</Link>}
      <a href="#" className="mobile-menu-link" onClick={onClose}>Browse</a>
      {loggedIn ? (
        <>
          <a href="#" className="mobile-menu-link" onClick={onClose}>Livestreams</a>
          <a href="#" className="mobile-menu-link" onClick={onClose}>Programs</a>
          <a href="#" className="mobile-menu-link" onClick={onClose}>Leland+</a>
        </>
      ) : (
        <>
          <Link to="/reviews" className="mobile-menu-link" onClick={onClose}>Reviews</Link>
          <Link to="/become-an-expert" className="mobile-menu-link" onClick={onClose}>Become an expert</Link>
          <Link to="/career-centers" className="mobile-menu-link" onClick={onClose}>For universities</Link>
          <Link to="/organizations" className="mobile-menu-link" onClick={onClose}>For teams</Link>
          <Link to="/login" className="mobile-menu-link" onClick={onClose}>Sign in</Link>
        </>
      )}
    </div>
  </motion.div>
)

const NavActionsLoggedIn = ({ scrolled }) => (
  <div className={`nav-actions nav-actions-logged-in${scrolled ? '' : ' nav-actions-light'}`}>
    <a href="#" className="nav-icon-btn" aria-label="Chat">
      <ChatIcon />
    </a>
    <a href="#" className="nav-icon-btn" aria-label="Notifications" style={{ marginRight: 6 }}>
      <NotificationsIcon />
    </a>
    <a href="#" className="nav-avatar" aria-label="Profile">
      <img src={profilePic} alt="" />
    </a>
  </div>
)

export default function Navbar({ bannerHeight = 0, variant = 'hero', showSubNav = false, subNavOnScroll = false, hideActions = false, loggedIn = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const threshold = variant === 'sticky' ? 10 : 200
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  const wrapperRef = useRef(null)
  const setNavHeight = useCallback((node) => {
    if (node) {
      wrapperRef.current = node
      node.style.setProperty('--nav-height', `${node.offsetHeight}px`)
    }
  }, [])

  if (variant === 'sticky' || variant === 'sticky-transparent') {
    const transparent = variant === 'sticky-transparent' && !scrolled
    return (
      <div ref={variant === 'sticky-transparent' ? setNavHeight : undefined} className={`nav-sticky-wrapper${scrolled ? ' nav-scrolled' : ''}${transparent ? ' nav-sticky-wrapper-transparent' : ''}`} style={{ position: 'sticky', top: 0 }}>
        <nav className={`nav nav-sticky${transparent ? ' nav-sticky-transparent' : ''}`}>
          <Link to="/" className="nav-logo">
            <img src={transparent ? logoWhite : logoBlack} alt="Leland" />
          </Link>
          <NavLinks loggedIn={loggedIn} />
          <div className="nav-right">
            <HamburgerButton open={mobileOpen} light={transparent} onClick={() => setMobileOpen(!mobileOpen)} />
            {!hideActions && (loggedIn ? <NavActionsLoggedIn scrolled={!transparent} /> : <NavActions scrolled={!transparent} />)}
          </div>
        </nav>
        <AnimatePresence>
          {mobileOpen && <MobileMenu loggedIn={loggedIn} onClose={() => setMobileOpen(false)} />}
        </AnimatePresence>
        {showSubNav && (!subNavOnScroll ? (
          <SubNav />
        ) : (
          <AnimatePresence>
            {scrolled && (
              <motion.div
                className="sub-nav-clip"
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0, transition: { duration: 0.15, ease: 'easeIn' } }}
                transition={{ duration: 0.2, ease: 'easeOut', delay: 0.2 }}
                style={{ overflow: 'hidden' }}
              >
                <SubNav />
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
    )
  }

  return (
    <>
      {/* Hero nav — scrolls with page */}
      <nav className="nav nav-hero" style={{ top: bannerHeight }}>
        <a href="#" className="nav-logo">
          <img src={logoWhite} alt="Leland" />
        </a>
        {loggedIn ? <NavActionsLoggedIn scrolled={false} /> : <NavActions scrolled={false} />}
      </nav>

      {/* Sticky nav — slides down when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <div className="nav-sticky-wrapper">
            <motion.nav
              className="nav nav-sticky"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%', transition: { duration: 0.15, ease: 'easeIn', delay: 0.1 } }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <a href="#" className="nav-logo">
                <img src={logoBlack} alt="Leland" />
              </a>
              <NavLinks loggedIn={loggedIn} />
              {loggedIn ? <NavActionsLoggedIn scrolled /> : <NavActions scrolled />}
            </motion.nav>
            <motion.div
              className="sub-nav-clip"
              initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
              animate={{ boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              exit={{ boxShadow: '0 0 0 rgba(0,0,0,0)', transition: { duration: 0.1 } }}
              transition={{ duration: 0.2, delay: 0.475 }}
            >
              <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%', transition: { duration: 0.1, ease: 'easeIn' } }}
                transition={{ duration: 0.25, ease: 'easeOut', delay: 0.225 }}
              >
                <SubNav />
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
