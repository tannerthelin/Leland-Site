import { Link } from 'react-router-dom'
import thumb1 from '../assets/img/video-thumbnails/image 1276.png'
import thumb2 from '../assets/img/video-thumbnails/image 1277.png'
import thumb3 from '../assets/img/video-thumbnails/image 1278.png'
import thumb4 from '../assets/img/video-thumbnails/image 1279.png'
import thumb5 from '../assets/img/video-thumbnails/image 1280.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.5 4.5L15.5 10L6.5 15.5V4.5Z" fill="white" />
  </svg>
)

const CARDS = [
  // Column 1
  { type: 'video', thumb: thumb1, name: 'Sarah K.', role: 'Career Changer → Product Manager', tall: true },
  { type: 'text', quote: '"Leland helped me land my dream job at Google. The coaching was incredibly personalized and actionable."', name: 'Michael R.', role: 'Software Engineer at Google', avatar: pic05 },

  // Column 2
  { type: 'video', thumb: thumb2, name: 'James L.', role: 'MBA Admit, Harvard Business School', tall: true },
  { type: 'case-study', org: 'Kellogg Business School', stat: '94%', statLabel: 'of students rated coaching as "highly valuable"', desc: 'Kellogg partnered with Leland to provide career coaching for MBA candidates across consulting, tech, and finance tracks.' },

  // Column 3
  { type: 'video', thumb: thumb3, name: 'Priya M.', role: 'Consultant at McKinsey' },
  { type: 'text', quote: '"After 3 sessions, I completely transformed my interview prep. Got offers from both BCG and Bain."', name: 'David T.', role: 'Consultant at BCG', avatar: pic06 },
  { type: 'video', thumb: thumb4, name: 'Alex W.', role: 'AI Product Lead', tall: false },

  // Column 4
  { type: 'text', quote: '"The AI tools combined with expert coaching is unlike anything else out there. Absolutely worth it."', name: 'Nina S.', role: 'Data Scientist at Meta', avatar: pic07 },
  { type: 'video', thumb: thumb5, name: 'Jordan P.', role: 'Stanford MBA Admit', tall: true },
  { type: 'text', quote: '"I went from zero consulting knowledge to an MBB offer in 4 months."', name: 'Chris B.', role: 'Consultant at Bain', avatar: pic08 },
]

// Distribute cards into 4 columns for masonry
const COLUMNS = [
  [CARDS[0], CARDS[1]],
  [CARDS[2], CARDS[3]],
  [CARDS[4], CARDS[5], CARDS[6]],
  [CARDS[7], CARDS[8], CARDS[9]],
]

function VideoCard({ card }) {
  return (
    <div className={`tcard tcard-video${card.tall ? ' tcard-tall' : ''}`}>
      <img src={card.thumb} alt="" className="tcard-img" />
      <div className="tcard-overlay" />
      <span className="tcard-play">
        <PlayIcon />
      </span>
      <div className="tcard-caption">
        <span className="tcard-name">{card.name}</span>
        <span className="tcard-role">{card.role}</span>
      </div>
    </div>
  )
}

function TextCard({ card }) {
  return (
    <div className="tcard tcard-text">
      <p className="tcard-quote">{card.quote}</p>
      <div className="tcard-author">
        <img src={card.avatar} alt="" className="tcard-avatar" />
        <div>
          <span className="tcard-name">{card.name}</span>
          <span className="tcard-role">{card.role}</span>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({ card }) {
  return (
    <div className="tcard tcard-case-study">
      <div className="tcard-cs-badge">Case Study</div>
      <span className="tcard-cs-org">{card.org}</span>
      <div className="tcard-cs-stat-row">
        <span className="tcard-cs-stat">{card.stat}</span>
        <span className="tcard-cs-stat-label">{card.statLabel}</span>
      </div>
      <p className="tcard-cs-desc">{card.desc}</p>
    </div>
  )
}

function Card({ card }) {
  if (card.type === 'video') return <VideoCard card={card} />
  if (card.type === 'text') return <TextCard card={card} />
  if (card.type === 'case-study') return <CaseStudyCard card={card} />
  return null
}

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

        <div className="tboard">
          {COLUMNS.map((col, i) => (
            <div className="tboard-col" key={i}>
              {col.map((card, j) => (
                <Card card={card} key={j} />
              ))}
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <Link to="/reviews" className="testimonials-btn">See all 29,524 reviews</Link>
        </div>
      </div>
    </section>
  )
}
