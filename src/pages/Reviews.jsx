import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'
import './Reviews.css'

const RATING_CATEGORIES = [
  { label: 'Expertise', score: 4.99 },
  { label: 'Communication', score: 4.98 },
  { label: 'Helpfulness', score: 4.99 },
  { label: 'Responsiveness', score: 4.97 },
  { label: 'Value', score: 4.95 },
  { label: 'Results', score: 4.99 },
]

const RATING_BARS = [
  { stars: 5, pct: 97 },
  { stars: 4, pct: 2 },
  { stars: 3, pct: 0.5 },
  { stars: 2, pct: 0.3 },
  { stars: 1, pct: 0.2 },
]

const REVIEWS = [
  {
    name: 'Jessica M.',
    subtitle: 'MBA Admissions',
    date: 'May 2026',
    stars: 5,
    text: "My coach was incredible. She helped me completely restructure my essays and think about my story in a way I never would have on my own. I got into my top choice program and I genuinely don't think I could have done it without her.",
    avatar: pic01,
  },
  {
    name: 'David R.',
    subtitle: 'Career Coaching',
    date: 'April 2026',
    stars: 5,
    text: "Went from feeling stuck in my role to landing a senior PM position at a top tech company. My coach helped me prep for interviews, negotiate my offer, and think strategically about my career trajectory.",
    avatar: pic02,
  },
  {
    name: 'Priya K.',
    subtitle: 'GMAT Prep',
    date: 'April 2026',
    stars: 5,
    text: "I struggled with quant for months on my own. After 6 sessions with my Leland coach, I improved my score by 80 points. The personalized approach made all the difference compared to generic test prep courses.",
    avatar: pic03,
  },
  {
    name: 'Marcus T.',
    subtitle: 'Executive Coaching',
    date: 'March 2026',
    stars: 5,
    text: "Worth every penny. My coach is a former McKinsey partner and the insights he shared about leadership and stakeholder management were things I couldn't learn from any book or course.",
    avatar: pic04,
  },
  {
    name: 'Sarah L.',
    subtitle: 'College Admissions',
    date: 'March 2026',
    stars: 5,
    text: "Our daughter got into 4 of her top 5 schools. Her coach, a former admissions officer at Stanford, helped refine her application in ways we never would have thought of. Can't recommend Leland enough.",
    avatar: pic05,
  },
  {
    name: 'Alex W.',
    subtitle: 'AI & Productivity',
    date: 'February 2026',
    stars: 5,
    text: "I wanted to upskill in AI for my product role and my coach built a completely custom curriculum for me. In 8 weeks I went from knowing nothing about LLMs to building internal tools for my team.",
    avatar: pic06,
  },
  {
    name: 'Rachel N.',
    subtitle: 'Law School Admissions',
    date: 'February 2026',
    stars: 5,
    text: "My coach helped me see my application through the eyes of an admissions committee. Every session was focused and actionable. I got into a T14 school with a scholarship I didn't think was possible.",
    avatar: pic07,
  },
  {
    name: 'James C.',
    subtitle: 'Management Consulting',
    date: 'January 2026',
    stars: 5,
    text: "Prepped for MBB interviews with a former Bain consultant. The case practice was incredibly realistic and the behavioral coaching gave me confidence I didn't have before. Received two offers.",
    avatar: pic08,
  },
]

function StarRow({ count }) {
  return (
    <div className="reviews-star-row">
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 20 20" fill="var(--gray-dark)">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <>
      <Navbar variant="sticky" />

      <section className="reviews-hero">
        <div className="section-container">
          <h1 className="reviews-heading">
            22,264 reviews and counting
          </h1>
          <p className="reviews-subtext">
            People are reaching their goals every day on Leland.
          </p>
          <div className="reviews-counter">
            <div className="reviews-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FFD667">
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27 5.06 16.7 6 11.21l-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              ))}
            </div>
            <span className="reviews-count">22,264 reviews</span>
            <span className="reviews-sep">&middot;</span>
            <span className="reviews-avg">Avg 4.99</span>
          </div>
        </div>
      </section>

      {/* Review Cards */}
      <section className="reviews-list">
        <div className="section-container">
          <div className="reviews-grid">
            {REVIEWS.map((review) => (
              <div className="review-card" key={review.name}>
                <div className="review-card-header">
                  <img src={review.avatar} alt={review.name} className="review-card-avatar" />
                  <div className="review-card-info">
                    <span className="review-card-name">{review.name}</span>
                    <span className="review-card-subtitle">{review.subtitle}</span>
                  </div>
                </div>
                <div className="review-card-meta">
                  <StarRow count={review.stars} />
                  <span className="review-card-sep">&middot;</span>
                  <span className="review-card-date">{review.date}</span>
                </div>
                <p className="review-card-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
