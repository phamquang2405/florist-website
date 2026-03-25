import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MarketingLandingPage } from '@/features/marketing/components/marketing-landing-page';
import {
  getMarketingDictionary,
  isLocale,
  locales,
  type Locale
} from '@/features/marketing/data/landing-content';
import { env } from '@/lib/env';
import { createMetadata } from '@/lib/seo/metadata';

export const revalidate = 3600;

type LocalePageProps = {
  params: {
    locale: string;
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: LocalePageProps): Promise<Metadata> {
  if (!isLocale(params.locale)) {
    return createMetadata({
      title: env.NEXT_PUBLIC_APP_NAME,
      description: env.NEXT_PUBLIC_APP_NAME,
      path: '/vi'
    });
  }

  const dictionary = getMarketingDictionary(params.locale);

  return createMetadata({
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    path: `/${params.locale}`,
    locale: params.locale
  });
}

export default function LocalizedHomePage({ params }: LocalePageProps) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  return <MarketingLandingPage locale={params.locale as Locale} />;
}
