import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import buildingIcon from '../assets/icons/modern-building-4.svg'
// TODO(imagery — CEO feedback): swap for OUTCOME, not process. Show what an AI-native
// person can DO, not "a person at a computer learning." Chandler to supply final asset.
import imgLearnAI from '../assets/img/homepage-cards/learn-ai.png'
// TODO(imagery — CEO feedback): current subject reads too young/student. Use an
// established professional so we don't signal "students only." Chandler to supply.
import imgCareer from '../assets/img/homepage-cards/build-career.png'
import imgSchool from '../assets/img/homepage-cards/get-into-school.png'
// Full-bleed background variants (toggled via AdminPanel "Pathway Cards")
import imgLearnAIFull from '../assets/img/homepage-cards/learn-ai-full.png'
import imgCareerFull from '../assets/img/homepage-cards/build-career-full.png'
import imgSchoolFull from '../assets/img/homepage-cards/school-full.png'
// "Build with AI" photo candidates (AdminPanel "Build AI Image"); 1 = current default
import imgLearnAIAlt1 from '../assets/img/homepage-cards/learn-ai-full-alt1.png'
import imgLearnAIAlt2 from '../assets/img/homepage-cards/learn-ai-full-alt2.png'
import imgLearnAIAlt3 from '../assets/img/homepage-cards/learn-ai-full-alt3.png'
import imgLearnAIAlt4 from '../assets/img/homepage-cards/learn-ai-full-alt4.png'

const BUILD_AI_IMAGES = {
  1: imgLearnAIFull,
  2: imgLearnAIAlt1,
  3: imgLearnAIAlt2,
  4: imgLearnAIAlt3,
  5: imgLearnAIAlt4,
}

const PATHWAYS = [
  {
    title: 'Build with AI',
    color: '#5E6E79',
    description: "Leland's AI Builder Program helps you build tools that transform how you work.",
    to: '/ai-builder-program',
    img: imgLearnAI,
    imgFull: imgLearnAIFull,
    light: true,
  },
  {
    title: 'Grow your career',
    color: '#F3F1E6',
    description: 'Level up with 1-on-1 coaching, interview prep, and leadership development.',
    to: '#',
    img: imgCareer,
    imgFull: imgCareerFull,
  },
  {
    title: 'Get into a top school',
    color: '#EBD4B5',
    description: 'Get into your dream school with expert guidance on applications, test prep, and more.',
    to: '#',
    img: imgSchool,
    imgFull: imgSchoolFull,
  },
]

// Order: CEO directive pins "Build with AI" #1 and MBA #2; the rest are ranked by
// confirmed bookings over the last 12 months (Databricks: leland_analytics.business.bookings).
// "Build with AI" is the renamed "AI Automation & Agents" (the DB's top AI category, ~2.7k bookings).
// Hand-select / reprioritize freely — this is the data-backed starting point.
// Slugs verified against live joinleland.com (curl, 200 vs 404), June 2026.
const SEARCH_BASE = 'https://www.joinleland.com/search/'

const CATEGORIES = [
  { name: 'Build with AI', icon: 'cpu', slug: 'career/build-with-ai' },
  { name: 'MBA', icon: 'school', slug: 'school/mba' },
  { name: 'Management Consulting', icon: 'briefcase', slug: 'career/management-consulting' },
  { name: 'Product Management', icon: 'grid', slug: 'career/product-management' },
  { name: 'Career Coaching', icon: 'mic', slug: 'career/career-development' },
  { name: 'Private Equity', icon: 'chart', slug: 'career/private-equity' },
  { name: 'Investment Banking', icon: 'crown', slug: 'career/investment-banking' },
  { name: 'Law School', icon: 'scale', slug: 'school/law-school' },
  { name: "Master's Programs", icon: 'school', slug: 'school/masters-programs' },
  { name: 'Medical School', icon: 'heart', slug: 'school/medical-school' },
  { name: 'GRE', icon: 'pencil', slug: 'test/gre' },
  { name: 'LSAT', icon: 'scale', slug: 'test/lsat' },
  { name: 'GMAT', icon: 'pencil', slug: 'test/gmat' },
  { name: 'College', icon: 'briefcase', slug: 'school/college' },
  { name: 'Software Engineering', icon: 'cpu', slug: 'career/software-engineering' },
  { name: 'Venture Capital', icon: 'crown', slug: 'career/venture-capital' },
  { name: 'Business Operations & Strategy', icon: 'grid', slug: 'career/business-strategy-and-operations' },
  { name: 'Dental School', icon: 'heart', slug: 'school/dental-school' },
  { name: 'PhD Programs', icon: 'school', slug: 'school/phd' },
  { name: 'Hedge Fund', icon: 'chart', slug: 'career/hedge-fund' },
  { name: 'Product Marketing', icon: 'mic', slug: 'career/product-marketing' },
  { name: 'Data Science', icon: 'chart', slug: 'career/data-science' },
  { name: 'Executive Coaching', icon: 'crown', slug: 'career/executive' },
  { name: 'Equity Research', icon: 'file', slug: 'career/equity-research' },
  { name: 'Accounting', icon: 'grid', slug: 'career/accounting' },
  { name: 'SAT', icon: 'pencil', slug: 'test/sat' },
  { name: 'Break Into AI Careers', icon: 'users', slug: 'career/break-into-ai-careers' },
  { name: 'Academia', icon: 'school', slug: 'career/academia' },
]

function CategoryIcon({ type }) {
  const props = { width: 28, height: 28, viewBox: '0 0 24 24', fill: 'none', stroke: '#222', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (type) {
    case 'school':
      return <svg {...props}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" /></svg>
    case 'briefcase':
      return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>
    case 'cpu':
      return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" /></svg>
    case 'mic':
      return <svg {...props}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
    case 'pencil':
      return <svg {...props}><path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
    case 'crown':
      return <svg {...props}><path d="M2 20h20M4 20V9l4 3 4-6 4 6 4-3v11" /></svg>
    case 'scale':
      return <svg {...props}><path d="M12 3v19M5 7l7-4 7 4" /><path d="M2 14l3-7 3 7a4.24 4.24 0 0 1-6 0ZM16 14l3-7 3 7a4.24 4.24 0 0 1-6 0Z" /></svg>
    case 'heart':
      return <svg {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3.33.83-4.5 2.17C10.83 3.83 9.26 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
    case 'file':
      return <svg {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>
    case 'grid':
      return <svg {...props}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
    case 'users':
      return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    case 'chart':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
    default:
      return null
  }
}

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default function GoalsSection({ pathwayStyle = 'classic', buildAiImg = '1', b2bHatch = 'pill' }) {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 1)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)
  }

  useEffect(() => {
    checkScroll()
    const el = scrollRef.current
    if (el) el.addEventListener('scroll', checkScroll, { passive: true })
    return () => el?.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (el) el.scrollBy({ left: dir * 600, behavior: 'smooth' })
  }

  return (
    <section className="goals-section">
      <div className="section-container">
        {/* ── Intro ── */}
        <div className="goals-intro">
          <h2 className="goals-intro-heading">The world is changing fast.<br />Leland helps you change with it.</h2>
          <p className="goals-intro-body">
            AI is rapidly changing how careers and businesses are built. No matter what your goals are, Leland is here to help.
          </p>
          {b2bHatch === 'intro' && (
            <Link to="/ai" className="b2b-hatch-introlink">
              <span className="b2b-hatch-eyebrow">For organizations</span>
              <span>
                Make your team AI-native <span className="pathways-b2b-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          )}
        </div>

        {/* ── Pathways ── */}
        <div className={`pathways-grid${pathwayStyle === 'image' ? ' pathways-grid-image' : ''}${b2bHatch === 'strip' || b2bHatch === 'label' ? '' : ' pathways-grid-nohatch'}`}>
          {PATHWAYS.map((p) =>
            pathwayStyle === 'image' ? (
              <Link to={p.to} className="pathway-card-image" key={p.title}>
                <div
                  className="pathway-image-bg"
                  style={{
                    backgroundImage: `url(${
                      p.title === 'Build with AI' ? BUILD_AI_IMAGES[buildAiImg] || p.imgFull : p.imgFull
                    })`,
                  }}
                />
                <div className="pathway-image-scrim" />
                <div className="pathway-image-content">
                  <h3 className="pathway-name">{p.title}</h3>
                  <p className="pathway-desc">{p.description}</p>
                  <span className="pathway-cta">Get started</span>
                </div>
              </Link>
            ) : (
              <div className={`pathway-card${p.light ? ' pathway-card-light' : ''}`} key={p.title}>
                <div className="pathway-visual" style={{ background: p.color }}>
                  <img src={p.img} alt="" className="pathway-img" />
                  <div className="pathway-visual-fade" style={{ background: `linear-gradient(to bottom, transparent, ${p.color})` }} />
                </div>
                <div className="pathway-body" style={{ background: p.color }}>
                  <h3 className="pathway-name">{p.title}</h3>
                  <p className="pathway-desc">{p.description}</p>
                  <Link to={p.to} className="pathway-cta">
                    Get started
                  </Link>
                </div>
              </div>
            )
          )}
        </div>

        {/* Quiet B2B escape hatch — ~10% of visitors are business buyers.
            Treatment toggled via AdminPanel "B2B Hatch": none | pill | label | intro */}
        {b2bHatch === 'strip' && (
          <Link to="/ai" className="b2b-hatch-strip">
            <img src={buildingIcon} alt="" className="b2b-hatch-strip-icon" />
            <span className="b2b-hatch-strip-text"><strong>Leland for teams:</strong> train your people, deploy AI in your organization, and hire AI-native talent.</span>
            <span className="b2b-hatch-strip-arrow" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        )}
        {b2bHatch === 'label' && (
          <div className="pathways-b2b-hatch">
            <Link to="/ai" className="pathways-b2b-link b2b-hatch-labeled">
              <span className="b2b-hatch-eyebrow">For organizations</span>
              <span>
                Make your team AI-native <span className="pathways-b2b-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </div>
        )}

        {/* ── Popular categories ── */}
        <div className="categories-header">
          <h3 className="goals-title">Trending now</h3>
          <div className="categories-arrows">
            <button className="categories-arrow" disabled={!canScrollLeft} onClick={() => scroll(-1)} aria-label="Scroll left">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button className="categories-arrow" disabled={!canScrollRight} onClick={() => scroll(1)} aria-label="Scroll right">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        </div>
        <div className="categories-track" ref={scrollRef}>
          {CATEGORIES.map((c) => (
            <a href={c.slug ? `${SEARCH_BASE}${c.slug}` : '#'} className="category-card" key={c.name}>
              <CategoryIcon type={c.icon} />
              <span className="category-label">{c.name}</span>
              <span className="category-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
