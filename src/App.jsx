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
import Footer from './components/Footer'
import BecomeAnExpert from './pages/BecomeAnExpert'
import Reviews from './pages/Reviews'
import Careers from './pages/Careers'
import Login from './pages/Login'
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
    experts: true,
    banner: true,
    loggedIn: false,
  })

  const handleToggle = (key) => {
    setFeatureFlags((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const adminFlags = [
    { key: 'banner', label: 'Announcement Banner', enabled: featureFlags.banner },
    { key: 'experts', label: 'Popular Experts', enabled: featureFlags.experts },
    { key: 'loggedIn', label: 'Logged In Navbar', enabled: featureFlags.loggedIn },
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
      <Hero />
      <LogosBar />
      <GoalsSection />
      <PlatformSection />
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
      <TestimonialsSection />
      <B2BBanner />
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
    </Routes>
    </>
  )
}

export default App
