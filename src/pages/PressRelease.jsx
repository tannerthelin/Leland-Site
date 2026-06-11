import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import coverImage from '../assets/img/ambition-city.png'
import './PressRelease.css'

function PressRelease() {
  return (
    <div className="pr-page">
      <Navbar variant="sticky" />

      <main className="pr-main">
        <div className="pr-cover">
          <img src={coverImage} alt="A professional walking through a city at golden hour" />
        </div>
        <article className="pr-article">
          <header className="pr-header">
            <p className="pr-kicker">
              Press Release <span className="pr-kicker-dot">·</span> June 8, 2026{' '}
              <span className="pr-kicker-dot">·</span> Lehi, Utah
            </p>
            <h1 className="pr-title">Leland Becomes the Home for Ambition in a World Rewritten by AI</h1>
            <p className="pr-lede">Today we are reintroducing Leland to the world.</p>
            <div className="pr-rule" aria-hidden="true" />
          </header>

          <section className="pr-section">
            <h2 className="pr-heading">The world is changing fast</h2>
            <p>
              AI is rewriting the economy in real time. Entire industries are being restructured. Job
              descriptions that existed six months ago are disappearing. New ones are being invented every
              week. Career paths that once felt stable now feel uncertain, and the change keeps compounding.
            </p>
            <p>
              People feel it. They feel behind. They feel anxious. They know they need to act, but they
              don&rsquo;t know where to go. We know this because these people are on Leland. They are
              students. They are executives. They are managers, individual contributors, leaders, and
              interns. They are mothers, fathers, sons, daughters.
            </p>
            <p>They are humans.</p>
            <p>And the world as they know it is changing, rapidly.</p>
            <p>
              They are coming to us wondering, what is next? How do I harness AI to change my career? How do
              I not get left behind? How can AI help me? How do I apply to a new job? Should I go back to
              school? How do I find people, real people, who can help me?
            </p>
            <p>
              Since our founding in 2021, we&rsquo;ve helped millions of people navigate their careers
              across hundreds of career paths and 100+ countries around the world.
            </p>
            <p>
              We built Leland to unlock human potential. <em>Human potential.</em> And in a world of AI,
              that mission is more important than ever. This next chapter is the culmination of everything
              we&rsquo;ve built.
            </p>
            <p className="pr-pullquote">
              Leland is the home for ambition in a world that is changing every day.
            </p>
          </section>

          <section className="pr-section">
            <h2 className="pr-heading">AI</h2>
            <p>We are in the most urgent and important technological transformation of our lifetime.</p>
            <p>
              Experts estimate that in the next 4 years, over 1 billion people are going to need to be
              upskilled.
            </p>
            <p>
              Over $2.5 trillion is forecasted to be invested in AI initiatives in 2026, but only 10% of HR
              and L&amp;D professionals believe their teams have the skills needed to meet business goals in
              the next 1-2 years.
            </p>
            <p>
              Some employees are looking at these foreign new tools and only barely scratching the surface
              of what is possible. Others are adopting, but wasting time trying to figure out what&rsquo;s
              real, what&rsquo;s overhyped, and what it means for their job.
            </p>
            <p>
              That&rsquo;s where Leland comes in. We&rsquo;ve been helping millions of people reach career
              and education goals for 5 years. We plan to continue doing that for 50 more years. But it so
              happens that the whole world has just added one big career and educational goal to the top of
              their list:
            </p>
            <h2 className="pr-heading">Learn to leverage AI as quickly as possible.</h2>
            <p>
              We rolled out our AI Builder Program almost three months ago and have been overwhelmed by the
              reception. F100s, startups, individual contributors, and C-suite execs all coming together to
              build together. People have changed how they&rsquo;re working forever, 5, 10, or even
              20x&rsquo;ing their impact. The reviews on the program have been incredibly positive. And
              it&rsquo;s only a couple months old, getting better every day. Beyond the Builder Program,
              we&rsquo;ve built a network of 500+ AI experts, trained and ready to support AI deployments
              across your organization.
            </p>
            <p>
              We&rsquo;re ready to help you win the AI race in your role and at your organization. This
              isn&rsquo;t a pivot, it&rsquo;s us doubling down on our mission to unlock human potential.{' '}
              <strong>We built Leland for exactly this moment.</strong>
            </p>
            <p>
              Today, we&rsquo;re making this commitment public: Leland will retrain 100+ million people on
              AI. The counter is live <em className="pr-here">here</em> and we&rsquo;re already nearing our
              first 100,000. We&rsquo;re excited to play a major role in helping humans not get left behind.
            </p>
          </section>

          <section className="pr-section">
            <h2 className="pr-heading">What&rsquo;s changing</h2>
            <p>
              Today we&rsquo;re also unveiling a refreshed Leland: a new brand and a new look built for the
              moment we&rsquo;re in.
            </p>
            <p>
              Alongside the refresh, we&rsquo;re officially launching{' '}
              <Link to="/ai" className="pr-link">
                <strong>leland.ai</strong>
              </Link>
              , the home for businesses that need to become AI-native fast. On{' '}
              <Link to="/ai" className="pr-link">
                leland.ai
              </Link>{' '}
              you can access:
            </p>
            <ul className="pr-list">
              <li>Training solutions to upskill your people</li>
              <li>Services to build agentic workflows and AI-native infrastructure</li>
              <li>Talent solutions to hire AI-native operators onto your full-time team</li>
            </ul>
            <p>
              Over the coming weeks and months, the consumer side of Leland will keep transforming too. AI
              is accelerating our product development cycles, amplifying our reach, and expanding the value
              we can deliver. We&rsquo;ll be rolling out:
            </p>
            <ul className="pr-list">
              <li>Community feeds to connect directly with the right experts and the right people</li>
              <li>Career agents that work alongside you on the decisions that matter most</li>
              <li>An opportunity graph to surface jobs and other opportunities to make money</li>
              <li>Expert monetization options like subscriptions, content, and custom agents</li>
            </ul>
            <p>
              And so much more. We plan to bring the best of LinkedIn, Patreon, and AI to you in a new
              platform that will change how you think about your career forever.
            </p>
            <p>
              If you&rsquo;re a human trying to navigate your career in an AI-first world, whether
              you&rsquo;re making a pivot, applying to a school, building new skills, or re-entering the
              workforce, Leland is for you. If you&rsquo;re a business trying to become AI-native quickly,
              Leland is for you too.
            </p>
            <p>Leland is your home.</p>
          </section>

          <section className="pr-section">
            <h2 className="pr-heading">Humans matter</h2>
            <p>
              The world has already changed. AI isn&rsquo;t coming. It&rsquo;s already here, and it&rsquo;s
              only accelerating.
            </p>
            <p>We refuse to let people, real people, be discarded in the process.</p>
            <p>
              In an AI world, intelligence is abundant. What&rsquo;s scarce is trust. What&rsquo;s scarce is
              community. What&rsquo;s scarce is the kind of human connection that actually changes outcomes.
              Leland is built around that reality.
            </p>
            <p>
              If we get this right, Leland will be the place where anyone, including you reading this, can
              navigate their most important career decisions surrounded by a community that makes them
              better. That need is becoming more critical by the day.
            </p>
            <p className="pr-closing">This is the beginning.</p>
          </section>

          <div className="pr-author">
            <div className="pr-author-avatar" aria-hidden="true">JK</div>
            <div className="pr-author-info">
              <span className="pr-author-name">John Koelliker</span>
              <span className="pr-author-role">CEO &amp; Founder, Leland</span>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export default PressRelease
