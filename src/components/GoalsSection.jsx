import { useState } from 'react'

const TABS = [
  {
    label: 'Popular',
    items: [
      { name: 'Get into a top MBA program', color: '#E8D5F5' },
      { name: 'Level up your career', color: '#D4E5F7' },
      { name: 'Ace the GMAT', color: '#D5E8D4' },
      { name: 'Get into your dream school', color: '#FFD6E0' },
      { name: 'Crush your next interview', color: '#F3F1E6' },
      { name: 'Lead like an executive', color: '#E0E7EF' },
    ],
  },
  {
    label: 'Learn AI',
    items: [
      { name: 'Build an AI strategy', color: '#D4E5F7' },
      { name: 'Master prompt engineering', color: '#E8D5F5' },
      { name: 'Break into machine learning', color: '#F3F1E6' },
      { name: 'Apply AI to your business', color: '#D5E8D4' },
      { name: 'Create with generative AI', color: '#FFD6E0' },
      { name: 'Automate with AI', color: '#E0E7EF' },
    ],
  },
  {
    label: 'Build your career',
    items: [
      { name: 'Stand out on LinkedIn', color: '#FFD6E0' },
      { name: 'Crush your next interview', color: '#D4E5F7' },
      { name: 'Make a career pivot', color: '#E8D5F5' },
      { name: 'Negotiate a higher salary', color: '#D5E8D4' },
      { name: 'Lead like an executive', color: '#F3F1E6' },
      { name: 'Break into product management', color: '#E0E7EF' },
    ],
  },
  {
    label: 'Get into school',
    items: [
      { name: 'Get into your dream school', color: '#D5E8D4' },
      { name: 'Get into a top MBA program', color: '#E8D5F5' },
      { name: 'Ace the GMAT', color: '#FFD6E0' },
      { name: 'Get into law school', color: '#D4E5F7' },
      { name: 'Get into graduate school', color: '#F3F1E6' },
      { name: 'Get into medical school', color: '#E0E7EF' },
    ],
  },
]

export default function GoalsSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="goals-section">
      <div className="section-container">
        <div className="goals-header">
          <h2 className="goals-title">Browse popular goals</h2>
        </div>
        <div className="goals-tabs">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              className={`goals-tab${i === activeTab ? ' goals-tab-active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="goals-grid">
          {TABS[activeTab].items.map((item) => (
            <a href="#" className="goal-card" key={item.name}>
              <div className="goal-card-img" style={{ background: item.color }} />
              <span className="goal-card-name">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
