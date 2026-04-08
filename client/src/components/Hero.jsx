import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const ROLES = [
  'Full Stack Developer',
  'MERN Stack Engineer',
  'React Developer',
  'Node.js Developer',
  'MongoDB Expert',
  'Self-Taught Coder',
]

const SOCIAL_LINKS = [
  { id: 'github', label: 'GitHub', icon: '⌥', href: 'https://github.com/replicaboy' },
  { id: 'linkedin', label: 'LinkedIn', icon: '◈', href: 'https://linkedin.com/in/hariomthakur' },
  { id: 'twitter', label: 'Twitter', icon: '◉', href: 'https://twitter.com/hariomthakur' },
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef(null)

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIdx]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIdx((i) => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIdx])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.3
        this.vy = (Math.random() - 0.5) * 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.size = Math.random() * 1.5 + 0.5
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.fillStyle = Math.random() > 0.5 ? '#00d4ff' : '#7c3aed'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle())

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 100) {
            ctx.save()
            ctx.globalAlpha = (1 - dist / 100) * 0.12
            ctx.strokeStyle = '#00d4ff'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      drawConnections()
      animId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="grid-bg" />

      {/* Glow orbs */}
      <div className="glow-orb hero-orb-1" />
      <div className="glow-orb hero-orb-2" />
      <div className="glow-orb hero-orb-3" />

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero-badge-dot" />
            <span>Available for freelance</span>
          </div>

          <h1 className="hero-greeting" style={{ animationDelay: '0.2s', animation: 'fadeInUp 0.7s ease both 0.2s' }}>
            Hey, I'm
          </h1>

          <h1 className="hero-name" style={{ animation: 'fadeInUp 0.7s ease both 0.3s' }}>
            Hariom Thakur
          </h1>

          <div className="hero-role" style={{ animation: 'fadeInUp 0.7s ease both 0.4s' }}>
            <span className="role-prefix">{'> '}</span>
            <span className="role-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </div>

          <p className="hero-desc" style={{ animation: 'fadeInUp 0.7s ease both 0.5s' }}>
            Self-taught developer who turned curiosity into craft. I build 
            full-stack web apps using the MERN stack — from pixel-perfect UIs 
            to robust server-side architectures. No college degree, just 
            <span className="highlight"> pure passion & real-world code.</span>
          </p>

          <div className="hero-stats" style={{ animation: 'fadeInUp 0.7s ease both 0.6s' }}>
            {[
              { value: '2+', label: 'Years Coding' },
              { value: '15+', label: 'Projects Built' },
              { value: '5+', label: 'Happy Clients' },
              { value: '100%', label: 'Self-Taught' },
            ].map((stat) => (
              <div key={stat.label} className="hero-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions" style={{ animation: 'fadeInUp 0.7s ease both 0.7s' }}>
            <button id="hero-contact-btn" className="btn btn-primary" onClick={scrollToContact}>
              Let's Work Together
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button id="hero-projects-btn" className="btn btn-outline" onClick={scrollToProjects}>
              View My Work
            </button>
          </div>

          <div className="hero-socials" style={{ animation: 'fadeInUp 0.7s ease both 0.8s' }}>
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.id}
                id={`hero-${link.id}`}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                title={link.label}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Avatar / Code Card */}
        <div className="hero-visual" style={{ animation: 'fadeIn 1s ease both 0.5s' }}>
          <div className="hero-card-glow" />
          <div className="hero-code-card glass-card">
            <div className="code-card-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
              <span className="code-file">developer.js</span>
            </div>
            <div className="code-card-body">
              <pre className="code-block">
{`const developer = {
  name: "Hariom Thakur",
  title: "Full Stack Dev",
  location: "India 🇮🇳",
  
  stack: {
    frontend: ["React", "Vite", "CSS"],
    backend: ["Node.js", "Express"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "VS Code", "Postman"]
  },

  education: "Self-Taught 🎯",
  status: "Ready to build! 🚀",

  contact: () => hire(me)
}`}
              </pre>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge fb-react">
            <span>⚛️</span> React
          </div>
          <div className="float-badge fb-node">
            <span>🟩</span> Node.js
          </div>
          <div className="float-badge fb-mongo">
            <span>🍃</span> MongoDB
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
