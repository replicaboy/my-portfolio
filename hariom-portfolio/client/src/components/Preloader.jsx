import './Preloader.css'

export default function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">HT</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress" />
        </div>
        <p className="preloader-text">Initializing portfolio...</p>
      </div>
    </div>
  )
}
