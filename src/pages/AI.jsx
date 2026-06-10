import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import NumberFlow from '@number-flow/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import googleLogo from '../assets/logos/org-logos/google.svg'
import bainLogo from '../assets/logos/org-logos/bain.svg'
import './AI.css'

const SOCIAL_PROOF = [
  { src: googleLogo, alt: 'Google', h: 20 },
  { text: 'JP Morgan Chase' },
  { src: bainLogo, alt: 'Bain', h: 16 },
  { text: 'QHP Capital' },
  { text: 'GSV' },
  { text: 'Partners Group' },
  { text: 'RunPod' },
]

const OFFERINGS = [
  {
    title: 'Train',
    subtitle: 'Upskill your people',
    desc: 'Teach your team to build with AI: agents and workflows, not just chatbot prompts.',
    link: '/ai-builder-program',
    linkLabel: 'Learn more →',
    internal: true,
  },
  {
    title: 'Build',
    subtitle: 'Deploy agentic workflows & infrastructure',
    desc: 'We scope, build, and run the agentic workflows and AI-native infrastructure inside your business.',
    link: '#cta',
    linkLabel: 'Learn more →',
  },
  {
    title: 'Hire',
    subtitle: 'Add AI-native talent',
    desc: 'Bring proven AI-native operators onto your full-time team, sourced and assessed on real builds.',
    link: '#cta',
    linkLabel: 'Learn more →',
  },
]

const UNIVERSAL_AGENTS = [
  { name: 'Company brain', desc: 'Answers any question across your tools, docs, and data' },
  { name: 'Chief of staff agent', desc: 'Preps you for meetings, tracks follow-ups, runs your day' },
  { name: 'Inbox & calendar agents', desc: 'Triage email, draft replies, protect focus time' },
  { name: 'Meeting agents', desc: 'Notes, action items, and follow-through automatically' },
  { name: 'Research agents', desc: 'Deep research on any prospect, market, or question in minutes' },
]

const FUNCTION_SOLUTIONS = [
  {
    title: 'Sales & RevOps',
    desc: 'Outbound pipeline-generation agents that prospect, research, and personalize at scale. Lead enrichment, auto-drafted follow-ups, and deal-risk flagging.',
  },
  {
    title: 'Marketing',
    desc: 'Growth marketing agents that run and scale experiments. Funnel optimization, content engines, and competitive monitoring.',
  },
  {
    title: 'Operations',
    desc: 'Analyst agent teams that automate manual workflows. Data bot internal lookups and process automation that removes bottlenecks.',
  },
  {
    title: 'Finance & Accounting',
    desc: 'Monthly reporting agents (40 hours to 40 minutes). Invoice, AP/AR, and reconciliation automation. Faster forecasting and close.',
  },
  {
    title: 'Customer Support',
    desc: 'Ticket triage and drafted responses that deflect volume. Knowledge-base agents that resolve issues instantly.',
  },
  {
    title: 'Exec & Strategy',
    desc: 'Board and investor reporting agents. Cross-functional dashboards that surface what matters.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Leland built and deployed an agent team that automated the work of our analysts, freeing them up for higher-value work.',
    name: 'Partner',
    role: 'Private equity firm',
  },
  {
    quote: "I'm saving around 15 hours a week. My team can execute without coming to me for everything.",
    name: 'VP',
    role: 'Commercial manufacturer',
  },
  {
    quote: 'My team will go from spending 40 hours to 40 minutes on these reports.',
    name: 'Accountant',
    role: 'Growth-stage startup',
  },
]

const STEPS = [
  {
    num: 1,
    title: 'Book a strategy call',
    desc: "Tell us about your team and goals. We'll discuss where AI actually fits.",
  },
  {
    num: 2,
    title: 'Get your AI roadmap',
    desc: 'We assess your people, workflows, and tools, and give you a clear plan.',
  },
  {
    num: 3,
    title: 'Execute with Leland',
    desc: 'Train your team, deploy agents, hire the talent you need.',
  },
  {
    num: 4,
    title: 'Measure & improve',
    desc: "Track what's working and adjust as your team grows.",
  },
]

const FAQ_ITEMS = [
  {
    q: 'What size company is Leland AI best for?',
    a: 'Leland works with companies ranging from growth-stage startups to large enterprises. Whether you have a team of 20 or 2,000, we tailor training, builds, and hiring to match your size and maturity.',
  },
  {
    q: 'Do our employees need a technical background?',
    a: 'No. Our programs are designed for managers, operators, marketers, and knowledge workers. No coding experience is required — your team will learn to build real AI systems using no-code and low-code tools.',
  },
  {
    q: 'We already use AI chat tools — do we still need this?',
    a: 'Chat tools are a starting point, not a strategy. Most teams use AI for one-off prompts. We help you move to agentic workflows, automated systems, and real infrastructure that compounds over time.',
  },
  {
    q: 'How is this different from hiring an AI consultant?',
    a: 'Consultants give you a deck. We train your people, build your systems, and place AI-native operators on your team. You walk away with capabilities, not just recommendations.',
  },
  {
    q: 'What does it cost?',
    a: "Pricing depends on the scope: training cohorts, custom builds, and hiring all have different models. Book a strategy call and we'll walk through options that fit your budget and goals.",
  },
]

function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="ai-stats" ref={ref}>
      <div className="section-container">
        <div className="ai-stats-grid">
          <div className="ai-stat">
            <span className="ai-stat-number">
              <NumberFlow value={inView ? 250 : 0} />+
            </span>
            <span className="ai-stat-label">Companies transformed</span>
          </div>
          <div className="ai-stat">
            <span className="ai-stat-number">
              <NumberFlow value={inView ? 80000 : 0} locales="en-US" />+
            </span>
            <span className="ai-stat-label">People trained</span>
          </div>
          <div className="ai-stat">
            <span className="ai-stat-number">
              <NumberFlow value={inView ? 1500 : 0} locales="en-US" />+
            </span>
            <span className="ai-stat-label">Agents shipped</span>
          </div>
        </div>
      </div>
    </section>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AI() {
  return (
    <>
      <Navbar variant="sticky" />

      {/* 1. Hero */}
      <section className="ai-hero">
        <div className="section-container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="ai-hero-title">Make your business AI-native</h1>
            <p className="ai-hero-sub">
              Leland trains your people, builds your agentic workflows, and hires the AI-native operators to run them.
            </p>
            <a href="#cta" className="ai-cta-primary">Book an AI strategy call</a>
          </motion.div>
        </div>
      </section>

      {/* 2. Social Proof Bar */}
      <section className="ai-social-proof">
        <div className="section-container">
          <div className="ai-social-proof-inner">
            <span className="ai-social-proof-label">Trusted by teams at</span>
            <div className="ai-social-proof-logos">
              {SOCIAL_PROOF.map((item, i) =>
                item.src ? (
                  <img key={i} src={item.src} alt={item.alt} style={{ height: item.h }} />
                ) : (
                  <span key={i}>{item.text}</span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Offerings */}
      <section className="ai-offerings">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="ai-section-title">An AI-native business needs three things</h2>
            <p className="ai-section-sub">We deliver all three.</p>
          </motion.div>
          <div className="ai-offerings-grid">
            {OFFERINGS.map((o) => (
              <motion.div
                key={o.title}
                className="ai-offering-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="ai-offering-title">{o.title}</h3>
                <p className="ai-offering-subtitle">{o.subtitle}</p>
                <p className="ai-offering-desc">{o.desc}</p>
                {o.internal ? (
                  <Link to={o.link} className="ai-offering-link">{o.linkLabel}</Link>
                ) : (
                  <a href={o.link} className="ai-offering-link">{o.linkLabel}</a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Credibility Band */}
      <section className="ai-credibility">
        <div className="section-container">
          <motion.div
            className="ai-credibility-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="ai-credibility-quote">
              Most leaders already know becoming AI-native is a top priority. What stops them isn't willingness — it's structure: how to drive adoption, where to start, what infrastructure is needed, how to do it securely. We've cleared those blockers for 250+ teams, and we can do it for yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. What AI Can Do */}
      <section className="ai-use-cases">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="ai-section-title">What AI can do for your business</h2>
            <p className="ai-section-sub">"AI strategy" stays abstract until you see the work. Here's what teams build.</p>
          </motion.div>

          <div className="ai-universal-band">
            <h3 className="ai-universal-band-title">Universal agents everyone needs</h3>
            <div className="ai-universal-list">
              {UNIVERSAL_AGENTS.map((a) => (
                <div key={a.name} className="ai-universal-item">
                  <span className="ai-universal-item-name">{a.name}</span>
                  <span className="ai-universal-item-desc">{a.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ai-functions-grid">
            {FUNCTION_SOLUTIONS.map((f) => (
              <motion.div
                key={f.title}
                className="ai-function-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h4 className="ai-function-card-title">{f.title}</h4>
                <p className="ai-function-card-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="ai-use-cases-callout">
            <p>
              <strong>Two ways to get there.</strong> Your team can learn to build these in the AI Builder Program, or we can build and deploy them for you. Most companies do both.
            </p>
            <div className="ai-use-cases-callout-links">
              <Link to="/ai-builder-program" className="ai-link-secondary">AI Builder Program</Link>
              <a href="#cta" className="ai-cta-primary">Book a strategy call</a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Bar */}
      <StatsBar />

      {/* 7. Testimonials */}
      <section className="ai-testimonials">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="ai-section-title">What our clients say</h2>
          </motion.div>
          <div className="ai-testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="ai-testimonial-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <p className="ai-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="ai-testimonial-author">
                  <span className="ai-testimonial-name">{t.name}</span>
                  <span className="ai-testimonial-role">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. How It Works */}
      <section className="ai-how-it-works">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="ai-section-title">How it works</h2>
          </motion.div>
          <div className="ai-steps-grid">
            {STEPS.map((s) => (
              <motion.div
                key={s.num}
                className="ai-step"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="ai-step-number">{s.num}</span>
                <h3 className="ai-step-title">{s.title}</h3>
                <p className="ai-step-desc">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="ai-how-it-works-cta">
            <a href="#cta" className="ai-cta-primary">Book an AI strategy call</a>
          </div>
        </div>
      </section>

      {/* 9. 100M Pledge Banner */}
      <section className="ai-pledge">
        <div className="section-container">
          <motion.div
            className="ai-pledge-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="ai-pledge-label">The 100M Pledge</span>
            <h2 className="ai-pledge-title">
              We're on a mission to train 100 million people to build with AI.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="ai-faq">
        <div className="section-container">
          <h2 className="ai-section-title">Frequently asked questions</h2>
          <div className="ai-faq-list">
            {FAQ_ITEMS.map((item) => (
              <details className="ai-faq-item" key={item.q}>
                <summary className="ai-faq-question">{item.q}</summary>
                <p className="ai-faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Footer CTA */}
      <section className="ai-final-cta" id="cta">
        <div className="section-container">
          <motion.div
            className="ai-final-cta-inner"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="ai-final-cta-title">Ready to make your business AI-native?</h2>
            <p className="ai-final-cta-desc">
              Book a free strategy call and get a custom AI roadmap for your team.
            </p>
            <a href="#cta" className="ai-cta-primary">Book an AI strategy call</a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
