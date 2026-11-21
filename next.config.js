/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com'
      }
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 95],
    minimumCacheTTL: 31536000
  }
}

module.exports = nextConfig
