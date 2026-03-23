import { Menu, Search, ShoppingBag } from 'lucide-react';

import { LanguageSwitcher } from '@/features/marketing/components/language-switcher';
import { SiteLogo } from '@/features/marketing/components/site-logo';
import {
  getHomeHref,
  type Locale,
  type MarketingDictionary
} from '@/features/marketing/data/landing-content';

export function MarketingHeader({
  locale,
  dictionary
}: {
  locale: Locale;
  dictionary: MarketingDictionary;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur-md">
      <div className="marketing-container flex items-center justify-between py-4">
        <SiteLogo href={getHomeHref(locale)} />

        <nav aria-label="Điều hướng chính" className="hidden items-center gap-8 md:flex">
          {dictionary.navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                item.href === '#'
                  ? 'text-rose-600'
                  : 'text-slate-700 hover:text-rose-500'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            className="relative rounded-full p-2 transition-colors hover:bg-slate-100"
            aria-label={dictionary.searchLabel}
          >
            <Search size={20} />
          </button>
          <LanguageSwitcher currentLocale={locale} dictionary={dictionary} />
          {dictionary.headerActions
            .filter((action) => action.icon !== Search)
            .map((action) => (
            <button
              key={action.label}
              type="button"
              className="relative rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label={action.label}
            >
              <action.icon size={20} />
              {'badge' in action ? (
                <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                  {action.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>

        <details className="group md:hidden">
          <summary className="list-none rounded-full p-2 hover:bg-slate-100">
            <span className="sr-only">{dictionary.menuLabel}</span>
            <Menu size={24} />
          </summary>
          <div className="absolute right-6 top-[72px] w-72 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl">
            <nav aria-label="Điều hướng di động" className="flex flex-col gap-4">
              {dictionary.navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  className="rounded-full p-2 hover:bg-slate-100"
                  aria-label={dictionary.searchLabel}
                >
                  <Search size={20} />
                </button>
                <LanguageSwitcher currentLocale={locale} dictionary={dictionary} />
                <button
                  type="button"
                  className="relative rounded-full p-2 hover:bg-slate-100"
                  aria-label={dictionary.cartLabel}
                >
                  <ShoppingBag size={20} />
                  <span className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-rose-500 text-[10px] text-white">
                    2
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
