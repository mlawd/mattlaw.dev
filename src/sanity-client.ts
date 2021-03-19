import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'uflbfg8d',
  dataset: 'production',
  useCdn: true,
});

export default client;
