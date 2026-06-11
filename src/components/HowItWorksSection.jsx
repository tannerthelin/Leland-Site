import { useRef, useState, useEffect } from 'react'
import imgFolder from '../assets/img/folder.png'
import expertVideo from '../assets/img/expert-video.mp4'

import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'

const COACHES = [
  { img: pic01, name: 'Matthew McConaughey', desc: 'Founder of Lyrics of Livin newsletter' },
  { img: pic02, name: 'Nicole Walters', desc: 'NYT bestselling author and CEO' },
  { img: pic03, name: 'Ali Abdaal', desc: 'Productivity Expert, YouTuber, and author' },
  { img: pic06, name: 'James Clear', desc: 'Author of Atomic Habits' },
  { img: pic04, name: 'Susan Cain', desc: '#1 NYT bestselling author and speaker' },
  { img: pic05, name: 'Pat Flynn', desc: 'Entrepreneur, YouTuber, and podcast host' },
  { img: pic07, name: 'Andrew Huberman', desc: 'Neuroscientist and podcast host' },
  { img: pic08, name: 'Lisa Nichols', desc: 'Motivational speaker and author' },
]

const PARTICIPANTS = [
  { img: pic03 },
  { img: pic02 },
  { img: pic04 },
  { img: pic05 },
  { img: pic06 },
  { img: pic07 },
]

const STEPS = [
  {
    title: 'Work 1-on-1 with an expert',
    desc: "Get matched with a world-class coach who's already done what you're trying to do.",
    links: [{ label: 'Find an expert', href: '#' }], // typeform later
    visual: 'coaches',
  },
  {
    title: 'Work together in a group',
    desc: 'Join programs and bootcamps led by industry experts alongside a cohort of peers.',
    links: [
      { label: 'Browse upcoming Livestreams', href: 'https://www.joinleland.com/events' },
      { label: 'Browse Programs', href: 'https://www.joinleland.com/bootcamps' },
    ],
    visual: 'group-call',
  },
  {
    title: 'Learn on your own',
    desc: 'Access free livestreams, a content library, and AI-powered tools to level up at your own pace.',
    links: [{ label: 'Explore resources', href: 'https://www.joinleland.com/plus' }],
    img: imgFolder,
  },
]

function GroupCallMockup() {
  return (
    <div className="hiw-gcall">
      <div className="hiw-gcall-main">
        <video
          src={expertVideo}
          autoPlay
          loop
          muted
          playsInline
          className="hiw-gcall-video"
        />
      </div>
      <div className="hiw-gcall-strip">
        {PARTICIPANTS.map((p, i) => (
          <div key={i} className="hiw-gcall-thumb">
            <img src={p.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const jcCardRef = useRef(null)
  const coachesContainerRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [jcOffset, setJcOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight
      const scrolled = -rect.top
      const scrollable = sectionHeight - viewportHeight

      if (scrolled <= 0) {
        setActiveStep(0)
        setScrollProgress(0)
      } else if (scrolled >= scrollable) {
        setActiveStep(2)
        setScrollProgress(1)
      } else {
        const progress = scrolled / scrollable
        const step = Math.min(2, Math.floor(progress * 3))
        setActiveStep(step)
        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const measure = () => {
      const card = jcCardRef.current
      const container = coachesContainerRef.current
      if (!card || !container) return
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const containerWidth = container.offsetWidth
      setJcOffset(cardCenter - containerWidth / 2)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // coachOffset: 0–1 within step 1
  const coachOffset = Math.min(1, Math.max(0, scrollProgress * 3))
  // Phase 1 (first 60%): horizontal scroll to center James Clear
  const scrollPhase = Math.min(1, coachOffset / 0.6)
  // Phase 2 (last 40%): show "Matched" tag
  const jcMatched = coachOffset >= 0.6

  const visualClass = (i) =>
    i === activeStep ? 'hiw-visual-active' : i < activeStep ? 'hiw-visual-exited' : ''

  return (
    <section className="hiw-section" ref={sectionRef}>
      <div className="hiw-sticky">
        <div className="hiw-left">
          <div className="hiw-progress">
            {[0, 1, 2].map((i) => {
              const segStart = i / 3
              const segEnd = (i + 1) / 3
              const fill = Math.min(1, Math.max(0, (scrollProgress - segStart) / (segEnd - segStart)))
              return (
                <div key={i} className="hiw-progress-seg">
                  <div className="hiw-progress-fill" style={{ width: `${fill * 100}%` }} />
                </div>
              )
            })}
          </div>
          <h2 className="hiw-heading">Get expert help, your way</h2>
          <div className="hiw-steps">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className={`hiw-step ${visualClass(i)}`}
              >
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
                <div className="hiw-step-ctas">
                  {step.links.map((link, j) => (
                    <a key={j} href={link.href} className="hiw-step-cta">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hiw-right">
          {/* Step 1: scrolling coach cards */}
          <div ref={coachesContainerRef} className={`hiw-visual hiw-visual-coaches ${visualClass(0)}`}>
            <div
              ref={trackRef}
              className="hiw-coaches-track"
              style={{ transform: `translateX(${-scrollPhase * jcOffset}px)` }}
            >
              {COACHES.map((coach, i) => (
                <div key={i} className={`hiw-coach-card ${jcMatched && i !== 3 ? 'hiw-coach-card-dimmed' : ''}`} ref={i === 3 ? jcCardRef : undefined}>
                  <img src={coach.img} alt={coach.name} className="hiw-coach-photo" />
                  <h3 className="hiw-coach-name">{coach.name}</h3>
                  <p className="hiw-coach-desc">{coach.desc}</p>
                  {i === 3 && (
                    <div className={`hiw-coach-matched ${jcMatched ? 'hiw-coach-matched-visible' : ''}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Matched
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: group call mockup */}
          <div className={`hiw-visual ${visualClass(1)}`}>
            <GroupCallMockup />
          </div>

          {/* Step 3: static image */}
          <div className={`hiw-visual hiw-visual-folder ${visualClass(2)}`}>
            <img src={STEPS[2].img} alt={STEPS[2].title} />
          </div>
        </div>
      </div>
    </section>
  )
}
