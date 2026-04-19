import {
  sharedSocialIcons,
  type MarketingDictionary
} from '@/features/marketing/data/landing-content';
import { ContactRequestForm } from '@/features/marketing/components/contact-request-form';

export function ContactSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  const InstagramIcon = sharedSocialIcons.instagram;
  const FacebookIcon = sharedSocialIcons.facebook;

  return (
    <section id="lien-he" className="bg-slate-50 pb-24" aria-labelledby="contact-title">
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
                href="https://www.instagram.com/bloom_bliss.florist/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 p-3 transition-colors hover:bg-white/20"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/bloombliss.florist10"
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
            <ContactRequestForm
              locale={dictionary.locale}
              instagramUrl="https://www.instagram.com/bloom_bliss.florist/"
              facebookUrl="https://www.facebook.com/bloombliss.florist10"
              formLabels={dictionary.formLabels}
              formPlaceholders={dictionary.formPlaceholders}
              occasionOptions={dictionary.occasionOptions}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
