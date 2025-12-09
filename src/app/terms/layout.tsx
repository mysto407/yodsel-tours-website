import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Yodsel Tours & Treks',
  description: 'Read the terms and conditions for booking Bhutan tours with Yodsel Tours & Treks, including payment terms, travel requirements, and tour policies.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Yodsel Tours & Treks',
    description: 'Read the terms and conditions for booking Bhutan tours with Yodsel Tours & Treks.',
    url: 'https://yodselbhutan.com/terms',
    type: 'website',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
