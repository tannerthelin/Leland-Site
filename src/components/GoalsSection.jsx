import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PATHWAYS = [
  {
    title: 'Learn AI',
    color: '#D4E5F7',
    description: 'Build real AI skills — from prompt engineering to full-stack AI products — with expert-led programs and hands-on projects.',
    to: '/ai-builder-program',
  },
  {
    title: 'Build your career',
    color: '#F3F1E6',
    description: 'Level up with 1-on-1 coaching, interview prep, and leadership development from professionals who\'ve been there.',
    to: '#',
  },
  {
    title: 'Get into a top school',
    color: '#E8D5F5',
    description: 'Get into your dream school with expert guidance on applications, test prep, and admissions strategy.',
    to: '#',
  },
]

const CATEGORIES = [
  { name: 'MBA Admissions', icon: 'school' },
  { name: 'Career Coaching', icon: 'briefcase' },
  { name: 'AI & Machine Learning', icon: 'cpu' },
  { name: 'Interview Prep', icon: 'mic' },
  { name: 'GMAT / GRE Prep', icon: 'pencil' },
  { name: 'Executive Coaching', icon: 'crown' },
  { name: 'Law School', icon: 'scale' },
  { name: 'Medical School', icon: 'heart' },
  { name: 'Resume & LinkedIn', icon: 'file' },
  { name: 'Product Management', icon: 'grid' },
  { name: 'Consulting', icon: 'users' },
  { name: 'Data Science', icon: 'chart' },
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

export default function GoalsSection() {
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
    if (el) el.scrollBy({ left: dir * 300, behavior: 'smooth' })
  }

  return (
    <section className="goals-section">
      <div className="section-container">
        {/* ── Intro ── */}
        <div className="goals-intro">
          <h2 className="goals-intro-heading">Reach your most ambitious goals.</h2>
          <div className="goals-intro-right">
            <p className="goals-intro-body">
              Leland connects you with world-class coaches and experts who have already done what you're trying to do.
            </p>
          </div>
        </div>

        {/* ── Pathways ── */}
        <div className="pathways-grid">
          {PATHWAYS.map((p) => (
            <div className="pathway-card" key={p.title}>
              <div className="pathway-visual" style={{ background: p.color }} />
              <div className="pathway-body">
                <h3 className="pathway-name">{p.title}</h3>
                <p className="pathway-desc">{p.description}</p>
                <Link to={p.to} className="pathway-cta">
                  Get started <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Popular categories ── */}
        <div className="categories-header">
          <h3 className="goals-title">Popular categories</h3>
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
            <a href="#" className="category-card" key={c.name}>
              <CategoryIcon type={c.icon} />
              <span className="category-label">{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
