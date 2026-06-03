import { useRef, useEffect } from 'react'
import { animate, cubicBezier } from 'motion/react'

const EASING = cubicBezier(0.22, 1, 0.36, 1)
const DURATION = 0.648       // 900ms * 0.72 speed multiplier
const STAGGER = 0.018        // 25ms * 0.72
const Y_TRAVEL = 9.28        // 16px * 0.58 y_travel_multiplier

export default function SoftBlurText({ text, delay = 0, className }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const spans = containerRef.current?.querySelectorAll('.soft-blur-char')
    if (!spans?.length) return

    const controls = []
    spans.forEach((span, i) => {
      if (span.dataset.space) return
      const ctrl = animate(
        span,
        {
          opacity: [0, 1],
          transform: [`translateY(${Y_TRAVEL}px)`, 'translateY(0px)'],
          filter: ['blur(12px)', 'blur(0px)'],
        },
        {
          duration: DURATION,
          ease: EASING,
          delay: delay + i * STAGGER,
        }
      )
      controls.push(ctrl)
    })

    return () => controls.forEach((c) => { c.stop?.(); c.cancel?.() })
  }, [delay, text])

  const chars = Array.from(text)

  return (
    <span ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="soft-blur-char"
          data-space={char === ' ' ? true : undefined}
          style={{
            display: 'inline-block',
            whiteSpace: 'pre',
            willChange: 'transform, opacity, filter',
            backfaceVisibility: 'hidden',
            ...(char !== ' ' ? { opacity: 0 } : {}),
          }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
