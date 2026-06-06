export default function Services() {
  const services = [
    {
      title: 'Webdesign',
      icon: '🌐',
      features: [
        'Moderne Business-Websites',
        'Responsive Design',
        'Landing Pages',
        'Website-Optimierung',
        'Konversions-fokussiert'
      ]
    },
    {
      title: 'Online Marketing & Werbung',
      icon: '📢',
      features: [
        'Google Ads',
        'Social Media Advertising',
        'Lead Generation',
        'Lokales Marketing',
        'Kundenakquisitions-Kampagnen'
      ]
    },
    {
      title: 'KI-Automatisierung',
      icon: '🤖',
      features: [
        'Workflow-Automatisierung',
        'KI-Assistenten',
        'Kundenservice-Automation',
        'Prozessoptimierung',
        'Zeitsparende Lösungen'
      ]
    },
    {
      title: 'Digitalisierung',
      icon: '📊',
      features: [
        'Digitale Geschäftsprozesse',
        'Prozessoptimierung',
        'Moderne Software-Lösungen',
        'Digitale Transformation',
        'Transformationsberatung'
      ]
    },
    {
      title: 'IT-Dienstleistungen',
      icon: '💻',
      features: [
        'Technischer Support',
        'Website-Wartung',
        'Business-IT-Lösungen',
        'Digitale Infrastruktur',
        'Systemverwaltung'
      ]
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Unsere Leistungen</h2>
          <p>Umfassende digitale Lösungen für Ihr Unternehmenswachstum</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon-emoji">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
