import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Yodsel Tours & Treks',
  description: 'Understand our cancellation and refund policy for Bhutan tour bookings, including modification fees and refund timelines.',
  alternates: {
    canonical: '/cancellation-policy',
  },
  openGraph: {
    title: 'Cancellation Policy | Yodsel Tours & Treks',
    description: 'Understand our cancellation and refund policy for Bhutan tour bookings.',
    url: 'https://yodselbhutan.com/cancellation-policy',
    type: 'website',
  },
}

export default function CancellationPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
