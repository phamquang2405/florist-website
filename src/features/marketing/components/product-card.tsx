import { Heart, ShoppingBag } from 'lucide-react';

import type { Product } from '@/features/marketing/data/landing-content';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="mb-4 overflow-hidden rounded-2xl bg-slate-100">
        <div className="relative aspect-[4/5]">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-rose-50 to-slate-100 text-slate-400 transition-transform duration-500 group-hover:scale-110">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-white/70 text-2xl">
                <span aria-hidden="true">{product.emoji}</span>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest">
                {product.category}
              </span>
            </div>
          </div>

          {product.tag ? (
            <span className="absolute left-4 top-4 rounded-full bg-rose-500 px-3 py-1 text-[10px] font-bold uppercase tracking-tight text-white">
              {product.tag}
            </span>
          ) : null}

          <button
            type="button"
            aria-label={`Yêu thích ${product.name}`}
            className="absolute right-4 top-4 rounded-full bg-white/80 p-2 text-rose-500 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100"
          >
            <Heart size={18} />
          </button>

          <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
            <a
              href={product.href}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold shadow-xl"
            >
              <ShoppingBag size={16} />
              Đặt hoa ngay
            </a>
          </div>
        </div>
      </div>

      <h3 className="font-bold text-slate-800 transition-colors group-hover:text-rose-600">
        {product.name}
      </h3>
      <p className="mt-1 font-bold text-rose-600">{product.price}</p>
    </article>
  );
}
