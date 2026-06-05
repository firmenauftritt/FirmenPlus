import { useState, useEffect } from "react"

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState("idle")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href")
    if (href?.startsWith("#")) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: "smooth" })
      }
      setMobileMenuOpen(false)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("sending")

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    })

    setFormStatus("success")
  }

  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#ueber-uns", label: "Über uns" },
    { href: "#referenzen", label: "Referenzen" },
    { href: "#kontakt", label: "Kontakt" },
  ]

  const SERVICES = [
    { title: "Webdesign", subtitle: "Premium Websites", description: "Moderne Websites für Unternehmen.", bullets: ["SEO", "Schnell", "Mobil"] },
    { title: "KI Lösungen", subtitle: "Automation", description: "KI für dein Business.", bullets: ["Chatbots", "Automationen", "24/7"] },
    { title: "Marketing", subtitle: "Wachstum", description: "Mehr Kunden online.", bullets: ["Ads", "Social Media", "Branding"] },
  ]

  const TESTIMONIALS = [
    {
      text: "Endlich eine Website, die Kunden bringt.",
      name: "Nicole Huszak",
      company: "Podologie Huszak",
      since: "Kunde seit 2023",
    },
  ]

  const FAQS = [
    { q: "Was kostet eine Website?", a: "Individuell je nach Projekt." },
    { q: "Wie lange dauert es?", a: "Meist 1–2 Wochen." },
    { q: "Kann ich Inhalte ändern?", a: "Ja, jederzeit möglich." },
  ]

  const stats = [
    { value: "40+", label: "Projekte" },
    { value: "100%", label: "Zufriedenheit" },
    { value: "7 Tage", label: "Ø Umsetzung" },
  ]

  return (
    <div style={{ background: "var(--bg-primary)" }}>

      {/* NAV */}
      <nav className={`nav-container ${scrolled ? "nav-scrolled" : ""}`}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#" style={{ textDecoration: "none" }}>
            <strong>FirmenPlus</strong>
          </a>

          <div className="hidden md:flex" style={{ gap: "2rem" }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={handleNavClick}>
                {l.label}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* HERO (DEIN STYLE BEHALTEN) */}
      <section className="hero-section">
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 2rem" }}>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
            Ihr Betrieb.<br />
            <span style={{ color: "gold" }}>Professionell im Internet.</span>
          </h1>

          <p style={{ maxWidth: "600px", color: "#aaa" }}>
            Websites, KI und Automatisierung für Unternehmen.
          </p>

          <a className="btn-primary" href="#kontakt">
            Kostenloses Gespräch
          </a>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: "40px" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <div>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="leistungen">
        {SERVICES.map((s) => (
          <div key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="ueber-uns">
        <h2>Über uns</h2>
        <p>Wir bauen moderne digitale Lösungen für Unternehmen.</p>
      </section>

      {/* TESTIMONIAL */}
      <section id="referenzen">
        {TESTIMONIALS.map((t) => (
          <div key={t.name}>
            <p>"{t.text}"</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section>
        {FAQS.map((f, i) => (
          <div key={i}>
            <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              {f.q}
            </button>
            {openFaq === i && <p>{f.a}</p>}
          </div>
        ))}
      </section>

      {/* CONTACT */}
      <section id="kontakt">
        <form onSubmit={handleFormSubmit}>
          <input placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
          <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <textarea placeholder="Nachricht" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          <button type="submit">
            {formStatus === "sending" ? "Senden..." : "Senden"}
          </button>
        </form>
      </section>

    </div>
  )
}
