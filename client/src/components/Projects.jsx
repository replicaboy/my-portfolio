import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 'candy-chat',
    title: 'Candy Chat — Production Chat App',
    desc: 'A production-ready real-time chat application with OTP-based signup, friend requests, end-to-end encrypted personal messaging, and support for profile pictures, documents & file sharing.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'E2E Encryption'],
    color: '#00d4ff',
    emoji: '💬',
    features: [
      'OTP-based User Signup & Verification',
      'Friend Request System',
      'End-to-End Encrypted Personal Chat',
      'Profile Picture & File/Document Sharing',
      'Real-time Messaging with Socket.io',
      'Production Ready & Deployed',
    ],
    github: 'https://github.com/replicaboy/Candy-Chat',
    live: 'https://candy-chat-one.vercel.app',
    status: 'Completed',
  },
  {
    id: 'resume-builder',
    title: 'Resume Builder — Auto Resume Generator',
    desc: 'A full-stack app where users fill in their details and instantly get a beautifully formatted, download-ready resume. No design skills needed — just type and export.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#7c3aed',
    emoji: '📄',
    features: [
      'Dynamic Resume Generation from User Input',
      'Beautiful Pre-designed Resume Templates',
      'One-click Download / Print',
      'Data Saved to MongoDB',
      'Fully Responsive UI',
      'Live on Vercel',
    ],
    github: 'https://github.com/replicaboy/resume-builder',
    live: 'https://resume-builder-xi-coral-91.vercel.app',
    status: 'Completed',
  },
  {
    id: 'siksha-diskha',
    title: 'Siksha & Diskha — Coaching Institute Website',
    desc: 'A full-stack website for a coaching institute featuring Home, Courses, Gallery, Testimonials, and Contact pages — with MongoDB backend, WhatsApp integration, and a polished UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#ec4899',
    emoji: '🏫',
    features: [
      'Multi-page: Home, Courses, Gallery, Testimonials',
      'Contact Form with MongoDB Storage',
      'WhatsApp Button Integration',
      'Fully Responsive Design',
      'Smooth Animations & Modern UI',
      'Live on Vercel',
    ],
    github: 'https://github.com/replicaboy/Siksha_and_diskha',
    live: 'https://siksha-and-diskha.vercel.app',
    status: 'Completed',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio — Built from Scratch',
    desc: 'The very portfolio you are viewing — built with React + Vite on the frontend, Node.js + Express backend, and MongoDB for contact form storage. Custom particle canvas, animations, and dark UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#10b981',
    emoji: '🌟',
    features: [
      'Custom Canvas Particle Background',
      'Typewriter Role Animation',
      'Scroll-triggered Skill Bars',
      'Alternating Journey Timeline',
      'Contact Form → Express → MongoDB',
      'Glassmorphism Dark Theme',
    ],
    github: 'https://github.com/replicaboy/my-portfolio',
    live: '#',
    status: 'Completed',
  },
]

const FILTERS = ['All', 'React', 'Node.js', 'MongoDB', 'Socket.io', 'Express']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.includes(activeFilter))

  return (
    <section className="section projects-section" id="projects">
      <div className="glow-orb projects-orb" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🚀</span> Projects
          </div>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            A selection of full-stack projects that showcase my skills and problem-solving approach.
          </p>
          <div className="divider" />
        </div>

        {/* Filter tabs */}
        <div className="project-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace('.', '-')}`}
              className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className={`project-card glass-card ${expanded === project.id ? 'expanded' : ''}`}
              style={{ '--project-color': project.color }}
            >
              <div className="project-card-top">
                <div className="project-icon-wrap">
                  <span className="project-icon">{project.emoji}</span>
                  <div className="project-icon-glow" style={{ background: project.color }} />
                </div>
                <div className="project-status-wrap">
                  <span className={`project-status ${project.status === 'In Progress' ? 'in-progress' : 'done'}`}>
                    {project.status === 'In Progress' ? '🔄' : '✅'} {project.status}
                  </span>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="project-tag" style={{ '--tag-color': project.color }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expanded features */}
              {expanded === project.id && (
                <div className="project-features">
                  <p className="features-label">Key Features:</p>
                  <ul>
                    {project.features.map(f => (
                      <li key={f}><span style={{ color: project.color }}>▸</span> {f}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-actions">
                <button
                  id={`project-details-${project.id}`}
                  className="project-btn-details"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                >
                  {expanded === project.id ? '↑ Less' : '↓ Details'}
                </button>
                <div className="project-links">
                  <a
                    id={`project-github-${project.id}`}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    title="GitHub"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                  </a>
                  <a
                    id={`project-live-${project.id}`}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    title="Live Demo"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-cta">
          <p className="cta-text">Want to see more of my work?</p>
          <a id="github-all-btn" href="https://github.com/hariomthakur" target="_blank" rel="noreferrer" className="btn btn-outline">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
