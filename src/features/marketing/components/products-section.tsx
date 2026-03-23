import type { MarketingDictionary } from '@/features/marketing/data/landing-content';
import { ProductCard } from '@/features/marketing/components/product-card';

export function ProductsSection({
  dictionary
}: {
  dictionary: MarketingDictionary;
}) {
  return (
    <section id="san-pham" className="bg-white py-24" aria-labelledby="products-title">
      <div className="marketing-container">
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="products-title" className="text-3xl font-bold md:text-4xl">
              {dictionary.productsTitle}
            </h2>
            <p className="mt-2 text-slate-500">{dictionary.productsDescription}</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Danh mục sản phẩm">
            {dictionary.productCategories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  index === 0
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-200'
                    : 'bg-slate-50 text-slate-500'
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dictionary.featuredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

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
