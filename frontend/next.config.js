/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'c.animaapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.activtrak.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

