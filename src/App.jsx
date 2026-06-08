import { useState, useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import GoalsSection from './components/GoalsSection'
import ExpertsSection from './components/ExpertsSection'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection'
import AdminPanel from './components/AdminPanel'
import PlatformSection from './components/PlatformSection'
import B2BBanner from './components/B2BBanner'
import PreFooterCTA from './components/PreFooterCTA'
import Footer from './components/Footer'
import BecomeAnExpert from './pages/BecomeAnExpert'
import Reviews from './pages/Reviews'
import Careers from './pages/Careers'
import Login from './pages/Login'
import AIBuilderProgram from './pages/AIBuilderProgram'
import './App.css'

function Placeholder({ title }) {
  return (
    <section className="placeholder-section">
      <div className="section-container">
        <h2 className="placeholder-title">{title}</h2>
        <div className="placeholder-grid">
          <div className="placeholder-block" />
          <div className="placeholder-block" />
          <div className="placeholder-block" />
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  const bannerRef = useRef(null)
  const [bannerHeight, setBannerHeight] = useState(0)
  const [featureFlags, setFeatureFlags] = useState({
    experts: false,
    banner: true,
    loggedIn: false,
    heroVersion: 'v2',
  })

  const handleToggle = (key, value) => {
    setFeatureFlags((prev) => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key],
    }))
  }

  const adminFlags = [
    { key: 'banner', label: 'Announcement Banner', enabled: featureFlags.banner },
    { key: 'experts', label: 'Popular Experts', enabled: featureFlags.experts },
    { key: 'loggedIn', label: 'Logged In', enabled: featureFlags.loggedIn },
    { key: 'heroVersion', label: 'Hero Version', type: 'tabs', options: ['V1', 'V2', 'V3'], value: featureFlags.heroVersion },
  ]

  useEffect(() => {
    if (featureFlags.banner && bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight)
    } else {
      setBannerHeight(0)
    }
  }, [featureFlags.banner])

  return (
    <>
      {featureFlags.banner && (
        <div ref={bannerRef}>
          <Banner onClose={() => setFeatureFlags((prev) => ({ ...prev, banner: false }))} />
        </div>
      )}
      <Navbar variant="sticky-transparent" showSubNav subNavOnScroll loggedIn={featureFlags.loggedIn} />
      <Hero heroVersion={featureFlags.heroVersion} />
      <LogosBar heroVersion={featureFlags.heroVersion} />
      <GoalsSection />
      <AnimatePresence>
        {featureFlags.experts && (
          <motion.div
            key="experts"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ExpertsSection />
          </motion.div>
        )}
      </AnimatePresence>
      <HowItWorksSection />
      <B2BBanner />
      <TestimonialsSection />
      {!featureFlags.loggedIn && <PreFooterCTA />}
      <Footer />
      <AdminPanel flags={adminFlags} onToggle={handleToggle} />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/become-an-expert" element={<BecomeAnExpert />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ai-builder-program" element={<AIBuilderProgram />} />
    </Routes>
    </>
  )
}

export default App
