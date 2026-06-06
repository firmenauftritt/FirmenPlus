'use client'

import { Palette, Megaphone, Zap, Share2, Shield } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Webdesign',
    description: 'Moderne, responsive Business-Websites die Ihre Kunden begeistern und Conversions fördern.',
    features: [
      'Moderne Business-Websites',
      'Responsive Design',
      'Landing Pages',
      'Website-Optimierung',
      'Konversions-fokussiert'
    ]
  },
  {
    icon: Megaphone,
    title: 'Online Marketing & Werbung',
    description: 'Gezielte Kampagnen, die Ihre Zielgruppe erreichen und messbare Ergebnisse liefern.',
    features: [
      'Google Ads',
      'Social Media Advertising',
      'Lead Generation',
      'Lokales Marketing',
      'Kundenakquisitions-Kampagnen'
    ]
  },
  {
    icon: Zap,
    title: 'KI-Automatisierung',
    description: 'Intelligente Automatisierung für effizientere Prozesse und mehr Zeit für Strategisches.',
    features: [
      'Workflow-Automatisierung',
      'KI-Assistenten',
      'Kundenservice-Automation',
      'Prozessoptimierung',
      'Zeitsparende Lösungen'
    ]
  },
  {
    icon: Share2,
    title: 'Digitalisierung',
    description: 'Transformieren Sie Ihre Geschäftsprozesse in die digitale Zukunft.',
    features: [
      'Digitale Geschäftsprozesse',
      'Prozessoptimierung',
      'Moderne Software-Lösungen',
      'Digitale Transformation',
      'Transformationsberatung'
    ]
  },
  {
    icon: Shield,
    title: 'IT-Dienstleistungen',
    description: 'Zuverlässige technische Unterstützung und Infrastruktur für Ihr Geschäft.',
    features: [
      'Technischer Support',
      'Website-Wartung',
      'Business-IT-Lösungen',
      'Digitale Infrastruktur',
      'Systemverwaltung'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-36 bg-gray-50">
      <div className="container-max">
        <div className="section-header">
          <h2 className="section-title">Unsere Leistungen</h2>
          <p className="section-subtitle">Umfassende digitale Lösungen für Ihr Unternehmenswachstum</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group border border-gray-200 hover:border-light-blue"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-blue mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-light-blue font-bold mt-1">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
