import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import About from './components/About'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import './styles.css'

function App() {
  useEffect(() => {
    // Handle modal buttons in navigation
    const navCTABtn = document.querySelector('.nav-cta')
    const contactModal = document.getElementById('contact-modal')
    if (navCTABtn && contactModal) {
      navCTABtn.addEventListener('click', () => {
        contactModal.classList.add('active')
        document.body.style.overflow = 'hidden'
      })
    }

    // Handle smooth scroll for data-scroll buttons
    const scrollButtons = document.querySelectorAll('[data-scroll]')
    scrollButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = (button as HTMLElement).getAttribute('data-scroll')
        if (targetId) {
          const target = document.getElementById(targetId)
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })

    // Handle modal closing
    const modalClose = document.querySelector('.modal-close')
    const modal = document.getElementById('contact-modal')
    if (modalClose && modal) {
      modalClose.addEventListener('click', () => {
        modal.classList.remove('active')
        document.body.style.overflow = 'auto'
      })

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active')
          document.body.style.overflow = 'auto'
        }
      })
    }

    // Handle Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modal?.classList.contains('active')) {
        modal.classList.remove('active')
        document.body.style.overflow = 'auto'
      }
    }
    document.addEventListener('keydown', handleEscape)

    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <Modal />
    </>
  )
}

export default App
