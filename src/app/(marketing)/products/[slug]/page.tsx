import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section, ArrowRight } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { products, getProduct, categoryMeta } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — ${product.type}`,
    description: product.description[0],
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const meta = categoryMeta[product.category];
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const specs = [
    ["Segment", product.segment],
    ["Procedure", product.procedure],
    ["System Type", product.type],
    ["Material", product.material],
  ];

  return (
    <>
      <PageHero
        eyebrow={meta.label}
        title={product.name}
        intro={product.type}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product", href: "/products" },
          { label: meta.label, href: `/products?category=${product.category}` },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Visual */}
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-cream to-mist">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-6 text-center font-display text-3xl font-semibold tracking-tight text-ink/15">
                  {product.name}
                </span>
              </div>
              {product.nitro && (
                <span className="absolute right-5 top-5 rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber">
                  NITRO
                </span>
              )}
            </div>

            {/* Resources */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <ResourceBtn label="Product Brochure" sub="PDF" />
              <ResourceBtn label="Instructions for Use" sub="IFU · PDF" />
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-stone">
                {product.segment} {product.procedure}
              </span>
              <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-medium text-[#9a6b00]">
                {product.material}
              </span>
            </div>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate">
              {product.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <h2 className="mt-10 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Key Features
            </h2>
            <ul className="mt-4 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber/20 text-amber">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-relaxed text-slate">{f}</span>
                </li>
              ))}
            </ul>

            {/* Specs */}
            <dl className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
              {specs.map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between ${i > 0 ? "border-t border-ink/8" : ""}`}
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-stone-light">{k}</dt>
                  <dd className="font-display text-sm font-semibold text-ink sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact-us">
                Request a Demo
                <ArrowRight />
              </Button>
              <Button href={`/products?category=${product.category}`} variant="ghost">
                Back to {meta.label}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="cream">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold text-ink">More in {meta.label}</h2>
            <Link
              href={`/products?category=${product.category}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink link-underline"
            >
              View all
              <ArrowRight />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand />
    </>
  );
}

function ResourceBtn({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-cream/50 px-4 py-3.5">
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-ink text-amber">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M12 18v-6m-3 3 3 3 3-3" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-sm font-semibold text-ink">{label}</span>
        <span className="block text-xs text-stone-light">{sub}</span>
      </span>
    </div>
  );
}
