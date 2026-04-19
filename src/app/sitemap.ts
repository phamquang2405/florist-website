import type { MetadataRoute } from 'next';

import { env } from '@/lib/env';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/en', '/login'];

  return routes.map((route) => ({
    url: `${env.NEXTAUTH_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/login' ? 'monthly' : 'weekly',
    priority: route === '/' ? 1 : route === '/en' ? 0.9 : 0.4
  }));
}
