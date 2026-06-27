import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { leadership, values } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the innovation behind CTL Amedica—our journey is one of pioneering medical device technologies and exclusive biomaterials that transform spine care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Pioneering medical device technologies"
        intro="Discover the innovation behind CTL Amedica—our journey is one of pioneering medical device technologies and exclusive biomaterials that transform spine care."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About us", href: "/about-us" },
        ]}
      />

      {/* Our Story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Our Story" title="Combining science, mathematics and the arts" />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate">
              <p>
                CTL Amedica was established in 2014 by assembling experienced
                industry professionals and dedicated staff. The company leverages
                differentiated materials, internal manufacturing capabilities, and
                engineering expertise. Product lines bear names inspired by
                historical artists—reflecting the company&apos;s philosophy of
                combining science, mathematics and the arts in order to create
                solutions for spinal fixation.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["2014", "Founded"],
              ["100+", "Patents"],
              ["1", "Exclusive global Si₃N₄ spine provider"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl border border-ink/8 bg-cream/60 p-7">
                <p className="font-display text-4xl font-bold text-amber">{v}</p>
                <p className="mt-1 text-sm text-stone">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section tone="ink">
        <SectionHeading eyebrow="Core Values" title="People, Power, Passion" tone="white" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="font-display text-xl font-semibold text-amber">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Creating a Masterpiece */}
      <Section tone="cream">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Creating a Masterpiece</span>
          <p className="mt-5 text-xl leading-relaxed text-ink sm:text-2xl">
            The development process mirrors multidisciplinary mastery of
            renaissance to cubism era artists, blending innovation, precision, and
            collaborative artistry.
          </p>
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="white">
        <SectionHeading eyebrow="Leadership" title="Executive Leadership" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader) => (
            <div key={leader.name} className="rounded-2xl border border-ink/8 bg-cream/50 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-amber">
                {leader.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{leader.name}</h3>
              <p className="text-sm font-medium text-amber">{leader.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone">{leader.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
