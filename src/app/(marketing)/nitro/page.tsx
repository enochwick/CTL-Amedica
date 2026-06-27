import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Introducing the NITRO Family",
  description:
    "Unveiling Advanced Spine Solutions — the precision-engineered NITRO series, crafted from advanced silicon nitride to enhance patient outcomes.",
};

const features = [
  { title: "Enhanced Osteogenic Response", body: "NITRO implants have demonstrated superior protein absorption and increased osseointegration compared to other biomaterials." },
  { title: "Bacteriostatic Properties", body: "Silicon nitride possesses unique bacteriostatic properties, inhibiting the growth of bacteria." },
  { title: "Artifact-Free Imaging", body: "The biomaterial used in NITRO allows for artifact-free CT Scan imaging, enabling clear visualization of the implant and surrounding tissues." },
  { title: "Precisely Sized Axial Pores", body: "The NITRO interbody fusion family incorporates precisely sized axial pores that promote capillary action and a pathway for bony through-growth." },
  { title: "Macro-Texturing", body: "Macro-texturing provides even greater surface area throughout the implant, increasing bony contact and enhancing innate bacteriostatic properties." },
  { title: "Integration Options and Configurations", body: "The NITRO interbody fusion family offers a robust and comprehensive variety of standalone integration options, lordotic offerings, and size configurations" },
];

export default function NitroPage() {
  const nitroProducts = products.filter((p) => p.nitro);

  return (
    <>
      <PageHero
        eyebrow="In the race to achieve interbody fusion, material matters."
        title="Introducing the NITRO Family"
        intro="Unveiling Advanced Spine Solutions"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
          { label: "NITRO", href: "/nitro" },
        ]}
      />

      {/* Explore the NITRO Series */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Explore the NITRO Series"
          title="Discover the Power of NITRO"
          intro="Discover the precision-engineered NITRO series, crafted from advanced silicon nitride to enhance patient outcomes. These implants leverage exceptional properties to provide superior technological advancements in patient care."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-ink/8 bg-cream/60 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/15 text-amber">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6m0 0 3-3m-3 3L9 5M5 12H2m20 0h-3M12 22v-6m0 0 3 3m-3-3-3 3" />
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm italic text-stone-light">
          Standalone integration is pending market launch.
        </p>
      </Section>

      {/* Power of NITRO band */}
      <Section tone="ink">
        <div className="max-w-2xl">
          <span className="eyebrow">Discover the Power of NITRO</span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Enhancing Spinal Health with Advanced NITRO Implants
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Next-generation NITRO implants harness all the innate advantages of
            silicon nitride, in combination with innovative enhancements for an
            even greater osteogenic and bacteriostatic response.
          </p>
          <Button href="/products" className="mt-8">
            Explore NITRO Products
            <ArrowRight />
          </Button>
        </div>
      </Section>

      {nitroProducts.length > 0 && (
        <Section tone="cream">
          <SectionHeading eyebrow="The NITRO Series" title="NITRO devices" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nitroProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title="Experience the Future of Spine Care"
        intro="Discover firsthand the superior performance and benefits of NITRO implants. Schedule a demo today and see why leading surgeons are choosing our advanced solutions for their patients."
        primary={{ label: "Schedule Your Demo", href: "/contact-us" }}
        secondary={{ label: "Explore Products", href: "/products" }}
      />
    </>
  );
}
