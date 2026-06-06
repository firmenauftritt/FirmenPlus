'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Leistungen' },
    { href: '#process', label: 'Prozess' },
    { href: '#faq', label: 'FAQ' },
    { href: '/contact', label: 'Kontakt' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md bg-opacity-95 border-b border-gray-200 shadow-sm">
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-light rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">◆</span>
            </div>
            <span className="font-bold text-xl bg-gradient-light bg-clip-text text-transparent">FirmenPlus</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-medium relative group transition-colors duration-300 hover:text-light-blue"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-blue group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link href="/contact" className="btn-primary text-sm">
              Kostenloses Erstgespräch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 font-medium hover:text-light-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link href="/contact" className="btn-primary block text-center w-full">
              Kostenloses Erstgespräch
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
