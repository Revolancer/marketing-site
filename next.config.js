/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@revolancer/ui'],
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/find-freelancers/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/find-clients/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/plus/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/how-it-works/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/terms-and-conditions/',
        destination: '/terms/',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
