import { unstable_cache } from 'next/cache';

const collections = [
  {
    id: '1',
    name: 'Morning Market',
    description: 'Airy whites and citrus greens for fresh storefront styling.',
    stemCount: 18
  },
  {
    id: '2',
    name: 'Romance Edit',
    description: 'Textured blush petals built for premium gifting campaigns.',
    stemCount: 24
  },
  {
    id: '3',
    name: 'Editorial Wild',
    description: 'Loose stems with dramatic movement for seasonal lookbooks.',
    stemCount: 20
  }
];

export const getFeaturedCollections = unstable_cache(
  async () => collections,
  ['featured-collections'],
  {
    revalidate: 3600
  }
);

