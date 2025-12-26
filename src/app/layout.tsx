import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

// If you want to use Google Fonts, import them like this:
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-primary'
})

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `Bhutan Tour Packages ${currentYear} | Best Bhutan Travel Agency | Yodsel Tours & Treks`,
  description: 'Book Bhutan tour packages with Yodsel Tours & Treks - 33+ years experience. Explore Tiger\'s Nest, Punakha Dzong, Paro & Thimphu. Cultural tours, trekking adventures & festival tours. Licensed Bhutan travel agency.',
  keywords: ['Bhutan tour package', 'best Bhutan tour package', 'Bhutan travel package', 'best Bhutan travel agency', 'Bhutan trip', 'Bhutan holiday package', 'Bhutan tour from India', 'Bhutan tour from Australia', 'Bhutan tour from UK', 'Bhutan tour from USA', 'Bhutan tour from Europe', 'Bhutan tour from Germany', 'Bhutan tour from France', 'Bhutan tour from Canada', 'Bhutan tour from Singapore', 'Bhutan tour from Thailand', 'Bhutan tour from Malaysia', 'Bhutan tour from Japan', 'Bhutan tour from China', 'Bhutan tour from Netherlands', 'Bhutan tour from Spain', 'Bhutan tour from Italy', 'Bhutan tour from Switzerland', 'Bhutan tour from New Zealand', 'Bhutan tour from UAE', 'Bhutan tour from Dubai', 'Bhutan tour from Nepal', 'Bhutan tour from Bangladesh', 'best Bhutan tours', 'Bhutan tourism', 'visit Bhutan', 'Bhutan vacation package', 'Bhutan travel agency', 'Bhutan trekking', 'best Tiger\'s Nest tour', 'Paro valley tour', 'Thimphu tour', 'Punakha tour', 'best Bhutan cultural tour', 'Bhutan festival tour', 'best Bhutan honeymoon package', 'Bhutan adventure tour', 'Himalayan tours', 'best Bhutan trip package', 'cheap Bhutan tour', 'affordable Bhutan package', 'luxury Bhutan tour', 'Bhutan group tour', 'Bhutan solo travel', 'Bhutan family tour'],
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
    title: `Bhutan Tour Packages ${currentYear} | Best Bhutan Travel Agency | Yodsel Tours & Treks`,
    description: 'Book Bhutan tour packages with Yodsel Tours & Treks - 33+ years experience. Cultural tours, trekking & festival tours. Licensed Bhutan travel agency.',
    images: [
      {
        url: '/tigersnest.jpg',
        width: 1200,
        height: 630,
        alt: 'Tiger\'s Nest Monastery - Bhutan Tour Packages by Yodsel Tours & Treks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Bhutan Tour Packages ${currentYear} | Yodsel Tours & Treks`,
    description: 'Book Bhutan tour packages with 33+ years experienced travel agency. Explore Tiger\'s Nest, Punakha, Paro & more.',
    images: ['/tigersnest.jpg'],
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
    google: '_cO52nioH_Te7k9yos-WMc3gXC4rNw7LCPRmo1O4qG8',
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
        {/* Preconnect to font CDNs - must be first for early connection */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />

        {/* Async font loading script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var fonts = [
                  'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap',
                  'https://api.fontshare.com/v2/css?f[]=quicksand@500&f[]=britney@400&f[]=nippo@400,700&display=swap',
                  'https://fonts.cdnfonts.com/css/pp-neue-montreal?styles=158867,158871,158869,158866&display=swap'
                ];
                fonts.forEach(function(url) {
                  var link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.href = url;
                  link.media = 'print';
                  link.onload = function() { this.media = 'all'; };
                  document.head.appendChild(link);
                });
              })();
            `
          }}
        />
        {/* Fallback for no-JS */}
        <noscript>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet" />
          <link href="https://api.fontshare.com/v2/css?f[]=quicksand@500&f[]=britney@400&f[]=nippo@400,700&display=swap" rel="stylesheet" />
          <link href="https://fonts.cdnfonts.com/css/pp-neue-montreal?styles=158867,158871,158869,158866&display=swap" rel="stylesheet" />
        </noscript>
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Yodsel Tours & Treks",
              "description": "Book Bhutan tour packages with Yodsel Tours & Treks - licensed Bhutan travel agency with 33+ years experience. Cultural tours, trekking adventures, festival tours to Tiger's Nest, Punakha, Paro, Thimphu and more.",
              "url": "https://yodselbhutan.com",
              "logo": "https://yodselbhutan.com/yttLOGO.png",
              "image": "https://yodselbhutan.com/tigersnest.jpg",
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