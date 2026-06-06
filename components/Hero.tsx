'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-dark"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-8 left-0 w-80 h-80 bg-light-blue-pale rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Mehr Kunden.<br className="hidden sm:block" />
            <span className="gradient-text">Mehr Effizienz.</span>
            <br className="hidden sm:block" />
            Mehr Wachstum.
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Professionelle Websites, Online-Marketing, KI-Automatisierung und digitale Lösungen für moderne Unternehmen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/contact" className="btn-primary flex items-center gap-2 group">
              Kostenloses Erstgespräch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#services" className="btn-secondary">
              Leistungen entdecken
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300 mb-4">Vertraut von Unternehmen in Deutschland</p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-sm text-gray-300">Fokus auf Ihr Wachstum</p>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-sm text-gray-300">Kernkompetenzen</p>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-300">Partnerunterstützung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
