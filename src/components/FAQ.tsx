import { useState } from 'react'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Was kostet eine professionelle Website?',
      answer: 'Die Kosten für eine Website variieren je nach Umfang und Komplexität. Eine professionelle Business-Website beginnt ab einem bestimmten Budget und wird individuell kalkuliert. Während Ihres Erstgesprächs erhalten Sie eine klare Kostenübersicht basierend auf Ihren spezifischen Anforderungen.'
    },
    {
      question: 'Wie funktioniert KI-Automatisierung für mein Unternehmen?',
      answer: 'KI-Automatisierung kann viele Prozesse vereinfachen: von automatisierter Kundenservice-Kommunikation über Workflow-Optimierung bis zur intelligenten Datenverwaltung. Wir analysieren Ihre Prozesse und identifizieren Bereiche, wo KI messbare Zeitersparnisse und Kostenreduktionen bringt.'
    },
    {
      question: 'Wie funktioniert Online-Werbung?',
      answer: 'Online-Werbung umfasst Strategien wie Google Ads und Social Media Marketing. Wir erstellen Kampagnen, die Ihre Zielgruppe gezielt erreichen und messbare Ergebnisse liefern. Jede Kampagne wird kontinuierlich optimiert, um das beste Kosten-Nutzen-Verhältnis zu erzielen.'
    },
    {
      question: 'Was bedeutet Digitalisierung für mein Unternehmen?',
      answer: 'Digitalisierung bedeutet, Ihre Geschäftsprozesse in die digitale Welt zu bringen – effizienter, transparenter und skalierbarer. Das kann von digitalen Dokumentenverwaltungssystemen bis zu vollständiger Prozessautomation reichen, je nach Ihren Bedürfnissen.'
    },
    {
      question: 'Wie läuft das erste Beratungsgespräch ab?',
      answer: 'Unser kostenloses Erstgespräch ist unverbindlich und völlig flexibel. Wir hören Ihnen zu, verstehen Ihre Ziele und Herausforderungen, und zeigen dann, wie FirmenPlus Ihnen helfen kann. Sie erhalten konkrete Empfehlungen und einen klaren Überblick über mögliche nächste Schritte.'
    },
    {
      question: 'Was ist nach der Implementierung Ihre Rolle?',
      answer: 'Wir sehen uns als langfristiger Partner. Nach der Implementierung unterstützen wir Sie durch kontinuierliche Optimierung, technische Wartung, Performance-Monitoring und strategische Beratung. Ihr Erfolg ist unser Erfolg.'
    }
  ]

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Häufig gestellte Fragen</h2>
          <p>Antworten auf Ihre wichtigsten Fragen</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`faq-item ${activeIndex === idx ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
