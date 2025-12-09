import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Yodsel Tours & Treks',
  description: 'Learn how Yodsel Tours & Treks collects, uses, and protects your personal information when you book Bhutan tours and travel services.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Yodsel Tours & Treks',
    description: 'Learn how Yodsel Tours & Treks collects, uses, and protects your personal information.',
    url: 'https://yodselbhutan.com/privacy-policy',
    type: 'website',
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
