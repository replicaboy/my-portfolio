import './Footer.css'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-gradient-line" />
      <div className="container footer-container">
        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-bracket">&lt;</span>HT<span className="logo-bracket">/&gt;</span>
            </span>
            <p className="footer-tagline">
              Building the web, one component at a time. 🚀
            </p>
          </div>

          <div className="footer-links-group">
            <p className="footer-links-title">Navigate</p>
            <div className="footer-links">
              {['about', 'skills', 'projects', 'journey', 'contact'].map(id => (
                <button
                  key={id}
                  id={`footer-nav-${id}`}
                  className="footer-link"
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-links-group">
            <p className="footer-links-title">Connect</p>
            <div className="footer-links">
              {[
                { label: 'GitHub', href: 'https://github.com/replicaboy', id: 'footer-github' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/hariomthakur', id: 'footer-linkedin' },
                { label: 'Twitter', href: 'https://twitter.com/hariomthakur', id: 'footer-twitter' },
                { label: 'Email', href: 'mailto:hariomthakur@gmail.com', id: 'footer-email' },
              ].map(link => (
                <a
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {YEAR} <span className="gradient-text">Hariom Thakur</span>. Crafted with ❤️ using the MERN Stack.
          </p>
          <button id="footer-scroll-top" className="scroll-top-btn" onClick={scrollToTop} title="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
