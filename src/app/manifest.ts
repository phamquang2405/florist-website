import type { MetadataRoute } from 'next';

import { env } from '@/lib/env';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: env.NEXT_PUBLIC_APP_NAME,
    short_name: env.NEXT_PUBLIC_APP_NAME,
    description: 'Modern florist storefront for birthday, wedding, graduation, and grand opening bouquets.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff7f7',
    theme_color: '#f43f5e',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  };
}
