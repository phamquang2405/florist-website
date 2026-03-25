'use client';

import { useState } from 'react';

import type { Product } from '@/features/marketing/data/landing-content';
import { ProductCard } from '@/features/marketing/components/product-card';

type ProductCollection = {
  category: string;
  products: Product[];
};

export function ProductsSectionClient({
  title,
  description,
  categories,
  productCollections,
}: {
  title: string;
  description: string;
  categories: string[];
  productCollections: ProductCollection[];
}) {
  const defaultCategory = categories[0] ?? '';
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const activeCollection =
    productCollections.find((collection) => collection.category === activeCategory) ??
    productCollections[0];

  return (
    <>
      <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 id="products-title" className="text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
        <div
          className="flex flex-wrap gap-2 md:justify-end"
          aria-label="Danh mục sản phẩm"
        >
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-200'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </header>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {activeCollection?.products.map((product) => (
          <ProductCard key={`${activeCollection.category}-${product.name}`} product={product} />
        ))}
      </div>
    </>
  );
}
