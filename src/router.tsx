import { Outlet, createRootRoute, Link } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">Start</Link>
        <Link to="/leistungen">Leistungen</Link>
        <Link to="/ueber-uns">Über uns</Link>
        <Link to="/kontakt">Kontakt</Link>
      </nav>

      <Outlet />
    </>
  )
}
