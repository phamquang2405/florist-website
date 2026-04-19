import { ArrowRight } from 'lucide-react';

import {
  getHomeHref,
  type MarketingDictionary
} from '@/features/marketing/data/landing-content';
import { SiteLogo } from '@/features/marketing/components/site-logo';

export function MarketingFooter({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const NewsletterIcon = ArrowRight;

  return (
    <footer className="bg-slate-900 py-20 text-white">
      <div className="marketing-container grid gap-12 md:grid-cols-4">
        <div className="space-y-6 md:col-span-2">
          <SiteLogo
            href={getHomeHref(dictionary.locale)}
            className="[&_span:last-child]:text-white"
          />
          <p className="max-w-sm leading-relaxed text-slate-400">
            {dictionary.footerDescription}
          </p>
        </div>

        <section aria-labelledby="quick-links-title">
          <h2
            id="quick-links-title"
            className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-rose-200"
          >
            {dictionary.footerLinksTitle}
          </h2>
          <ul className="space-y-4 text-sm font-medium text-slate-400">
            {dictionary.footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-rose-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="newsletter-title">
          <h2
            id="newsletter-title"
            className="mb-6 text-sm font-bold uppercase tracking-[0.24em] text-rose-200"
          >
            {dictionary.newsletterTitle}
          </h2>
          <p className="mb-4 text-sm text-slate-400">
            {dictionary.newsletterDescription}
          </p>
          <form action="#" method="post" className="relative">
            <label htmlFor="newsletter-email" className="sr-only">
              {dictionary.newsletterPlaceholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={dictionary.newsletterPlaceholder}
              className="w-full rounded-xl border-none bg-slate-800 py-4 pl-4 pr-12 text-sm outline-none focus:ring-1 focus:ring-rose-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-rose-500 p-2 text-white"
              aria-label={dictionary.newsletterSubmitLabel}
            >
              <NewsletterIcon size={16} />
            </button>
          </form>
        </section>
      </div>

      <div className="marketing-container mt-20 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        <p>{dictionary.footerYearLabel}</p>
      </div>
    </footer>
  );
}
