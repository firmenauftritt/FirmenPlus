export default function Process() {
  const steps = [
    { number: '01', title: 'Analyse', desc: 'Wir analysieren Ihre aktuelle Situation, Ziele und Marktchancen gründlich. Nur mit vollständigem Verständnis können wir die beste Strategie entwickeln.', icon: '📊' },
    { number: '02', title: 'Strategie', desc: 'Basierend auf unserer Analyse erstellen wir eine maßgeschneiderte Strategie, die Ihre Ziele in konkrete, erreichbare Meilensteine umwandelt.', icon: '🎯' },
    { number: '03', title: 'Umsetzung', desc: 'Unser erfahrenes Team setzt die Strategie mit höchster Qualität um. Transparente Kommunikation während des gesamten Prozesses ist garantiert.', icon: '⚙️' },
    { number: '04', title: 'Wachstum', desc: 'Nach dem Launch überwachen und optimieren wir kontinuierlich. Ihr Erfolg ist unser Erfolg – wir sind ein Partner auf lange Sicht.', icon: '📈' }
  ]

  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header">
          <h2>Unser Prozess für Ihr Wachstum</h2>
          <p>4 bewährte Schritte zu nachhaltigem digitalen Erfolg</p>
        </div>
        <div className="process-steps">
          {steps.map((step, idx) => (
            <div key={step.number}>
              <div className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="step-icon">{step.icon}</div>
              </div>
              {idx < steps.length - 1 && <div className="process-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
