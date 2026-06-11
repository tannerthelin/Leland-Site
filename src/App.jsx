import { useState, useRef, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogosBar from './components/LogosBar'
import NarrativeSection from './components/NarrativeSection'
import GoalsSection from './components/GoalsSection'
import ExpertsSection from './components/ExpertsSection'
import ImageRevealSection from './components/ImageRevealSection'
import HowItWorksSection from './components/HowItWorksSection'
import HowItWorksTabs from './components/HowItWorksTabs'
import TestimonialsSection from './components/TestimonialsSection'
import AdminPanel from './components/AdminPanel'
import PlatformSection from './components/PlatformSection'
import B2BBanner from './components/B2BBanner'
import B2BLedgerV2 from './components/B2BLedgerV2'
import B2BLedgerV2Classic from './components/B2BLedgerV2Classic'
import B2BMomentumV3 from './components/B2BMomentumV3'
import B2BMomentumV3Classic from './components/B2BMomentumV3Classic'
import PreFooterCTA from './components/PreFooterCTA'
import Footer from './components/Footer'
import BecomeAnExpert from './pages/BecomeAnExpert'
import Reviews from './pages/Reviews'
import Careers from './pages/Careers'
import Login from './pages/Login'
import AIBuilderProgram from './pages/AIBuilderProgram'
import AI from './pages/AI'
import PressRelease from './pages/PressRelease'
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
    heroVersion: 'v1',
    hiwVersion: 'tabs',
    pathwayStyle: 'image',
    buildAiImg: '3',
    b2bHatch: 'strip',
    narrative: true,
    b2bVersion: 'v2',
    emphasisStyle: 'line',
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
    { key: 'hiwVersion', label: 'How It Works', type: 'tabs', options: ['Scroll', 'Tabs'], value: featureFlags.hiwVersion },
    { key: 'pathwayStyle', label: 'Pathway Cards', type: 'tabs', options: ['Classic', 'Image'], value: featureFlags.pathwayStyle },
    { key: 'buildAiImg', label: 'Build AI Image', type: 'tabs', options: ['1', '2', '3', '4', '5'], value: featureFlags.buildAiImg },
    { key: 'b2bHatch', label: 'B2B Hatch', type: 'tabs', options: ['None', 'Strip', 'Label', 'Intro'], value: featureFlags.b2bHatch },
    { key: 'narrative', label: 'Narrative Statement', enabled: featureFlags.narrative },
    { key: 'emphasisStyle', label: '"Fast" Emphasis', type: 'tabs', options: ['None', 'Line', 'Color', 'Highlight'], value: featureFlags.emphasisStyle },
    { key: 'b2bVersion', label: 'B2B Section', type: 'tabs', options: ['Current', 'V2', 'V2+', 'V3', 'V3+'], value: featureFlags.b2bVersion },
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
      {featureFlags.narrative && <NarrativeSection emphasisStyle={featureFlags.emphasisStyle} />}
      <GoalsSection pathwayStyle={featureFlags.pathwayStyle} buildAiImg={featureFlags.buildAiImg} b2bHatch={featureFlags.b2bHatch} />
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
      <ImageRevealSection />
      {featureFlags.hiwVersion === 'scroll' ? <HowItWorksSection /> : <HowItWorksTabs />}
      <TestimonialsSection />
      {featureFlags.b2bVersion === 'v2' ? <B2BLedgerV2Classic />
        : featureFlags.b2bVersion === 'v2+' ? <B2BLedgerV2 />
        : featureFlags.b2bVersion === 'v3' ? <B2BMomentumV3Classic />
        : featureFlags.b2bVersion === 'v3+' ? <B2BMomentumV3 />
        : <B2BBanner />}
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
      <Route path="/ai" element={<AI />} />
      <Route path="/blog/leland-relaunch" element={<PressRelease />} />
    </Routes>
    </>
  )
}

export default App
