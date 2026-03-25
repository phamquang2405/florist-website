import Image from 'next/image';

import type { MarketingDictionary } from '@/features/marketing/data/landing-content';

export function HeroSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const PrimaryIcon = dictionary.heroPrimaryCta.icon;
  const SecondaryIcon = dictionary.heroSecondaryCta.icon;
  const BadgeIcon = dictionary.heroBadge.icon;
  const [titleBefore = '', titleAfter = ''] = dictionary.heroTitle.split(
    dictionary.heroHighlight
  );

  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10 overflow-hidden bg-rose-50/60">
        <div className="absolute right-10 top-20 size-80 rounded-full bg-rose-200/50 blur-3xl md:right-20 md:size-96" />
        <div className="absolute bottom-10 left-6 size-64 rounded-full bg-emerald-100/50 blur-3xl md:left-20" />
      </div>

      <div className="marketing-container grid min-h-[calc(70vh-88px)] items-center gap-12 py-10 md:grid-cols-2">
        <header className="space-y-8">
          <p className="inline-flex rounded-full bg-rose-100 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-rose-600">
            {dictionary.announcement}
          </p>
          <div className="space-y-6">
            <h1 id="hero-title" className="max-w-3xl text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
              {titleBefore}
              <span className="text-rose-500 italic">{dictionary.heroHighlight}</span>
              {titleAfter}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-500">
              {dictionary.heroDescription}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={dictionary.heroPrimaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl"
            >
              {dictionary.heroPrimaryCta.label}
              <PrimaryIcon size={18} />
            </a>
            <a
              href={dictionary.heroSecondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-800 transition-all hover:bg-slate-50"
            >
              <SecondaryIcon size={18} />
              {dictionary.heroSecondaryCta.label}
            </a>
          </div>
        </header>

        <div className="relative hidden md:block">
          <div className="overflow-hidden rounded-[40px] border-8 border-white bg-white p-2 shadow-2xl">
            <Image
              src={dictionary.heroImage.src}
              alt={dictionary.heroImage.alt}
              width={900}
              height={1120}
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="aspect-[4/5] w-full rounded-[30px] object-cover"
            />
          </div>
          <aside className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-3xl border border-rose-50 bg-white p-6 shadow-xl">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500 text-white">
              <BadgeIcon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                {dictionary.heroBadge.title}
              </p>
              <p className="text-sm font-bold text-slate-900">
                {dictionary.heroBadge.description}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
