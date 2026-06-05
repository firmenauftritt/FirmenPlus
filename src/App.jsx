import { useState } from "react"

export default function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">

      {/* NAV */}
      <header className="nav">
        <div className="logo">FirmenPlus</div>

        <nav className={open ? "menu open" : "menu"}>
          <a href="#services">Leistungen</a>
          <a href="#about">Über uns</a>
          <a href="#process">Ablauf</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <button className="burger" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </header>

      {/* HERO (WICHTIG: jetzt groß & premium) */}
      <section className="hero">
        <div className="hero-inner">

          <div className="badge">Webdesign · KI · Automatisierung</div>

          <h1>
            Ihr Unternehmen.<br />
            <span>Professionell im Internet.</span>
          </h1>

          <p>
            Wir erstellen hochwertige Websites, automatisieren Prozesse
            und bringen Ihr Unternehmen digital nach vorne.
          </p>

          <div className="hero-buttons">
            <a className="btn" href="#contact">Kostenloses Gespräch</a>
            <a className="btn ghost" href="#services">Leistungen ansehen</a>
          </div>

          <div className="trust">
            <div>✓ Schnell umgesetzt</div>
            <div>✓ Festpreis</div>
            <div>✓ Premium Design</div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Leistungen</h2>

        <div className="grid">
          <div className="card">
            <h3>Webdesign</h3>
            <p>Moderne, schnelle und verkaufsstarke Websites.</p>
          </div>

          <div className="card">
            <h3>KI Automatisierung</h3>
            <p>Chatbots, Prozesse und intelligente Systeme.</p>
          </div>

          <div className="card">
            <h3>Online Marketing</h3>
            <p>Mehr Sichtbarkeit, mehr Kunden, mehr Umsatz.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark">
        <h2>Über uns</h2>
        <p>
          Wir helfen kleinen und mittelständischen Unternehmen,
          digital sichtbar und erfolgreich zu werden – ohne Chaos,
          ohne Technikstress.
        </p>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <h2>Ablauf</h2>

        <div className="steps">
          <div>1. Gespräch</div>
          <div>2. Angebot</div>
          <div>3. Umsetzung</div>
          <div>4. Online gehen</div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Kontakt</h2>

        <form className="form">
          <input placeholder="Name" />
          <input placeholder="E-Mail" />
          <textarea placeholder="Worum geht es?" rows="5"></textarea>
          <button className="btn">Anfrage senden</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} FirmenPlus · Alle Rechte vorbehalten
      </footer>

    </div>
  )
}
