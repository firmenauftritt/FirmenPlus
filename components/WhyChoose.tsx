'use client'

import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Individuelle Lösungen',
    description: 'Maßgeschneidert für Ihre spezifischen Anforderungen und Ziele'
  },
  {
    title: 'Moderne Technologien',
    description: 'Zukunftssichere Lösungen mit den neuesten Technologien'
  },
  {
    title: 'Schnelle Umsetzung',
    description: 'Effiziente Projektabwicklung ohne lange Wartezeiten'
  },
  {
    title: 'Persönliche Betreuung',
    description: 'Ein dediziertes Team kümmert sich um Ihr Projekt'
  },
  {
    title: 'Fokus auf Ergebnisse',
    description: 'Messbare Erfolge und konkrete ROI-Verbesserungen'
  },
  {
    title: 'Zukunftssichere Strategien',
    description: 'Langfristige Lösungen, die mit Ihrem Unternehmen wachsen'
  }
]

export default function WhyChoose() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white">
      <div className="container-max">
        <div className="section-header">
          <h2 className="section-title">Warum FirmenPlus?</h2>
          <p className="section-subtitle">Wir sind mehr als nur ein Dienstleister. Wir sind Ihr Partner für nachhaltiges Wachstum.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-xl bg-gray-50 hover:bg-light-blue/5 transition-all duration-300 group border border-gray-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-light-blue flex-shrink-0 group-hover:scale-110 transition-transform mt-1" />
              <div>
                <h3 className="font-bold text-dark-blue mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
