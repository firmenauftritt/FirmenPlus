import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div>
      <nav style={{
        padding: '20px',
        display: 'flex',
        gap: '20px',
        borderBottom: '1px solid #333'
      }}>
        <Link to="/">Start</Link>
        <Link to="/leistungen">Leistungen</Link>
        <Link to="/ueber-uns">Über uns</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>

      <Outlet />
    </div>
  )
}
