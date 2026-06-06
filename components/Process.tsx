'use client'

import { BarChart3, Target, Zap, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Analyse',
    description: 'Wir analysieren Ihre aktuelle Situation, Ziele und Marktchancen gründlich.',
    icon: BarChart3
  },
  {
    number: '02',
    title: 'Strategie',
    description: 'Basierend auf unserer Analyse erstellen wir eine maßgeschneiderte Strategie.',
    icon: Target
  },
  {
    number: '03',
    title: 'Umsetzung',
    description: 'Unser Team setzt die Strategie mit höchster Qualität um.',
    icon: Zap
  },
  {
    number: '04',
    title: 'Wachstum',
    description: 'Nach dem Launch überwachen und optimieren wir kontinuierlich.',
    icon: TrendingUp
  }
]

export default function Process() {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="container-max">
        <div className="section-header">
          <h2 className="section-title">Unser Prozess für Ihr Wachstum</h2>
          <p className="section-subtitle">4 bewährte Schritte zu nachhaltigem digitalen Erfolg</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-[60%] w-full h-0.5 bg-gradient-light opacity-30"></div>
                )}

                {/* Card */}
                <div className="relative z-10 bg-white rounded-2xl p-8 text-center border border-gray-200 hover:border-light-blue transition-colors duration-300 h-full flex flex-col justify-between">
                  {/* Number */}
                  <div className="inline-block mx-auto mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-light flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-light-blue mx-auto mb-4" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-dark-blue mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
