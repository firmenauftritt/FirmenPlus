import { useState, useEffect } from "react"

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const services = [
    {
      title: "Webdesign",
      text: "Moderne, schnelle und verkaufsstarke Websites für Unternehmen.",
    },
    {
      title: "KI Automatisierung",
      text: "Automatisierung von Prozessen, Chatbots und digitale Systeme.",
    },
    {
      title: "Online Marketing",
      text: "Mehr Reichweite, mehr Kunden, mehr Umsatz.",
    },
  ]

  const faqs = [
    {
      q: "Wie schnell ist meine Website fertig?",
      a: "In der Regel innerhalb weniger Tage bis 2 Wochen je nach Umfang.",
    },
    {
      q: "Was kostet eine Website?",
      a: "Das hängt vom Projekt ab. Nach einem Gespräch bekommst du einen festen Preis.",
    },
    {
      q: "Kann ich später selbst Änderungen machen?",
      a: "Ja, oder wir übernehmen die Betreuung komplett für dich.",
    },
  ]

  return (
    <div className="page">

      {/* NAV */}
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <div className="logo">FirmenPlus</div>

        <nav className={mobileMenu ? "menu open" : "menu"}>
          <a href="#services">Leistungen</a>
          <a href="#about">Über uns</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <button className="burger" onClick={() => setMobileMenu(!mobileMenu)}>
          ☰
        </button>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <p className="tag">Webdesign · KI · Automatisierung</p>

          <h1>
            Ihr Unternehmen.<br />
            <span>Professionell im Internet.</span>
          </h1>

          <p className="sub">
            Wir erstellen moderne Websites und digitale Systeme,
            die Kunden bringen und Prozesse automatisieren.
          </p>

          <div className="buttons">
            <a className="btn" href="#contact">Kostenloses Gespräch</a>
            <a className="btn ghost" href="#services">Leistungen</a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>Leistungen</h2>

        <div className="grid">
          {services.map((s, i) => (
            <div className="card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section dark">
        <h2>Über uns</h2>
        <p>
          Wir helfen Unternehmen digital sichtbar zu werden und mehr Kunden zu gewinnen
          durch moderne Websites und Automatisierung.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <h2>FAQ</h2>

        <div className="faq">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q}
              </button>

              {openFaq === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h2>Kontakt</h2>

        <form className="form">
          <input placeholder="Name" />
          <input placeholder="E-Mail" />
          <textarea placeholder="Nachricht" rows="5"></textarea>
          <button className="btn">Senden</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} FirmenPlus
      </footer>

    </div>
  )
}
