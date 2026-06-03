import { useState, useEffect, useRef } from 'react'

export default function AdminPanel({ flags, onToggle }) {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className="admin-panel" ref={panelRef}>
      <button className="admin-trigger" onClick={() => setOpen(!open)} aria-label="Admin tools">
        <span className="admin-dot" />
        <span className="admin-dot" />
        <span className="admin-dot" />
      </button>

      {open && (
        <div className="admin-menu">
          <h4 className="admin-menu-title">Admin Tools</h4>
          {flags.map((flag) => (
            <label className="admin-toggle" key={flag.key}>
              <span className="admin-toggle-label">{flag.label}</span>
              <input
                type="checkbox"
                checked={flag.enabled}
                onChange={() => onToggle(flag.key)}
              />
              <span className="admin-switch" />
            </label>
          ))}
        </div>
      )}
    </div>
  )
}
