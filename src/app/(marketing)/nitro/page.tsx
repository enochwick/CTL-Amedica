import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "The NITRO Family — Advanced Spine Solutions",
  description:
    "Introducing the NITRO Family: Silicon Nitride interbody fusion with enhanced osteogenic response, bacteriostatic properties, artifact-free imaging, precisely sized axial pores, and macro-texturing.",
};

const features = [
  {
    title: "Enhanced Osteogenic Response",
    body: "NITRO implants have demonstrated superior protein absorption and increased osseointegration compared to other biomaterials.",
  },
  {
    title: "Bacteriostatic Properties",
    body: "Silicon Nitride possesses unique bacteriostatic properties, inhibiting the growth of bacteria.",
  },
  {
    title: "Artifact-Free Imaging",
    body: "The biomaterial used in NITRO allows for artifact-free CT scan imaging, enabling clear visualization of the implant and surrounding tissues.",
  },
  {
    title: "Precisely Sized Axial Pores",
    body: "The NITRO interbody fusion family incorporates precisely sized axial pores that promote capillary action and a pathway for bony through-growth.",
  },
  {
    title: "Macro-Texturing",
    body: "Macro-texturing provides even greater surface area throughout the implant, increasing bony contact and enhancing innate bacteriostatic properties.",
  },
  {
    title: "Integration Options & Configurations",
    body: "A robust and comprehensive variety of standalone integration options, lordotic offerings, and size configurations.",
  },
];

export default function NitroPage() {
  const nitroProducts = products.filter((p) => p.nitro);

  return (
    <>
      <PageHero
        eyebrow="Introducing the NITRO Family"
        title={
          <>
            Unveiling advanced spine solutions.{" "}
            <span className="text-amber">In the race to fusion, material matters.</span>
          </>
        }
        intro="The NITRO interbody fusion family advances Silicon Nitride with engineered porosity and macro-texturing — discover the power of NITRO."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
          { label: "NITRO", href: "/nitro" },
        ]}
      />

      <Section tone="white">
        <SectionHeading
          eyebrow="Discover the Power of NITRO"
          title="Enhancing spinal health with advanced NITRO implants"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-ink/8 bg-cream/60 p-7 transition-colors hover:border-amber/40"
            >
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
      </Section>

      {nitroProducts.length > 0 && (
        <Section tone="mist">
          <SectionHeading
            eyebrow="Explore the NITRO Series"
            title="NITRO devices"
            intro="Silicon Nitride interbody fusion across the cervical and lumbar spine."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nitroProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        eyebrow="Request a demo"
        title="Experience the future of spine care"
        intro="Request a demo of our NITRO implants and see the difference Silicon Nitride makes."
        primary={{ label: "Schedule Your Demo", href: "/contact" }}
        secondary={{ label: "Explore NITRO Products", href: "/products" }}
      />
    </>
  );
}
