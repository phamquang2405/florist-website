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
          locale={dictionary.locale}
          moreProductsLabel={dictionary.moreProductsLabel}
        />
      </div>
    </section>
  );
}
