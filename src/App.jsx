import { useState } from "react"

export default function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const services = [
    "Webdesign & Entwicklung",
    "Online-Marketing & Ads",
    "Social Media Marketing",
    "KI-Automatisierung",
    "Prozess-Digitalisierung",
    "IT & Digitalberatung",
  ]

  const faqs = [
    {
      q: "Was kostet eine Website?",
      a: "Der Preis hängt vom Umfang ab. Sie erhalten immer ein individuelles, transparentes Angebot ohne versteckte Kosten.",
    },
    {
      q: "Wie schnell ist die Umsetzung?",
      a: "In der Regel starten wir innerhalb weniger Tage und liefern erste Ergebnisse sehr schnell.",
    },
    {
      q: "Kann ich Inhalte später selbst ändern?",
      a: "Ja, auf Wunsch bauen wir alles so, dass Sie Inhalte selbst anpassen können.",
    },
  ]

  return (
    <div style={{ fontFamily: "sans-serif", background: "#0a0c10", color: "white" }}>

      {/* HERO */}
      <section style={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <div style={{ maxWidth: "900px" }}>
          
          <p style={{ color: "#c9a84c", letterSpacing: "2px" }}>
            WEB • KI • AUTOMATISIERUNG • MARKETING
          </p>

          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            margin: "20px 0",
            lineHeight: 1.1
          }}>
            Ihr Unternehmen. <span style={{ color: "#c9a84c" }}>Digital sichtbar.</span>
          </h1>

          <p style={{
            opacity: 0.7,
            maxWidth: "650px",
            margin: "0 auto 30px",
            fontSize: "1.1rem"
          }}>
            Wir entwickeln moderne Websites, KI-Lösungen und digitale Systeme,
            die Kunden bringen und Prozesse automatisieren.
          </p>

          <a href="#kontakt" style={{
            background: "#c9a84c",
            color: "#000",
            padding: "14px 28px",
            textDecoration: "none",
            fontWeight: "bold",
            borderRadius: "6px"
          }}>
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "80px 20px", background: "#111318" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Leistungen
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          maxWidth: "1000px",
          margin: "0 auto"
        }}>
          {services.map((s) => (
            <div key={s} style={{
              padding: "20px",
              border: "1px solid #222",
              background: "#0a0c10"
            }}>
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2>Über FirmenPlus</h2>
        <p style={{ maxWidth: "700px", margin: "20px auto", opacity: 0.7 }}>
          Wir helfen Unternehmen dabei, online sichtbar zu werden und durch
          moderne digitale Lösungen nachhaltig zu wachsen.
        </p>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 20px", background: "#111318" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Häufige Fragen
        </h2>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              borderBottom: "1px solid #222",
              padding: "15px 0"
            }}>
              <div
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                {f.q}
              </div>

              {openFaq === i && (
                <p style={{ opacity: 0.7, marginTop: "10px" }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontakt" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2>Kontakt</h2>
        <p style={{ opacity: 0.7, marginBottom: "20px" }}>
          Starten wir Ihr Projekt gemeinsam.
        </p>

        <a href="mailto:info@firmenplus.de" style={{
          background: "#c9a84c",
          color: "#000",
          padding: "14px 28px",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "6px"
        }}>
          E-Mail senden
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #222",
        opacity: 0.6
      }}>
        © 2026 FirmenPlus
      </footer>

    </div>
  )
}
