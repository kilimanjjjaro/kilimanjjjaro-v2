/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['opengraph.githubassets.com', 'res.cloudinary.com'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
