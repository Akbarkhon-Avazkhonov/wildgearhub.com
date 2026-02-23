import type { Metadata, Viewport } from 'next'
import { Space_Mono, Oswald } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WildGearHub | Tactical Kitchen Organization',
  description: 'Gear Up Your Kitchen. Professional-grade storage solutions for those who take their ingredients seriously. Battle-ready pantries and tactical kitchen organization.',
  keywords: ['kitchen organization', 'pantry storage', 'food containers', 'spice racks', 'tactical kitchen'],
}

export const viewport: Viewport = {
  themeColor: '#2D3A27',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${oswald.variable} font-mono antialiased`} style={{ fontFamily: "var(--font-space-mono), 'Courier New', monospace" }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
