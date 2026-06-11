import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from '../components/Navbar'
import ExpertsSection from '../components/ExpertsSection'
import heroBg from '../assets/img/become-an-expert-bg.png'
import coachImg from '../assets/img/become-an-expert-coach.png'
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
import forbesLogo from '../assets/logos/Forbes_logo.svg'
import stanfordLogo from '../assets/logos/stanford-wordmark.svg'
import goldmanLogo from '../assets/logos/goldman-sachs.svg'
import bainLogo from '../assets/logos/org-logos/bain.svg'
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
import bg1 from '../assets/img/background-textures/bg-1.png'
import bg2 from '../assets/img/background-textures/bg-2.png'
import Footer from '../components/Footer'
import './BecomeAnExpert.css'

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
    desc: "You've reviewed thousands of applications. You know exactly what makes one unforgettable.",
  },
  {
    emoji: '🏢',
    title: 'Executives & Consultants',
    desc: "You've built a career at the kind of place others spend years trying to break into.",
  },
  {
    emoji: '🚀',
    title: 'Entrepreneurs & Founders',
    desc: "You've built and scaled companies. Share the hard lessons you wish you'd had sooner.",
  },
  {
    emoji: '🤖',
    title: 'AI & Tech Specialists',
    desc: 'From prompt engineering to full AI automation. The world is hungry for practical AI expertise.',
  },
  {
    emoji: '📝',
    title: 'Tutors & Test Prep Experts',
    desc: "GMAT, GRE, LSAT, MCAT. If you've cracked the code, share your test prep strategy.",
  },
  {
    emoji: '💼',
    title: 'Freelancers & Career Specialists',
    desc: 'Recruiting, pivots, negotiation, PE, VC. Career expertise at every level is in high demand.',
  },
]

const CATEGORIES = [
  'MBA Admissions', 'College Admissions', 'Law School', 'Medical School',
  'GMAT Prep', 'GRE Prep', 'LSAT Prep', 'Career Coaching',
  'Executive Coaching', 'Product Management', 'Data Science & AI',
  'Finance & Accounting',
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
  { icon: iconScheduling, title: 'Scheduling', desc: 'Let clients book time with you directly. No back-and-forth emails.', link: true },
  { icon: iconPayments, title: 'Payments', desc: 'Get paid automatically after every session. We handle invoicing and payouts.', link: true },
  { icon: iconVideoCalls, title: 'Video Calls', desc: 'Built-in video conferencing so you can coach from anywhere.' },
  { icon: iconAnalytics, title: 'Analytics', desc: 'Track your earnings, session history, and client engagement over time.', link: true },
  { icon: iconSessionNotes, title: 'Session Notes', desc: 'Keep notes for each client so you never lose context between sessions.' },
  { icon: iconProfilePage, title: 'Profile Page', desc: 'A dedicated page that showcases your expertise and lets clients find you.', link: true },
  { icon: iconClientAcquisition, title: 'Client Acquisition', desc: 'We drive clients to the platform so you can focus on coaching.' },
  { icon: iconDigitalProducts, title: 'Digital Products', desc: 'Sell guides, templates, and resources alongside your coaching sessions.', link: true },
  { icon: iconGroupSessions, title: 'Group Sessions', desc: 'Host group classes and workshops to scale your impact and income.' },
  { icon: iconReviews, title: 'Reviews & Ratings', desc: 'Build social proof with verified reviews from your clients.' },
  { icon: iconMessaging, title: 'Messaging', desc: 'Chat with clients between sessions to answer quick questions.' },
  { icon: iconGoalTracking, title: 'Goal Tracking', desc: 'Help clients set and track goals to measure their progress.' },
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
    quote: "I replaced my consulting income in 6 months coaching part-time on Leland.",
    logo: 'Forbes',
    img: coach1,
  },
  {
    type: 'thin',
    bg: '#D4E5F7',
    label: '@jess.mba',
    sublabel: '12.4k followers',
    img: coach7,
  },
  {
    type: 'split',
    top: { bg: 'rgba(34, 34, 34, 0.05)', stat: '2,500+', label: 'Active coaches' },
    bottom: { bg: 'rgba(34, 34, 34, 0.05)', stat: '$4.2M+', label: 'Earned by coaches' },
  },
  {
    type: 'wide',
    bg: '#D5E8D4',
    quote: "The scheduling and payment tools alone save me 5 hours a week. I just focus on coaching.",
    logo: 'Yahoo!',
    img: coach5,
  },
  {
    type: 'thin',
    bg: 'rgba(34, 34, 34, 0.05)',
    img: phoneMockup,
    imgOnly: true,
  },
  {
    type: 'split',
    top: { img: coach4 },
    bottom: { bg: 'rgba(34, 34, 34, 0.05)', stat: '4.9', suffix: '★', label: 'Average coach rating' },
  },
  {
    type: 'wide',
    bg: '#FFD6E0',
    quote: "My clients find me through Leland. I don't spend a dollar on marketing anymore.",
    logo: 'TechCrunch',
    img: coach8,
  },
  {
    type: 'thin',
    bg: '#E8D5F5',
    label: '@admissions.pro',
    sublabel: '22k followers',
    video: true,
    img: coach2,
  },
  {
    type: 'split',
    top: { bg: 'rgba(34, 34, 34, 0.05)', stat: '94%', label: 'Client satisfaction' },
    bottom: {
      type: 'press',
      bg: 'rgba(34, 34, 34, 0.05)',
      quote: "Coaching isn’t just about expertise. It’s about the belief that a person can grow, change, and achieve—especially when someone else sees that potential first.",
      logo: forbesLogo,
    },
  },
]

const VISIBLE_FEATURE_ROWS = 3
const FEATURES_PER_ROW = 3
const INITIAL_VISIBLE = VISIBLE_FEATURE_ROWS * FEATURES_PER_ROW

const HOW_IT_WORKS = [
  { step: '1', bold: 'Submit a short application', rest: ' telling us about your background and expertise.', color: 'var(--blue)' },
  { step: '2', bold: 'Build your expert profile', rest: ', set your pricing, and define your availability.', color: '#F3F1E6' },
  { step: '3', bold: 'Clients discover you', rest: ' through Leland and book sessions directly.', color: '#9F5B34' },
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

  return (
    <section className="bae-social-proof">
      <div className="section-container">
        <h2 className="bae-social-proof-heading">
          Used by experts just like you.
        </h2>
      </div>
      <div className="bae-social-proof-ticker">
        <div className="bae-social-proof-track">
          {items.map((item, i) => {
            if (item.type === 'wide') {
              return (
                <div className="bae-sp-col bae-sp-wide" key={i}>
                  <div className="bae-sp-wide-card" style={{ background: item.bg }}>
                    {item.img && <img src={item.img} alt="" className="bae-sp-bg-img" />}
                    <div className="bae-sp-wide-bottom">
                      <p className="bae-sp-wide-quote">&ldquo;{item.quote}&rdquo;</p>
                      <span className="bae-sp-wide-logo">{item.logo}</span>
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
                ) : (
                  <div
                    className="bae-sp-split-card"
                    style={{ background: item.top.bg, color: item.top.color === 'light' ? 'var(--white)' : 'var(--gray-dark)' }}
                  >
                    <span className="bae-sp-split-stat">{item.top.stat}</span>
                    <span className="bae-sp-split-label">{item.top.label}</span>
                  </div>
                )}
                {item.bottom.type === 'press' ? (
                  <div className="bae-sp-split-card bae-sp-split-press" style={{ background: item.bottom.bg }}>
                    <p className="bae-sp-press-quote">&ldquo;{item.bottom.quote}&rdquo;</p>
                    <img src={item.bottom.logo} alt="" className="bae-sp-press-logo" />
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
    </section>
  )
}

export default function BecomeAnExpert() {
  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const [openWho, setOpenWho] = useState(null)

  return (
    <>
      <Navbar variant="sticky" />

      {/* 0 · Hero — Experts carousel */}
      <ExpertsSection
        heading="Turn your experience into your business"
        subtitle="Join thousands of experts already coaching on Leland."
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
            <div className="bae-who-logos" aria-hidden="true">
              <img src={googleLogo}   className="bae-who-logo" style={{ width: 76,  top: 25,  left: 222, opacity: 0.36, filter: 'invert(1)' }} alt="" />
              <img src={goldmanLogo}  className="bae-who-logo" style={{ width: 64,  top: 120, left: 232, opacity: 0.26, filter: 'grayscale(1)' }} alt="" />
              <img src={mckinseyLogo} className="bae-who-logo" style={{ width: 58,  top: 12,  left: 132, opacity: 0.22, filter: 'invert(1)' }} alt="" />
              <img src={openaiLogo}   className="bae-who-logo" style={{ width: 58,  top: 14,  left: 352, opacity: 0.22, filter: 'grayscale(1)' }} alt="" />
              <img src={bcgLogo}      className="bae-who-logo" style={{ width: 50,  top: 118, left: 114, opacity: 0.20, filter: 'invert(1)' }} alt="" />
              <img src={spotifyLogo}  className="bae-who-logo" style={{ width: 58,  top: 114, left: 366, opacity: 0.18, filter: 'grayscale(1)' }} alt="" />
              <img src={stanfordLogo} className="bae-who-logo" style={{ width: 64,  top: 68,  left: 44,  opacity: 0.28, filter: 'grayscale(1)' }} alt="" />
              <img src={nikeLogo}     className="bae-who-logo" style={{ width: 48,  top: 72,  left: 448, opacity: 0.14, filter: 'grayscale(1)' }} alt="" />
              <img src={bainLogo}     className="bae-who-logo" style={{ width: 40,  top: 152, left: 22,  opacity: 0.12, filter: 'invert(1)' }} alt="" />
            </div>
          </div>
          <div className="bae-who-bottom">
            <div className="bae-faq-list bae-who-faq">
              {WHO_BELONGS.map((item, i) => {
                const isOpen = openWho === i
                return (
                  <div className="bae-faq-item" key={item.title}>
                    <button
                      className="bae-faq-question"
                      onClick={() => setOpenWho(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p className="bae-faq-answer">{item.desc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
            <div className="bae-who-img-wrap">
              <img src={coachImg} alt="" className="bae-who-img" />
            </div>
          </div>
        </div>
      </section>


      {/* 4 · Categories */}
      <section className="bae-categories">
        <div className="section-container">
          <h2 className="bae-categories-heading">Popular coaching categories</h2>
          <div className="bae-categories-grid">
            {CATEGORIES.map((cat) => (
              <a href="#" className="bae-category-chip" key={cat}>{cat}</a>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Features */}
      <section className="bae-features">
        <div className="section-container">
          <div className="bae-features-header">
            <p className="testimonials-label">
              <span className="testimonials-dot" />
              Features
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

      {/* 6c · Social Proof Ticker (video testimonials — WIP) */}
      <SocialProofTicker />

      {/* 7 · How It Works */}
      <section className="bae-hiw">
        <div className="section-container">
          <h2 className="bae-section-title bae-hiw-title">Apply in less than five minutes</h2>
          <div className="bae-hiw-cta">
            <a href="#" className="bae-hero-cta">Apply now</a>
          </div>
          <div className="bae-hiw-steps">
            {HOW_IT_WORKS.map((s) => (
              <div className="bae-hiw-step" key={s.step}>
                <div className="bae-hiw-mockup-area" style={{ background: s.color }} />
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
          <div className="bae-faq-list">
            {FAQ_ITEMS.map((item) => (
              <details className="bae-faq-item" key={item.q}>
                <summary className="bae-faq-question">{item.q}</summary>
                <p className="bae-faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9 · Final CTA */}
      <section className="bae-hero bae-hero-bottom">
        <img src={heroBg} alt="" className="bae-hero-bg" />
        <div className="bae-hero-overlay" />
        <div className="bae-hero-content">
          <h2 className="bae-hero-title">
            Turn your experience into a side hustle.
          </h2>
          <div className="bae-hero-proof">
            <div className="bae-hero-avatars">
              <img src={pic05} alt="" className="bae-hero-avatar" />
              <img src={pic13} alt="" className="bae-hero-avatar" />
              <img src={pic08} alt="" className="bae-hero-avatar" />
              <img src={pic14} alt="" className="bae-hero-avatar" />
            </div>
            <span className="bae-hero-proof-text">Join 2,500+ other experts</span>
          </div>
          <a href="#" className="bae-hero-cta">
            Apply to be an expert
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
