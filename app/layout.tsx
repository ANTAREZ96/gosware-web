import type { Metadata, Viewport } from 'next'
import { Orbitron, Sora } from "next/font/google"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

import { Analytics } from '@vercel/analytics/next'
import './globals.css'



export const metadata: Metadata = {
  title: 'GOSWARE | Más que hardware, una experiencia',
  description: 'Ensamblaje de PCs de alto rendimiento, soporte técnico especializado y hardware premium para gamers, creadores y empresas. Tu aliado tecnológico en Ciudad de México.',
  keywords: ['PC gaming', 'hardware', 'soporte técnico', 'ensamblaje PC', 'periféricos', 'tecnología', 'México'],
  authors: [{ name: 'GOSWARE' }],
  openGraph: {
    title: 'GOSWARE | Más que hardware, una experiencia',
    description: 'Ensamblaje de PCs de alto rendimiento, soporte técnico especializado y hardware premium.',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOSWARE | Más que hardware, una experiencia',
    description: 'Ensamblaje de PCs de alto rendimiento, soporte técnico especializado y hardware premium.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${orbitron.className} bg-background`}>
      <body className={`${sora.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
