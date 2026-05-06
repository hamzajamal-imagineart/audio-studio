import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimations from '@/components/ScrollAnimations'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImagineArt Audio Studio',
  description: 'Voice that feels authentic. Kick off with a natural voice prompt or explore advanced singing and music tools.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.figma.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&family=Google+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <ScrollAnimations />
        {children}
        <Footer />
      </body>
    </html>
  )
}
