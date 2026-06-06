'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-blue text-white">
      <div className="container-max py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="font-bold text-xl">FirmenPlus</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr Partner für digitales Wachstum und moderne Geschäftslösungen.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-6">Leistungen</h3>
            <ul className="space-y-3">
              {['Webdesign', 'Online Marketing', 'KI-Automatisierung', 'Digitalisierung', 'IT-Services'].map((item) => (
                <li key={item}>
                  <a href="/#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-6">Unternehmen</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#process" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Unser Prozess
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="mailto:kontakt@firmenplus.de" className="hover:text-white transition-colors">
                  kontakt@firmenplus.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+49000000000" className="hover:text-white transition-colors">
                  +49 (0) 000 - 000 000
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} FirmenPlus. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
