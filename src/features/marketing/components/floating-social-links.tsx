'use client';

import { ArrowDown, ArrowUp, Instagram, MessageCircle, Phone } from 'lucide-react';

import type { Locale, SocialLink } from '@/features/marketing/data/landing-content';

export function FloatingSocialLinks({
  locale,
  contactTitle,
  hotlineLabel,
  floatingSocialLinks,
}: {
  locale: Locale;
  contactTitle: string;
  hotlineLabel: string;
  floatingSocialLinks: Array<
    Pick<SocialLink, 'label' | 'href' | 'imageSrc' | 'customText' | 'className'>
  >;
}) {
  const scrollToTopLabel =
    locale === 'vi' ? 'Cuộn lên đầu trang' : 'Scroll to top';
  const scrollToBottomLabel =
    locale === 'vi' ? 'Cuộn xuống cuối trang' : 'Scroll to bottom';

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <aside
      aria-label={contactTitle}
      className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex"
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group relative flex size-14 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-xl"
        aria-label={scrollToTopLabel}
        title={scrollToTopLabel}
      >
        <ArrowUp size={24} />
        <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
          {scrollToTopLabel}
        </span>
      </button>

      <button
        type="button"
        onClick={scrollToBottom}
        className="group relative flex size-14 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-all hover:-translate-y-1 hover:bg-slate-50 hover:shadow-xl"
        aria-label={scrollToBottomLabel}
        title={scrollToBottomLabel}
      >
        <ArrowDown size={24} />
        <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
          {scrollToBottomLabel}
        </span>
      </button>

      {floatingSocialLinks.map((link) => {
        const LinkIcon =
          link.label === 'Instagram'
            ? Instagram
            : link.label === 'Messenger'
              ? MessageCircle
              : null;

        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`group relative flex size-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl ${
              link.imageSrc ? '' : link.className
            }`}
            title={link.label}
            aria-label={link.label}
          >
            {link.imageSrc ? (
              <img
                src={link.imageSrc}
                alt=""
                className="size-full object-cover"
                aria-hidden="true"
              />
            ) : LinkIcon ? (
              <LinkIcon size={26} />
            ) : (
              <span className="text-xl font-black italic">{link.customText}</span>
            )}
            <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100">
              {link.label}
            </span>
          </a>
        );
      })}
      <a
        href="tel:0969740147"
        className="flex size-14 animate-pulse items-center justify-center rounded-full bg-rose-500 text-white shadow-lg"
        aria-label={hotlineLabel || 'Hotline'}
      >
        <Phone size={24} />
      </a>
    </aside>
  );
}
