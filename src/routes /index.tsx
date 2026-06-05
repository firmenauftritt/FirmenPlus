import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: FirmenauftrittWebsite,
})

function FirmenauftritWebsite() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href')
    if (href?.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
   const response = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
})
  }

  const navLinks = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#referenzen', label: 'Referenzen' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  const SERVICES = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: 'Professionelle Internetseiten',
      subtitle: 'Ihr digitales Schaufenster',
      description:
        'Eine Website, die Kunden überzeugt – nicht nur informiert. Wir gestalten und entwickeln Internetauftritte, die Vertrauen wecken, auf jedem Gerät perfekt aussehen und in Google gefunden werden.',
      bullets: [
        'Suchmaschinenoptimiert (SEO)',
        'Mobilfreundlich & schnell',
        'Einfach zu aktualisieren',
        'DSGVO-konform',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10" />
          <path d="M12 6a6 6 0 0 1 6 6" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 22v-2M6.34 19.66l1.41-1.41M2 12h2M6.34 4.34l1.41 1.41" />
        </svg>
      ),
      title: 'KI-Lösungen',
      subtitle: 'Intelligenz für Ihr Unternehmen',
      description:
        'Künstliche Intelligenz ist kein Zukunftsthema mehr – sie ist jetzt verfügbar. Wir setzen KI-Tools ein, die Ihnen Zeit sparen, Kundenanfragen automatisch bearbeiten und Ihr Unternehmen rund um die Uhr verfügbar machen.',
      bullets: [
        'KI-Chatbot für Ihre Website',
        'Automatische Terminvereinbarung',
        'Angebotserstellung per KI',
        'Kundenkommunikation 24/7',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
      title: 'Automatisierungen',
      subtitle: 'Mehr Zeit für das Wesentliche',
      description:
        'Wiederkehrende Aufgaben kosten Zeit und Nerven. Wir automatisieren Prozesse in Ihrem Unternehmen – von der Rechnungsstellung bis zur Kundennachverfolgung – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.',
      bullets: [
        'E-Mail-Workflows & Vorlagen',
        'Digitale Rechnungsstellung',
        'CRM-Anbindung & -pflege',
        'Bewertungsmanagement',
      ],
    },
  ]

  const TESTIMONIALS = [
    {
      text: 'Endlich eine Website, auf die ich stolz bin. Neue Kunden sagen mir regelmäßig, dass sie mich über Google gefunden haben. Das allein hat sich schon ausgezahlt.',
      name: 'Nicole Huszak',
      company: 'Podologie Huszak',
      since: 'Kunde seit 2023',
    },
  ]

  const references = [
    'Podologie Huszak'
  ]

  const FAQS = [
    {
      q: 'Was kostet eine professionelle Website?',
      a: 'Jedes Unternehmen ist anders. Deshalb gibt es bei uns keine Pauschalpreise von der Stange. Nach einem kostenlosen Gespräch erhalten Sie ein klares Angebot, das zu Ihrem Betrieb und Ihren Zielen passt.',
    },
    {
      q: 'Wie lange dauert die Erstellung?',
      a: 'Das hängt vom Umfang der Website ab. In vielen Fällen können wir innerhalb weniger Tage starten und erste Ergebnisse zeigen. Während des gesamten Projekts halten wir Sie auf dem Laufenden.',
    },
    {
      q: 'Ich bin kein Technik-Experte – ist das ein Problem?',
      a: 'Überhaupt nicht. Die meisten unserer Kunden beschäftigen sich lieber mit ihrem Geschäft als mit Technik. Wir kümmern uns um die Umsetzung und erklären alles so, dass es verständlich bleibt.',
    },
    {
      q: 'Kann ich die Website später selbst bearbeiten?',
      a: 'Ja. Wenn Sie möchten, zeigen wir Ihnen, wie Sie Texte, Bilder oder andere Inhalte selbst ändern können. Falls Sie lieber alles abgeben möchten, übernehmen wir das natürlich auch.',
    },
    {
      q: 'Wie hilft mir KI konkret in meinem Betrieb?',
      a: 'KI kann viele kleine Aufgaben übernehmen, die im Alltag Zeit kosten. Zum Beispiel Kundenanfragen beantworten, Termine koordinieren oder Informationen automatisch bereitstellen. Welche Lösung sinnvoll ist, hängt immer von Ihrem Betrieb ab.',
    },
  ]

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Navigation */}
      <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                background: 'var(--accent-gold)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3 4h14v2H3zM3 9h10v2H3zM3 14h12v2H3z" fill="#0a0c10" />
              </svg>
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                }}
              >
                FirmenPlus
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt" onClick={handleNavClick} className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
              Jetzt anfragen
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '8px',
            }}
            aria-label="Menü öffnen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)',
            zIndex: 98,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={handleNavClick}
            className="btn-primary"
            style={{ marginTop: '1rem' }}
          >
            Jetzt anfragen
          </a>
        </div>
      )}

      {/* ======================== HERO ======================== */}
      <section className="hero-section" id="startseite">
        <div className="hero-grid" />
        <div className="hero-radial" />
        <div className="hero-bottom-fade" />

        {/* Decorative vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
          className="hidden lg:flex"
        >
          <div className="scroll-line" />
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--text-muted)', writingMode: 'vertical-rl', textTransform: 'uppercase' }}>
            Scroll
          </span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 2rem 80px', width: '100%' }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="section-label animate-fade-in-up" style={{ marginBottom: '2rem' }}>
              <span className="gold-line" />
              Für Handwerker & Unternehmer
            </div>

            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 600,
                lineHeight: 1.05,
                color: 'var(--text-primary)',
                marginBottom: '2rem',
                letterSpacing: '-0.01em',
              }}
            >
              Ihr Betrieb.{' '}
              <em style={{ color: 'var(--accent-gold-light)', fontStyle: 'italic' }}>Professionell</em>
              <br />
              im Internet.
            </h1>

            <p
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                maxWidth: '580px',
                fontWeight: 300,
              }}
            >
              Wir erstellen professionelle Websites, setzen KI-Lösungen ein und automatisieren
              Prozesse – damit Sie mehr Kunden gewinnen und weniger Zeit mit Bürokratie verbringen.
            </p>

            <div
              className="animate-fade-in-up delay-300"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}
            >
              <a href="#kontakt" onClick={handleNavClick} className="btn-primary">
                Kostenloses Erstgespräch
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a href="#leistungen" onClick={handleNavClick} className="btn-secondary">
                Leistungen entdecken
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="animate-fade-in-up delay-400"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {[
                { icon: '✓', text: 'Persönliche Beratung' },
                { icon: '✓', text: 'Feste Preise, keine Überraschungen' },
                { icon: '✓', text: 'Lieferung in 12 Werktagen' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                  }}
                >
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== STATS BAR ======================== */}
      <section
        style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.value}
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== LEISTUNGEN ======================== */}
      <section
        id="leistungen"
        style={{ padding: '120px 0', background: 'var(--bg-primary)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '4rem', maxWidth: '620px' }}>
            <div className="section-label">
              <span className="gold-line" />
              Was wir für Sie tun
            </div>
            <h2 className="section-title">
              Drei Bausteine für{' '}
              <em>Ihren Erfolg</em>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginTop: '1.5rem', fontSize: '1rem' }}>
              Von der ersten Zeile Code bis zur fertigen Lösung – alles aus einer Hand.
              Kein Fachjargon, keine unnötige Komplexität.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2px',
              background: 'var(--border-subtle)',
            }}
          >
            {services.map((service, i) => (
              <div key={service.title} className="service-card">
                <div className="service-icon" style={{ color: 'var(--accent-gold)' }}>
                  {service.icon}
                </div>

                <div
                  style={{
                    fontSize: '0.7rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  {service.subtitle}
                </div>

                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.7rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '1.25rem',
                    lineHeight: 1.2,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    marginBottom: '1.75rem',
                  }}
                >
                  {service.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: 'var(--text-secondary)',
                        fontSize: '0.88rem',
                      }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'var(--accent-gold-dim)',
                          border: '1px solid var(--border-gold)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold)',
                          fontSize: '0.65rem',
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WIE ES FUNKTIONIERT ======================== */}
      <section
        style={{
          padding: '120px 0',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'start',
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <div className="section-label">
                <span className="gold-line" />
                Unser Prozess
              </div>
              <h2 className="section-title">
                Einfach,{' '}
                <em>transparent</em>,<br />
                verlässlich.
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  marginTop: '1.5rem',
                  fontSize: '1rem',
                  marginBottom: '2.5rem',
                }}
              >
                Viele Unternehmer scheuen sich vor der Digitalisierung, weil sie kompliziert
                wirkt. Bei uns ist der Prozess klar strukturiert und Sie wissen immer,
                was als nächstes passiert.
              </p>
              <a href="#kontakt" onClick={handleNavClick} className="btn-primary">
                Gespräch vereinbaren
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {[
                {
                  num: '01',
                  title: 'Kostenloses Kennenlernen',
                  desc: 'In einem kurzen Gespräch schauen wir, was Sie brauchen und ob ich Ihnen dabei helfen kann.',
                },
                {
                  num: '02',
                  title: 'Individuelles Angebot',
                  desc: 'Sie erhalten ein klares Angebot ohne versteckte Kosten. So wissen Sie genau, womit Sie rechnen können.',
                },
                {
                  num: '03',
                  title: 'Erstellung der Website',
                  desc: 'Ich setze Ihre Website um und halte Sie währenddessen auf dem Laufenden. Änderungswünsche können jederzeit eingebracht werden.',
                },
                {
                  num: '04',
                  title: 'Online & erreichbar',
                  desc: 'Nach der Veröffentlichung stehe ich Ihnen bei Fragen oder kleineren Anpassungen weiterhin zur Verfügung.',
                },
              ].map((step, i) => (
                <div
                  key={step.num}
                  className="process-step"
                  style={{
                    paddingBottom: i < 3 ? '2.5rem' : '0',
                    borderBottom: i < 3 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <div className="step-number">{step.num}</div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '1.3rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {step.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== ÜBER UNS ======================== */}
      <section
        id="ueber-uns"
        style={{ padding: '120px 0', background: 'var(--bg-primary)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'center',
            }}
          >
            {/* Visual block */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  padding: '3rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Decorative corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: 'var(--accent-gold-dim)',
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  }}
                />

                <div className="section-label" style={{ marginBottom: '1.5rem' }}>
                  <span className="gold-line" />
                  Unsere Mission
                </div>

                <blockquote
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.6rem',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: '2rem',
                  }}
                >
                  "Jeder Betrieb verdient einen professionellen Internetauftritt – egal wie
                  groß oder klein."
                </blockquote>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  {[
                    { label: 'Gegründet', value: '2016' },
                    { label: 'Standort', value: 'Deutschland' },
                    { label: 'Branchen', value: '40+' },
                    { label: 'Team', value: '8 Experten' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          color: 'var(--text-muted)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Cormorant Garamond, serif',
                          fontSize: '1.4rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  left: '-1.5rem',
                  width: '100px',
                  height: '100px',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '2px',
                  background: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: 'var(--accent-gold)',
                    lineHeight: 1,
                    textAlign: 'center',
                  }}
                >
                  8<br />
                  <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-muted)' }}>Jahre</span>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <div className="section-label">
                <span className="gold-line" />
                Über uns
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Wir sprechen Ihre{' '}
                <em>Sprache</em>
              </h2>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.97rem',
                  lineHeight: 1.8,
                }}
              >
                <p>
                  Ich unterstütze kleine Unternehmen, Selbstständige und Handwerksbetriebe dabei,
                  professionell im Internet aufzutreten. Mein Fokus liegt auf modernen Websites,
                  die Vertrauen schaffen und neue Kunden gewinnen können.
                </p>
                <p>
                  Mir ist wichtig, dass die Zusammenarbeit unkompliziert bleibt. Deshalb gibt es
                  keine komplizierten Fachbegriffe und keine unnötigen Prozesse – sondern direkte
                  Kommunikation und eine Lösung, die zu Ihrem Betrieb passt.
                </p>
                <p>
                  Sie haben während des Projekts immer einen direkten Ansprechpartner und können
                  sich bei Fragen jederzeit melden.
                </p>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginTop: '2.5rem',
                }}
              >
                {[
                  'Persönliche und direkte Betreuung',
                  'Verständliche Kommunikation ohne Fachbegriffe',
                  'Individuelle Lösungen für Ihren Betrieb',
                  'Auch nach der Fertigstellung erreichbar',
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: '2px' }}
                    >
                      <circle cx="9" cy="9" r="8.5" stroke="var(--accent-gold)" strokeOpacity="0.4" />
                      <path d="M5.5 9l2.5 2.5 5-5" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== REFERENZEN ======================== */}
      <section
        id="referenzen"
        style={{
          padding: '120px 0',
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="gold-line" />
              Was unsere Kunden sagen
            </div>
            <h2 className="section-title">
              Echte Ergebnisse, <em>echte Stimmen</em>
            </h2>
          </div>

          {/* Testimonials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '5rem',
            }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card">
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="var(--accent-gold)">
                      <path d="M8 1l1.9 3.8L14 5.6l-3 2.9.7 4.1L8 10.5l-3.7 2.1.7-4.1-3-2.9 4.1-.8z" />
                    </svg>
                  ))}
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    marginBottom: '1.75rem',
                    fontStyle: 'italic',
                  }}
                >
                  "{t.text}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '3px' }}>
                    {t.company} · {t.since}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reference logos grid */}
          <div style={{ marginBottom: '2rem' }}>
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '2rem',
              }}
            >
              Erfolgreich umgesetzt
            </p>
            <div
  style={{
    background: 'var(--bg-card)',
    border: '1px solid var(--border-subtle)',
    padding: '3rem',
    textAlign: 'center',
  }}
>
  <h3
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '1.8rem',
      color: 'var(--text-primary)',
      marginBottom: '1rem',
    }}
  >
    Podologie Huszak
  </h3>

  <p
    style={{
      color: 'var(--text-secondary)',
      lineHeight: 1.8,
      maxWidth: '600px',
      margin: '0 auto',
    }}
  >
    Erstellung einer modernen Website für eine Podologie-Praxis mit Fokus auf
    Vertrauen, Übersichtlichkeit und einfache Kontaktaufnahme.
  </p>
</div>

</div>
</div>
</section>

{/* ======================== FAQ ======================== */}
<section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              <span className="gold-line" />
              Häufige Fragen
            </div>
            <h2 className="section-title">
              Ihre Fragen, <em>klar beantwortet</em>
            </h2>
          </div>

          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{ borderBottom: '1px solid var(--border-subtle)', padding: '1.5rem 0' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: openFaq === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      minWidth: '28px',
                      width: '28px',
                      height: '28px',
                      border: '1px solid var(--border-gold)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-gold)',
                      fontSize: '1.2rem',
                      lineHeight: 1,
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      marginTop: '1rem',
                      paddingRight: '3rem',
                    }}
                  >
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <section
        style={{
          background: 'var(--bg-elevated)',
          borderTop: '1px solid var(--border-gold)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '80px 2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            Jetzt starten
          </div>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Bereit für Ihren{' '}
            <em style={{ color: 'var(--accent-gold-light)' }}>neuen Auftritt?</em>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
            }}
          >
            Das kostenlose Erstgespräch dauert 30 Minuten. Danach wissen Sie genau,
            was möglich ist – und was es kostet.
          </p>
          <a href="#kontakt" onClick={handleNavClick} className="btn-primary" style={{ fontSize: '1rem', padding: '16px 40px' }}>
            Kostenloses Gespräch buchen
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3.5 9h11M10 5l4 4-4 4" />
            </svg>
          </a>
        </div>
      </section>

      {/* ======================== KONTAKT ======================== */}
      <section
        id="kontakt"
        style={{ padding: '120px 0', background: 'var(--bg-primary)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: '6rem',
              alignItems: 'start',
            }}
          >
            {/* Contact info */}
            <div>
              <div className="section-label">
                <span className="gold-line" />
                Kontakt
              </div>
              <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                Sprechen wir{' '}
                <em>miteinander</em>
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.97rem',
                  lineHeight: 1.8,
                  marginBottom: '3rem',
                }}
              >
                Schreiben Sie mir einfach eine Nachricht. Ich schaue mir Ihr Anliegen an und melde mich persönlich bei Ihnen zurück.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 6l8 5 8-5M2 6v9a1 1 0 001 1h14a1 1 0 001-1V6M2 6a1 1 0 011-1h14a1 1 0 011 1" />
                      </svg>
                    ),
                    label: 'E-Mail',
                    value: 'info@der-firmenauftritt.de',
                    href: 'mailto:info@der-firmenauftritt.de',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M2 3h4l2 5-2.5 1.5A11 11 0 0012.5 14.5L14 12l5 2v4a1 1 0 01-1 1A17 17 0 011 4a1 1 0 011-1z" />
                      </svg>
                    ),
                    label: 'Telefon',
                    value: '+49 (0)800 000 0000',
                    href: 'tel:+498000000000',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="10" cy="8" r="3" />
                        <path d="M10 1a7 7 0 017 7c0 5-7 12-7 12S3 13 3 8a7 7 0 017-7z" />
                      </svg>
                    ),
                    label: 'Standort',
                    value: 'Deutschland – bundesweit tätig',
                    href: null,
                  },
                ].map((contact) => (
                  <div key={contact.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        background: 'var(--accent-gold-dim)',
                        border: '1px solid var(--border-gold)',
                        borderRadius: '2px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-gold)',
                        flexShrink: 0,
                      }}
                    >
                      {contact.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.97rem' }}
                          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-gold-light)')}
                          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span style={{ color: 'var(--text-primary)', fontSize: '0.97rem' }}>
                          {contact.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '2px',
                padding: '3rem',
              }}
            >
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'var(--accent-gold-dim)',
                      border: '1px solid var(--border-gold)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent-gold)" strokeWidth="2">
                      <path d="M5 14l6 6L23 8" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.8rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Anfrage erfolgreich gesendet
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    Vielen Dank für Ihre Nachricht. Ich melde mich so schnell wie
                    möglich bei Ihnen zurück.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <h3
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.6rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Kostenlose Anfrage stellen
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '2rem' }}>
                    Ich antworte in der Regel innerhalb von 24 Stunden.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Muster GmbH"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="+49 123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Ihr Anliegen *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="form-input"
                      placeholder="Erzählen Sie kurz, worum es geht oder was Sie sich vorstellen..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ resize: 'vertical', minHeight: '100px' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem', padding: '16px' }}
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 1s linear infinite' }}>
                          <circle cx="9" cy="9" r="7" strokeOpacity="0.3" />
                          <path d="M9 2a7 7 0 017 7" />
                        </svg>
                        Wird gesendet…
                      </>
                    ) : (
                      <>
                        Anfrage senden
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M2 8h10M8 4l4 4-4 4" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== FOOTER ======================== */}
      <footer
        style={{
          background: 'var(--bg-surface)',
          borderTop: '1px solid var(--border-subtle)',
          padding: '60px 2rem 40px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gap: '4rem',
              marginBottom: '4rem',
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    background: 'var(--accent-gold)',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4h14v2H3zM3 9h10v2H3zM3 14h12v2H3z" fill="#0a0c10" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  Der Firmenauftritt
                </span>
              </div>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.88rem',
                  lineHeight: 1.75,
                  maxWidth: '280px',
                }}
              >
                Professionelle Websites, KI-Lösungen und Automatisierungen für kleine
                und mittelständische Unternehmen in Deutschland.
              </p>
            </div>

            {/* Links */}
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-gold-light)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Rechtliches
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Impressum', 'Datenschutz', 'AGB'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-gold-light)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              © 2026 FirmenPlus. Alle Rechte vorbehalten.
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
              Ihr Erfolg im Internet – unser Handwerk.
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hidden { display: none !important; }
          section > div > div[style*="grid-template-columns: 1fr 1fr"],
          section > div > div[style*="grid-template-columns: 2fr 1fr 1fr"],
          section > div > div[style*="grid-template-columns: 1fr 1.4fr"] {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          section > div > div[style*="grid-template-columns: 1fr 1fr"] > div:first-child {
            order: 2;
          }
        }
        @media (min-width: 769px) {
          .hidden { display: none; }
          .md\\:flex { display: flex !important; }
          .md\\:grid-cols-2 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  )
}
