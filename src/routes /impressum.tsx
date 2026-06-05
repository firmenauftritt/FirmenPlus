import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/impressum')({
  component: Impressum,
})

function Impressum() {
  return (
    <main style={{ padding: '40px' }}>
      <h1>Impressum</h1>
      <p>Angaben gemäß § 5 TMG folgen hier.</p>
    </main>
  )
}
