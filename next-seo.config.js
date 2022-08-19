/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Shows.bio',
  titleTemplate: '%s | Shows.bio',
  defaultTitle: 'Shows.bio',
  description:
    'Promote your shows on MyShows.bio, Create your profile and share your shows with fans.',
  canonical: 'https://shows.bio',
  openGraph: {
    url: 'https://shows.bio',
    title: 'shows.bio',
    description: 'Shows.bio - Share your shows with fans',
    images: [
      {
        url: 'https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250',
        alt: 'shows.bio og-image',
      },
    ],
    site_name: 'Shows.bio',
  },
  twitter: {
    handle: '@dev_guerra',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
