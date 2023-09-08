import type { Organization } from 'schema-dts';

export const revolancerSchema: Organization = {
  '@type': 'Organization',
  name: 'Revolancer',
  legalName: 'Revolancer Ltd',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Caerphilly',
    addressRegion: 'Caerphilly',
    postalCode: 'CF83 3GG',
    streetAddress: 'Britannia House Caerphilly Business Park',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@revolancer.com',
    url: 'https://support.revolancer.com',
  },
  description:
    'Revolancer is the hub for freelancers to collaborate, showcase their work, and find clients.',
  founder: [
    {
      '@type': 'Person',
      givenName: 'Karl',
      familyName: 'Swanepoel',
      image: 'https://revolancer.com/about/team/karl.png',
      sameAs: [
        'https://www.linkedin.com/in/karlswa/',
        'https://karlswanepoel.com/',
      ],
    },
    {
      '@type': 'Person',
      givenName: 'Skye',
      familyName: 'Brady',
      image: 'https://revolancer.com/about/team/skye.png',
      sameAs: ['https://www.linkedin.com/in/skyebrady/'],
    },
    {
      '@type': 'Person',
      givenName: 'Ewa',
      familyName: 'Górka',
      image: 'https://revolancer.com/about/team/ewa.png',
      sameAs: ['https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/'],
    },
  ],
  image: 'https://revolancer.com/android-chrome-512x512.png',
  sameAs: [
    'https://www.linkedin.com/company/revolancer/',
    'https://www.crunchbase.com/organization/revolancer',
  ],
  knowsAbout: [
    'Freelancing',
    'Remote Working',
    'Service Exchange',
    'Online Portfolios',
  ],
  vatID: '416020154',
};
