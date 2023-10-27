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
        ],
      },
}

module.exports = nextConfig
