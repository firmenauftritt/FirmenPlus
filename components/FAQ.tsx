'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

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
    answer: 'Digitalisierung bedeutet, Ihre Geschäftsprozesse in die digitale Welt zu bringen – effizienter, transparenter und skalierbarer. Das kann von digitalen Dokumentenverwaltungssystemen bis zu vollständiger Prozessautomation reichen.'
  },
  {
    question: 'Wie läuft das erste Beratungsgespräch ab?',
    answer: 'Unser kostenloses Erstgespräch ist unverbindlich und völlig flexibel. Wir hören Ihnen zu, verstehen Ihre Ziele und Herausforderungen, und zeigen dann, wie FirmenPlus Ihnen helfen kann. Sie erhalten konkrete Empfehlungen und einen klaren Überblick.'
  },
  {
    question: 'Was ist nach der Implementierung Ihre Rolle?',
    answer: 'Wir sehen uns als langfristiger Partner. Nach der Implementierung unterstützen wir Sie durch kontinuierliche Optimierung, technische Wartung, Performance-Monitoring und strategische Beratung. Ihr Erfolg ist unser Erfolg.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="container-max">
        <div className="section-header">
          <h2 className="section-title">Häufig gestellte Fragen</h2>
          <p className="section-subtitle">Antworten auf Ihre wichtigsten Fragen</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-light-blue transition-colors duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="font-semibold text-dark-blue text-left">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-light-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 animate-fade-in">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
