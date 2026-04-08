import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    id: 'ecommerce',
    title: 'ShopZen – E-Commerce Platform',
    desc: 'A full-featured e-commerce web app with product listings, cart management, user authentication, order tracking, and Stripe payment integration.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe'],
    color: '#00d4ff',
    emoji: '🛒',
    features: ['JWT Auth & Role-based Access', 'Product CRUD & Search/Filter', 'Cart & Wishlist', 'Stripe Payments', 'Admin Dashboard'],
    github: 'https://github.com/hariomthakur/shopzen',
    live: '#',
    status: 'Completed',
  },
  {
    id: 'chatapp',
    title: 'ChatzApp – Real-time Chat',
    desc: 'A real-time chat application with WebSocket support, private/group rooms, online presence tracking, and message history stored in MongoDB.',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Express'],
    color: '#7c3aed',
    emoji: '💬',
    features: ['Socket.io Real-time Messaging', 'Private & Group Rooms', 'Online/Offline Status', 'Message History', 'File Sharing'],
    github: 'https://github.com/hariomthakur/chatzapp',
    live: '#',
    status: 'Completed',
  },
  {
    id: 'taskmanager',
    title: 'TaskFlow – Project Manager',
    desc: 'A Kanban-style project management tool with drag-and-drop boards, task assignment, due dates, priority flags, and team collaboration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Drag & Drop'],
    color: '#ec4899',
    emoji: '📋',
    features: ['Kanban Board with DnD', 'Task Priority & Due Dates', 'Team Collaboration', 'Activity Log', 'Progress Charts'],
    github: 'https://github.com/hariomthakur/taskflow',
    live: '#',
    status: 'In Progress',
  },
  {
    id: 'blogplatform',
    title: 'Writerly – Blog Platform',
    desc: 'A full-stack blog platform with rich text editor, category management, comments, likes, user profiles and SEO-optimized article pages.',
    tags: ['React', 'Node.js', 'MongoDB', 'Quill Editor', 'Express'],
    color: '#10b981',
    emoji: '✍️',
    features: ['Rich Text Editor (Quill)', 'Category & Tags System', 'Comments & Likes', 'Author Profiles', 'SEO Meta Tags'],
    github: 'https://github.com/hariomthakur/writerly',
    live: '#',
    status: 'Completed',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Website',
    desc: 'The very website you\'re viewing! Built from scratch with React + Vite frontend and a Node.js/Express backend with MongoDB for contact form storage.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'CSS3'],
    color: '#f59e0b',
    emoji: '🌟',
    features: ['Custom Particle Canvas', 'Smooth Scroll Animations', 'Contact Form with API', 'Dark Theme System', 'Responsive Design'],
    github: 'https://github.com/hariomthakur/portfolio',
    live: '#',
    status: 'Completed',
  },
  {
    id: 'authsystem',
    title: 'AuthKit – Reusable Auth System',
    desc: 'A plug-and-play authentication system with email verification, password reset, OAuth (Google), refresh tokens and rate limiting.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'OAuth'],
    color: '#6366f1',
    emoji: '🔐',
    features: ['Email Verification', 'Google OAuth2', 'Refresh Token Rotation', 'Rate Limiting', 'Password Reset Flow'],
    github: 'https://github.com/hariomthakur/authkit',
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
