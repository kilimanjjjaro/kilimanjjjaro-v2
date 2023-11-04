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
    minimumCacheTTL: 31536000
  }
}

module.exports = nextConfig
