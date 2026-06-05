import { useState } from "react"

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">

      {/* NAV */}
      <header className="nav">
        <div className="logo">FirmenPlus</div>

        <nav className={open ? "navlinks open" : "navlinks"}>
          <a href="#leistungen">Leistungen</a>
          <a href="#about">Über uns</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <button className="menu" onClick={() => setOpen(!open)}>☰</button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="badge">Premium Web & KI Agentur</div>

        <h1>
          Digitale Lösungen,<br />
          die Kunden bringen.
        </h1>

        <p>
          Wir entwickeln hochwertige Websites, KI-Automatisierungen und Marketing-Systeme
          für moderne Unternehmen.
        </p>

        <div className="hero-buttons">
          <a className="btn" href="#kontakt">Kostenloses Gespräch</a>
          <a className="btn-secondary" href="#leistungen">Leistungen ansehen</a>
        </div>
      </section>

      {/* FEATURES */}
      <section id="leistungen" className="section">
        <h2>Leistungen</h2>

        <div className="grid">
          <div className="card">
            <h3>Premium Webdesign</h3>
            <p>Moderne, schnelle und conversion-starke Websites.</p>
          </div>

          <div className="card">
            <h3>KI Automatisierung</h3>
            <p>Automatisierte Prozesse für mehr Effizienz & Umsatz.</p>
          </div>

          <div className="card">
            <h3>Digital Marketing</h3>
            <p>Strategien für mehr Sichtbarkeit & Kunden.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark">
        <h2>Über FirmenPlus</h2>
        <p>
          Wir helfen Unternehmen dabei, digital sichtbar zu werden und Prozesse zu automatisieren.
          Kein Chaos – nur klare Ergebnisse.
        </p>
      </section>

      {/* PROCESS */}
      <section className="section">
        <h2>So arbeiten wir</h2>

        <div className="steps">
          <div>1. Gespräch</div>
          <div>2. Konzept</div>
          <div>3. Umsetzung</div>
          <div>4. Launch</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" className="section">
        <h2>Kontakt</h2>

        <form className="form">
          <input placeholder="Name" />
          <input placeholder="E-Mail" />
          <textarea placeholder="Projekt beschreiben..." />
          <button type="submit">Anfrage senden</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 FirmenPlus – Premium Web & KI Lösungen
      </footer>

    </div>
  )
}
