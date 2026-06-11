import expertKelsey from '../assets/img/expert-headshots/kelsey-kephart.png'
import expertKerry from '../assets/img/expert-headshots/kerry-patriarca.png'
import expertAndrew from '../assets/img/expert-headshots/andrew-quillen.png'
import expertAsha from '../assets/img/expert-headshots/asha-t.png'
import expertAlbert from '../assets/img/expert-headshots/albert-chan.png'
import expertConnorO from '../assets/img/expert-headshots/connor-owens.png'
import expertMachmud from '../assets/img/expert-headshots/machmud-makhmudov.png'
import expertMatt from '../assets/img/expert-headshots/matt-kilby.png'
import expertAlison from '../assets/img/expert-headshots/alison-l.png'
import expertConnorC from '../assets/img/expert-headshots/connor-crandall.png'
import expertKenny from '../assets/img/expert-headshots/kenny-johnson.png'
import expertArthur from '../assets/img/expert-headshots/arthur-balagula.png'
import expertClaire from '../assets/img/expert-headshots/claire-rafson.png'

const experts = [
  { img: expertKelsey, name: 'Kelsey K.', desc: 'Former Columbia Business School admissions officer' },
  { img: expertAndrew, name: 'Andrew Q.', desc: 'Former OpenAI staffer and Spotify Head of AI' },
  { img: expertAsha, name: 'Asha T.', desc: 'Harvard MBA and former Apax Partners PE investor' },
  { img: expertConnorO, name: 'Connor O.', desc: 'Former Google, YouTube, and Meta PM' },
  { img: expertKerry, name: 'Kerry P.', desc: 'Former Harvard admissions officer' },
  { img: expertKenny, name: 'Kenny J.', desc: 'Private equity investor at KKR, ex-Blackstone' },
  { img: expertAlbert, name: 'Albert C.', desc: 'AI professor at UW and former Google and Meta exec' },
  { img: expertMachmud, name: 'Machmud M.', desc: 'Rhodes Scholar, Stanford Law, and White House alum' },
  { img: expertConnorC, name: 'Connor C.', desc: 'Vice President at H.I.G. Capital, ex-Warburg Pincus' },
  { img: expertClaire, name: 'Claire R.', desc: 'Knight-Hennessy Scholar, former Nike and Bain' },
  { img: expertArthur, name: 'Arthur B.', desc: 'Google AI marketing lead and MIT Sloan MBA' },
  { img: expertAlison, name: 'Alison L.', desc: 'Former Bain and McKinsey hiring manager' },
  { img: expertMatt, name: 'Matt K.', desc: 'SpaceX engineer, former BCG project lead, and MIT Sloan MBA' },
]

export default function ExpertsSection({ heading, subtitle, className, cta }) {
  return (
    <section className={`experts-section${className ? ` ${className}` : ''}`}>
      <div className="experts-header">
        <h2 className="experts-heading">{heading || "Experts who've done the work."}</h2>
        <p className="experts-sub">
          {subtitle || "Now they're here to help you do the same—with clear, honest advice from lived experience."}
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
