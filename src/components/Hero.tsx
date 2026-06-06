export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">
            Mehr Kunden.<br />
            Mehr Effizienz.<br />
            Mehr Wachstum.
          </h1>
          <p className="hero-subheadline">
            FirmenPlus unterstützt Unternehmen mit professionellen Websites, gezielter Werbung, KI-Automatisierung und digitalen Lösungen.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" data-modal="contact-modal">Kostenloses Erstgespräch</button>
            <button className="btn btn-secondary" data-scroll="services">Leistungen entdecken</button>
          </div>
        </div>
      </div>
    </section>
  )
}
