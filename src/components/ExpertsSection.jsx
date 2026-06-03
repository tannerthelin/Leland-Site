import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'

const experts = [
  { img: pic01, name: 'Matthew McConaughey', desc: 'Founder of Lyrics of Livin newsletter' },
  { img: pic02, name: 'Nicole Walters', desc: 'New York Times bestselling author, Emmy nominated producer, and CEO' },
  { img: pic03, name: 'Ali Abdaal', desc: 'Ex-doctor turned Productivity Expert, YouTuber, bestselling author, and entrepreneur' },
  { img: pic04, name: 'Susan Cain', desc: '#1 New York Times bestselling author, and speaker' },
  { img: pic05, name: 'Pat Flynn', desc: 'Entrepreneur, YouTuber, and podcast host' },
  { img: pic06, name: 'James Clear', desc: 'Author of #1 New York Times bestseller, Atomic Habits' },
  { img: pic07, name: 'Andrew Huberman', desc: 'Neuroscientist and host of the Huberman Lab podcast' },
  { img: pic08, name: 'Lisa Nichols', desc: 'Motivational speaker and bestselling author' },
]

export default function ExpertsSection({ heading, subtitle, className, cta }) {
  return (
    <section className={`experts-section${className ? ` ${className}` : ''}`}>
      <div className="experts-header">
        <h2 className="experts-heading">{heading || "Experts who\u2019ve done the work."}</h2>
        <p className="experts-sub">
          {subtitle || "Now they\u2019re here to help you do the same\u2014with clear, honest advice from lived experience."}
        </p>
        {cta}
      </div>

      <div className="experts-ticker">
        <div className="experts-track">
          {[...experts, ...experts].map((expert, i) => (
            <div className="expert-card" key={i}>
              <img src={expert.img} alt={expert.name} className="expert-photo" />
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-desc">{expert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
