import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
} from 'motion/react'

//   glues "with it." so "it." can never wrap to its own line
const LINES = [
  'The world is changing fast.',
  'Leland helps you change with it.',
]

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  return (
    <motion.span className="narrative-word" style={{ opacity }}>
      {children}
    </motion.span>
  )
}

// "fast." gets an emphasis treatment that animates in right after the word
// lights up. Style is toggled via AdminPanel ("Fast" Emphasis):
// none | line (hand-drawn underline) | color (fades to yellow) | highlight (marker swipe)
const EMPHASIS_WORD = 'fast.'

function EmphasisWord({ children, progress, range, variant }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const drawRange = [range[1], Math.min(range[1] + 0.07, 1)]
  const pathLength = useTransform(progress, drawRange, [0, 1])
  // Color sweep runs over the word's own reveal range — in sync with the
  // grey→ink scrub of the surrounding words, not after it.
  const fill = useTransform(progress, range, ['0%', '100%'])
  const sweep = useMotionTemplate`linear-gradient(90deg, #FFD667 ${fill}, rgba(34, 34, 34, 0.12) ${fill})`

  if (variant === 'none') {
    return (
      <motion.span className="narrative-word" style={{ opacity }}>
        {children}{' '}
      </motion.span>
    )
  }

  if (variant === 'color') {
    return (
      <>
        <motion.span
          className="narrative-word narrative-word-sweep"
          style={{ backgroundImage: sweep }}
        >
          {children}
        </motion.span>
        {' '}
      </>
    )
  }

  if (variant === 'highlight') {
    return (
      <>
        <motion.span className="narrative-word narrative-word-emphasis" style={{ opacity }}>
          <svg className="narrative-highlight" viewBox="0 0 200 60" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M3 32 Q 55 27, 105 31 T 197 29"
              fill="none"
              stroke="rgba(128, 172, 237, 0.45)"
              strokeWidth="46"
              strokeLinecap="butt"
              style={{ pathLength }}
            />
          </svg>
          {children}
        </motion.span>
        {' '}
      </>
    )
  }

  // 'line' — hand-drawn underline
  return (
    <>
      <motion.span className="narrative-word narrative-word-emphasis" style={{ opacity }}>
        {children}
        <svg className="narrative-underline" viewBox="0 0 200 18" preserveAspectRatio="none" aria-hidden="true">
          <motion.path
            d="M5 12 C 45 16, 95 5, 140 9 S 185 11, 196 8"
            fill="none"
            stroke="var(--yellow)"
            strokeWidth="6"
            strokeLinecap="round"
            style={{ pathLength }}
          />
        </svg>
      </motion.span>
      {' '}
    </>
  )
}

// Pinned scroll moment: the statement sits fixed at viewport center while
// scroll progress lights the words up one by one, then the page releases
// into the goals section. Words finish at 75% so the lit statement holds
// briefly before unpinning.
export default function NarrativeSection({ emphasisStyle = 'line' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Latch the high-water mark so words never fade back out — once a word is
  // fully revealed it stays revealed, even when scrolling back up.
  const latchedProgress = useMotionValue(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > latchedProgress.get()) latchedProgress.set(v)
  })

  const lines = LINES.map((l) => l.split(' '))
  const total = lines.flat().length
  let idx = 0

  return (
    <section className="narrative-section" ref={ref}>
      <div className="narrative-sticky">
        <h2 className="narrative-heading">
          {lines.map((words, li) => (
            <span className="narrative-line" key={li}>
              {words.map((word) => {
                const start = (idx / total) * 0.75
                idx += 1
                const end = (idx / total) * 0.75
                if (word === EMPHASIS_WORD) {
                  return (
                    <EmphasisWord key={`${li}-${idx}`} progress={latchedProgress} range={[start, end]} variant={emphasisStyle}>
                      {word}
                    </EmphasisWord>
                  )
                }
                return (
                  <Word key={`${li}-${idx}`} progress={latchedProgress} range={[start, end]}>
                    {word}{' '}
                  </Word>
                )
              })}
            </span>
          ))}
        </h2>
      </div>
    </section>
  )
}
