import {
  sharedSocialIcons,
  type MarketingDictionary
} from '@/features/marketing/data/landing-content';

export function ContactSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const SubmitIcon = sharedSocialIcons.send;
  const InstagramIcon = sharedSocialIcons.instagram;
  const FacebookIcon = sharedSocialIcons.facebook;

  return (
    <section id="lien-he" className="bg-slate-50 py-24" aria-labelledby="contact-title">
      <div className="marketing-container">
        <div className="grid overflow-hidden rounded-[40px] bg-white shadow-sm lg:grid-cols-2">
          <div className="space-y-8 bg-rose-500 p-8 text-white md:p-16">
            <header className="space-y-4">
              <h2 id="contact-title" className="text-4xl font-bold">
                {dictionary.contactTitle}
              </h2>
              <p className="text-lg leading-relaxed text-rose-100">
                {dictionary.contactDescription}
              </p>
            </header>

            <div className="space-y-6 pt-4">
              {dictionary.contactPoints.map((point) => (
                <div key={point.label} className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <point.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-rose-200">
                      {point.label}
                    </p>
                    <p className="font-bold md:text-xl">{point.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div className="p-8 md:p-16">
            <form className="space-y-6" action="#" method="post">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-xs font-bold uppercase text-slate-500">
                    {dictionary.formLabels.fullName}
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none ring-0 transition focus:ring-2 focus:ring-rose-500"
                    placeholder={dictionary.formPlaceholders.fullName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold uppercase text-slate-500">
                    {dictionary.formLabels.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
                    placeholder={dictionary.formPlaceholders.phone}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="occasion" className="text-xs font-bold uppercase text-slate-500">
                  {dictionary.formLabels.occasion}
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  className="w-full appearance-none rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
                  defaultValue={dictionary.occasionOptions[0]}
                >
                  {dictionary.occasionOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase text-slate-500">
                  {dictionary.formLabels.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-2xl bg-slate-50 px-5 py-4 outline-none transition focus:ring-2 focus:ring-rose-500"
                  placeholder={dictionary.formPlaceholders.message}
                />
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-500 py-5 text-lg font-bold text-white shadow-xl shadow-rose-200 transition-all hover:bg-rose-600">
                {dictionary.formLabels.submit}
                <SubmitIcon size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
