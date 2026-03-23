import type { MetadataRoute } from 'next';

import { env } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.NEXTAUTH_URL}/vi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${env.NEXTAUTH_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${env.NEXTAUTH_URL}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4
    }
  ];
}
