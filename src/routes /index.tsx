import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main style={{ padding: '40px' }}>
      <h1>FirmenPlus</h1>
      <p>Webdesign, KI-Automatisierung und Digitalisierung.</p>

      <h2>Unsere Leistungen</h2>
      <ul>
        <li>Webdesign</li>
        <li>KI-Automatisierung</li>
        <li>Digitalisierung</li>
        <li>IT-Dienstleistungen</li>
      </ul>
    </main>
  )
}
