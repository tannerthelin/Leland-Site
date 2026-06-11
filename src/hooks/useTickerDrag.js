import { useRef, useEffect } from 'react'

export default function useTickerDrag(duration) {
  const tickerRef = useRef(null)
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const lastTimeRef = useRef(null)
  const drag = useRef({ active: false, startX: 0 })
  const hovering = useRef(false)
  const externalPause = useRef(false)

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

    posRef.current -= (hw / (duration * 1000)) * elapsed
    posRef.current = wrap(posRef.current)
    applyPos()
    rafRef.current = requestAnimationFrame(tick)
  }

  function start() {
    if (rafRef.current || drag.current.active || hovering.current || externalPause.current) return
    lastTimeRef.current = null
    rafRef.current = requestAnimationFrame(tick)
  }

  function stop() {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    lastTimeRef.current = null
  }

  // Start on mount
  useEffect(() => {
    // Wait a frame so scrollWidth is available
    const id = requestAnimationFrame(() => start())
    return () => { cancelAnimationFrame(id); stop() }
  }, [])

  // Non-passive touch move
  useEffect(() => {
    const el = tickerRef.current
    if (!el) return
    const onTouchMove = (e) => {
      if (!drag.current.active) return
      e.preventDefault()
      const delta = e.touches[0].clientX - drag.current.startX
      drag.current.startX = e.touches[0].clientX
      posRef.current = wrap(posRef.current + delta)
      applyPos()
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [])

  function dragStart(clientX) {
    stop()
    drag.current = { active: true, startX: clientX }
  }

  function dragMove(clientX) {
    if (!drag.current.active || !trackRef.current) return
    const delta = clientX - drag.current.startX
    drag.current.startX = clientX
    posRef.current = wrap(posRef.current + delta)
    applyPos()
  }

  function dragEnd() {
    if (!drag.current.active) return
    drag.current.active = false
    if (!hovering.current && !externalPause.current) start()
  }

  function scrollBy(delta) {
    posRef.current = wrap(posRef.current + delta)
    applyPos()
  }

  // Exposed for external pause control (e.g. video modal)
  function pause() { externalPause.current = true; stop() }
  function resume() { externalPause.current = false; start() }

  const handlers = {
    onMouseEnter: () => { hovering.current = true; stop() },
    onMouseLeave: () => { hovering.current = false; if (!drag.current.active) start() },
    onMouseDown: (e) => dragStart(e.clientX),
    onMouseMove: (e) => dragMove(e.clientX),
    onMouseUp: () => dragEnd(),
    onTouchStart: (e) => dragStart(e.touches[0].clientX),
    onTouchEnd: () => dragEnd(),
  }

  return { tickerRef, trackRef, drag, handlers, pause, resume, scrollBy }
}
