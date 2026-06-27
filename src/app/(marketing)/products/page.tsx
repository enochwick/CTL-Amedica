import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { cn } from "@/lib/utils";
import {
  products,
  categoryMeta,
  categoryOrder,
  type ProductCategory,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "CTL Amedica's full portfolio of spinal fusion and fixation products — Cervical Fixation, Cervical Fusion, Lumbar Fixation, and Lumbar Fusion.",
};

const filters: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All Products" },
  ...categoryOrder.map((k) => ({ key: k, label: categoryMeta[k].label })),
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const requested = searchParams.category as ProductCategory | undefined;
  const current = requested && categoryMeta[requested] ? requested : "all";

  const grouped =
    current === "all"
      ? categoryOrder.map((key) => ({
          key,
          label: categoryMeta[key].label,
          items: products.filter((p) => p.category === key),
        }))
      : [
          {
            key: current,
            label: categoryMeta[current].label,
            items: products.filter((p) => p.category === current),
          },
        ];

  const total = grouped.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Spinal Fusion & Fixation Products"
        intro="Our full portfolio of spinal fusion and fixation products incorporates bone growth material and innovative features designed to enhance patient outcomes. Named after renowned artists, our systems epitomize the artistry in spine care."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Product", href: "/products" },
        ]}
      />

      <Section tone="white">
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Link
              key={f.key}
              href={f.key === "all" ? "/products" : `/products?category=${f.key}`}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                current === f.key
                  ? "bg-ink text-white"
                  : "bg-cream text-slate hover:bg-ink/5 hover:text-ink",
              )}
            >
              {f.label}
            </Link>
          ))}
        </div>

        <div className="mt-12 space-y-16">
          {grouped.map((group) => (
            <div key={group.key}>
              <div className="flex items-center gap-4">
                <h2 className="font-display text-2xl font-semibold text-ink">{group.label}</h2>
                <span className="text-sm text-stone-light">{group.items.length}</span>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-stone-light">
          Showing {total} {total === 1 ? "device" : "devices"}
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
