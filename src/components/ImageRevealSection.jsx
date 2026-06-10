import { useRef, useState, useEffect } from 'react'
import bgImage from '../assets/img/background-textures/quote-bg.png'

export default function ImageRevealSection() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight

      const start = vh
      const end = 0
      const raw = 1 - (rect.top - end) / (start - end)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  const containerScale = 0.8 + eased * 0.2
  const imageScale = 1 / containerScale

  return (
    <section className="img-reveal-section" ref={sectionRef}>
      <div
        className="img-reveal-container"
        style={{ transform: `scale(${containerScale})` }}
      >
        <div
          className="img-reveal-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: `scale(${imageScale})`,
          }}
        />
        <div className="img-reveal-content">
          <h2 className="img-reveal-heading">Ambition lives here.</h2>
          <p className="img-reveal-desc">
            Leland exists to honor ambition and help more people realize it. With the right experts and the right community, opportunity stops being a privilege and starts becoming a plan.
          </p>
        </div>
      </div>
    </section>
  )
}
