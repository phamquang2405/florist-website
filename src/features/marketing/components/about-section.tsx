import type { MarketingDictionary } from '@/features/marketing/data/landing-content';

export function AboutSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const toneClasses = {
    rose: 'bg-rose-50',
    slate: 'bg-slate-50',
    emerald: 'bg-emerald-50'
  } as const;

  const titleClasses = {
    rose: 'text-rose-500',
    slate: 'text-slate-900',
    emerald: 'text-emerald-700'
  } as const;

  return (
    <section id="gioi-thieu" className="bg-slate-50 py-24" aria-labelledby="about-title">
      <div className="marketing-container">
        <div className="grid gap-8 rounded-[40px] bg-white p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <header className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-500">
              {dictionary.aboutEyebrow}
            </p>
            <h2 id="about-title" className="text-3xl font-bold md:text-5xl">
              {dictionary.aboutTitle}
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-500">
              {dictionary.aboutDescription}
            </p>
          </header>
          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {dictionary.aboutStats.map((stat) => (
              <div key={stat.title} className={`rounded-3xl p-6 ${toneClasses[stat.tone]}`}>
                <p
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${titleClasses[stat.tone]}`}
                >
                  {stat.title}
                </p>
                <p className="mt-2 text-sm text-slate-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
