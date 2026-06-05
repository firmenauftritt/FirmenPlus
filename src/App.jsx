import { useEffect, useState } from "react"

export default function App() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="page">

      {/* NAV */}
      <header className={scroll ? "nav nav-scroll" : "nav"}>
        <div className="logo">FirmenPlus</div>

        <nav>
          <a href="#services">Leistungen</a>
          <a href="#cases">Cases</a>
          <a href="#about">Über uns</a>
          <a href="#kontakt" className="nav-cta">Kontakt</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="badge">Premium Digital Studio</div>

        <h1>
          Wir bauen digitale Systeme,<br />
          die Umsatz erzeugen.
        </h1>

        <p>
          Webdesign, KI-Automatisierung und Marketing-Systeme für Unternehmen,
          die wachsen wollen – schnell, sauber und professionell.
        </p>

        <div className="hero-buttons">
          <a href="#kontakt" className="btn">Projekt starten</a>
          <a href="#services" className="btn-outline">Leistungen</a>
        </div>

        <div className="trust">
          <span>✓ Schnelle Umsetzung</span>
          <span>✓ Premium Design</span>
          <span>✓ KI Automatisierung</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Leistungen</h2>

        <div className="grid">
          <div className="card">
            <h3>Webdesign</h3>
            <p>High-End Websites mit Fokus auf Conversion & Vertrauen.</p>
          </div>

          <div className="card">
            <h3>KI Automatisierung</h3>
            <p>Automatisierte Prozesse, Chatbots und Workflows.</p>
          </div>

          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Strategien für Reichweite, Leads und Wachstum.</p>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="cases" className="section dark">
        <h2>Case Study</h2>

        <div className="case">
          <h3>Podologie Praxis – mehr Kunden durch neue Website</h3>
          <p>
            Modernes Redesign mit Fokus auf Vertrauen, Google Sichtbarkeit
            und einfache Termin-Anfragen.
          </p>

          <div className="stats">
            <div>+140% Anfragen</div>
            <div>Top Google Ranking</div>
            <div>Mobile Optimiert</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>Über uns</h2>

        <p className="text">
          FirmenPlus ist ein Digital Studio für moderne Unternehmen.
          Wir verbinden Design, Technologie und Automatisierung.
        </p>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="section">
        <h2>Kontakt</h2>

        <form className="form">
          <input placeholder="Name" />
          <input placeholder="E-Mail" />
          <textarea placeholder="Projekt beschreiben..." />
          <button>Projekt anfragen</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 FirmenPlus – Digital Studio
      </footer>

    </div>
  )
}
