export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-icon">◆</span>
            <span className="logo-text">FirmenPlus</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Leistungen</a>
            <a href="#process" className="nav-link">Prozess</a>
            <a href="#about" className="nav-link">Über uns</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#contact" className="nav-link">Kontakt</a>
          </div>
          <button className="nav-cta">Beratung anfragen</button>
        </div>
      </div>
    </nav>
  )
}
