import './Timeline.css'

const TIMELINE_EVENTS = [
  {
    year: '2022',
    title: 'The Spark — First Line of Code',
    desc: 'Started learning HTML and CSS in 11th grade. Built my first static website — a tribute page. That moment of seeing code come alive on screen changed everything.',
    tags: ['HTML', 'CSS'],
    icon: '✨',
    side: 'left',
  },
  {
    year: '2022',
    title: 'JavaScript clicks — DOM Mastery',
    desc: 'Picked up JavaScript and fell in love with interactivity. Built multiple mini-projects: a calculator, a quiz app, a to-do list. Discovered the magic of the DOM.',
    tags: ['JavaScript', 'DOM', 'ES6+'],
    icon: '📜',
    side: 'right',
  },
  {
    year: '2023',
    title: 'React — Leveling Up Frontend',
    desc: '12th grade: Dived into React.js. The component model and state management blew my mind. Built my first multi-page React app and fell in love with the ecosystem.',
    tags: ['React', 'JSX', 'Hooks', 'Vite'],
    icon: '⚛️',
    side: 'left',
  },
  {
    year: '2023',
    title: 'The Backend Awakening — Node.js & Express',
    desc: 'Ventured into the backend world. Learned Node.js, built REST APIs with Express, handled routing, middleware, and understood the request-response cycle deeply.',
    tags: ['Node.js', 'Express', 'REST API'],
    icon: '🟩',
    side: 'right',
  },
  {
    year: '2023',
    title: 'MongoDB — Completing the Stack',
    desc: 'Integrated MongoDB and Mongoose into my projects. Designed my first schema, performed CRUD operations, and finally became a full-stack developer.',
    tags: ['MongoDB', 'Mongoose', 'Atlas'],
    icon: '🍃',
    side: 'left',
  },
  {
    year: '2024',
    title: '12th Passed — Chose Code Over College',
    desc: 'Passed 12th grade exams. Made the bold decision to pursue my coding journey full-time rather than enrolling in a conventional degree program. No regrets.',
    tags: ['Milestone', '12th Board', 'Self-Taught Decision'],
    icon: '🎓',
    side: 'right',
    highlight: true,
  },
  {
    year: '2024',
    title: 'First Freelance Project — Real Client',
    desc: 'Landed my first paid freelance project: a full-stack web app for a local business. Delivered on time, exceeded expectations, and got my first testimonial.',
    tags: ['Freelance', 'MERN Stack', 'Client Work'],
    icon: '💼',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Deep-diving Advanced Concepts',
    desc: 'Currently exploring advanced topics: authentication flows (JWT, OAuth), WebSockets, performance optimization, TypeScript, and cloud deployment on Railway & Vercel.',
    tags: ['JWT', 'OAuth', 'WebSockets', 'TypeScript', 'Cloud'],
    icon: '🚀',
    side: 'right',
    current: true,
  },
]

export default function Timeline() {
  return (
    <section className="section timeline-section" id="journey">
      <div className="glow-orb timeline-orb-1" />
      <div className="glow-orb timeline-orb-2" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>📅</span> Journey
          </div>
          <h2 className="section-title">My Coding Journey</h2>
          <p className="section-subtitle">
            From writing my first tag to building full-stack apps — here's how the story unfolded.
          </p>
          <div className="divider" />
        </div>

        <div className="timeline">
          {/* Center line */}
          <div className="timeline-line">
            <div className="timeline-line-fill" />
          </div>

          {TIMELINE_EVENTS.map((event, i) => (
            <div
              key={i}
              id={`journey-${event.year}-${i}`}
              className={`timeline-item ${event.side} ${event.highlight ? 'highlight' : ''} ${event.current ? 'current' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="timeline-dot">
                <span className="timeline-dot-icon">{event.icon}</span>
                <div className="timeline-dot-ring" />
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <span className="timeline-year">{event.year}</span>
                  {event.current && <span className="timeline-current-badge">Present</span>}
                  {event.highlight && <span className="timeline-milestone-badge">Milestone</span>}
                </div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-desc">{event.desc}</p>
                <div className="timeline-tags">
                  {event.tags.map(t => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
