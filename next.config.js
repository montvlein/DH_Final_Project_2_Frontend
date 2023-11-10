/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tycsports.com',
        port: '',
        pathname: '/files/**',
      },
      {
        protocol: 'https',
        hostname: 'aeronoticias.com.pe',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sanangel.edu.mx',
        port: '',
        pathname: '/sites/default/files/**',
      },
      {
        protocol: 'https',
        hostname: '6.soompi.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.forbesindia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'laverdadonline.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'phsnews.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
