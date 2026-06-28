import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Explore the Superiority of Silicon Nitride in Spinal Implants — Silicon Nitride: Redefining Spine Surgery Technology.",
};

const keyBenefits = [
  {
    title: "Active Osteogenesis",
    body: "Experience continuous bone growth that surpasses traditional materials like PEEK and titanium, leading to enhanced healing and stronger fusion.",
  },
  {
    title: "Natural Antibacterial Protection",
    body: "Benefit from the inherent antibacterial properties of silicon nitride, reducing the risk of infection and promoting a healthier recovery.",
  },
  {
    title: "Superior Imaging Clarity",
    body: "Utilize the imaging-friendly nature of silicon nitride to visualize implant integration with exceptional precision, ensuring optimal surgical outcomes and confident follow-up care.",
  },
];

const advanced = [
  {
    title: "Unmatched Osseointegration",
    body: "Silicon Nitride stands alone in its ability to stimulate bone growth and ensure successful fusion, regardless of pre-existing bone conditions.",
  },
  {
    title: "Inherent Antibacterial Properties",
    body: "Leverage the antimicrobial power of Silicon Nitride to mitigate post-surgical infection risk and improve patient outcomes.",
  },
  {
    title: "Sharpened Imaging",
    body: "Enjoy sharper, artifact-free images with Silicon Nitride implants, allowing for more accurate assessments and follow-ups.",
  },
  {
    title: "Superior Strength",
    body: "Upgrade to Silicon Nitride and experience superior mechanical strength and reliability that surpasses traditional materials like PEEK and Titanium.",
  },
];

const nitroFeatures = [
  {
    title: "Enhanced Osteogenic Response",
    body: "NITRO implants have demonstrated superior protein absorption and increased osseointegration compared to other biomaterials.",
  },
  {
    title: "Bacteriostatic Properties",
    body: "Silicon nitride possesses unique bacteriostatic properties, inhibiting the growth of bacteria.",
  },
  {
    title: "Artifact-Free Imaging",
    body: "The biomaterial used in NITRO allows for artifact-free CT Scan imaging, enabling clear visualization of the implant and surrounding tissues.",
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
    title: "Integration Options and Configurations",
    body: "The NITRO interbody fusion family offers a robust and comprehensive variety of standalone integration options, lordotic offerings, and size configurations",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover a Biomaterial That's"
        title="Explore the Superiority of Silicon Nitride in Spinal Implants"
        intro="Silicon is the leading choice for holistic care in spinal fusion patients due to its unparalleled advantages. It actively promotes bone growth and healing, possesses inherent antibacterial properties to reduce complications, and offers friendly imaging properties for precise monitoring. CTL Amedica is empowering the use of this revolutionary biomaterial to create implants that are not only more effective, but also safer and more reliable for patients."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
        ]}
      />

      {/* Key Benefits */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Silicon Nitride: Redefining Spine Surgery Technology"
          title="Key Benefits"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {keyBenefits.map((b, i) => (
            <div key={b.title} className="rounded-2xl border border-white/8 bg-cream/60 p-8">
              <span className="font-display text-5xl font-bold text-amber/30">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{b.body}</p>
            </div>
          ))}
        </div>
        <Button href="/silicon-nitride" className="mt-10">
          Learn More
          <ArrowRight />
        </Button>
      </Section>

      {/* Advanced tech */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Silicon Nitride: The Cornerstone of Modern Spinal Technology"
          title="Advanced Silicon Nitride Technology"
          tone="white"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {advanced.map((a) => (
            <div key={a.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-semibold text-amber">{a.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* NITRO Family */}
      <Section tone="cream">
        <div className="max-w-2xl">
          <span className="eyebrow">In the race to achieve interbody fusion, material matters.</span>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Introducing the NITRO Family
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone">
            Discover the precision-engineered NITRO series, crafted from advanced
            silicon nitride to enhance patient outcomes. These implants leverage
            exceptional properties to provide superior technological advancements
            in patient care.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nitroFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-card">
              <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{f.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm italic text-stone-light">
          Standalone integration is pending market launch.
        </p>

        <div className="mt-14 rounded-3xl bg-ink p-8 sm:p-12">
          <span className="eyebrow">Discover the Power of NITRO</span>
          <h3 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Enhancing Spinal Health with Advanced NITRO Implants
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Next-generation NITRO implants harness all the innate advantages of
            silicon nitride, in combination with innovative enhancements for an
            even greater osteogenic and bacteriostatic response.
          </p>
          <Button href="/nitro" className="mt-7">
            Explore NITRO Products
            <ArrowRight />
          </Button>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
