/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['mill3.studio'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
