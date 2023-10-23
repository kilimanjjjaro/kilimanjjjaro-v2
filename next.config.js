/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['opengraph.githubassets.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000
  }
}

module.exports = nextConfig
