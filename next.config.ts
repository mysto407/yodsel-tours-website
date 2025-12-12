import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Target modern browsers to reduce polyfills
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
};

export default nextConfig;