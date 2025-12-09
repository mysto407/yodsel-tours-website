import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// If you want to use Google Fonts, import them like this:
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary'
})

export const metadata: Metadata = {
  title: 'Yodsel Tours & Treks | Bhutan Travel Experts',
  description: 'Experience the magic of Bhutan with Yodsel Tours & Treks. 33+ years of expertise in crafting unforgettable Himalayan journeys.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add custom font links here instead of @import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=quicksand@500&f[]=britney@400&f[]=nippo@400,700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.cdnfonts.com/css/pp-neue-montreal?styles=158867,158871,158869,158866" 
          rel="stylesheet" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}