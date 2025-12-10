import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bhutan Travel Blog | Tips & Guides | Yodsel Tours & Treks',
  description: 'Expert Bhutan travel guides, tips, and insights. Learn about the best time to visit Bhutan, tour costs, visa requirements, and more from our 33+ years of experience.',
  keywords: ['Bhutan travel blog', 'Bhutan travel tips', 'Bhutan travel guide', 'best time to visit Bhutan', 'Bhutan tour cost', 'Bhutan visa guide'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Bhutan Travel Blog | Tips & Guides | Yodsel Tours & Treks',
    description: 'Expert Bhutan travel guides, tips, and insights from 33+ years of experience.',
    url: 'https://yodselbhutan.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
