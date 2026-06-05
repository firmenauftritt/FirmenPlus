import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/datenschutz')({
  component: Datenschutz,
})

function Datenschutz() {
  return (
    <main style={{ padding: '40px' }}>
      <h1>Datenschutzerklärung</h1>
      <p>Informationen zum Datenschutz folgen hier.</p>
    </main>
  )
}
