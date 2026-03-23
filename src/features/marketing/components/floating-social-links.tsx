import { Phone } from 'lucide-react';

import type { MarketingDictionary } from '@/features/marketing/data/landing-content';

export function FloatingSocialLinks({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  return (
    <aside
      aria-label={dictionary.contactTitle}
      className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex"
    >
      {dictionary.floatingSocialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`group relative flex size-14 items-center justify-center rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${link.className}`}
          title={link.label}
          aria-label={link.label}
        >
          {link.icon ? (
            <link.icon size={26} />
          ) : (
            <span className="text-xl font-black italic">{link.customText}</span>
          )}
          <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
            {link.label}
          </span>
        </a>
      ))}
      <a
        href="tel:19006789"
        className="flex size-14 animate-pulse items-center justify-center rounded-full bg-rose-500 text-white shadow-lg"
        aria-label={dictionary.contactPoints[0]?.label ?? 'Hotline'}
      >
        <Phone size={24} />
      </a>
    </aside>
  );
}
