import Link from "next/link";
import { ArrowRight } from "@/components/ui/Section";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover"
    >
      <div className="relative mb-6 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cream to-mist">
        <span className="px-4 text-center font-display text-xl font-semibold tracking-tight text-ink/15">
          {product.name}
        </span>
        {product.nitro && (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-amber">
            NITRO
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-cream px-2.5 py-1 text-[11px] font-medium text-stone">
          {product.segment} {product.procedure}
        </span>
        {product.material === "Silicon Nitride" && !product.nitro && (
          <span className="rounded-full bg-amber/15 px-2.5 py-1 text-[11px] font-medium text-[#9a6b00]">
            Si₃N₄
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold text-ink">{product.name}</h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone">{product.type}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        View device
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
