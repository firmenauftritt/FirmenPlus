export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h2>Über FirmenPlus</h2>
            <p>
              FirmenPlus ist Ihr moderner digitaler Partner für echtes Wachstum. In einer Welt, die sich immer schneller verändert, verstehen wir die Herausforderungen, denen kleine und mittelständische Unternehmen gegenüberstehen.
            </p>
            <p>
              Unsere Mission: Wir helfen Ihrem Unternehmen, sichtbarer zu werden, effizienter zu arbeiten und wettbewerbsfähiger zu sein – durch intelligente digitale Lösungen und persönliche Betreuung.
            </p>
            <p>
              Ob es um eine neue Website geht, die Kundengewinnung durch digitale Marketing oder die Automatisierung Ihrer Geschäftsprozesse – wir haben die Expertise und das Engagement, um Ihre digitale Transformation zu gestalten.
            </p>
            <div className="about-highlights">
              <div className="highlight">
                <div className="highlight-number">100%</div>
                <div className="highlight-label">Fokus auf Ihr Wachstum</div>
              </div>
              <div className="highlight">
                <div className="highlight-number">5</div>
                <div className="highlight-label">Kernkompetenzen</div>
              </div>
              <div className="highlight">
                <div className="highlight-number">∞</div>
                <div className="highlight-label">Skalierbare Lösungen</div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-placeholder">
              <svg viewBox="0 0 400 400" fill="none">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#grad)" />
                <text x="200" y="210" textAnchor="middle" fontSize="48" fill="#fff" fontWeight="bold">Digital</text>
                <text x="200" y="260" textAnchor="middle" fontSize="48" fill="#93c5fd">Partner</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
