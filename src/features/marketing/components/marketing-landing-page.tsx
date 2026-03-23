import type { Locale } from '@/features/marketing/data/landing-content';
import { AboutSection } from '@/features/marketing/components/about-section';
import { ContactSection } from '@/features/marketing/components/contact-section';
import { FloatingSocialLinks } from '@/features/marketing/components/floating-social-links';
import { HeroSection } from '@/features/marketing/components/hero-section';
import { MarketingFooter } from '@/features/marketing/components/marketing-footer';
import { MarketingHeader } from '@/features/marketing/components/marketing-header';
import { ProductsSection } from '@/features/marketing/components/products-section';
import { StructuredData } from '@/features/marketing/components/structured-data';
import { getMarketingDictionary } from '@/features/marketing/data/landing-content';

export function MarketingLandingPage({ locale }: { locale: Locale }) {
  const dictionary = getMarketingDictionary(locale);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      <StructuredData dictionary={dictionary} />
      <FloatingSocialLinks dictionary={dictionary} />
      <MarketingHeader locale={locale} dictionary={dictionary} />
      <main>
        <HeroSection dictionary={dictionary} />
        <ProductsSection dictionary={dictionary} />
        <AboutSection dictionary={dictionary} />
        <ContactSection dictionary={dictionary} />
      </main>
      <MarketingFooter dictionary={dictionary} />
    </div>
  );
}
