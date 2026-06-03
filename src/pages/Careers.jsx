import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import iconScheduling from '../assets/icons/product-illustrations/scheduling.svg'
import iconPayments from '../assets/icons/product-illustrations/payments.svg'
import iconVideoCalls from '../assets/icons/product-illustrations/video-calls.svg'
import iconAnalytics from '../assets/icons/product-illustrations/analytics.svg'
import iconSessionNotes from '../assets/icons/product-illustrations/session-notes.svg'
import iconProfilePage from '../assets/icons/product-illustrations/profile-page.svg'
import iconClientAcquisition from '../assets/icons/product-illustrations/client-acquisition.svg'
import iconDigitalProducts from '../assets/icons/product-illustrations/digital-products.svg'
import iconGroupSessions from '../assets/icons/product-illustrations/group-sessions.svg'
import iconAsset from '../assets/icons/product-illustrations/asset.svg'
import iconBaby from '../assets/icons/product-illustrations/baby.svg'
import iconCateredLunch from '../assets/icons/product-illustrations/catered-lunch.svg'
import iconHealthcare from '../assets/icons/product-illustrations/healthcare.svg'
import iconOnsiteGym from '../assets/icons/product-illustrations/onsite-gym.svg'
import iconInsurance from '../assets/icons/product-illustrations/Insurance.svg'
import iconLelandCoaching from '../assets/icons/product-illustrations/leland-coaching.svg'
import iconStockOptions from '../assets/icons/product-illustrations/stock-options.svg'
import iconReviews from '../assets/icons/product-illustrations/reviews.svg'
import iconVacation from '../assets/icons/product-illustrations/vacation.svg'
import photoStanford from '../assets/img/careers-page/Stanford.jpg'
import photoBearLake from '../assets/img/careers-page/bear-lake.png'
import photoSki from '../assets/img/careers-page/Ski.jpg'
import photoBoat from '../assets/img/careers-page/Boat.jpg'
import './Careers.css'

const POLAROIDS = [
  { img: photoStanford, caption: 'Stanford', date: '03/15/2025', rotate: -4, y: -12 },
  { img: photoBearLake, caption: 'Bear Lake', date: '06/22/2024', rotate: 2, y: 16 },
  { img: photoSki, caption: 'Ski', date: '09/10/2025', rotate: -1.5, y: -8 },
  { img: photoBoat, caption: 'Boat', date: '12/18/2025', rotate: 3.5, y: 20 },
]

const VALUES = [
  { title: 'Make Customers Win', desc: 'Prioritize the customer, and everything else follows.' },
  { title: 'Shark DNA', desc: 'We are winners and make things happen.' },
  { title: 'Bold Swings, Often', desc: 'We play offense, act with courage, and swing for the fences.' },
  { title: 'Simplify and Ship It', desc: 'We solve one problem at a time, quickly.' },
  { title: 'Everyone a Builder', desc: "Top to bottom, we're relentless doers and never above anything." },
  { title: 'Why Not Now?', desc: 'We plan well, but when something is a priority, it happens now.' },
  { title: 'Demand Excellence', desc: "We hold ourselves and each other to a high standard, and push for better when it's needed." },
  { title: 'Build Community', desc: 'We bring people together, celebrate them, and make relationships our edge.' },
  { title: 'Always Be Coaching', desc: 'We share our expertise and lift others up.' },
  { title: 'Care', desc: 'We care for our employees, our customers, our coaches, our company, and our world.' },
]

const PERKS = [
  { icon: iconStockOptions, title: 'Stock Options', desc: "Every full-time employee receives equity. We're building something meaningful, and we want everyone on the team to share in the upside." },
  { icon: iconLelandCoaching, title: 'Leland Coaching', desc: 'We believe in what we build. Every employee gets a free hour of coaching through Leland every month.' },
  { icon: iconScheduling, title: 'Flexible PTO', desc: 'We trust you to manage your time. Take what you need, be communicative, and plan ahead.' },
  { icon: iconVacation, title: '14 Company Holidays', desc: 'Fourteen paid holidays a year, including a full company shutdown at the end of December.' },
  { icon: iconBaby, title: 'Parental Leave', desc: '12 weeks for maternity leave and 6 weeks for paternity leave, fully paid. Be present for the moments that matter most.' },
  { icon: iconHealthcare, title: 'Health Coverage', desc: 'Comprehensive health, dental, and vision coverage for you and your dependents. We cover the majority of your premiums so you can focus on the work, not the bills.' },
  { icon: iconAsset, title: 'HSA / FSA', desc: 'Pre-tax savings accounts to help your healthcare dollars go further. We want your money working as hard as you do.' },
  { icon: iconInsurance, title: 'Life Insurance', desc: 'A $100K life insurance policy, fully covered by Leland. We look out for you and the people who depend on you.' },
  { icon: iconCateredLunch, title: 'Catered Lunch', desc: "We cater lunch twice a week. It's one of our favorite parts of being in the office together." },
  { icon: iconOnsiteGym, title: 'Onsite Gym', desc: "We have a gym in the office. No commute, no membership fee. Take care of your body while you're building with us." },
]

const PERKS_PER_ROW = 3
const VISIBLE_PERK_ROWS = 2
const INITIAL_VISIBLE_PERKS = VISIBLE_PERK_ROWS * PERKS_PER_ROW

const OPEN_ROLES = [
  { title: 'Consumer Account Executive', dept: 'Growth' },
  { title: 'Growth Manager, Organic', dept: 'Growth' },
  { title: 'Founding Account Manager', dept: 'Sales' },
  { title: 'AI Instructor (Contract-to-Hire)', dept: 'Ops' },
  { title: 'Head of Sales', dept: 'Sales' },
  { title: 'GM, AI Services', dept: 'GMs' },
  { title: 'Growth Manager, Marketplace', dept: 'Growth' },
  { title: 'Strategy & Ops Lead, AI Education', dept: 'Ops' },
  { title: 'GM, Marketplace', dept: 'GMs' },
  { title: 'AI Education Intern', dept: 'Internship' },
]

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

export default function Careers() {
  const [showAllPerks, setShowAllPerks] = useState(false)
  const [selectedPolaroid, setSelectedPolaroid] = useState(null)
  const [hoveredPolaroid, setHoveredPolaroid] = useState(null)

  return (
    <div className="careers-page">
      <Navbar variant="sticky" />

      {/* Hero */}
      <section className="careers-hero">
        <div className="section-container">
          <h1 className="careers-hero-heading">
            We&rsquo;re building the home for ambition in the age of AI.
          </h1>
          <p className="careers-hero-sub">
            We move fast, hold a high bar, and do work that changes people&rsquo;s lives.
          </p>
          <a href="#open-roles" className="careers-hero-cta">See open roles</a>
        </div>
      </section>

      {/* Polaroids */}
      <section className="careers-polaroids">
        <div className="careers-polaroids-row">
          {POLAROIDS.map((p, i) => (
            <motion.div
              className={`careers-polaroid careers-polaroid-${i + 1}`}
              key={p.caption}
              layoutId={`polaroid-${i}`}
              style={{ rotate: p.rotate }}
              animate={
                selectedPolaroid === null && hoveredPolaroid === i
                  ? { y: p.y - 12, zIndex: 10, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)' }
                  : { y: p.y, boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)' }
              }
              transition={{
                y: { ease: 'easeOut', duration: 0.2 },
                boxShadow: { ease: 'easeOut', duration: 0.2 },
                zIndex: { delay: 0.2 },
              }}
              onHoverStart={() => { if (selectedPolaroid === null) setHoveredPolaroid(i) }}
              onHoverEnd={() => setHoveredPolaroid(null)}
              onClick={() => setSelectedPolaroid(i)}
            >
              <div className="careers-polaroid-img-wrap">
                <img src={p.img} alt={p.caption} className="careers-polaroid-img" />
              </div>
              <div className="careers-polaroid-footer">
                <span className="careers-polaroid-caption">{p.caption}</span>
                <span className="careers-polaroid-date">{p.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Polaroid Lightbox */}
      <AnimatePresence>
        {selectedPolaroid !== null && (
          <motion.div
            className="careers-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setSelectedPolaroid(null); setHoveredPolaroid(null) }}
          >
            <motion.div
              className="careers-lightbox-polaroid"
              layoutId={`polaroid-${selectedPolaroid}`}
              style={{ rotate: 0, y: 0 }}
              onClick={() => { setSelectedPolaroid(null); setHoveredPolaroid(null) }}
            >
              <div className="careers-polaroid-img-wrap">
                <img
                  src={POLAROIDS[selectedPolaroid].img}
                  alt={POLAROIDS[selectedPolaroid].caption}
                  className="careers-polaroid-img"
                />
              </div>
              <div className="careers-polaroid-footer">
                <span className="careers-polaroid-caption">{POLAROIDS[selectedPolaroid].caption}</span>
                <span className="careers-polaroid-date">{POLAROIDS[selectedPolaroid].date}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Leland */}
      <section className="careers-why">
        <div className="section-container">
          <h2 className="careers-section-heading careers-why-heading">
            We believe ambition is sacred.
          </h2>
          <p className="careers-why-subheading">
            We exist to honor it and amplify it.
          </p>
          <div className="careers-why-body">
            <p>
              Opportunity should not be a privilege. The best career resources, the best mentors,
              and the best communities have historically been locked behind elite networks and
              expensive gatekeepers. We are tearing that down.
            </p>
            <p>
              We believe people grow fastest when they&rsquo;re surrounded by people who push them.
              The right community, the right experts, the right relationships change everything.
              That&rsquo;s what we&rsquo;re building for our customers, and it&rsquo;s the kind of
              team we&rsquo;re building for ourselves.
            </p>
            <p>
              We are a small team doing work that matters. In a world being rewritten by AI,
              we exist to give people the edge they need to win.
            </p>
            <p className="careers-why-note">
              We operate at a pace most companies can&rsquo;t sustain. We make decisions quickly,
              ship constantly, and hold each other to a high standard. Not everyone thrives in
              this environment.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Leland */}
      <section className="careers-life">
        <div className="section-container">
          <h2 className="careers-section-heading">We work in person. On purpose.</h2>
          <p className="careers-life-body">
            We&rsquo;re headquartered in Lehi, UT, and we show up every day. We believe the best
            work happens when talented people are in the same room. We celebrate together, move
            with urgency, and push each other in ways that can&rsquo;t happen over Slack.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="careers-values">
        <div className="section-container">
          <h2 className="careers-section-heading careers-section-heading-center">Our values</h2>
          <div className="careers-values-grid">
            {VALUES.map((v) => (
              <div className="careers-value-card" key={v.title}>
                <h3 className="careers-value-title">{v.title}</h3>
                <p className="careers-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="careers-perks">
        <div className="section-container">
          <div className="bae-features-header">
            <p className="testimonials-label">
              <span className="testimonials-dot" />
              Benefits
            </p>
            <h2 className="testimonials-heading">Perks &amp; benefits</h2>
          </div>
          <div className={`bae-features-wrap${showAllPerks ? ' bae-features-expanded' : ''}`}>
            <div className="bae-features-grid">
              {PERKS.slice(0, INITIAL_VISIBLE_PERKS).map((p) => (
                <div className="bae-feature-card" key={p.title}>
                  <img src={p.icon} alt="" className="bae-feature-icon" />
                  <h3 className="bae-feature-card-title">{p.title}</h3>
                  <p className="bae-feature-card-desc">{p.desc}</p>
                </div>
              ))}
            </div>
            <AnimatePresence>
              {showAllPerks && (
                <motion.div
                  className="bae-features-grid"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  {PERKS.slice(INITIAL_VISIBLE_PERKS).map((p) => (
                    <div className="bae-feature-card" key={p.title}>
                      <img src={p.icon} alt="" className="bae-feature-icon" />
                      <h3 className="bae-feature-card-title">{p.title}</h3>
                      <p className="bae-feature-card-desc">{p.desc}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="bae-features-toggle">
              <button
                className="bae-features-show-more"
                onClick={() => setShowAllPerks(!showAllPerks)}
              >
                {showAllPerks ? 'Show less' : 'Show more'}
                <svg
                  className={`bae-features-chevron${showAllPerks ? ' bae-features-chevron-up' : ''}`}
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

      {/* Open Roles */}
      <section className="careers-roles" id="open-roles">
        <div className="section-container">
          <h2 className="careers-section-heading careers-section-heading-center">Open positions</h2>
          <div className="careers-roles-list">
            {OPEN_ROLES.map((role) => (
              <a href="#" className="careers-role-row" key={role.title}>
                <div className="careers-role-info">
                  <span className="careers-role-title">{role.title}</span>
                  <span className="careers-role-dept">{role.dept}</span>
                </div>
                <span className="careers-role-arrow"><ArrowRight /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="careers-bottom-cta">
        <div className="section-container">
          <h2 className="careers-section-heading careers-section-heading-center">
            Not seeing the right role?
          </h2>
          <p className="careers-bottom-sub">
            Join our community of more than 2,000 experts and start coaching on Leland.
          </p>
          <Link to="/become-an-expert" className="careers-hero-cta">Become a coach</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
