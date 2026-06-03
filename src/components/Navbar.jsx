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

const NavLinks = ({ loggedIn }) => (
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
        <a href="#" className="nav-link">
          For organizations <ChevronDown />
        </a>
      </>
    )}
  </div>
)

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
          {!hideActions && (loggedIn ? <NavActionsLoggedIn scrolled={!transparent} /> : <NavActions scrolled={!transparent} />)}
        </nav>
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
