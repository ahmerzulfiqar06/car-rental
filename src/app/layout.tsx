import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { WhatsAppChat } from '@/components/WhatsAppChat'
import { LoadingScreen } from '@/components/LoadingScreen'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elite Car Rental | Premium Luxury Vehicles',
  description: 'Experience luxury car rental with our premium fleet. Book high-end vehicles for your special occasions with professional service and competitive rates.',
  keywords: 'car rental, luxury cars, premium vehicles, rental service, luxury transportation',
  authors: [{ name: 'Elite Car Rental' }],
  robots: 'index, follow',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Elite Car Rental | Premium Luxury Vehicles',
    description: 'Experience luxury car rental with our premium fleet.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        <LoadingScreen />
        {children}
        <WhatsAppChat />
      </body>
    </html>
  )
}
