import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">FirmenPlus</div>

        <div className="nav-links">
          <a href="#services">Leistungen</a>
          <a href="#contact">Kontakt</a>
        </div>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <h1>
          Premium Webdesign für <span>Unternehmen</span>
        </h1>

        <p>
          Wir erstellen moderne Webseiten, Automatisierungen und KI-Lösungen,
          die Kunden bringen – nicht nur gut aussehen.
        </p>

        <a href="#contact" className="btn">
          Kostenloses Gespräch
        </a>
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */
function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Leistungen</h2>

        <div className="grid">
          <div className="card">
            <h3>Webdesign</h3>
            <p>Moderne, schnelle und verkaufsstarke Webseiten.</p>
          </div>

          <div className="card">
            <h3>KI Automatisierung</h3>
            <p>Automatische Antworten, Prozesse & Workflows.</p>
          </div>

          <div className="card">
            <h3>Online Marketing</h3>
            <p>Mehr Reichweite, mehr Kunden, mehr Umsatz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section id="contact" className="section dark">
      <div className="container">
        <h2>Kontakt</h2>

        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Nachricht gesendet (Demo)");
          }}
        >
          <input placeholder="Name" required />
          <input placeholder="E-Mail" required />
          <textarea placeholder="Nachricht" rows="5" required />

          <button className="btn">Senden</button>
        </form>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} FirmenPlus – Alle Rechte vorbehalten
      </div>
    </footer>
  );
}
