import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, LayoutGroup, motion, useInView } from 'motion/react'
import imgFolder from '../assets/img/folder.png'
import expertVideo from '../assets/img/expert-video.mp4'
import listenerVideo from '../assets/img/how-it-works-images/listener-video.mp4'

import bg1 from '../assets/img/background-textures/background-1.avif'
import bg2 from '../assets/img/background-textures/background-2.avif'
import bg3 from '../assets/img/background-textures/background-3.avif'
import bg4 from '../assets/img/background-textures/background-4.avif'

import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'

const COACHES = [
  { img: pic03, name: 'Ali Abdaal', desc: 'Productivity Expert, YouTuber, and author' },
  { img: pic06, name: 'James Clear', desc: 'Author of Atomic Habits', matched: true },
  { img: pic04, name: 'Susan Cain', desc: '#1 NYT bestselling author and speaker' },
  { img: pic05, name: 'Pat Flynn', desc: 'Entrepreneur, YouTuber, and podcast host' },
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
    title: 'Join a free livestream',
    desc: 'Watch live sessions with industry experts, ask questions in real-time, and connect with peers.',
    cta: 'Browse upcoming livestreams',
    href: 'https://www.joinleland.com/events',
  },
  {
    title: 'Work 1-on-1 with an expert',
    desc: "Get matched with a world-class coach who's already done what you're trying to do.",
    cta: 'Find an expert',
    href: '#', // typeform later
  },
  {
    title: 'Enroll in a program',
    desc: 'Join structured bootcamps and programs led by experts alongside a cohort of peers.',
    cta: 'Browse programs',
    href: 'https://www.joinleland.com/bootcamps',
  },
  {
    title: 'Explore a content library',
    desc: 'Access on-demand sessions, guides, and AI-powered tools to level up at your own pace.',
    cta: 'Explore resources',
    href: 'https://www.joinleland.com/plus',
  },
]

const TAB_DURATION = 6000

function CoachesVisual() {
  return (
    <div className="hiw-visual hiw-visual-active hiw-visual-coaches">
      <div className="hiw-coaches-track" style={{ transform: 'translateX(0)' }}>
        {COACHES.map((coach, i) => (
          <div
            key={i}
            className={`hiw-coach-card ${!coach.matched ? 'hiw-coach-card-dimmed' : ''}`}
          >
            <img src={coach.img} alt={coach.name} className="hiw-coach-photo" />
            <h3 className="hiw-coach-name">{coach.name}</h3>
            <p className="hiw-coach-desc">{coach.desc}</p>
            {coach.matched && (
              <div className="hiw-coach-matched hiw-coach-matched-visible">
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
  )
}

function LivestreamVisual() {
  return (
    <div className="hiw-visual hiw-visual-active">
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
    </div>
  )
}

function ProgramVisual() {
  return (
    <div className="hiw-visual hiw-visual-active">
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
      </div>
    </div>
  )
}

function LibraryVisual() {
  return (
    <div className="hiw-visual hiw-visual-active hiw-visual-folder">
      <img src={imgFolder} alt="Content library" />
    </div>
  )
}

const TRANSITION = { duration: 0.6, ease: [0.33, 0, 0.2, 1] }

const IMGS = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08]

const SESSIONS = [
  { month: 'JUL', day: 22, title: 'Kickoff', time: 'Happening now', timeAccent: true, detail: 'Started at 4:00 PM · 45 min', status: 'Join', live: true },
  { month: 'JUL', day: 23, title: 'Understanding the Basics', time: 'Tomorrow at 4:00 PM · 45 min', status: 'Starts in 1d' },
  { month: 'JUL', day: 25, title: 'Setting Goals & Building a Plan', time: 'Wed, Jul 25 at 12:30 PM · 45 min', status: 'Starts in 2d' },
  { month: 'JUL', day: 27, title: 'Practice & Feedback', time: 'Fri, Jul 27 at 12:30 PM · 45 min', status: 'Starts in 2d' },
]

function SessionCard({ session }) {
  return (
    <div className="hwt-session">
      <div className="hwt-session-date">
        <span className="hwt-session-month">{session.month}</span>
        <span className="hwt-session-day">{session.day}</span>
      </div>
      <div className="hwt-session-info">
        <span className="hwt-session-title">{session.title}</span>
        <span className="hwt-session-time">
          {session.timeAccent && <span className="hwt-session-live">{session.time}</span>}
          {!session.timeAccent && session.time}
          {session.detail && <> · {session.detail}</>}
        </span>
      </div>
      <div className="hwt-session-actions">
        <span className={`hwt-session-status${session.live ? ' hwt-session-status--live' : ''}`}>
          {session.status}
        </span>
      </div>
    </div>
  )
}

function bgStyle(img) {
  return { backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }
}

function SharedVisual({ activeTab }) {
  const showMid = activeTab === 0
  const showBottom = activeTab === 2

  return (
    <div className="hwt-sv">
      {/* Top row — 2 rectangles (second collapses on tab 1) */}
      <motion.div
        className="hwt-sv-row hwt-sv-top"
        animate={{
          flex: activeTab === 2 ? '0 0 35%' : '1 1 0%',
        }}
        transition={TRANSITION}
      >
        <motion.div
          className="hwt-sv-rect hwt-sv-video"
          animate={{ maxWidth: activeTab === 2 ? '45%' : '100%' }}
          transition={TRANSITION}
        >
          <video src={expertVideo} autoPlay loop muted playsInline />
          <AnimatePresence>
            {activeTab === 0 && (
              <motion.div
                className="hwt-sv-live-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { ...TRANSITION, delay: 1 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              >
                <span className="hwt-sv-live-dot" />
                LIVE
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="hwt-sv-rect hwt-sv-video"
          animate={{
            flex: activeTab === 1 ? 1 : 0,
            opacity: activeTab === 1 ? 1 : 0,
          }}
          transition={activeTab === 2 ? { duration: 0 } : { ...TRANSITION, delay: activeTab === 1 ? 0.5 : 0 }}
        >
          <video src={listenerVideo} autoPlay loop muted playsInline />
        </motion.div>
      </motion.div>

      {/* Middle row — 6 rectangles (tab 1 only) */}
      <motion.div
        className="hwt-sv-row hwt-sv-mid"
        animate={{
          flex: showMid ? '0 0 80px' : '0 0 0px',
          opacity: showMid ? 1 : 0,
        }}
        transition={activeTab === 2 ? { duration: 0 } : { ...TRANSITION, delay: showMid ? 0.5 : 0 }}
      >
        {[IMGS[1], IMGS[3], IMGS[4], IMGS[5], IMGS[6], IMGS[7]].map((img, i) => (
          <motion.div
            key={i}
            className="hwt-sv-rect"
            style={bgStyle(img)}
            animate={{
              scale: showMid ? 1 : 0.5,
              opacity: showMid ? 1 : 0,
            }}
            transition={showMid ? { duration: 0.3, ease: TRANSITION.ease, delay: 0.6 + i * 0.06 } : { duration: 0 }}
          />
        ))}
      </motion.div>

      {/* Bottom — session cards (tab 2) */}
      <AnimatePresence>
        {showBottom && (
          <motion.div
            key="bottom"
            className="hwt-sv-row hwt-sv-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={TRANSITION}
          >
            {SESSIONS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { ...TRANSITION, delay: 0.3 + i * 0.08 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              >
                <SessionCard session={s} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const PER_TAB_VISUALS = { 3: LibraryVisual }
const BACKGROUNDS = [bg2, bg1, bg3, bg4]

function PlusMinusIcon({ isOpen }) {
  return (
    <div className="hwt-icon">
      <motion.span
        className="hwt-icon-bar hwt-icon-bar-h"
        animate={{ opacity: 1 }}
      />
      <motion.span
        className="hwt-icon-bar hwt-icon-bar-v"
        animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const [timerKey, setTimerKey] = useState(0)

  // The auto-advance sequence waits until the section is actually on screen,
  // so visitors see it from the beginning instead of mid-cycle.
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.35 })

  const advance = useCallback(() => {
    setActiveTab((prev) => (prev + 1) % STEPS.length)
    setTimerKey((k) => k + 1)
  }, [])

  const selectTab = useCallback((i) => {
    setActiveTab(i)
    setTimerKey((k) => k + 1)
  }, [])

  // Restart the progress fill from zero the moment the section enters view
  useEffect(() => {
    if (inView) setTimerKey((k) => k + 1)
  }, [inView])

  useEffect(() => {
    if (!inView) return
    const id = setTimeout(advance, TAB_DURATION)
    return () => clearTimeout(id)
  }, [activeTab, timerKey, advance, inView])

  const PerTabVisual = PER_TAB_VISUALS[activeTab]

  return (
    <section className="hwt-section" ref={sectionRef}>
      <div className="hwt-inner">
        {/* Mobile-only heading so the order can be heading → visual → accordion */}
        <h2 className="hwt-heading hwt-heading-mobile">Everything you need to reach your goals</h2>
        <div className="hwt-left">
          <h2 className="hwt-heading hwt-heading-desktop">Everything you need to reach your goals</h2>
          <div className="hwt-accordion">
            {STEPS.map((step, i) => {
              const isActive = i === activeTab
              return (
                <div key={i} className="hwt-item">
                  <button
                    className={`hwt-item-header ${isActive ? 'hwt-item-header-active' : ''}`}
                    onClick={() => selectTab(i)}
                  >
                    <span className="hwt-item-title">{step.title}</span>
                    <PlusMinusIcon isOpen={isActive} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        className="hwt-item-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="hwt-item-content">
                          <p className="hwt-item-desc">{step.desc}</p>
                          <div className="hwt-item-actions">
                            <a href={step.href} className="hwt-item-cta">{step.cta}</a>
                            <div className="hwt-item-timer">
                              <div
                                key={timerKey}
                                className="hwt-item-timer-fill"
                                style={{
                                  animationDuration: `${TAB_DURATION}ms`,
                                  animationPlayState: inView ? 'running' : 'paused',
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
          <a href="https://www.joinleland.com/search" className="hwt-cta">Get started</a>
        </div>

        <div className="hwt-right">
          {BACKGROUNDS.map((bg, i) => (
            <div
              key={i}
              className={`hwt-bg-layer${i === activeTab ? ' hwt-bg-layer--active' : ''}`}
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}
          {activeTab <= 2 ? (
            <div className="hwt-visual-wrap">
              <SharedVisual activeTab={activeTab} />
            </div>
          ) : (
            <motion.div
              key={activeTab}
              className="hwt-visual-wrap"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {PerTabVisual && <PerTabVisual />}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
