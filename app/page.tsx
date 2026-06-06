import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChoose from '@/components/WhyChoose'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import ContactCTA from '@/components/ContactCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  )
}
