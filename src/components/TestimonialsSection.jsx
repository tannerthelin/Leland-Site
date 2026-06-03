import { Link } from 'react-router-dom'
import thumb1 from '../assets/img/video-thumbnails/image 1276.png'
import thumb2 from '../assets/img/video-thumbnails/image 1277.png'
import thumb3 from '../assets/img/video-thumbnails/image 1278.png'
import thumb4 from '../assets/img/video-thumbnails/image 1279.png'
import thumb5 from '../assets/img/video-thumbnails/image 1280.png'
import thumb6 from '../assets/img/video-thumbnails/image 1281.png'
import thumb7 from '../assets/img/video-thumbnails/image 1282.png'

const thumbnails = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7]

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="white" />
  </svg>
)

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-container">
        <div className="testimonials-header">
          <p className="testimonials-label">
            <span className="testimonials-dot" />
            Testimonials
          </p>
          <h2 className="testimonials-heading">Don&rsquo;t just take our word for it.</h2>
        </div>

        <div className="testimonials-thumbs">
          {thumbnails.map((src, i) => (
            <div key={i} className="testimonials-thumb-wrap">
              <img src={src} alt="" className="testimonials-thumb" />
              <span className="testimonials-play">
                <PlayIcon />
              </span>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <Link to="/reviews" className="testimonials-btn">See all 29,276 reviews</Link>
        </div>
      </div>
    </section>
  )
}
