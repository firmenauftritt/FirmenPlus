import { FormEvent, useState } from 'react'

export default function Modal() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitted(true)
    const modal = document.getElementById('contact-modal')
    setTimeout(() => {
      if (modal) {
        modal.classList.remove('active')
        document.body.style.overflow = 'auto'
      }
      setFormSubmitted(false)
    }, 2000)
  }

  return (
    <div id="contact-modal" className="modal">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={() => {
            const modal = document.getElementById('contact-modal')
            if (modal) {
              modal.classList.remove('active')
              document.body.style.overflow = 'auto'
            }
          }}
        >
          ×
        </button>
        <h2>Kostenloses Erstgespräch</h2>
        <p>Lassen Sie uns Ihre Ziele besprechen</p>
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
          <button type="submit" className="btn btn-primary btn-block">Anfrage senden</button>
          {formSubmitted && <p className="form-success">Vielen Dank! Wir melden uns in Kürze.</p>}
        </form>
      </div>
    </div>
  )
}
