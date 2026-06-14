import { useState, useEffect, useRef } from 'react'
import useTickerDrag from '../hooks/useTickerDrag'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from '../components/Navbar'
import ExpertsSection from '../components/ExpertsSection'
import heroBg from '../assets/img/become-an-expert-bg.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'
import pic09 from '../assets/img/profile-photos/pic-09.png'
import pic10 from '../assets/img/profile-photos/pic-10.png'
import pic11 from '../assets/img/profile-photos/pic-11.png'
import pic12 from '../assets/img/profile-photos/pic-12.png'
import pic13 from '../assets/img/profile-photos/pic-13.png'
import pic14 from '../assets/img/profile-photos/pic-14.png'
import googleLogo from '../assets/logos/google.svg'
import bcgLogo from '../assets/logos/bcg.svg'
import linkedinLogo from '../assets/logos/linkedin.svg'
import mckinseyLogo from '../assets/logos/mckinsey.svg'
import stanfordLogo from '../assets/logos/stanford-wordmark.svg'
import goldmanLogo from '../assets/logos/goldman-sachs.svg'
import spotifyLogo from '../assets/logos/spotify.svg'
import nikeLogo from '../assets/logos/nike.svg'
import openaiLogo from '../assets/logos/openai.svg'
import iconScheduling from '../assets/icons/product-illustrations/scheduling.svg'
import iconPayments from '../assets/icons/product-illustrations/payments.svg'
import iconVideoCalls from '../assets/icons/product-illustrations/video-calls.svg'
import iconAnalytics from '../assets/icons/product-illustrations/analytics.svg'
import iconSessionNotes from '../assets/icons/product-illustrations/session-notes.svg'
import iconProfilePage from '../assets/icons/product-illustrations/profile-page.svg'
import iconClientAcquisition from '../assets/icons/product-illustrations/client-acquisition.svg'
import iconDigitalProducts from '../assets/icons/product-illustrations/digital-products.svg'
import iconGroupSessions from '../assets/icons/product-illustrations/group-sessions.svg'
import iconReviews from '../assets/icons/product-illustrations/reviews.svg'
import iconMessaging from '../assets/icons/product-illustrations/message.svg'
import iconGoalTracking from '../assets/icons/product-illustrations/goal-tracking.svg'
import coach2 from '../assets/img/coach-testimonials/coach-2.jpg'
import coach5 from '../assets/img/coach-testimonials/coach-5.jpg'
import coach1 from '../assets/img/coach-testimonials/coach-1.jpg'
import coach7 from '../assets/img/coach-testimonials/coach-7.jpg'
import coach8 from '../assets/img/coach-testimonials/coach-8.jpg'
import coach4 from '../assets/img/coach-testimonials/coach-4.jpg'
import phoneMockup from '../assets/img/coach-testimonials/phone-mockup.png'
import hiwApplication from '../assets/img/how-it-works/Application.png'
import hiwProfile from '../assets/img/how-it-works/Profile setup.png'
import hiwSearch from '../assets/img/how-it-works/Search Results.png'
import bg1 from '../assets/img/background-textures/bg-1.png'
import bg2 from '../assets/img/background-textures/bg-2.png'
import coachImg from '../assets/img/become-an-expert-coach.png'
import Footer from '../components/Footer'
import PreFooterCTA from '../components/PreFooterCTA'
import './BecomeAnExpert.css'

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
}

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const WHO_BELONGS = [
  {
    emoji: '🎓',
    title: 'Former Admissions Officers',
    desc: "You've reviewed thousands of applications. You know what makes one unforgettable.",
  },
  {
    emoji: '🚀',
    title: 'Entrepreneurs & Founders',
    desc: "You've built and scaled companies. Share the hard lessons you wish you'd had sooner.",
  },
  {
    emoji: '🤖',
    title: 'AI & Tech Experts',
    desc: 'From prompt engineering to full AI automation. The world is hungry for practical AI expertise.',
  },
  {
    emoji: '💼',
    title: 'Specialists in Any Field',
    desc: "If you've mastered your corner of the world and people come to you for advice, Leland is for you.",
  },
]

const CATEGORIES = [
  'Build with AI', 'MBA', 'Management Consulting', 'Product Management',
  'Career Coaching', 'Private Equity', 'Investment Banking', 'Law School',
  "Master's Programs", 'Medical School', 'GRE', 'LSAT', 'GMAT', 'College',
]

const FAQ_ITEMS = [
  {
    q: 'Who can become an expert on Leland?',
    a: 'Anyone with relevant professional experience and expertise. We look for experts who have a track record of success in their field and a passion for helping others.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Profile creation takes about 10-15 minutes, and most experts are approved and onboarded within a few days. After approval, you walk through a quick async module with training videos.',
  },
  {
    q: 'How much can I earn on Leland?',
    a: 'You set your own rates and earn through 1-on-1 sessions, livestreams, and individual content. What you earn scales with your offerings and availability.',
  },
  {
    q: 'Is there a cost to join?',
    a: "No. There's no upfront cost to become an expert. Leland takes a platform fee from each transaction to cover the tools, support, and client acquisition we provide.",
  },
  {
    q: "What's the time commitment?",
    a: "There's no minimum commitment required — many of our experts work alongside a full-time career. You set your own schedule, and sessions book around the slots you open. Take on as many or as few clients as you want, starting with just a few hours a week.",
  },
  {
    q: 'Does Leland give me materials and resources?',
    a: 'You decide your own style, materials, and how you engage with clients. Leland provides the platform, an onboarding module, a resource library of best practices, and AI tools to help you grow.',
  },
]

const FEATURES = [
  { icon: iconClientAcquisition, title: 'Get leads', desc: 'Plug into a vibrant ecosystem of potential customers.' },
  { icon: iconPayments, title: 'Payments', desc: 'Get paid automatically after every session. We handle invoicing and payouts.' },
  { icon: iconScheduling, title: 'Scheduling', desc: 'Let customers book time with you directly. No back-and-forth emails.' },
  { icon: iconMessaging, title: 'Messaging', desc: 'Chat with customers between sessions to answer quick questions.' },
  { icon: iconAnalytics, title: 'Analytics', desc: 'Track your earnings, session history, and customer engagement over time.' },
  { icon: iconProfilePage, title: 'Profile Page', desc: 'A dedicated page that showcases your expertise and helps customers find you.' },
  { icon: iconReviews, title: 'Reviews', desc: 'Build social proof with verified reviews from your customers.' },
  { icon: iconGoalTracking, title: 'Packages', desc: 'Package your expertise into the offerings that best monetize your business.' },
  { icon: iconDigitalProducts, title: 'Content Library', desc: 'Sell guides, templates, and recorded content.' },
  { icon: iconGroupSessions, title: 'Livestreams', desc: 'Run live events to demonstrate your expertise and attract new customers.' },
  { icon: iconVideoCalls, title: 'Video Calls', desc: 'Built-in video conferencing so you can work from anywhere.' },
  { icon: iconSessionNotes, title: 'Session Notes', desc: 'AI-generated summaries of sessions, so you never lose context between meetings.' },
]

const TESTIMONIALS = [
  {
    img: pic09,
    name: 'Sarah Chen',
    role: 'MBA Admissions Coach',
    bg: '#E8D5F5',
    quote: "Leland gave me the platform to turn my admissions experience into a real business. I went from helping friends for free to coaching dozens of candidates — and earning real income doing it.",
  },
  {
    img: pic10,
    name: 'Marcus Johnson',
    role: 'Career Coach',
    bg: '#FFD6E0',
    quote: "I was skeptical at first, but the client acquisition alone is worth it. I don't have to market myself — Leland brings the clients to me and I just focus on what I do best: coaching.",
  },
  {
    img: pic11,
    name: 'Priya Patel',
    role: 'GMAT Prep Expert',
    bg: '#D5E8D4',
    quote: "The tools are incredible. Scheduling, payments, session notes — everything just works. I went from juggling spreadsheets and Venmo to having a fully professional setup overnight.",
  },
  {
    img: pic12,
    name: 'David Kim',
    role: 'Executive Coach',
    bg: '#D4E5F7',
    quote: "What surprised me most was the community. Other coaches share strategies, celebrate wins, and genuinely want to help each other succeed. It's unlike any other platform I've tried.",
  },
]

const SOCIAL_PROOF_ITEMS = [
  {
    type: 'wide',
    bg: '#E8D5F5',
    headline: "Join experts across hundreds of categories and industries",
    img: coach1,
  },
  {
    type: 'video',
    src: 'https://design.joinleland.com/video/testimonials/Andrew%20C%20-%20Career%20Coach%20on%20Leland.mp4',
    name: 'Andrew C.',
    role: 'Career Expert',
  },
  {
    type: 'quote-long',
    bg: 'rgba(34, 34, 34, 0.05)',
    quote: "When I started on Leland two years ago I saw it simply as an opportunity to make a little bit of extra cash. What I got instead was a second income stream that was more significant than I could have imagined, a reminder of why I got into this work in the first place, and an incredible professional network that has significantly changed the way I'm planning for the next steps in my career.",
    name: 'Krysta F.',
    role: 'Medical & Graduate School Expert',
    avatar: 'https://design.joinleland.com/coach_images/Krysta%20F.png',
  },
  {
    type: 'video',
    src: 'https://design.joinleland.com/video/testimonials/Joy%20P%20-%20Admissions%20Coach.mp4',
    name: 'Joy P.',
    role: 'Admissions Expert',
  },
  {
    type: 'split',
    top: { img: coach4 },
    bottom: { bg: 'rgba(34, 34, 34, 0.05)', stat: '4.9', suffix: '★', label: 'Average coach rating' },
  },
  {
    type: 'wide',
    bg: '#FFD6E0',
    quote: "Leland encourages experts to focus on delivering results rather than marketing themselves.",
    img: coach8,
  },
  {
    type: 'video',
    src: 'https://design.joinleland.com/video/testimonials/Eric%20Z%20-%20Management%20Consulting%20Coach.mp4',
    name: 'Eric Z.',
    role: 'Management Consulting Expert',
  },
  {
    type: 'split',
    top: { type: 'quote', bg: 'rgba(34, 34, 34, 0.05)', quote: "Leland is one of the few platforms that has earned my complete trust.", name: 'Saad A.', role: 'GRE Expert', avatar: 'https://design.joinleland.com/coach_images/Saad%20A.png' },
    bottom: {
      type: 'press',
      bg: 'rgba(34, 34, 34, 0.05)',
      quote: "I've learned how to build a multi-six-figure business betting on myself.",
      name: 'Ben L.',
      role: 'MBA Coach & AI Expert',
      avatar: 'https://design.joinleland.com/coach_images/Ben%20L.png',
    },
  },
  {
    type: 'thin',
    bg: 'rgba(34, 34, 34, 0.05)',
    img: phoneMockup,
    imgOnly: true,
  },
  {
    type: 'video',
    src: 'https://design.joinleland.com/video/testimonials/Machmud%20M%20-%20Law%20School%20Coach.mp4',
    name: 'Machmud M.',
    role: 'Law School Expert',
  },
]

const VISIBLE_FEATURE_ROWS = 3
const FEATURES_PER_ROW = 3
const INITIAL_VISIBLE = VISIBLE_FEATURE_ROWS * FEATURES_PER_ROW

const HOW_IT_WORKS = [
  { step: '1', bold: 'Submit a short application', rest: ' telling us about your background and expertise.', color: 'var(--blue)', img: hiwApplication },
  { step: '2', bold: 'Build your expert profile', rest: ', set your pricing, and define your availability.', color: '#F3F1E6', img: hiwProfile },
  { step: '3', bold: 'Clients discover you', rest: ' through Leland and book sessions directly.', color: '#9F5B34', img: hiwSearch },
]

function FeatureCard({ icon, title, desc, link }) {
  return (
    <div className="bae-feature-card">
      <img src={icon} alt="" className="bae-feature-icon" />
      <h3 className="bae-feature-card-title">{title}</h3>
      <p className="bae-feature-card-desc">{desc} {link && <a href="#" className="text-link">Learn more</a>}</p>
    </div>
  )
}

function TestimonialCard({ testimonial, isActive, onClick }) {
  return (
    <div
      className={`bae-testi-card${isActive ? ' bae-testi-card-active' : ''}`}
      onClick={onClick}
    >
      <div className="bae-testi-card-inner">
        <div className="bae-testi-photo-wrap">
          <div className="bae-testi-photo-bg" style={{ background: testimonial.bg }} />
          <img src={testimonial.img} alt={testimonial.name} className="bae-testi-photo" />
        </div>
        <div className="bae-testi-quote-panel">
          <div className="bae-testi-quote-content">
            <p className="bae-testi-quote">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="bae-testi-attribution">
              <span className="bae-testi-name">{testimonial.name}</span>
              <span className="bae-testi-role">{testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bae-testi-label">
        <span className="bae-testi-label-name">{testimonial.name}</span>
        <span className="bae-testi-label-role">{testimonial.role}</span>
      </div>
    </div>
  )
}

function SocialProofTicker() {
  const items = [...SOCIAL_PROOF_ITEMS, ...SOCIAL_PROOF_ITEMS]
  const [activeVideo, setActiveVideo] = useState(null)
  const { tickerRef, trackRef, drag, handlers, pause, resume, scrollBy } = useTickerDrag(75)

  useEffect(() => {
    if (activeVideo) {
      pause()
      const handleKey = (e) => { if (e.key === 'Escape') setActiveVideo(null) }
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    } else {
      resume()
    }
  }, [activeVideo])

  return (
    <section className="bae-social-proof">
      <div className="bae-social-proof-ticker" ref={tickerRef} {...handlers}>
        <button className="bae-ticker-arrow bae-ticker-arrow-left" onClick={() => scrollBy(500)} aria-label="Scroll left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="bae-ticker-arrow bae-ticker-arrow-right" onClick={() => scrollBy(-500)} aria-label="Scroll right">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div ref={trackRef} className="bae-social-proof-track">
          {items.map((item, i) => {
            if (item.type === 'wide') {
              return (
                <div className={`bae-sp-col bae-sp-wide${item.headline ? ' bae-sp-wide-narrow' : ''}`} key={i}>
                  <div className="bae-sp-wide-card" style={{ background: item.bg }}>
                    {item.img && <img src={item.img} alt="" className="bae-sp-bg-img" />}
                    <div className="bae-sp-wide-bottom">
                      {item.headline
                        ? <p className="bae-sp-wide-headline">{item.headline}</p>
                        : <><p className="bae-sp-wide-quote">{item.quote}</p>
                           <span className="bae-sp-press-name bae-sp-wide-name">{item.logo}</span></>
                      }
                    </div>
                  </div>
                </div>
              )
            }
            if (item.type === 'quote-long') {
              return (
                <div className="bae-sp-col bae-sp-quote-long" key={i}>
                  <div className="bae-sp-quote-long-card" style={{ background: item.bg }}>
                    <span className="bae-sp-quote-long-mark">&ldquo;</span>
                    <p className="bae-sp-quote-long-text">{item.quote}</p>
                    <div className="bae-sp-byline bae-sp-byline-spread">
                      <div className="bae-sp-attribution">
                        <span className="bae-sp-press-name">{item.name}</span>
                        {item.role && <span className="bae-sp-press-role">{item.role}</span>}
                      </div>
                      <span className="bae-sp-avatar">{item.avatar ? <img src={item.avatar} alt={item.name} /> : getInitials(item.name)}</span>
                    </div>
                  </div>
                </div>
              )
            }
            if (item.type === 'video') {
              return (
                <div className="bae-sp-col bae-sp-thin" key={i} onClick={(e) => { if (Math.abs(e.clientX - drag.current.startX) < 5) setActiveVideo(item.src) }} style={{ cursor: 'pointer' }}>
                  <div className="bae-sp-thin-card bae-sp-thin-card-has-img" style={{ background: '#111' }}>
                    <video
                      src={item.src}
                      className="bae-sp-bg-img"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{ pointerEvents: 'none' }}
                    />
                    <span className="bae-sp-play-btn">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="white" />
                      </svg>
                    </span>
                    <div className="bae-sp-thin-bottom">
                      <span className="bae-sp-thin-label">{item.name}</span>
                      <span className="bae-sp-thin-sublabel">{item.role}</span>
                    </div>
                  </div>
                </div>
              )
            }
            if (item.type === 'thin') {
              return (
                <div className="bae-sp-col bae-sp-thin" key={i}>
                  <div className={`bae-sp-thin-card${item.img && !item.imgOnly ? ' bae-sp-thin-card-has-img' : ''}`} style={{ background: item.bg }}>
                    {item.img && <img src={item.img} alt="" className="bae-sp-bg-img" />}
                    {item.video && (
                      <span className="bae-sp-play">
                        <svg width="40" height="40" viewBox="0 0 20 20" fill="none">
                          <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="white" />
                        </svg>
                      </span>
                    )}
                    {!item.imgOnly && (
                      <div className="bae-sp-thin-bottom">
                        <span className="bae-sp-thin-label">{item.label}</span>
                        <span className="bae-sp-thin-sublabel">{item.sublabel}</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            }
            if (item.type === 'press-quote') {
              return (
                <div className="bae-sp-col bae-sp-press" key={i}>
                  <div className="bae-sp-press-card" style={{ background: item.bg }}>
                    <p className="bae-sp-press-quote">&ldquo;{item.quote}&rdquo;</p>
                    <img src={item.logo} alt="" className="bae-sp-press-logo" />
                  </div>
                </div>
              )
            }
            /* split */
            return (
              <div className="bae-sp-col bae-sp-split" key={i}>
                {item.top.img ? (
                  <div className="bae-sp-split-card bae-sp-split-img">
                    <img src={item.top.img} alt="" className="bae-sp-bg-img" />
                  </div>
                ) : item.top.type === 'quote' ? (
                  <div className="bae-sp-split-card bae-sp-split-press bae-sp-split-quote-style" style={{ background: item.top.bg }}>
                    <span className="bae-sp-quote-long-mark bae-sp-split-quote-mark">&ldquo;</span>
                    <p className="bae-sp-press-quote">{item.top.quote}</p>
                    <div className="bae-sp-byline bae-sp-byline-spread">
                      <div className="bae-sp-attribution">
                        <span className="bae-sp-press-name">{item.top.name}</span>
                        {item.top.role && <span className="bae-sp-press-role">{item.top.role}</span>}
                      </div>
                      <span className="bae-sp-avatar">{item.top.avatar ? <img src={item.top.avatar} alt={item.top.name} /> : getInitials(item.top.name)}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="bae-sp-split-card"
                    style={{ background: item.top.bg, color: item.top.color === 'light' ? 'var(--white)' : 'var(--gray-dark)' }}
                  >
                    {item.top.prefix && <span className="bae-sp-split-label">{item.top.prefix}</span>}
                    <span className="bae-sp-split-stat">{item.top.stat}</span>
                    <span className="bae-sp-split-label">{item.top.label}</span>
                  </div>
                )}
                {item.bottom.type === 'press' ? (
                  <div className="bae-sp-split-card bae-sp-split-press bae-sp-split-quote-style" style={{ background: item.bottom.bg }}>
                    <span className="bae-sp-quote-long-mark bae-sp-split-quote-mark">&ldquo;</span>
                    <p className="bae-sp-press-quote">{item.bottom.quote}</p>
                    <div className="bae-sp-byline bae-sp-byline-spread">
                      {item.bottom.name
                        ? <div className="bae-sp-attribution">
                            <span className="bae-sp-press-name">{item.bottom.name}</span>
                            {item.bottom.role && <span className="bae-sp-press-role">{item.bottom.role}</span>}
                          </div>
                        : <img src={item.bottom.logo} alt="" className="bae-sp-press-logo" />
                      }
                      <span className="bae-sp-avatar">{item.bottom.avatar ? <img src={item.bottom.avatar} alt={item.bottom.name} /> : getInitials(item.bottom.name)}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="bae-sp-split-card"
                    style={{ background: item.bottom.bg, color: item.bottom.color === 'light' ? 'var(--white)' : 'var(--gray-dark)' }}
                  >
                    <span className="bae-sp-split-stat">{item.bottom.stat}{item.bottom.suffix && <span className="bae-sp-split-suffix">{item.bottom.suffix}</span>}</span>
                    <span className="bae-sp-split-label">{item.bottom.label}</span>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {activeVideo && (
        <div className="bae-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="bae-video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="bae-video-modal-close" onClick={() => setActiveVideo(null)}>&#x2715;</button>
            <video src={activeVideo} controls autoPlay className="bae-video-modal-video" />
          </div>
        </div>
      )}
    </section>
  )
}

export default function BecomeAnExpert() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const [showAllFaq, setShowAllFaq] = useState(false)
  const [openWho, setOpenWho] = useState(null)
  const [quoteProgress, setQuoteProgress] = useState(0)
  const quoteRef = useRef(null)
  const { tickerRef: catTickerRef, trackRef: catTrackRef, handlers: catHandlers } = useTickerDrag(40)

  useEffect(() => {
    const handleScroll = () => {
      const section = quoteRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = 1 - (rect.top - 0) / (vh - 0)
      setQuoteProgress(Math.min(1, Math.max(0, raw)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar variant="sticky" />

      {/* 0 · Hero — Experts carousel */}
      <ExpertsSection
        heading="Turn your experience into your business"
        subtitle="Join thousands of experts already on Leland."
        className="bae-experts-hero"
        cta={<a href="#" className="bae-hero-cta" style={{ marginTop: '20px' }}>Apply to be an expert</a>}
      />

      {/* 2 · Who Belongs Here */}
      <section className="bae-who">
        <div className="section-container">
          <div className="bae-who-top">
            <div className="bae-who-text">
              <h2 className="bae-who-heading">
                Built for people who&rsquo;ve already done the hard part.
              </h2>
              <p className="bae-who-sub">
                Whether you call yourself a coach, tutor, consultant, advisor, or expert, if you&rsquo;ve
                navigated a path that others want to follow, Leland is where you share that knowledge
                and build your business.
              </p>
            </div>
          </div>
          <div className="bae-who-bottom">
            <div className="bae-who-left">
              <div className="bae-who-grid-wrap">
                <div className="bae-who-grid-box">
                  <div className="bae-who-grid">
                    {WHO_BELONGS.map((item) => (
                      <div className="bae-who-card" key={item.title}>
                        <p className="bae-who-card-title">{item.title}</p>
                        <p className="bae-who-card-desc">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Popular categories ticker ── */}
      <section className="bae-cat-ticker-section">
        <div className="bae-cat-ticker-row">
          <div className="bae-cat-ticker-label-wrap">
            <p className="bae-cat-ticker-label">Popular<br />categories</p>
          </div>
          <div className="bae-cat-ticker" ref={catTickerRef} {...catHandlers}>
            <div className="bae-cat-ticker-track" ref={catTrackRef}>
              {[...CATEGORIES, ...CATEGORIES].map((cat, i) => (
                <span key={i} className="bae-cat-ticker-item">
                  <a href="#" className="bae-cat-ticker-link">{cat}</a>
                  <span className="bae-cat-ticker-dot" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote image break ── */}
      {(() => {
        const eased = quoteProgress < 0.5
          ? 2 * quoteProgress * quoteProgress
          : 1 - Math.pow(-2 * quoteProgress + 2, 2) / 2
        const containerScale = 0.8 + eased * 0.2
        const imageScale = 1 / containerScale
        return (
          <section className="bae-quote-img-section" ref={quoteRef}>
            <div className="bae-quote-img-container" style={{ transform: `scale(${containerScale})` }}>
              <div
                className="bae-quote-img-bg"
                style={{
                  backgroundImage: `url(${coachImg})`,
                  transform: `scale(${imageScale})`,
                }}
              />
              <div className="bae-quote-img-content">
                <h2 className="bae-quote-img-heading">There's no better feeling than helping someone accomplish their goals.</h2>
                <p className="bae-quote-img-desc">Come change lives on Leland.</p>
              </div>
            </div>
          </section>
        )
      })()}

      {/* 5 · Features */}
      <section className="bae-features">
        <div className="section-container">
          <div className="bae-features-header">
            <p className="testimonials-label">
              <span className="testimonials-dot" />
              Tools for Experts
            </p>
            <h2 className="testimonials-heading">Your business in a box</h2>
          </div>
          <div className={`bae-features-wrap${showAllFeatures ? ' bae-features-expanded' : ''}`}>
            <div className="bae-features-grid">
              {FEATURES.slice(0, INITIAL_VISIBLE).map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
            <AnimatePresence>
              {showAllFeatures && (
                <motion.div
                  className="bae-features-grid"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  {FEATURES.slice(INITIAL_VISIBLE).map((f) => (
                    <FeatureCard key={f.title} {...f} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="bae-features-toggle">
              <button
                className="bae-features-show-more"
                onClick={() => setShowAllFeatures(!showAllFeatures)}
              >
                {showAllFeatures ? 'Show less' : 'Show more'}
                <svg
                  className={`bae-features-chevron${showAllFeatures ? ' bae-features-chevron-up' : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6b · Social Proof Ticker */}
      <SocialProofTicker />

      {/* 7 · How It Works */}
      <section className="bae-hiw">
        <div className="section-container">
          <h2 className="bae-section-title bae-hiw-title">Apply in just 5 minutes.</h2>
          <p className="bae-hiw-sub">Monetize your expertise and build connections with tomorrow&rsquo;s leaders.</p>
          <div className="bae-hiw-cta">
            <a href="#" className="bae-hero-cta">Apply now</a>
          </div>
          <div className="bae-hiw-steps">
            {HOW_IT_WORKS.map((s) => (
              <div className="bae-hiw-step" key={s.step}>
                <div className="bae-hiw-mockup-area" style={{ background: s.color }}>
                  {s.img && <img src={s.img} alt="" className="bae-hiw-mockup-img" />}
                </div>
                <div className="bae-hiw-step-label">
                  <span className="bae-hiw-number">{s.step}</span>
                  <p className="bae-hiw-step-desc">
                    <span className="bae-hiw-step-bold">{s.bold}</span>
                    <span className="bae-hiw-step-rest">{s.rest}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 · FAQ */}
      <section className="bae-faq">
        <div className="section-container">
          <h2 className="bae-section-title">Frequently asked questions</h2>
          <div className={`bae-faq-wrap${showAllFaq ? ' bae-faq-expanded' : ''}`}>
            <div className="bae-faq-list">
              {FAQ_ITEMS.map((item) => (
                <details className="bae-faq-item" key={item.q}>
                  <summary className="bae-faq-question">{item.q}</summary>
                  <p className="bae-faq-answer">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="bae-faq-toggle">
            <button className="bae-features-show-more" onClick={() => setShowAllFaq(!showAllFaq)}>
              {showAllFaq ? 'Show less' : 'View all'}
              <svg
                className={`bae-features-chevron${showAllFaq ? ' bae-features-chevron-up' : ''}`}
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <PreFooterCTA
        heading="Turn your experience into a side hustle."
        ctaText="Apply to be an expert"
      />

      <Footer />
    </>
  )
}
