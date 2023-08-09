/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://revolancer.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://revolancer.com/magazine/sitemap_index.xml'],
  },
};
