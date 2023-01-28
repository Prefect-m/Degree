/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google' },
    ],
  }
}

module.exports = nextConfig
