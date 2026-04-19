import type { Metadata } from 'next';

import { env } from '@/lib/env';

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata['robots'];
  image?: string;
  locale?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path,
  robots,
  image = 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80',
  locale = 'vi',
  keywords = []
}: MetadataInput): Metadata {
  const url = new URL(path, env.NEXTAUTH_URL);
  const siteName = env.NEXT_PUBLIC_APP_NAME;
  const titleTemplate = title === siteName ? siteName : `${title} | ${siteName}`;

  return {
    metadataBase: new URL(env.NEXTAUTH_URL),
    applicationName: siteName,
    title: titleTemplate,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        vi: new URL('/', env.NEXTAUTH_URL),
        en: new URL('/en', env.NEXTAUTH_URL)
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      alternateLocale: locale === 'vi' ? 'en_US' : 'vi_VN',
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    },
    category: 'flowers',
    robots
  };
}
