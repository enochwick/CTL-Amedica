import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Technology — Redefining Spine Surgery",
  description:
    "Explore the superiority of Silicon Nitride in spinal implants: active osteogenesis, natural antibacterial protection, and superior imaging clarity.",
};

const benefits = [
  {
    title: "Active Osteogenesis",
    body: "Experience continuous bone growth that surpasses traditional materials like PEEK and titanium, leading to enhanced healing and stronger fusion.",
  },
  {
    title: "Natural Antibacterial Protection",
    body: "Benefit from the inherent antibacterial properties of Silicon Nitride, reducing the risk of infection and promoting a healthier recovery.",
  },
  {
    title: "Superior Imaging Clarity",
    body: "Utilize the imaging-friendly nature of Silicon Nitride to visualize implant integration with exceptional precision and confident follow-up care.",
  },
];

const advanced = [
  "Unmatched Osseointegration",
  "Inherent Antibacterial Properties",
  "Sharpened Imaging",
  "Superior Strength",
];

const nitroFeatures = [
  "Enhanced Osteogenic Response",
  "Bacteriostatic Properties",
  "Artifact-Free Imaging",
  "Precisely Sized Axial Pores",
  "Macro-Texturing",
  "Integration Options & Configurations",
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title={
          <>
            Discover a biomaterial that&apos;s{" "}
            <span className="text-amber">redefining spine surgery.</span>
          </>
        }
        intro="Explore the superiority of Silicon Nitride in spinal implants — where biology, strength, and imaging come together in a single material."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
      />

      {/* Three benefits */}
      <Section tone="white">
        <SectionHeading
          eyebrow="The Superiority of Silicon Nitride"
          title="Silicon Nitride: redefining spine surgery technology"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="relative rounded-2xl border border-ink/8 bg-cream/60 p-8"
            >
              <span className="font-display text-5xl font-bold text-amber/30">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-ink">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Advanced tech band */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Advanced Silicon Nitride Technology"
              title="Four advantages, one material"
              tone="white"
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {advanced.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-amber/20 text-amber">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-white">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="font-display text-7xl font-bold text-amber">Si₃N₄</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/40">
                  Bioactive ceramic
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* NITRO family */}
      <Section tone="cream">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="The NITRO Family"
            title="The next generation of Silicon Nitride interbody fusion"
            intro="NITRO advances Si₃N₄ with precisely engineered porosity and texture for a true pathway to bony through-growth."
          />
          <Button href="/nitro" variant="secondary">
            Explore NITRO
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nitroFeatures.map((f) => (
            <div
              key={f}
              className="rounded-2xl border border-ink/8 bg-white p-6 shadow-card"
            >
              <h3 className="font-display text-base font-semibold text-ink">{f}</h3>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
