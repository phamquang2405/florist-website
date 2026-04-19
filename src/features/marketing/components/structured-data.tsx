import type { MarketingDictionary } from '@/features/marketing/data/landing-content';
import { env } from '@/lib/env';

export function StructuredData({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const featuredProducts = dictionary.productCollections
    .flatMap((collection) => collection.products.slice(0, 3))
    .slice(0, 8);
  const pageUrl = dictionary.locale === 'vi' ? env.NEXTAUTH_URL : `${env.NEXTAUTH_URL}/en`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Florist',
        name: dictionary.structuredDataName,
        url: pageUrl,
        telephone: '0969740147',
        image: dictionary.heroImage.src,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '159 Hải Sơn, Hải Châu',
          addressLocality: 'Đà Nẵng',
          addressCountry: 'VN'
        },
        sameAs: [
          'https://www.instagram.com/bloom_bliss.florist/',
          'https://www.facebook.com/bloombliss.florist10',
        ]
      },
      {
        '@type': 'WebSite',
        name: dictionary.structuredDataName,
        url: pageUrl,
        inLanguage: dictionary.locale === 'vi' ? 'vi-VN' : 'en-US'
      },
      {
        '@type': 'WebPage',
        name: dictionary.meta.title,
        url: pageUrl,
        description: dictionary.meta.description,
        inLanguage: dictionary.locale === 'vi' ? 'vi-VN' : 'en-US',
        isPartOf: {
          '@id': pageUrl
        }
      },
      {
        '@type': 'ItemList',
        name:
          dictionary.locale === 'vi'
            ? 'Danh sách sản phẩm hoa nổi bật'
            : 'Featured flower products',
        itemListElement: featuredProducts.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            name: product.name,
            image: product.imageSrc ?? dictionary.heroImage.src,
            category: product.category,
            offers: {
              '@type': 'Offer',
              priceCurrency: dictionary.locale === 'vi' ? 'VND' : 'USD',
              price: product.price === 'Liên hệ' ? '0' : product.price.replace(/[^\d.]/g, ''),
              availability: 'https://schema.org/InStock',
              url: `${pageUrl}${product.href === '#' ? '' : product.href}`
            }
          }
        }))
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
