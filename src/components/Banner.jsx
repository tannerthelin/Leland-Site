import { Link } from 'react-router-dom'

// Whole banner navigates to the relaunch press release; the close button
// opts out via stopPropagation/preventDefault.
export default function Banner({ onClose }) {
  return (
    <Link to="/blog/leland-relaunch" className="banner">
      <strong>We&rsquo;re reintroducing Leland to the world.</strong>{' '}
      <span className="banner-cta">Read the press release &rarr;</span>
      <button
        className="banner-close"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          onClose()
        }}
        aria-label="Close"
      >
        &times;
      </button>
    </Link>
  )
}
