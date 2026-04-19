import type { Metadata } from 'next';

import { MarketingLandingPage } from '@/features/marketing/components/marketing-landing-page';
import { getMarketingDictionary } from '@/features/marketing/data/landing-content';
import { createMetadata } from '@/lib/seo/metadata';

export const revalidate = 3600;

export function generateMetadata(): Metadata {
  const dictionary = getMarketingDictionary('vi');

  return createMetadata({
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    path: '/',
    locale: 'vi',
    keywords: [
      'hoa tươi',
      'shop hoa',
      'hoa sinh nhật',
      'hoa cưới',
      'hoa khai trương',
      'hoa tốt nghiệp',
    ],
  });
}

export default function RootPage() {
  return <MarketingLandingPage locale="vi" />;
}
