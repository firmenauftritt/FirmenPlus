'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-light-blue-pale rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container-max relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Lassen Sie uns gemeinsam Ihr Unternehmen in die digitale Zukunft führen. Unser Team freut sich auf das Gespräch mit Ihnen.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group mx-auto">
            Kostenloses Erstgespräch buchen
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
