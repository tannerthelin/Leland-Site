import { useRef } from 'react'
import useTickerDrag from '../hooks/useTickerDrag'
import SoftBlurText from './SoftBlurText'
const R2 = 'https://pub-ad204fe9e494441088500b2aa6f689b9.r2.dev/become-an-expert/Experts'
const expertKelsey = `${R2}/Kelsey%20Kephart.png`
const expertKerry = `${R2}/Kerry%20Patriarca.png`
const expertAndrew = `${R2}/Andrew%20Quillen.png`
const expertAlbert = `${R2}/Albert%20Chan.png`
const expertConnorO = `${R2}/Connor%20Owens.png`
const expertMachmud = `${R2}/Machmud%20Makhmudov.png`
const expertMatt = `${R2}/Matt%20Kilby.png`
const expertAlison = `${R2}/Alison%20L.png`
const expertConnorC = `${R2}/Connor%20Crandall.png`
const expertKenny = `${R2}/Kenny%20Johnson.png`
const expertArthur = `${R2}/Arthur%20Balagula.png`
const expertClaire = `${R2}/Claire%20Rafson.png`

const experts = [
  { img: expertKelsey, name: 'Kelsey K.', desc: 'Former Columbia Business School admissions officer' },
  { img: expertAndrew, name: 'Andrew Q.', desc: 'Former OpenAI staffer and Spotify Head of AI' },
  { img: expertConnorO, name: 'Connor O.', desc: 'Former Google, YouTube, and Meta PM' },
  { img: expertKerry, name: 'Kerry P.', desc: 'Former Harvard admissions officer' },
  { img: expertKenny, name: 'Kenny J.', desc: 'Private equity investor at KKR, ex-Blackstone' },
  { img: expertAlbert, name: 'Albert C.', desc: 'AI professor at UW and former Google and Meta exec' },
  { img: expertMachmud, name: 'Machmud M.', desc: 'Rhodes Scholar, Stanford Law, and White House alum' },
  { img: expertConnorC, name: 'Connor C.', desc: 'Vice President at H.I.G. Capital, ex-Warburg Pincus' },
  { img: expertClaire, name: 'Claire R.', desc: 'Knight-Hennessy Scholar, former Nike and Bain' },
  { img: expertArthur, name: 'Arthur B.', desc: 'Google AI marketing lead and MIT Sloan MBA' },
  { img: expertAlison, name: 'Alison L.', desc: 'Former Bain and McKinsey hiring manager' },
  { img: expertMatt, name: 'Matt K.', desc: 'SpaceX engineer, former BCG project lead, and MIT Sloan MBA' },
]

export default function ExpertsSection({ heading, subtitle, className, cta }) {
  const { tickerRef, trackRef, handlers, scrollBy } = useTickerDrag(75)

  return (
    <section className={`experts-section${className ? ` ${className}` : ''}`}>
      <div className="experts-header">
        <h2 className="experts-heading">
          <SoftBlurText text={heading || "Experts who've done the work."} delay={0.1} />
        </h2>
        <p className="experts-sub">
          {subtitle || "Now they're here to help you do the same—with clear, honest advice from lived experience."}
        </p>
        {cta}
      </div>

      <div className="experts-ticker" ref={tickerRef} {...handlers}>
        <button className="bae-ticker-arrow bae-ticker-arrow-left" onClick={() => scrollBy(500)} aria-label="Scroll left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button className="bae-ticker-arrow bae-ticker-arrow-right" onClick={() => scrollBy(-500)} aria-label="Scroll right">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div className="experts-track" ref={trackRef}>
          {[...experts, ...experts].map((expert, i) => (
            <div className="expert-card" key={i}>
              <img src={expert.img} alt={expert.name} className="expert-photo" />
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-desc">{expert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
