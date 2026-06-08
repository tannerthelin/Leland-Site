import { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import iconVideoCalls from '../assets/icons/product-illustrations/video-calls.svg'
import iconSessionNotes from '../assets/icons/product-illustrations/session-notes.svg'
import iconGoalTracking from '../assets/icons/product-illustrations/goal-tracking.svg'
import iconMessage from '../assets/icons/product-illustrations/message.svg'
import iconDigitalProducts from '../assets/icons/product-illustrations/digital-products.svg'
import iconReviews from '../assets/icons/product-illustrations/reviews.svg'
import diagonalPattern from '../assets/img/svg-patterns/diagonal-lines-tight.png'
import './AIBuilderProgram.css'

const LEVELS = [
  {
    level: 1,
    name: 'Use AI to 10x Your Impact',
    tag: 'Foundations',
    desc: 'Go beyond chatbots and build AI-powered workflows that automate research, writing, and analysis — potentially recovering 10+ hours every week.',
    sessions: [
      'Build a Real Product with World-Class Design',
      'Automate Communication in Your Voice',
      'Analyze Data and Design Presentations Instantly',
      'Launch Your Custom AI System + Demo Day',
    ],
  },
  {
    level: 2,
    name: 'Build Agents That Work for You',
    tag: 'Agentic Workflows',
    desc: 'Move beyond isolated tasks and deploy specialized agents that handle research, writing, and system management — leaving you with real automations connected to your actual tech stack.',
    sessions: [
      'Build and Ship Your Automation Roadmap',
      'Build a Cloud-Based Agentic Automation',
      'Build Custom Agentic Automation and QA System',
      'Build Eval System + Demo Day',
    ],
  },
  {
    level: 3,
    name: 'Create Autonomous Agents',
    tag: 'Autonomous Systems',
    desc: 'Your agents stop waiting for you. Build automated systems that trigger, execute, and deliver results even while you sleep — no coding experience required.',
    sessions: [
      'Build Your Agentic Operating System',
      'Scope and Build Your First Agent',
      'Test and Deploy Your Agent',
      'Graduate to Full Autonomy + Demo Day',
    ],
  },
  {
    level: 4,
    name: 'Build Your Agent Workforce',
    tag: 'Multi-Agent Systems',
    desc: 'Build systems where specialized agents coordinate, delegate, and check each other\'s work. You become the boss of an AI team that has its own managers.',
    sessions: [
      'Scope Your Agent Team',
      'Build Your Orchestrated Pipeline',
      'Wire Your Agents Together + Add Security',
      'Ship Your Agent Workforce + Demo Day',
    ],
  },
  {
    level: 5,
    name: 'Ship AI Systems That Scale',
    tag: 'AI Orchestration',
    desc: 'Build AI systems that operate over long time horizons, self-correct when outputs fall below threshold, and run toward business goals with minimal human input.',
    sessions: [
      'Give Your Agents Institutional Memory',
      'Build an Agent That Works Toward Long-Horizon Goals',
      'Build a System That Self-Corrects',
      'Ship a System That Runs the Business + Demo Day',
    ],
  },
]

const TESTIMONIALS = [
  {
    quote: "We built a skill that saves our accounting team roughly 40 hours of work each quarter. I set my agent off to build two separate cold email campaigns, went downstairs to chat with my family, and came back to two campaigns ready for review.",
    name: 'AI Builder Graduate',
    role: 'Operations Leader',
  },
  {
    quote: "What an eye-opening experience. I quickly realized I had only been scratching the surface. The content and structure was fantastic, but what elevated this cohort were the TAs and the instructor.",
    name: 'AI Builder Graduate',
    role: 'Marketing Manager',
  },
  {
    quote: "I built a workflow to automate much of the monthly financial close process that will save me several hours each month. I likely would not have built this without being enrolled in the program.",
    name: 'AI Builder Graduate',
    role: 'Finance Professional',
  },
  {
    quote: "From learning how to prompt, vibe coding an app, creating all types of content and building n8n workflows, I feel SO much more confident on how to leverage AI.",
    name: 'Caroline D.',
    role: 'AI Builder Graduate',
  },
  {
    quote: "It helped me expand my thinking about how to use AI. Instead of using it just as a productivity tool, it showed me how to use it as a strategic partner. It helped me change how I work.",
    name: 'AI Builder Graduate',
    role: 'Strategy Consultant',
  },
  {
    quote: "AI used to feel overwhelming. Now I have an arsenal of tools to use in my day to day. I've even shown family and friends what I've been able to do — app creation, infographics, workflows, image generation.",
    name: 'Chimerika A.',
    role: 'AI Builder Graduate',
  },
]

const INCLUDED = [
  {
    icon: iconVideoCalls,
    title: '10+ hours live instruction',
    desc: 'Learn directly from AI practitioners in interactive sessions',
  },
  {
    icon: iconSessionNotes,
    title: 'All sessions recorded',
    desc: 'Watch on your own schedule if you miss a live session',
  },
  {
    icon: iconGoalTracking,
    title: 'Certificate of completion',
    desc: 'Earn a verified certificate for each level you complete',
  },
  {
    icon: iconMessage,
    title: 'Dedicated TA support',
    desc: 'Get hands-on help from TAs on whatever you\'re building',
  },
  {
    icon: iconDigitalProducts,
    title: '2,000+ on-demand resources',
    desc: 'Access a full library of AI videos, courses, and templates',
  },
  {
    icon: iconReviews,
    title: 'Money-back guarantee',
    desc: 'Best Foundations Course Guarantee — or your money back',
  },
]

const FAQ_ITEMS = [
  {
    q: 'Do I need a technical background?',
    a: 'No. The AI Builder Program is designed for managers, marketers, operators, and knowledge workers. No coding experience is required — you\'ll learn to build real AI systems using no-code and low-code tools.',
  },
  {
    q: 'How is the program structured?',
    a: 'Each level consists of 4 live sessions over 2 weeks. Sessions are interactive and hands-on — every session ends with something deployable. You can take levels individually or bundle Core (Levels 1–3) and Advanced (Levels 4–5).',
  },
  {
    q: 'How much does it cost?',
    a: 'Each level is $999. You can take Core on its own (Levels 1–3), or bundle Core + Advanced (all 5 levels) for the full journey. Every level comes with a money-back guarantee.',
  },
  {
    q: 'What if I miss a live session?',
    a: 'All sessions are recorded and available for you to watch on your own schedule. You\'ll also have access to dedicated TAs who can help you catch up and get hands-on support.',
  },
  {
    q: 'How often do new cohorts start?',
    a: 'Multiple cohorts start every month with both morning and afternoon session options, so you can find a schedule that works for you. New cohort dates are posted regularly.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes. Every level culminates in a verified certificate of completion from Leland. Finish all five levels and earn the full AI Builder designation — a signal to employers, clients, and colleagues that you operate at the highest level of AI proficiency.',
  },
  {
    q: 'Can I start at a level other than Level 1?',
    a: 'You can jump to the level that matches your experience. That said, Core (Levels 1–3) is designed as a 6-week progression that takes most builders from AI user to running their own autonomous agent system.',
  },
]

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="var(--yellow)">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

function BlueprintAdmin({ enabled, onToggle }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className="admin-panel" ref={panelRef}>
      <button className="admin-trigger" onClick={() => setOpen(!open)} aria-label="Admin tools">
        <span className="admin-dot" />
        <span className="admin-dot" />
        <span className="admin-dot" />
      </button>
      {open && (
        <div className="admin-menu">
          <h4 className="admin-menu-title">Admin Tools</h4>
          <label className="admin-toggle">
            <span className="admin-toggle-label">Blueprint Mode</span>
            <input type="checkbox" checked={enabled} onChange={onToggle} />
            <span className="admin-switch" />
          </label>
        </div>
      )}
    </div>
  )
}

export default function AIBuilderProgram() {
  const [expandedLevel, setExpandedLevel] = useState(null)
  const [blueprint, setBlueprint] = useState(true)

  return (
    <div className={blueprint ? 'aibp-blueprint' : ''}>
      <Navbar variant="sticky" />

      {/* Hero + Stats wrapper for seamless pattern */}
      <div className="aibp-hero-wrap" style={blueprint ? { '--bp-pattern': `url(${diagonalPattern})` } : undefined}>
        <section className="aibp-hero">
          <div className="section-container">
            <span className="aibp-hero-label">AI Builder Program</span>
            <h1 className="aibp-hero-title">
              Learn to build AI that<br />works like you do
            </h1>
            <p className="aibp-hero-tagline">
              A 5-level, cohort-based program that takes you from casual AI user to building production-grade autonomous systems. No technical background required.
            </p>
            <div className="aibp-hero-actions">
              <a href="https://ai.joinleland.com/" target="_blank" rel="noopener noreferrer" className="aibp-cta-primary">Enroll now</a>
              <a href="#levels" className="aibp-cta-secondary">Explore the levels</a>
            </div>
            <div className="aibp-hero-proof">
              <div className="aibp-hero-stars">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="aibp-hero-proof-text">4.9/5 from 143+ reviews</span>
            </div>
          </div>
        </section>

        <section className="aibp-stats">
          <div className="section-container">
            <div className="aibp-stats-grid">
              <div className="aibp-stat">
                <span className="aibp-stat-number">5</span>
                <span className="aibp-stat-label">Progressive levels</span>
              </div>
              <div className="aibp-stat">
                <span className="aibp-stat-number">4</span>
                <span className="aibp-stat-label">Live sessions per level</span>
              </div>
              <div className="aibp-stat">
                <span className="aibp-stat-number">2 wks</span>
                <span className="aibp-stat-label">Per level</span>
              </div>
              <div className="aibp-stat">
                <span className="aibp-stat-number">$999</span>
                <span className="aibp-stat-label">Per level</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Overview — Core vs Advanced */}
      <section className="aibp-overview">
        <div className="section-container">
          <h2 className="aibp-section-title">Two paths, one program</h2>
          <p className="aibp-section-sub">Take Core on its own, or bundle Core + Advanced for the full journey.</p>
          <div className="aibp-paths-grid">
            <div className="aibp-path-card">
              <span className="aibp-path-label">Core</span>
              <h3 className="aibp-path-title">Levels 1 – 3</h3>
              <p className="aibp-path-desc">
                6 weeks total. Takes most builders from AI user to running their own autonomous agent system. Build workflows, deploy agents, and create systems that run on their own.
              </p>
              <div className="aibp-path-levels">
                <span>L1: Foundations</span>
                <span>L2: Agentic Workflows</span>
                <span>L3: Autonomous Systems</span>
              </div>
            </div>
            <div className="aibp-path-card aibp-path-card-dark">
              <span className="aibp-path-label">Advanced</span>
              <h3 className="aibp-path-title">Levels 4 – 5</h3>
              <p className="aibp-path-desc">
                For sophisticated builders who want to design multi-agent systems and ship production AI systems that scale — with memory, self-correction, and continuous improvement.
              </p>
              <div className="aibp-path-levels">
                <span>L4: Multi-Agent Systems</span>
                <span>L5: AI Orchestration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="aibp-levels" id="levels">
        <div className="section-container">
          <h2 className="aibp-section-title">The 5 levels</h2>
          <p className="aibp-section-sub">Every session ends with something deployable. Each build compounds into the next.</p>
          <div className="aibp-levels-list">
            {LEVELS.map((l) => (
              <div
                key={l.level}
                className={`aibp-level-card${expandedLevel === l.level ? ' aibp-level-card-expanded' : ''}`}
              >
                <button
                  className="aibp-level-header"
                  onClick={() => setExpandedLevel(expandedLevel === l.level ? null : l.level)}
                >
                  <div className="aibp-level-header-left">
                    <span className="aibp-level-badge">Level {l.level}</span>
                    <span className="aibp-level-tag">{l.tag}</span>
                  </div>
                  <h3 className="aibp-level-name">{l.name}</h3>
                  <span className={`aibp-level-chevron${expandedLevel === l.level ? ' aibp-level-chevron-up' : ''}`}>
                    <ChevronDown />
                  </span>
                </button>
                {expandedLevel === l.level && (
                  <div className="aibp-level-body">
                    <p className="aibp-level-desc">{l.desc}</p>
                    <div className="aibp-level-sessions">
                      <span className="aibp-level-sessions-label">Sessions</span>
                      <ol className="aibp-level-sessions-list">
                        {l.sessions.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </div>
                    <a href="https://ai.joinleland.com/" target="_blank" rel="noopener noreferrer" className="aibp-cta-primary aibp-level-cta">Enroll in Level {l.level}</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="aibp-included">
        <div className="section-container">
          <h2 className="aibp-section-title">What&rsquo;s included in every level</h2>
          <div className="aibp-included-grid">
            {INCLUDED.map((item) => (
              <div key={item.title} className="aibp-included-card">
                <img src={item.icon} alt="" className="aibp-included-icon" />
                <h3 className="aibp-included-card-title">{item.title}</h3>
                <p className="aibp-included-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="aibp-testimonials">
        <div className="section-container">
          <h2 className="aibp-section-title">What builders are saying</h2>
          <p className="aibp-section-sub">
            Rated 4.9/5 stars across 143+ reviews. Here&rsquo;s what graduates have to say.
          </p>
          <div className="aibp-testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="aibp-testimonial-card">
                <p className="aibp-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="aibp-testimonial-author">
                  <span className="aibp-testimonial-name">{t.name}</span>
                  <span className="aibp-testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="aibp-faq">
        <div className="section-container">
          <h2 className="aibp-section-title">Frequently asked questions</h2>
          <div className="aibp-faq-list">
            {FAQ_ITEMS.map((item) => (
              <details className="aibp-faq-item" key={item.q}>
                <summary className="aibp-faq-question">{item.q}</summary>
                <p className="aibp-faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aibp-final-cta">
        <div className="section-container">
          <div className="aibp-final-cta-inner">
            <h2 className="aibp-final-cta-title">Ready to become an AI builder?</h2>
            <p className="aibp-final-cta-desc">
              New cohorts start every month. Join thousands of professionals building the AI skills that matter.
            </p>
            <div className="aibp-hero-actions">
              <a href="https://ai.joinleland.com/" target="_blank" rel="noopener noreferrer" className="aibp-cta-primary">Enroll now</a>
              <a href="#levels" className="aibp-cta-secondary">Explore the levels</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BlueprintAdmin enabled={blueprint} onToggle={() => setBlueprint(!blueprint)} />
    </div>
  )
}
