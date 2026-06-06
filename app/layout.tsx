import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FirmenPlus - Digitale Lösungen für Ihr Wachstum',
  description: 'Professionelle Websites, Online-Marketing, KI-Automatisierung und digitale Lösungen für moderne Unternehmen. FirmenPlus ist Ihr Partner für digitales Wachstum.',
  keywords: 'Webdesign, Online Marketing, KI-Automatisierung, Digitalisierung, IT-Services, Digital Agency',
  openGraph: {
    title: 'FirmenPlus - Digitale Lösungen für Ihr Wachstum',
    description: 'Professionelle Websites, Online-Marketing, KI-Automatisierung und digitale Lösungen für moderne Unternehmen.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
