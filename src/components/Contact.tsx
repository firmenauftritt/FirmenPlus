import { FormEvent, useState } from 'react'

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Kontaktieren Sie uns</h2>
          <p>Wir freuen uns auf das Gespräch mit Ihnen</p>
        </div>
        <div className="contact-wrapper">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Ihr Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Ihre E-Mail-Adresse" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Ihre Telefonnummer" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Unternehmensname" />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Welche Leistung interessiert Sie?</option>
                  <option value="webdesign">Webdesign</option>
                  <option value="marketing">Online Marketing</option>
                  <option value="automation">KI-Automatisierung</option>
                  <option value="digitalization">Digitalisierung</option>
                  <option value="it">IT-Dienstleistungen</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Ihre Nachricht" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">Anfrage senden</button>
              {formSubmitted && <p className="form-success">Vielen Dank! Wir melden uns in Kürze.</p>}
            </form>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h4>E-Mail</h4>
              <p><a href="mailto:kontakt@firmenplus.de">kontakt@firmenplus.de</a></p>
            </div>
            <div className="contact-item">
              <h4>Telefon</h4>
              <p><a href="tel:+49000000000">+49 (0) 000 - 000 000</a></p>
            </div>
            <div className="contact-item">
              <h4>Bürozeiten</h4>
              <p>Montag - Freitag<br />09:00 - 18:00 Uhr</p>
            </div>
            <div className="contact-item">
              <h4>Angebot</h4>
              <p>Kostenlose Erstberatung<br />Unverbindlich & flexibel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
