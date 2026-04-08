import { useEffect, useRef } from 'react'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    color: '#00d4ff',
    skills: [
      { name: 'React.js', level: 90, icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 88, icon: '📜' },
      { name: 'HTML5 & CSS3', level: 92, icon: '🎨' },
      { name: 'Vite', level: 80, icon: '⚡' },
      { name: 'Responsive Design', level: 85, icon: '📱' },
    ]
  },
  {
    label: 'Backend',
    color: '#7c3aed',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟩' },
      { name: 'Express.js', level: 85, icon: '🛤️' },
      { name: 'REST APIs', level: 88, icon: '🔌' },
      { name: 'Authentication (JWT)', level: 80, icon: '🔐' },
      { name: 'Nodemailer', level: 75, icon: '📧' },
    ]
  },
  {
    label: 'Database',
    color: '#ec4899',
    skills: [
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'Mongoose ODM', level: 83, icon: '🗃️' },
      { name: 'CRUD Operations', level: 90, icon: '📋' },
      { name: 'Data Modeling', level: 78, icon: '🏗️' },
    ]
  },
  {
    label: 'Tools & Others',
    color: '#10b981',
    skills: [
      { name: 'Git & GitHub', level: 85, icon: '🐙' },
      { name: 'VS Code', level: 92, icon: '💻' },
      { name: 'Postman', level: 82, icon: '📮' },
      { name: 'Linux / Terminal', level: 70, icon: '🐧' },
      { name: 'npm / yarn', level: 85, icon: '📦' },
    ]
  },
]

const TECH_ICONS = [
  { name: 'MongoDB', color: '#47A248', bg: 'rgba(71,162,72,0.08)', emoji: '🍃' },
  { name: 'Express', color: '#ffffff', bg: 'rgba(255,255,255,0.05)', emoji: '🛤️' },
  { name: 'React', color: '#61DAFB', bg: 'rgba(97,218,251,0.08)', emoji: '⚛️' },
  { name: 'Node.js', color: '#339933', bg: 'rgba(51,153,51,0.08)', emoji: '🟩' },
  { name: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247,223,30,0.08)', emoji: '📜' },
  { name: 'HTML5', color: '#E34F26', bg: 'rgba(227,79,38,0.08)', emoji: '🔶' },
  { name: 'CSS3', color: '#1572B6', bg: 'rgba(21,114,182,0.08)', emoji: '🎨' },
  { name: 'Git', color: '#F05032', bg: 'rgba(240,80,50,0.08)', emoji: '🐙' },
  { name: 'Postman', color: '#FF6C37', bg: 'rgba(255,108,55,0.08)', emoji: '📮' },
  { name: 'VS Code', color: '#007ACC', bg: 'rgba(0,122,204,0.08)', emoji: '💻' },
]

export default function Skills() {
  const skillBarsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.skill-bar-fill')
            bars.forEach(bar => {
              bar.style.width = bar.dataset.level + '%'
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('skills')
    if (section) observer.observe(section)
    return () => section && observer.unobserve(section)
  }, [])

  return (
    <section className="section skills-section" id="skills">
      <div className="glow-orb skills-orb-1" />
      <div className="glow-orb skills-orb-2" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>🛠️</span> Skills & Stack
          </div>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            My battle-tested toolkit for building modern, scalable full-stack applications.
          </p>
          <div className="divider" />
        </div>

        {/* Tech stack orbit row */}
        <div className="tech-orbit">
          {TECH_ICONS.map((tech, i) => (
            <div key={tech.name} className="tech-pill" style={{ '--tech-color': tech.color, '--tech-bg': tech.bg, animationDelay: `${i * 0.1}s` }}>
              <span className="tech-emoji">{tech.emoji}</span>
              <span className="tech-name" style={{ color: tech.color }}>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.label} className="skill-category glass-card" style={{ animationDelay: `${ci * 0.15}s` }}>
              <div className="skill-cat-header">
                <span className="skill-cat-dot" style={{ background: cat.color }} />
                <h3 className="skill-cat-label" style={{ color: cat.color }}>{cat.label}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">
                        <span className="skill-emoji-icon">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="skill-level" style={{ color: cat.color }}>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        data-level={skill.level}
                        style={{ background: `linear-gradient(90deg, ${cat.color}99, ${cat.color})`, transitionDelay: `${si * 0.08 + ci * 0.15}s` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
