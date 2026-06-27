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
  type ProductCategory,
} from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Spinal Implant Portfolio",
  description:
    "Explore CTL Amedica's comprehensive portfolio of cervical and lumbar fixation and fusion devices, including Silicon Nitride and NITRO implants.",
};

const filters: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All Products" },
  { key: "cervical-fixation", label: "Cervical Fixation" },
  { key: "cervical-fusion", label: "Cervical Fusion" },
  { key: "lumbar-fixation", label: "Lumbar Fixation" },
  { key: "lumbar-fusion", label: "Lumbar Fusion" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = (searchParams.category as ProductCategory) || "all";
  const isValid = filters.some((f) => f.key === active);
  const current = isValid ? active : "all";

  const filtered =
    current === "all"
      ? products
      : products.filter((p) => p.category === current);

  const activeMeta =
    current !== "all" ? categoryMeta[current as ProductCategory] : null;

  return (
    <>
      <PageHero
        eyebrow="The Portfolio"
        title="Discover cutting-edge spinal solutions"
        intro="A comprehensive portfolio across the cervical and lumbar spine — named for the artists who reimagined what was possible. Idealists, mathematicians, engineers, inventors, and designers."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
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

        {activeMeta && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            {activeMeta.blurb}
          </p>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <p className="mt-10 text-sm text-stone-light">
          Showing {filtered.length} {filtered.length === 1 ? "device" : "devices"}
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
