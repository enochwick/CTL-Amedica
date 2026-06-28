import Link from "next/link";
import { ArrowRight } from "@/components/ui/Section";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:bg-white/[0.04]"
    >
      <div className="relative mb-5 flex aspect-[5/3] items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-[radial-gradient(circle_at_50%_30%,rgba(255,177,0,0.08),transparent_60%)]">
        <span className="px-4 text-center font-display text-xl font-semibold tracking-tight text-white/15">
          {product.name}
        </span>
        {product.nitro && (
          <span className="absolute right-3 top-3 rounded-full bg-amber px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-black">
            NITRO
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-stone">
          {product.segment} {product.procedure}
        </span>
        {product.material === "Silicon Nitride" && !product.nitro && (
          <span className="rounded-full border border-amber/30 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-amber">
            Si₃N₄
          </span>
        )}
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white">
        {product.name}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone">{product.type}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
        View device
        <ArrowRight className="text-amber transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
