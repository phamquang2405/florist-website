import Link from 'next/link';

import type { Locale, MarketingDictionary } from '@/features/marketing/data/landing-content';
import { getHomeHref, locales } from '@/features/marketing/data/landing-content';

export function LanguageSwitcher({
  currentLocale,
  dictionary
}: {
  currentLocale: Locale;
  dictionary: MarketingDictionary;
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1"
      aria-label={dictionary.languageLabel}
    >
      {locales.map((locale) => {
        const active = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={getHomeHref(locale)}
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
              active
                ? 'bg-rose-500 text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'
            }`}
            hrefLang={locale}
            locale={false}
          >
            {dictionary.languageNames[locale]}
          </Link>
        );
      })}
    </div>
  );
}
