import { useRef, useEffect } from 'react'

export default function useTickerDrag(duration) {
  const tickerRef = useRef(null)
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, startY: 0, direction: null })
  const externalPause = useRef(false)
  const hoverRef = useRef(false)
  // Speed multiplier: 1 = full auto-scroll, 0 = stopped. Smoothly tweened.
  const speedRef = useRef(1)
  const targetSpeedRef = useRef(1)

  function getHalfWidth() {
    return trackRef.current ? trackRef.current.scrollWidth / 2 : 0
  }

  function wrap(x) {
    const hw = getHalfWidth()
    if (!hw) return x
    let v = x % -hw
    if (v > 0) v -= hw
    return v
  }

  function applyPos() {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`
    }
  }

  function tick(timestamp) {
    if (!trackRef.current) return
    const hw = getHalfWidth()
    if (!hw) { rafRef.current = requestAnimationFrame(tick); return }

    if (!lastTimeRef.current) lastTimeRef.current = timestamp
    const elapsed = Math.min(timestamp - lastTimeRef.current, 64)
    lastTimeRef.current = timestamp

    // Smoothly tween speed toward target (ease factor per ms)
    const ease = 1 - Math.pow(0.985, elapsed)
    speedRef.current += (targetSpeedRef.current - speedRef.current) * ease

    if (speedRef.current > 0.001) {
      posRef.current -= (hw / (duration * 1000)) * elapsed * speedRef.current
      posRef.current = wrap(posRef.current)
      applyPos()
    }

    // Keep ticking while speed is non-zero or still decelerating
    if (speedRef.current > 0.001 || targetSpeedRef.current > 0) {
      rafRef.current = requestAnimationFrame(tick)
    } else {
      rafRef.current = null
    }
  }

  function startTick() {
    if (rafRef.current) return
    lastTimeRef.current = null
    rafRef.current = requestAnimationFrame(tick)
  }

  function setSpeed(target) {
    targetSpeedRef.current = target
    if (target > 0) startTick()
  }

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (!externalPause.current) startTick()
    })
    return () => { cancelAnimationFrame(id); if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // Non-passive touch move — only hijacks horizontal swipes
  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    const onTouchMove = (e) => {
      if (!drag.current.active) return
      const touch = e.touches[0]

      // On first move, decide direction
      if (drag.current.direction === null) {
        const dx = Math.abs(touch.clientX - drag.current.startX)
        const dy = Math.abs(touch.clientY - drag.current.startY)
        drag.current.direction = dy > dx ? 'v' : 'h'
        if (drag.current.direction === 'v') {
          drag.current.active = false
          if (!externalPause.current) setSpeed(1)
          return
        }
        drag.current.startX = touch.clientX
        return
      }

      if (drag.current.direction !== 'h') return
      e.preventDefault()
      const delta = touch.clientX - drag.current.startX
      drag.current.startX = touch.clientX
      posRef.current = wrap(posRef.current + delta)
      applyPos()
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [])

  function dragStart(clientX, clientY) {
    targetSpeedRef.current = 0
    speedRef.current = 0
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    drag.current = { active: true, startX: clientX, startY: clientY, direction: null }
  }

  function dragMove(clientX) {
    if (!drag.current.active || !trackRef.current) return
    const delta = clientX - drag.current.startX
    drag.current.startX = clientX
    posRef.current = wrap(posRef.current + delta)
    applyPos()
  }

  function dragEnd() {
    drag.current.active = false
    drag.current.direction = null
    if (!externalPause.current) setSpeed(1)
  }

  function smoothScrollBy(delta) {
    // Cancel any running animation
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
    targetSpeedRef.current = 0
    speedRef.current = 0

    const startPos = posRef.current
    const startTime = performance.now()
    const animDuration = 600

    function easeOut(t) { return 1 - (1 - t) ** 4 }

    function animate(now) {
      const elapsed = Math.min(now - startTime, animDuration)
      const t = elapsed / animDuration
      posRef.current = startPos + delta * easeOut(t)
      // Soft wrap: keep in bounds without a visual jump
      const hw = getHalfWidth()
      if (hw) {
        if (posRef.current > 0) posRef.current -= hw
        else if (posRef.current < -hw) posRef.current += hw
      }
      applyPos()
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        posRef.current = wrap(startPos + delta)
        applyPos()
        rafRef.current = null
        if (!externalPause.current && !hoverRef.current) setSpeed(1)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
  }

  function pause() { externalPause.current = true; setSpeed(0) }
  function resume() { externalPause.current = false; setSpeed(1) }

  const handlers = {
    onMouseEnter: () => { hoverRef.current = true; setSpeed(0) },
    onMouseLeave: () => { hoverRef.current = false; if (!drag.current.active && !externalPause.current) setSpeed(1) },
    onTouchStart: (e) => dragStart(e.touches[0].clientX, e.touches[0].clientY),
    onTouchEnd: () => dragEnd(),
  }

  return { tickerRef, trackRef, drag, handlers, pause, resume, scrollBy: smoothScrollBy }
}
