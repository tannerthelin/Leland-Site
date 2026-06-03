export default function Banner({ onClose }) {
  return (
    <div className="banner">
      <strong>Leland has a new look!</strong>{' '}
      New brand, same mission: helping you reach your most ambitious goals.
      <button className="banner-close" onClick={onClose} aria-label="Close">
        &times;
      </button>
    </div>
  )
}
