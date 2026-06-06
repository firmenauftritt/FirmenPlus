'use client'

import { FormEvent, useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsLoading(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      e.currentTarget.reset()
    }, 3000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-2">
              Ihr Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300"
              placeholder="Max Mustermann"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-2">
              Email-Adresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300"
              placeholder="max@beispiel.de"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-dark-blue mb-2">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300"
              placeholder="+49 (0) 123 456789"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-dark-blue mb-2">
              Unternehmensname
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300"
              placeholder="Ihre Firma GmbH"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-dark-blue mb-2">
              Welche Leistung interessiert Sie? *
            </label>
            <select
              id="service"
              name="service"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300"
            >
              <option value="">Bitte wählen Sie...</option>
              <option value="webdesign">Webdesign</option>
              <option value="marketing">Online Marketing</option>
              <option value="automation">KI-Automatisierung</option>
              <option value="digitalization">Digitalisierung</option>
              <option value="it">IT-Dienstleistungen</option>
              <option value="other">Sonstiges</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2">
              Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-light-blue focus:outline-none focus:ring-2 focus:ring-light-blue/20 transition-all duration-300 resize-none"
              placeholder="Erzählen Sie uns von Ihrem Projekt..."
            ></textarea>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-500">
            Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung. Wir behandeln Ihre Daten vertraulich.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? 'Wird gesendet...' : 'Nachricht senden'}
          </button>

          {/* Success Message */}
          {isSubmitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm animate-fade-in">
              ✓ Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze.
            </div>
          )}
        </div>
      </form>

      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="font-bold text-dark-blue mb-6">Kontaktinformationen</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a href="mailto:kontakt@firmenplus.de" className="font-semibold text-dark-blue hover:text-light-blue transition-colors">
                  kontakt@firmenplus.de
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Telefon</p>
                <a href="tel:+49000000000" className="font-semibold text-dark-blue hover:text-light-blue transition-colors">
                  +49 (0) 000 - 000 000
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-light-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-light-blue" />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Bürozeiten</p>
                <p className="font-semibold text-dark-blue">Mo. - Fr. 09:00 - 18:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-light/10 rounded-xl p-6 border border-light-blue/20">
          <h4 className="font-bold text-dark-blue mb-4">Kostenloses Erstgespräch</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-light-blue">✓</span>
              Unverbindlich
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-blue">✓</span>
              Keine versteckten Kosten
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-blue">✓</span>
              Persönliche Beratung
            </li>
            <li className="flex items-center gap-2">
              <span className="text-light-blue">✓</span>
              Individuelle Lösungen
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
