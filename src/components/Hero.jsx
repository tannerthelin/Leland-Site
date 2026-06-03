import { motion } from 'motion/react'
import SoftBlurText from './SoftBlurText'
import cloudsVideo from '../assets/img/clouds-2.mp4'
import aiIcon from '../assets/icons/ai.svg'
import careerIcon from '../assets/icons/arrow-up-chart.svg'
import schoolIcon from '../assets/icons/school.svg'
import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'

const AVATARS = [pic01, pic02, pic03, pic04]

const PILLS = [
  { label: 'Learn AI', icon: aiIcon },
  { label: 'Build your career', icon: careerIcon },
  { label: 'Get into school', icon: schoolIcon },
]


function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <video src={cloudsVideo} autoPlay loop muted playsInline />
      </div>
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
      >
        <div className="hero-text-group">
          <h1 className="hero-heading">
            <SoftBlurText text="Own your future" delay={0.25} />
          </h1>
          <p className="hero-sub">
            Millions of people are reaching ambitious goals, building with AI, and leveling up their teams.
          </p>
        </div>

        <div className="hero-search-group">
          <div className="search-bar">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
            </svg>
            <input type="text" placeholder="What do you want to achieve?" />
            <button className="search-submit">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="pills">
            {PILLS.map((pill) => (
              <a href="#" className="pill" key={pill.label}>
                <img src={pill.icon} alt="" className="pill-icon" />
                {pill.label}
              </a>
            ))}
          </div>
        </div>

        <div className="trust-row">
          <div className="trust-avatars">
            {AVATARS.map((src, i) => (
              <img className="avatar" key={i} src={src} alt="" />
            ))}
          </div>
          <div className="trust-info">
            <div className="trust-stars">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} />)}
              </div>
              <span className="trust-rating">4.99 <span>(28k+)</span></span>
            </div>
            <span className="trust-text">Trusted by millions of people</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
