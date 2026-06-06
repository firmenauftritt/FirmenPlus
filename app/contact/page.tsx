import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Kontakt - FirmenPlus',
  description: 'Kontaktieren Sie FirmenPlus für ein kostenloses Erstgespräch. Wir freuen uns auf das Gespräch mit Ihnen.',
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-max">
          <Link href="/" className="inline-flex items-center gap-2 text-light-blue hover:text-dark-blue-light transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Zurück
          </Link>

          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-4">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Wir freuen uns auf das Gespräch mit Ihnen. Füllen Sie das Formular aus und wir melden uns in Kürze.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
