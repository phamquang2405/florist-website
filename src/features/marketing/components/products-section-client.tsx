'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import type { Product } from '@/features/marketing/data/landing-content';
import { ProductCard } from '@/features/marketing/components/product-card';

type ProductCollection = {
  category: string;
  products: Product[];
};

const INITIAL_RENDER_COUNT = 9;
const LOAD_MORE_COUNT = 6;
const ALL_CATEGORIES = new Set(['Tất cả', 'All']);

function shuffleProducts(products: Product[]) {
  const shuffledProducts = [...products];

  for (let index = shuffledProducts.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));

    [shuffledProducts[index], shuffledProducts[randomIndex]] = [
      shuffledProducts[randomIndex],
      shuffledProducts[index],
    ];
  }

  return shuffledProducts;
}

export function ProductsSectionClient({
  title,
  description,
  categories,
  productCollections,
  locale,
  moreProductsLabel
}: {
  title: string;
  description: string;
  categories: string[];
  productCollections: ProductCollection[];
  locale: string;
  moreProductsLabel: string;
}) {
  const defaultCategory = categories[0] ?? '';
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [visibleCount, setVisibleCount] = useState(INITIAL_RENDER_COUNT);
  const [displayCollections, setDisplayCollections] = useState(productCollections);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setDisplayCollections(
      productCollections.map((collection) => {
        if (!ALL_CATEGORIES.has(collection.category)) {
          return collection;
        }

        const mixedProducts = productCollections
          .filter((item) => item.category !== collection.category)
          .flatMap((item) => item.products);

        return {
          ...collection,
          products: shuffleProducts(mixedProducts),
        };
      })
    );
  }, [productCollections]);

  useEffect(() => {
    setActiveCategory(defaultCategory);
  }, [defaultCategory, locale]);

  const activeCollection =
    displayCollections.find((collection) => collection.category === activeCategory) ??
    displayCollections[0];
  const visibleProducts = useMemo(
    () => activeCollection?.products.slice(0, visibleCount) ?? [],
    [activeCollection, visibleCount]
  );
  const hasMoreProducts = (activeCollection?.products.length ?? 0) > visibleProducts.length;

  useEffect(() => {
    setVisibleCount(INITIAL_RENDER_COUNT);
  }, [activeCategory]);

  useEffect(() => {
    if (!hasMoreProducts || !loadMoreRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (!entry?.isIntersecting) {
          return;
        }

        setVisibleCount((currentCount) =>
          Math.min(
            currentCount + LOAD_MORE_COUNT,
            activeCollection?.products.length ?? currentCount
          )
        );
      },
      {
        rootMargin: '320px 0px'
      }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [activeCollection, hasMoreProducts]);

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
                aria-controls={`products-panel-${locale}`}
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

      <div
        id={`products-panel-${locale}`}
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProducts.map((product) => (
          <ProductCard key={`${activeCollection.category}-${product.name}`} product={product} />
        ))}
      </div>

      {hasMoreProducts ? (
        <>
          <div ref={loadMoreRef} className="mt-10 flex justify-center" aria-hidden="true">
            <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-500">
              Đang tải thêm sản phẩm...
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#lien-he"
              className="inline-flex rounded-full border border-slate-200 px-10 py-4 font-bold transition-all hover:bg-slate-900 hover:text-white"
            >
              {moreProductsLabel}
            </a>
          </div>
        </>
      ) : null}
    </>
  );
}
