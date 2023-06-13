/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  rewrites: async () => {
    return {
      beforeFiles: [
        {
          source: "/magazine",
          destination: "https://iris.rvinternals.com/",
        },
        {
          source: "/magazine/:path*",
          destination: "https://iris.rvinternals.com/:path*/",
        },
      ],
    };
  },
};

module.exports = nextConfig;
