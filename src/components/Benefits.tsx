export default function Benefits() {
  const benefits = [
    { title: 'Individuelle Lösungen', desc: 'Maßgeschneidert für Ihre spezifischen Anforderungen und Ziele' },
    { title: 'Moderne Technologien', desc: 'Zukunftssichere Lösungen mit den neuesten Technologien' },
    { title: 'Schnelle Umsetzung', desc: 'Effiziente Projektabwicklung ohne lange Wartezeiten' },
    { title: 'Persönliche Betreuung', desc: 'Ein dediziertes Team kümmert sich um Ihr Projekt' },
    { title: 'Fokus auf Ergebnisse', desc: 'Messbare Erfolge und konkrete ROI-Verbesserungen' },
    { title: 'Zukunftssichere Strategien', desc: 'Langfristige Lösungen, die mit Ihrem Unternehmen wachsen' }
  ]

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-wrapper">
          <div className="benefits-content">
            <h2>Warum FirmenPlus?</h2>
            <p className="benefits-intro">
              Wir sind mehr als nur ein Dienstleister. Wir sind Ihr Partner für nachhaltiges Wachstum und digitale Exzellenz.
            </p>
            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-item">
                  <div className="benefit-icon">✓</div>
                  <div className="benefit-text">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="benefits-visual">
            <div className="visual-placeholder">
              <div className="gradient-blob blob-1"></div>
              <div className="gradient-blob blob-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
