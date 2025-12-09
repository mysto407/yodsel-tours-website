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
  description: 'Experience the magic of Bhutan with Yodsel Tours & Treks. 33+ years of expertise in crafting unforgettable Himalayan journeys. Discover ancient monasteries, stunning landscapes, and authentic cultural experiences.',
  keywords: ['Bhutan tours', 'Bhutan travel', 'Himalayan tours', 'Bhutan trekking', 'Bhutan travel agency', 'Thimphu tours', 'Paro tours', 'Tiger\'s Nest', 'Bhutan vacation'],
  authors: [{ name: 'Yodsel Tours & Treks' }],
  creator: 'Yodsel Tours & Treks',
  publisher: 'Yodsel Tours & Treks',
  metadataBase: new URL('https://yodselbhutan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yodselbhutan.com',
    siteName: 'Yodsel Tours & Treks',
    title: 'Yodsel Tours & Treks | Bhutan Travel Experts',
    description: 'Experience the magic of Bhutan with Yodsel Tours & Treks. 33+ years of expertise in crafting unforgettable Himalayan journeys.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yodsel Tours & Treks - Bhutan Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yodsel Tours & Treks | Bhutan Travel Experts',
    description: 'Experience the magic of Bhutan with Yodsel Tours & Treks. 33+ years of expertise in crafting unforgettable Himalayan journeys.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Yodsel Tours & Treks",
              "description": "Experience the magic of Bhutan with Yodsel Tours & Treks. 33+ years of expertise in crafting unforgettable Himalayan journeys.",
              "url": "https://yodselbhutan.com",
              "logo": "https://yodselbhutan.com/logo.png",
              "image": "https://yodselbhutan.com/og-image.jpg",
              "telephone": "+975-17-127-071",
              "email": "bhutanyodsel@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Thimphu",
                "addressCountry": "Bhutan"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "27.4728",
                "longitude": "89.6393"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Bhutan"
              },
              "priceRange": "$$",
              "foundingDate": "1991",
              "sameAs": [
                "https://www.facebook.com/yodseltours",
                "https://www.instagram.com/yodseltours"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bhutan Tour Packages",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Cultural Tours",
                      "description": "Explore Bhutan's rich cultural heritage"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "TouristTrip",
                      "name": "Trekking Adventures",
                      "description": "Himalayan trekking experiences in Bhutan"
                    }
                  }
                ]
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}