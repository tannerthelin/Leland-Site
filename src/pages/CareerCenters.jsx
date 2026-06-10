import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import logoWhite from '../assets/logos/logo-white.svg'
import logoBlack from '../assets/logos/logo-black.svg'
import kelloggLogo from '../assets/img/partnerships pages/ce5bh5gW8OHeNO5FPL54KS8HDY.webp'
import jackPhoto from '../assets/img/partnerships pages/YfNHY3mPapeupJmjMUET9A2STG0.avif'
import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import teamMember1 from '../assets/img/partnerships pages/1753205507492.jpeg'
import teamMember2 from '../assets/img/partnerships pages/KBLKY7iZXWSKk9i5RcvylaiK2Y.avif'
import mockInterviewImg from '../assets/img/partnerships pages/expert-session.png'
import iconRowImg from '../assets/img/partnerships pages/leland-plus-icons.png'
import lelandTeamImg from '../assets/img/partnerships pages/leland-team.webp'
import './CareerCenters.css'

const GoldmanSachsLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.998 21.912" width="52" height="22" aria-label="Goldman Sachs">
    <path d="M 4.255 5.135 L 7.4 5.135 L 7.4 10.193 C 6.35 10.402 5.546 10.508 4.664 10.508 C 1.216 10.508 0 8.568 0 5.373 C 0 1.94 1.686 0 5.046 0 C 5.471 0 6.275 0.03 7.278 0.179 L 7.278 3.417 L 6.549 3.417 L 6.137 2.179 C 5.742 1.001 5.272 0.418 4.526 0.418 C 3.236 0.418 2.55 2.133 2.55 5.344 C 2.55 8.568 2.824 10.09 4.51 10.09 C 4.739 10.09 5.01 10.06 5.269 9.987 L 5.269 6.223 L 4.253 5.536 L 4.253 5.135 Z M 7.339 18.715 C 7.339 20.745 5.927 21.909 3.435 21.909 C 2.752 21.909 1.749 21.806 0.807 21.654 L 0.807 17.686 L 1.536 17.686 L 1.84 18.625 C 2.523 20.788 3.009 21.505 3.877 21.505 C 4.789 21.505 5.441 20.715 5.441 19.67 C 5.441 18.821 5.032 18.224 4.15 17.759 L 2.631 16.953 C 1.459 16.343 0.821 15.388 0.821 14.223 C 0.821 12.462 2.293 11.404 4.711 11.404 C 5.258 11.404 5.897 11.45 6.914 11.583 L 6.914 14.82 L 6.184 14.82 L 5.775 13.583 C 5.363 12.269 4.924 11.792 4.12 11.792 C 3.222 11.792 2.691 12.359 2.691 13.178 C 2.691 13.908 3.103 14.432 3.907 14.88 L 5.441 15.729 C 6.731 16.446 7.339 17.401 7.339 18.715 Z M 14.056 21.059 L 14.36 21.507 L 14.36 21.733 L 12.036 21.733 L 11.929 20.867 C 11.686 21.524 11.047 21.912 10.227 21.912 C 9.011 21.912 8.251 21.165 8.251 19.941 C 8.251 18.747 8.933 17.958 11.031 17.152 L 11.926 16.81 L 11.926 15.691 C 11.926 14.706 11.744 14.305 11.183 14.305 C 10.727 14.305 10.47 14.544 10.028 15.632 L 9.527 16.85 L 8.845 16.85 L 8.845 14.416 C 9.74 14.147 10.638 13.968 11.412 13.968 C 13.128 13.968 14.056 14.774 14.056 16.237 Z M 14.935 6.538 C 14.935 9.075 13.553 10.508 11.774 10.508 C 9.997 10.508 8.616 9.075 8.616 6.538 C 8.616 4 9.997 2.567 11.777 2.567 C 13.553 2.567 14.935 4 14.935 6.538 Z M 11.929 19.806 L 11.929 17.225 L 11.641 17.344 C 10.743 17.702 10.409 18.508 10.409 19.686 C 10.409 20.568 10.622 21.073 11.122 21.073 C 11.622 21.073 11.929 20.595 11.929 19.806 Z M 12.702 6.538 C 12.702 3.672 12.459 2.912 11.777 2.912 C 11.094 2.912 10.851 3.672 10.851 6.538 C 10.851 9.403 11.094 10.163 11.777 10.163 C 12.459 10.163 12.702 9.403 12.702 6.538 Z M 20.332 19.879 L 20.605 20.015 C 20.119 21.388 19.497 21.909 18.295 21.909 C 16.336 21.909 15.242 20.462 15.242 17.939 C 15.242 15.417 16.518 13.968 18.599 13.968 C 19.16 13.968 19.906 14.058 20.544 14.31 L 20.544 16.848 L 19.831 16.848 L 19.544 15.892 C 19.163 14.625 18.953 14.297 18.571 14.297 C 17.964 14.297 17.477 15.073 17.477 18.028 C 17.477 20.4 17.842 21.266 18.768 21.266 C 19.389 21.268 19.92 20.88 20.332 19.879 Z M 18.643 10.329 L 15.908 10.329 L 15.908 10.106 L 16.212 9.659 L 16.212 1.33 L 15.908 0.882 L 15.908 0.657 L 18.339 0.478 L 18.339 9.656 L 18.643 10.104 Z M 22.382 10.508 C 20.71 10.508 19.707 9.015 19.707 6.464 C 19.707 3.927 20.754 2.57 22.365 2.57 C 23.186 2.57 23.642 2.882 23.838 3.509 L 23.838 1.33 L 23.534 0.882 L 23.534 0.657 L 25.966 0.478 L 25.966 9.656 L 26.27 10.104 L 26.27 10.326 L 24.112 10.326 L 23.946 9.192 C 23.705 10.163 23.25 10.508 22.382 10.508 Z M 27.715 21.059 L 28.019 21.507 L 28.019 21.733 L 25.283 21.733 L 25.283 21.507 L 25.587 21.059 L 25.587 15.686 C 25.587 15.046 25.391 14.658 24.918 14.658 C 24.355 14.658 23.946 15.122 23.946 16.031 L 23.946 21.059 L 24.25 21.507 L 24.25 21.733 L 21.514 21.733 L 21.514 21.507 L 21.818 21.059 L 21.818 12.731 L 21.514 12.283 L 21.514 12.06 L 23.946 11.881 L 23.946 14.97 C 24.219 14.329 24.841 13.971 25.723 13.971 C 26.969 13.971 27.712 14.747 27.712 16.253 L 27.712 21.059 Z M 21.943 6.492 C 21.943 9.178 22.186 9.998 22.854 9.998 C 23.689 9.998 23.841 8.82 23.841 6.462 C 23.841 4.179 23.675 3.045 22.868 3.045 C 22.186 3.045 21.943 3.851 21.943 6.492 Z M 37.198 9.656 L 37.502 10.104 L 37.502 10.326 L 34.767 10.326 L 34.767 10.104 L 35.07 9.656 L 35.07 4.12 C 35.07 3.582 34.888 3.254 34.463 3.254 C 33.932 3.254 33.506 3.718 33.506 4.611 L 33.506 9.656 L 33.81 10.104 L 33.81 10.326 L 31.075 10.326 L 31.075 10.104 L 31.379 9.656 L 31.379 4.12 C 31.379 3.582 31.196 3.254 30.771 3.254 C 30.24 3.254 29.815 3.718 29.815 4.611 L 29.815 9.656 L 30.119 10.104 L 30.119 10.326 L 27.383 10.326 L 27.383 10.104 L 27.687 9.656 L 27.687 3.582 L 27.383 3.224 L 27.383 3.002 L 29.572 2.746 L 29.754 2.746 L 29.815 3.582 C 30.072 2.926 30.71 2.567 31.578 2.567 C 32.503 2.567 33.111 3.015 33.385 3.821 C 33.611 3.045 34.327 2.567 35.239 2.567 C 36.438 2.567 37.198 3.343 37.198 4.85 Z M 34.358 19.537 C 34.358 20.834 33.506 21.909 31.456 21.909 C 30.926 21.909 30.21 21.849 29.102 21.654 L 29.102 18.88 L 29.724 18.88 L 29.92 19.477 C 30.406 21 30.876 21.567 31.622 21.567 C 32.321 21.567 32.777 21.073 32.777 20.313 C 32.777 19.686 32.456 19.255 31.699 18.85 L 30.392 18.164 C 29.558 17.716 29.102 17.016 29.102 16.15 C 29.102 14.793 30.182 13.971 31.973 13.971 C 32.49 13.971 33.158 14.044 33.888 14.193 L 33.888 16.373 L 33.266 16.373 L 32.946 15.58 C 32.581 14.625 32.233 14.313 31.655 14.313 C 31.033 14.313 30.669 14.671 30.669 15.268 C 30.669 15.776 30.973 16.118 31.716 16.535 L 33.006 17.252 C 33.885 17.746 34.358 18.446 34.358 19.537 Z M 44.189 9.656 L 44.493 10.104 L 44.493 10.326 L 42.169 10.326 L 42.064 9.46 C 41.821 10.117 41.183 10.505 40.362 10.505 C 39.146 10.505 38.386 9.759 38.386 8.535 C 38.386 7.341 39.069 6.551 41.166 5.745 L 42.061 5.403 L 42.061 4.285 C 42.061 3.3 41.879 2.898 41.318 2.898 C 40.862 2.898 40.605 3.137 40.163 4.225 L 39.663 5.449 L 38.978 5.449 L 38.978 3.018 C 39.876 2.749 40.771 2.57 41.545 2.57 C 43.261 2.57 44.189 3.376 44.189 4.839 Z M 42.061 8.402 L 42.061 5.821 L 41.774 5.941 C 40.879 6.299 40.544 7.105 40.544 8.283 C 40.544 9.165 40.757 9.672 41.257 9.672 C 41.757 9.672 42.061 9.195 42.061 8.402 Z M 51.998 10.104 L 51.998 10.326 L 49.262 10.326 L 49.262 10.104 L 49.566 9.656 L 49.566 4.282 C 49.566 3.639 49.37 3.254 48.897 3.254 C 48.334 3.254 47.925 3.718 47.925 4.627 L 47.925 9.656 L 48.229 10.104 L 48.229 10.326 L 45.493 10.326 L 45.493 10.104 L 45.797 9.656 L 45.797 3.582 L 45.493 3.224 L 45.493 3.002 L 47.682 2.746 L 47.864 2.746 L 47.925 3.582 C 48.182 2.926 48.806 2.567 49.702 2.567 C 50.948 2.567 51.691 3.343 51.691 4.85 L 51.691 9.656 Z" fill="rgb(0,0,0)" />
  </svg>
)

const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3584 16.5684C13.262 16.5717 15.3639 17.4364 17.5674 19.3574C16.7 20.1827 15.8842 21.0592 15.0615 21.9307C13.8238 20.9653 12.7333 20.4547 11.1973 20.2207C9.2498 20.2191 7.9581 20.6951 6.47266 22L3.89844 19.4297C5.72316 17.5433 7.8433 16.8205 10.3584 16.5684ZM15.583 0.0400391L11.4902 10.9502C13.1696 11.1117 14.7019 11.4673 16.2998 12.0176C18.2877 12.7425 19.9024 13.9733 21.5068 15.3457C20.6733 16.2387 19.7861 17.0853 18.9219 17.9453C16.9767 16.2172 14.8655 15.0602 12.2939 14.7422C8.48812 14.2694 5.45952 15.5364 2.52344 17.9385C1.65883 17.1148 0.834617 16.2414 0 15.3848C1.7214 10.2133 3.82061 5.11431 5.74023 0.0136719C7.02939 -0.00279715 8.32299 0.0317411 9.6123 0.0449219C8.23815 4.05331 6.63666 8.006 5.17285 11.9814C5.92359 11.769 6.66574 11.5201 7.40918 11.2812C9.07159 7.68792 10.3028 3.7136 11.7227 0L15.583 0.0400391Z" fill="white"/>
  </svg>
)

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const TESTIMONIALS = [
  { quote: "When struggling to break into product management, he gave me clarity, confidence, and direction.", name: "David Y.", landed: "JPMorgan Chase" },
  { quote: "Shifu came prepared with questions mirroring real interviews and provided reusable system design frameworks.", name: "Zeren Y.", landed: "AWS" },
  { quote: "His expertise and tailored approach to frameworks helped me land McKinsey in a tough market.", name: "Shelley C.", landed: "McKinsey & Co." },
  { quote: "Kevin's coaching empowered strategic thinking and went beyond tactical advice.", name: "Savinay S.", landed: "Intuit" },
  { quote: "Melody coached me through career strategy and work-life balance over five years.", name: "Kenneth Y.", landed: "Atlassian" },
  { quote: "Max's thorough investment banking coaching over 20 hours was transformative.", name: "Nathan G.", landed: "Citigroup" },
  { quote: "Steven provided thoughtful guidance and actionable feedback across interview topics.", name: "Bradley H.", landed: "Ladder" },
  { quote: "Jiashuo's responsive, experienced coaching helped me prepare for coding interviews.", name: "Chris J.", landed: "Robinhood" },
  { quote: "Mohit is exceptional, supportive, and highly professional in private credit.", name: "Teresa T.", landed: "Blackstone" },
  { quote: "Lucas provides detailed feedback and practical tips across product industries.", name: "Ayami M.", landed: "TikTok" },
]

const TICKER_LOGOS = [
  'University name',
  'University name',
  'University name',
  'University name',
  'University name',
  'University name',
]

const OFFERINGS = [
  {
    title: 'Mock interviews with industry experts.',
    color: '#C5D9F8',
    img: mockInterviewImg,
  },
  {
    title: 'Video courses, AI tools, and templates for 100+ career paths.',
    bgImg: lelandTeamImg,
  },
  {
    title: 'Live cohort-based programs that guide students through the full recruiting process.',
    color: '#F3F1E6',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.17916 3.3265L3.68495 4.45591C2.87401 4.62035 2.34992 5.41104 2.51436 6.22198C2.5705 6.49885 2.70378 6.7542 2.89881 6.95857L6.76035 11.0268C7.65389 11.9656 8.96773 12.3783 10.2376 12.1191L15.7318 10.9896C16.5427 10.8252 17.0668 10.0345 16.9024 9.22358C16.8462 8.94672 16.713 8.69136 16.5179 8.48699L12.6564 4.41876C11.7628 3.48 10.449 3.0673 9.17916 3.3265Z" vectorEffect="non-scaling-stroke"/>
        <path d="M16.8549 9.96496C16.8549 9.96496 16.0961 11.397 16.2034 12.4977C16.3107 13.5983 16.6867 14.02 16.6867 14.02" vectorEffect="non-scaling-stroke"/>
        <path d="M4.44287 8.57617L3.46939 11.6753C3.24358 12.3929 3.39207 13.1759 3.86494 13.7611L4.8269 14.9527C5.96493 16.3613 7.83714 16.9494 9.57624 16.4445L11.0468 16.017C11.7697 15.8078 12.3398 15.2505 12.5653 14.5325L13.5383 11.4346" vectorEffect="non-scaling-stroke"/>
        <path d="M15.9425 13.9471L16.9719 13.2202L19.1346 15.1908L17.0757 16.6445L15.9425 13.9471Z" vectorEffect="non-scaling-stroke"/>
      </svg>
    ),
  },
  {
    title: 'Daily livestreams on case prep, networking, behavioral interviews, and more.',
    color: '#EBD4B5',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5882" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.541 17.003C3.577 15.571 3 13.857 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21C10.474 21 9.04 20.613 7.78 19.943C6.434 20.661 4.907 21.084 3.276 21.084C2.842 21.084 2.419 21.045 2 20.99C3.173 19.923 4.055 18.553 4.541 17.003Z" vectorEffect="non-scaling-stroke"/>
      </svg>
    ),
  },
  {
    title: 'Admin controls and full visibility into student access, progress, and outcomes.',
    color: '#5E6E79',
    textLight: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.833 8.16797L11.333 16.168L7.58301 12.168L3.83301 16.168" vectorEffect="non-scaling-stroke"/>
        <path d="M12.833 8.16797H18.833V14.168" vectorEffect="non-scaling-stroke"/>
      </svg>
    ),
  },
]

const PARTNERS = [
  { main: 'BYU', sub: 'Brigham Young University' },
  { main: 'Northwestern', serif: true, sub: 'Kellogg' },
  { main: 'IESE', sub: 'Business School' },
  { main: 'ie', sub: 'UNIVERSITY', smallMain: true },
  { main: 'USC', sub: 'Marshall School of Business', serif: true },
]

export default function CareerCenters() {
  const [protoOpen, setProtoOpen] = useState(false)
  const [fullscreenHero, setFullscreenHero] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setProtoOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="cc-page">
      {/* Minimal nav */}
      <nav className="cc-nav">
        <div className="cc-nav-inner">
          <Link to="/" className="cc-nav-logo">
            <img src={logoBlack} alt="Leland" />
          </Link>
          <a href="#" className={`cc-nav-cta${navScrolled ? ' cc-nav-cta--visible' : ''}`}>
            Schedule a demo <ArrowRight />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className={`cc-hero${fullscreenHero ? ' cc-hero--fullscreen' : ''}`}>
        <div className="cc-hero-grid">
        <motion.div
          className="cc-hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <h1 className="cc-hero-heading">A deep bench of student resources.</h1>
          <p className="cc-hero-sub">
            Expand your career center's reach — connecting students with experts in their industry for mock interviews, live programs, and on-demand career resources.
          </p>

          <a href="#" className="hero-cta">Learn more</a>

          <div className="cc-social-group">
            <div className="cc-avatars">
              <img src={pic01} alt="" className="cc-avatar" />
              <img src={pic02} alt="" className="cc-avatar" />
              <img src={pic03} alt="" className="cc-avatar" />
            </div>
            <div className="cc-social-text">
              <div className="cc-rating-row">
                <span className="cc-rating-stars">★★★★★</span>
                <span className="cc-rating-score">4.99</span>
                <span className="cc-rating-count">(25k+)</span>
              </div>
              <p className="cc-social-tagline">Trusted by 300K+ students</p>
            </div>
          </div>
        </motion.div>

        <div className="cc-hero-image" />
        </div>
      </section>

      {/* Logo ticker */}
      <div className="cc-ticker-bar">
        <div className="cc-ticker">
          <div className="cc-ticker-track">
            {[...TICKER_LOGOS, ...TICKER_LOGOS].map((label, i) => (
              <div key={i} className="cc-ticker-placeholder">
                <span className="cc-ticker-placeholder-icon" />
                <span className="cc-ticker-placeholder-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Offerings section */}
      <section className="cc-offerings">
        <div className="section-container">
          <h2 className="cc-offerings-heading">How does Leland partner with career centers?</h2>
          <div className="cc-offerings-grid">
            {OFFERINGS.slice(0, 2).map((item, i) => (
              item.bgImg ? (
                <div className="cc-offering-card cc-offering-card--icon-top" key={item.title}>
                  <img src={item.bgImg} alt="" className="cc-offering-bg" />
                  <div className="cc-offering-overlay">
                    <h3 className="cc-offering-title cc-offering-title--dark">{item.title}</h3>
                  </div>
                </div>
              ) : (
                <div className={`cc-offering-card cc-offering-card--wide${item.img ? ' cc-offering-card--photo' : ''}`} key={item.title}>
                  {item.img ? (
                    <img src={item.img} alt="" className="cc-offering-bg" />
                  ) : (
                    <div className="cc-offering-bg" style={{ background: item.color }} />
                  )}
                  <div className="cc-offering-overlay">
                    <h3 className="cc-offering-title">{item.title}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
          <div className="cc-offerings-carousel">
            {OFFERINGS.slice(2).map((item) => (
              <div className={`cc-offering-card${item.textLight ? ' cc-offering-card--light-text' : ''}`} key={item.title}>
                <div className="cc-offering-bg" style={{ background: item.color }} />
                <div className="cc-offering-overlay">
                  {item.icon && <div className="cc-offering-icon">{item.icon}</div>}
                  <h3 className="cc-offering-title">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="cc-offerings-cta">
            <div className="cc-offerings-cta-avatars">
              <img src={teamMember1} alt="" className="cc-offering-avatar" />
              <img src={teamMember2} alt="" className="cc-offering-avatar" />
            </div>
            <p className="cc-offerings-cta-text">
              Want to see how Leland could support your career center?{' '}
              <a href="#" className="cc-offerings-cta-link">Talk to a team member.</a>
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="cc-case-studies">
        <div className="section-container">
          <h2 className="cc-offerings-heading">What our partners are saying</h2>
          <div className="cc-case-study-card">
            <div className="cc-case-study-left">
              <img src={kelloggLogo} alt="Northwestern Kellogg" className="cc-case-study-org-logo" />
            </div>
            <div className="cc-case-study-right">
              <div className="cc-case-study-stat">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                +74% increase in overall IB offers
              </div>
              <blockquote className="cc-case-study-quote">
                "Loved my experience working with the Leland team. The coaches helped me with my technical interview preparation, and I can confidently say I wouldn't have landed my investment banking role without their support. … It was a great, holistic experience."
              </blockquote>
              <div className="cc-case-study-attribution">
                <img src={jackPhoto} alt="Jack R." className="cc-case-study-avatar" />
                <span className="cc-case-study-author">Jack R.</span>
                <span className="cc-case-study-divider" />
                <GoldmanSachsLogo />
              </div>
              <hr className="cc-case-study-hr" />
              <p className="cc-case-study-description">
                Leland paired each Kellogg student with an expert coach for 2 mock interviews — most of whom had worked at the company the student was interviewing for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial ticker */}
      <section className="cc-testi-section">
        <div className="cc-testi-ticker">
          <div className="cc-testi-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div className="cc-testi-card" key={i}>
                <p className="cc-testi-quote">"{t.quote}"</p>
                <div className="cc-testi-footer">
                  <span className="cc-testi-name">{t.name}</span>
                  <span className="cc-testi-landed">Landed at {t.landed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible by design */}
      <section className="cc-flexible">
        <div className="section-container">
          <h2 className="cc-offerings-heading">Flexible by design</h2>
          <div className="cc-flexible-grid">
            <div className="cc-flexible-item">
              <h3 className="cc-flexible-title">Every level, every industry</h3>
              <p className="cc-flexible-desc">Resources and experts spanning recent grads to executives, with the breadth to support a large and diverse student body.</p>
            </div>
            <div className="cc-flexible-item">
              <h3 className="cc-flexible-title">Custom pricing</h3>
              <p className="cc-flexible-desc">Programs built around your budget, with full control over what students can access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="cc-footer">
        <div className="cc-footer-inner">
          <div className="cc-footer-cta-row">
            <h2 className="cc-footer-cta-heading">Interested in partnering?</h2>
            <a href="#" className="cc-footer-cta-btn">Schedule a demo</a>
          </div>
          <hr className="cc-footer-divider" />
          <div className="cc-footer-bottom">
            <Link to="/" aria-label="Leland">
              <LogoMark />
            </Link>
            <p className="cc-footer-copyright">Copyright 2025 Leland Corporation.<br />All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Prototype settings */}
      <div className="cc-proto-wrap" ref={panelRef}>
        <AnimatePresence>
          {protoOpen && (
            <motion.div
              className="cc-proto-panel"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              <p className="cc-proto-title">Prototype settings</p>
              <label className="cc-proto-item">
                <span className="cc-proto-label">Fullscreen hero image</span>
                <button
                  className={`cc-proto-toggle${fullscreenHero ? ' cc-proto-toggle--on' : ''}`}
                  onClick={() => setFullscreenHero(v => !v)}
                  role="switch"
                  aria-checked={fullscreenHero}
                >
                  <span className="cc-proto-toggle-thumb" />
                </button>
              </label>
            </motion.div>
          )}
        </AnimatePresence>
        <button className="cc-proto-btn" onClick={() => setProtoOpen(o => !o)} aria-label="Prototype settings">
          <span /><span /><span />
        </button>
      </div>

    </div>
  )
}
