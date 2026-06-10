import pic01 from '../assets/img/profile-photos/pic-01.png'
import pic02 from '../assets/img/profile-photos/pic-02.png'
import pic03 from '../assets/img/profile-photos/pic-03.png'
import pic04 from '../assets/img/profile-photos/pic-04.png'
import pic05 from '../assets/img/profile-photos/pic-05.png'
import pic06 from '../assets/img/profile-photos/pic-06.png'
import pic07 from '../assets/img/profile-photos/pic-07.png'
import pic08 from '../assets/img/profile-photos/pic-08.png'

import checkmarkIcon from '../assets/icons/checkmark.svg'
import googleLogo from '../assets/logos/placeholder-review-logos/google.png'
import harvardLogo from '../assets/logos/placeholder-review-logos/harvard.png'
import stanfordLogo from '../assets/logos/placeholder-review-logos/stanford.png'
import stripeLogo from '../assets/logos/placeholder-review-logos/stripe.png'
import bainLogo from '../assets/logos/placeholder-review-logos/bain.png'
import columbiaLogo from '../assets/logos/placeholder-review-logos/columbia.png'
import metaLogo from '../assets/logos/placeholder-review-logos/meta.png'

const REVIEWS = [
  {
    name: 'Jessica M.',
    category: 'MBA Admissions',
    coach: 'Kelsey K.',
    date: 'May 2026',
    stars: 5,
    text: "My coach was incredible. She helped me completely restructure my essays and think about my story in a way I never would have on my own. I got into my top choice program and I genuinely don't think I could have done it without her. The process was so thorough — we did multiple rounds of revisions, mock interviews, and she even helped me think through which schools to prioritize based on my career goals. She also connected me with current students at my target programs so I could ask questions before committing.",
    avatar: pic01,
    outcome: { type: 'school', text: 'Accepted to Harvard Business School', logo: harvardLogo },
  },
  {
    name: 'David R.',
    category: 'Career Coaching',
    coach: 'Michael S.',
    date: 'April 2026',
    stars: 5,
    text: "Went from feeling stuck in my role to landing a senior PM position at a top tech company. My coach helped me prep for interviews, negotiate my offer, and think strategically about my career trajectory. What I appreciated most was the structured approach — we started by mapping out my strengths and gaps, then built a week-by-week plan. The mock interviews were tough but that's exactly what I needed. I ended up getting a 30% comp increase over my previous role.",
    avatar: pic02,
    outcome: { type: 'career', text: 'Landed a role at Google', logo: googleLogo },
  },
  {
    name: 'Priya K.',
    category: 'GMAT Prep',
    coach: 'Amanda T.',
    date: 'April 2026',
    stars: 5,
    text: "I struggled with quant for months on my own. After 6 sessions with my Leland coach, I improved my score by 80 points. The personalized approach made all the difference compared to generic test prep courses. My coach diagnosed exactly which question types were tripping me up and gave me targeted drills. She also helped me with pacing strategy so I wasn't running out of time on the harder sections. Ended up with a 760 which was beyond what I thought possible.",
    avatar: pic03,
    outcome: { type: 'test', text: 'Scored a 760 on the GMAT', icon: checkmarkIcon },
  },
  {
    name: 'Marcus T.',
    category: 'Executive Coaching',
    coach: 'Daniel W.',
    date: 'March 2026',
    stars: 5,
    text: "Worth every penny. My coach is a former McKinsey partner and the insights he shared about leadership and stakeholder management were things I couldn't learn from any book or course. We worked together for three months and I've already seen a measurable difference in how I show up in meetings and how my team responds to my leadership. He gave me specific frameworks for navigating difficult conversations with my board and helped me develop a 90-day plan for my new VP role. I've recommended Leland to several colleagues.",
    avatar: pic04,
  },
  {
    name: 'Sarah L.',
    category: 'College Admissions',
    coach: 'Rebecca M.',
    date: 'March 2026',
    stars: 5,
    text: "Our daughter got into 4 of her top 5 schools. Her coach, a former admissions officer at Stanford, helped refine her application in ways we never would have thought of. They worked together on her personal statement for weeks, brainstorming angles and doing multiple drafts until it really captured who she is. The coach also prepped her for alumni interviews and helped us navigate the financial aid process. Can't recommend Leland enough — it took so much stress off our family during a really intense time.",
    avatar: pic05,
    outcome: { type: 'school', text: 'Accepted to Stanford University', logo: stanfordLogo },
  },
  {
    name: 'Alex W.',
    category: 'AI & Productivity',
    coach: 'Jason L.',
    date: 'February 2026',
    stars: 5,
    text: "I wanted to upskill in AI for my product role and my coach built a completely custom curriculum for me. In 8 weeks I went from knowing nothing about LLMs to building internal tools for my team. The sessions were practical and hands-on — not just theory. We built real projects together and my coach helped me understand not just the how, but the why behind different approaches. My manager noticed the difference almost immediately and I've since been asked to lead our AI initiatives.",
    avatar: pic06,
  },
  {
    name: 'Rachel N.',
    category: 'Law School Admissions',
    coach: 'Sophia R.',
    date: 'February 2026',
    stars: 5,
    text: "My coach helped me see my application through the eyes of an admissions committee. Every session was focused and actionable. We spent a lot of time on my personal statement — she pushed me to be more specific and vulnerable, which was uncomfortable at first but made the essay so much stronger. She also helped me write tailored 'Why X School' essays for each program. I got into a T14 school with a scholarship I didn't think was possible. The ROI on coaching was enormous compared to the scholarship money I received.",
    avatar: pic07,
    outcome: { type: 'school', text: 'Accepted to Columbia Law School', logo: columbiaLogo },
  },
  {
    name: 'James C.',
    category: 'Management Consulting',
    coach: 'Andrew P.',
    date: 'January 2026',
    stars: 5,
    text: "Prepped for MBB interviews with a former Bain consultant. The case practice was incredibly realistic and the behavioral coaching gave me confidence I didn't have before. What really set this apart was the personalized feedback after every mock — my coach recorded detailed notes and we tracked my progress week over week. He also shared insider tips on what each firm specifically looks for and how to tailor my answers. By the end I felt like I was walking into interviews with a real edge. Received two offers and was able to negotiate between them.",
    avatar: pic08,
    outcome: { type: 'career', text: 'Landed a role at Bain', logo: bainLogo },
  },
  {
    name: 'Emily T.',
    category: 'Product Management',
    coach: 'Lisa H.',
    date: 'January 2026',
    stars: 5,
    text: "Transitioned from engineering to PM with the help of my Leland coach. She helped me reframe my engineering experience as product thinking, which completely changed how I told my story in interviews. We did weekly mock product sense and execution interviews, and she gave me a framework for approaching any type of PM question. She also reviewed my resume and portfolio. I ended up landing an offer at Stripe and I'm confident the coaching is what made the difference.",
    avatar: pic01,
    outcome: { type: 'career', text: 'Landed a role at Stripe', logo: stripeLogo },
  },
  {
    name: 'Kevin H.',
    category: 'MBA Admissions',
    coach: 'Natalie F.',
    date: 'December 2025',
    stars: 5,
    text: "Applied to 6 programs and got into 4, including Wharton. My coach was a former admissions director and knew exactly what the committees were looking for. She pushed me to dig deeper on my 'why' and helped me craft a narrative that tied my career progression, extracurriculars, and future goals into a cohesive story. We also did extensive interview prep — she ran mock interviews that were tougher than the real thing. The whole process felt incredibly organized and I always knew what to work on next.",
    avatar: pic04,
  },
  {
    name: 'Anika P.',
    category: 'Career Coaching',
    coach: 'Chris B.',
    date: 'December 2025',
    stars: 5,
    text: "I was completely lost on what to do after leaving my startup. My coach helped me figure out what I actually wanted — not just the next job, but the kind of career and life I was building toward. We did values exercises, mapped out different paths, and she introduced me to people in her network who were doing the kinds of things I was interested in. Landed a role I love within 2 months. The clarity I gained from coaching has been just as valuable as the job itself.",
    avatar: pic03,
    outcome: { type: 'career', text: 'Landed a role at Meta', logo: metaLogo },
  },
  {
    name: 'Tom B.',
    category: 'GRE Prep',
    coach: 'Ryan D.',
    date: 'November 2025',
    stars: 5,
    text: "Went from a 310 to a 332 in 5 weeks. My coach identified exactly where I was losing points and gave me a focused study plan that cut out all the noise. Instead of grinding through thousands of practice problems, we focused on the specific question types and strategies that would move the needle. He also helped me with test-day strategy — when to skip, when to guess, how to manage my energy across sections. The targeted approach saved me so much time compared to working through a generic prep book.",
    avatar: pic06,
    outcome: { type: 'test', text: 'Scored a 332 on the GRE', icon: checkmarkIcon },
  },
]

export default REVIEWS
