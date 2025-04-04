/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'catracalivre.com.br',
        pathname: '/cdn-cgi/**',
      },
      {
        protocol: 'https',
        hostname: 'accetur.com.br',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.lusoacademico.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'media.cntraveller.com',
        pathname: '/photos/**',
      },
      {
        protocol: 'https',
        hostname: '64.media.tumblr.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ohairesorts.com',
        pathname: '/nazare/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.bookatrekking.com',
        pathname: '/data/images/**',
      },
      {
        protocol: 'https',
        hostname: 'midias-turismo.eurodicas.com.br',
        pathname: '/wp-content/**',
      },
    ],
  },
};

module.exports = nextConfig; 