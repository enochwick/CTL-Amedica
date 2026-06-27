import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading, ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProductCard } from "@/components/products/ProductCard";
import { categoryMeta, products, type ProductCategory } from "@/data/products";

const stats = [
  {
    value: "2–3×",
    label: "More regenerated bone",
    detail: "at 3 months vs. comparative materials",
  },
  {
    value: "2–6×",
    label: "More osseointegration",
    detail: "bone at the Si₃N₄ implant interface",
  },
  {
    value: "8–30×",
    label: "Less live bacteria",
    detail: "associated with the implant surface",
  },
];

const pillars = [
  {
    title: "Active Osteogenesis",
    body: "Continuous bone growth that surpasses traditional materials like PEEK and titanium — for stronger, faster fusion.",
    icon: "bone",
  },
  {
    title: "Natural Antibacterial Protection",
    body: "The inherent antibacterial surface of Silicon Nitride reduces infection risk and promotes a healthier recovery.",
    icon: "shield",
  },
  {
    title: "Superior Imaging Clarity",
    body: "Artifact-free visualization in X-ray, CT, and MRI lets you assess integration with exceptional precision.",
    icon: "scan",
  },
];

const featuredSlugs = ["matisse-nitro", "mondrian-alif", "monet", "taurus"];

export default function HomePage() {
  const featured = featuredSlugs
    .map((s) => products.find((p) => p.slug === s))
    .filter(Boolean) as typeof products;

  const categories = Object.entries(categoryMeta) as [
    ProductCategory,
    (typeof categoryMeta)[ProductCategory],
  ][];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-amber/20 blur-[120px]" />
          <div className="absolute -left-20 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />
        </div>
        <div className="container-page relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-amber" />
              World&apos;s exclusive provider of Silicon Nitride spine implants
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Innovative spine surgery,{" "}
              <span className="text-amber">redefined by material.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              CTL Amedica designs, develops, and manufactures spinal implants
              built on Silicon Nitride — a bioactive ceramic that builds bone,
              resists bacteria, and images with clarity. In the race to achieve
              interbody fusion, material matters.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/products" size="lg">
                Explore Products
                <ArrowRight />
              </Button>
              <Button
                href="/silicon-nitride"
                variant="ghost"
                size="lg"
                className="text-white ring-white/25 hover:bg-white/10 hover:ring-white/50"
              >
                Why Silicon Nitride
              </Button>
            </div>
          </div>

          {/* Stat stack */}
          <div className="grid gap-4 animate-fade-up [animation-delay:120ms]">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-bold text-amber">
                    {s.value}
                  </span>
                  <span className="font-display text-lg font-medium text-white">
                    {s.label}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/55">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us / pillars ───────────────────────────── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Exceptional spinal solutions, tailored for outcomes"
          intro="Transforming spine surgery with Silicon Nitride — a single biomaterial that addresses the biggest challenges in interbody fusion at once."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-ink/8 bg-cream/60 p-8 transition-colors hover:border-amber/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber/15 text-amber">
                <PillarIcon name={p.icon} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Material story ────────────────────────────────────── */}
      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-7xl font-bold text-amber">Si₃N₄</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                  Silicon Nitride
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber/20 blur-3xl" />
          </div>
          <div>
            <span className="eyebrow">The IDEAL biomaterial</span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Silicon Nitride. The material difference.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone">
              A non-metallic ceramic composed of the essential elements silicon
              and nitrogen — engineered to do what metal and plastic cannot.
            </p>
            <ul className="mt-7 space-y-4">
              {[
                ["Antibacterial", "Surface properties actively repel and kill bacteria, reducing infection risk."],
                ["Bone-Building", "Unique surface chemistry continuously stimulates new bone growth and integration."],
                ["Hydrophilic", "Attracts fluids, deterring colonization and enhancing bone-building mechanisms."],
                ["Imaging-Friendly", "Clear visualization in X-rays, CT scans, and MRIs — unlike metal implants."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3.5">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-amber/20 text-amber">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px] leading-relaxed text-slate">
                    <strong className="font-semibold text-ink">{t}.</strong> {d}
                  </span>
                </li>
              ))}
            </ul>
            <Button href="/silicon-nitride" variant="secondary" className="mt-8">
              Learn About Silicon Nitride
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Product categories ────────────────────────────────── */}
      <Section tone="white">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The Portfolio"
            title="Discover cutting-edge spinal solutions"
            intro="A comprehensive portfolio across the cervical and lumbar spine — named for the artists who reimagined what was possible."
          />
          <Button href="/products" variant="ghost">
            View all products
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(([key, meta]) => (
            <Link
              key={key}
              href={`/products?category=${key}`}
              className="group flex flex-col justify-between rounded-2xl border border-ink/8 bg-cream/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber">
                  {meta.segment}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-ink">
                  {meta.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {meta.blurb}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Browse
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── Featured products ─────────────────────────────────── */}
      <Section tone="mist">
        <SectionHeading
          eyebrow="Featured Devices"
          title="Engineered for the moments that matter"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

function PillarIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "shield")
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (name === "scan")
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
        <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
        <path d="M4 12h16" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...common}>
      <path d="M7 7c-1.5 0-2.5-1-2.5-2.5S5.5 2 7 2s2.5 1 2.5 2.5L12 7l2.5-2.5C14.5 3 15.5 2 17 2s2.5 1 2.5 2.5S18.5 7 17 7l-2.5 2.5L17 12c1.5 0 2.5 1 2.5 2.5S18.5 17 17 17s-2.5-1-2.5-2.5L12 12l-2.5 2.5C9.5 16 8.5 17 7 17s-2.5-1-2.5-2.5S5.5 12 7 12l2.5-2.5L7 7Z" />
    </svg>
  );
}
