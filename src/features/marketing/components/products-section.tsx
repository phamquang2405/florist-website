import type { MarketingDictionary } from '@/features/marketing/data/landing-content';
import { ProductsSectionClient } from '@/features/marketing/components/products-section-client';

export function ProductsSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  return (
    <section id="san-pham" className="bg-white py-12" aria-labelledby="products-title">
      <div className="marketing-container">
        <ProductsSectionClient
          title={dictionary.productsTitle}
          description={dictionary.productsDescription}
          categories={dictionary.productCategories}
          productCollections={dictionary.productCollections}
        />

        <div className="mt-16 text-center">
          <a
            href="#lien-he"
            className="inline-flex rounded-full border border-slate-200 px-10 py-4 font-bold transition-all hover:bg-slate-900 hover:text-white"
          >
            {dictionary.moreProductsLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
