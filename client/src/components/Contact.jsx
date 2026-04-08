import { useState } from 'react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || ''
import './Contact.css'

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'hariomthakur@gmail.com', href: 'mailto:hariomthakur@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
  { icon: '📍', label: 'Location', value: 'India 🇮🇳', href: '#' },
  { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'loading' | 'success' | 'error'
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('Please fill in all fields.')
      return
    }
    setError('')
    setStatus('loading')

    try {
      const res = await axios.post(`${API_URL}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err.response?.data?.error || 'Something went wrong. Please try again.')
    }

    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="glow-orb contact-orb-1" />
      <div className="glow-orb contact-orb-2" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>📬</span> Contact
          </div>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="divider" />
        </div>

        <div className="contact-grid">
          {/* Left — info */}
          <div className="contact-info-col">
            <div className="contact-intro glass-card">
              <h3 className="contact-intro-title">Get in Touch</h3>
              <p className="contact-intro-text">
                Whether you need a full-stack web app, freelance development, or just want to chat about 
                technology — my inbox is always open. I respond within 24 hours.
              </p>
              <div className="contact-availability">
                <span className="avail-dot" />
                <span>Available for freelance & full-time opportunities</span>
              </div>
            </div>

            <div className="contact-info-list">
              {CONTACT_INFO.map(info => (
                <a
                  key={info.label}
                  href={info.href}
                  id={`contact-info-${info.label.toLowerCase()}`}
                  className={`contact-info-item glass-card ${info.href === '#' ? 'no-link' : ''}`}
                >
                  <span className="contact-info-icon">{info.icon}</span>
                  <div>
                    <p className="contact-info-label">{info.label}</p>
                    <p className="contact-info-value">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-socials-row glass-card">
              <p className="social-row-label">Also find me on:</p>
              <div className="social-row-links">
                {[
                  { name: 'GitHub', href: 'https://github.com/hariomthakur', id: 'contact-github' },
                  { name: 'LinkedIn', href: 'https://linkedin.com/in/hariomthakur', id: 'contact-linkedin' },
                  { name: 'Twitter', href: 'https://twitter.com/hariomthakur', id: 'contact-twitter' },
                ].map(s => (
                  <a key={s.name} id={s.id} href={s.href} target="_blank" rel="noreferrer" className="social-chip">
                    {s.name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact-form-col">
            <form className="contact-form glass-card" onSubmit={handleSubmit} id="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Hariom Thakur"
                    className="form-input"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="form-input"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration / Hiring / General"
                  className="form-input"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Hey Hariom, I have a project idea..."
                  className="form-input form-textarea"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && <div className="form-error">{error}</div>}

              {status === 'success' && (
                <div className="form-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <button
                id="contact-submit-btn"
                type="submit"
                className="btn btn-primary form-submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
