import { useEffect, useRef } from 'react'
import './About.css'

const TRAITS = [
  { emoji: '💻', title: 'Self-Taught', desc: 'Started coding in school, mastered MERN by building real projects — no bootcamp, just determination.' },
  { emoji: '🚀', title: 'Fast Learner', desc: 'Adapted to new technologies quickly. Went from writing basic HTML to full-stack applications in under a year.' },
  { emoji: '🎯', title: 'Goal-Driven', desc: 'Every project I start, I finish. I take pride in shipping clean, functional, production-ready code.' },
  { emoji: '🌐', title: 'Open Source Fan', desc: 'I believe in the power of community. I contribute, learn, and share openly.' },
]

function useIntersection(ref) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // Also add in-view to all animated children
          entry.target.querySelectorAll('.slide-in-left, .slide-in-right, .about-bio, .about-traits').forEach(el => {
            el.classList.add('in-view')
          })
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })

    const el = ref.current
    if (el) observer.observe(el)
    return () => el && observer.unobserve(el)
  }, [])
}

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  useIntersection(sectionRef)
  useIntersection(contentRef)

  return (
    <section className="section about-section" id="about" ref={sectionRef}>
      <div className="glow-orb about-orb" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>👨‍💻</span> About Me
          </div>
          <h2 className="section-title">The Story Behind the Code</h2>
          <div className="divider" />
        </div>

        <div className="about-grid" ref={contentRef}>
          {/* Left – bio */}
          <div className="about-bio slide-in-left">
            <div className="about-avatar-wrap">
              <div className="about-avatar">
                <span className="avatar-initials">HT</span>
                <div className="avatar-ring ring-1" />
                <div className="avatar-ring ring-2" />
              </div>
              <div className="about-name-block">
                <h3>Hariom Thakur</h3>
                <p>Full Stack Developer</p>
                <span className="location-badge">📍 India</span>
              </div>
            </div>

            <p className="about-text">
              I'm <strong>Hariom Thakur</strong>, a passionate full-stack developer who taught himself 
              everything from scratch. I completed my 12th grade and chose to dive deep into the world 
              of web development instead of following the conventional college path.
            </p>
            <p className="about-text">
              I specialize in the <span className="highlight-inline">MERN stack</span> — building everything 
              from RESTful APIs with Node.js and Express, to dynamic UIs with React, and scalable 
              databases with MongoDB. My projects are built with real-world demands in mind.
            </p>
            <p className="about-text">
              What I lack in a formal degree, I more than make up for in <span className="highlight-inline">curiosity, 
              grit, and hands-on experience</span>. Every problem is a new challenge. Every line of code 
              is progress.
            </p>

            <div className="about-chips">
              {['JavaScript', 'TypeScript (learning)', 'Clean Code', 'REST APIs', 'Agile', 'Problem Solving'].map(chip => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>

            <div className="about-actions">
              <a id="about-github-btn" href="https://github.com/replicaboy" target="_blank" rel="noreferrer" className="btn btn-outline">
                GitHub Profile ↗
              </a>
              <a id="about-resume-btn" href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                Download Resume
              </a>
            </div>
          </div>

          {/* Right – trait cards */}
          <div className="about-traits slide-in-right">
            {TRAITS.map((trait, i) => (
              <div key={trait.title} className="trait-card glass-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="trait-emoji">{trait.emoji}</span>
                <div>
                  <h4 className="trait-title">{trait.title}</h4>
                  <p className="trait-desc">{trait.desc}</p>
                </div>
              </div>
            ))}

            {/* Quick Facts */}
            <div className="quick-facts glass-card">
              <h4 className="quick-title">Quick Facts</h4>
              <ul className="facts-list">
                <li><span className="fact-icon">🎓</span> <span className="fact-label">Education:</span> 12th Passed Out</li>
                <li><span className="fact-icon">📚</span> <span className="fact-label">Learning:</span> Self-Taught via Projects</li>
                <li><span className="fact-icon">🔥</span> <span className="fact-label">Stack:</span> MongoDB, Express, React, Node.js</li>
                <li><span className="fact-icon">⚡</span> <span className="fact-label">Status:</span> Open to Opportunities</li>
                <li><span className="fact-icon">🌐</span> <span className="fact-label">Language:</span> English, Hindi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
