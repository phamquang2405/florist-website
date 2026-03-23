import type { MarketingDictionary } from '@/features/marketing/data/landing-content';
import { env } from '@/lib/env';

export function StructuredData({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Florist',
        name: dictionary.structuredDataName,
        url: `${env.NEXTAUTH_URL}/${dictionary.locale}`,
        telephone: '1900 6789',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Đường Hoa Hồng, Quận 1',
          addressLocality: 'TP. HCM',
          addressCountry: 'VN'
        },
        sameAs: ['https://instagram.com', 'https://facebook.com']
      },
      {
        '@type': 'WebSite',
        name: dictionary.structuredDataName,
        url: `${env.NEXTAUTH_URL}/${dictionary.locale}`,
        inLanguage: dictionary.locale === 'vi' ? 'vi-VN' : 'en-US'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
