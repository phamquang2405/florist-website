import { MarketingHeaderClient } from '@/features/marketing/components/marketing-header-client';
import { type Locale } from '@/features/marketing/data/landing-content';

export function MarketingHeader({
  locale
}: {
  locale: Locale;
}) {
  return <MarketingHeaderClient locale={locale} />;
}
