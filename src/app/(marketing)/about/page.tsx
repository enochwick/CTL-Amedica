import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { leadership, values } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us — Pioneering Medical Device Technologies",
  description:
    "Established in 2014, CTL Amedica combines science, mathematics, and the arts to create differentiated spinal solutions. Meet our story, values, and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            The innovation behind CTL Amedica —{" "}
            <span className="text-amber">a journey of pioneering medical device technologies.</span>
          </>
        }
        intro={`Established in ${site.founded} by accomplished industry veterans, CTL Amedica specializes in differentiated materials, internal manufacturing, and engineering expertise.`}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />

      {/* Our story */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Combining science, mathematics, and the arts"
            />
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-slate">
              <p>
                CTL Amedica was established in 2014 by assembling accomplished
                industry veterans and dedicated staff members. The organization
                specializes in differentiated materials, internal manufacturing
                capabilities, and engineering expertise.
              </p>
              <p>
                Our surgical systems bear the names of historical artists —
                individuals who were idealists, mathematicians, engineers,
                inventors, and designers. Product development mirrors renaissance
                through cubism-era artistic methodologies, blending innovation,
                precision, and collaborative design from concept through mass
                production.
              </p>
              <p>
                The result is a portfolio that combines science, mathematics, and
                the arts in the pursuit of better spinal solutions — and better
                outcomes for surgeons and patients.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              [String(site.founded), "Founded"],
              ["100+", "Patents submitted"],
              ["1", "Exclusive Si₃N₄ spine provider, worldwide"],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl border border-ink/8 bg-cream/60 p-7"
              >
                <p className="font-display text-4xl font-bold text-amber">{v}</p>
                <p className="mt-1 text-sm text-stone">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="People · Power · Passion"
          title="The values that drive us"
          tone="white"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="font-display text-xl font-semibold text-amber">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Leadership"
          title="Executive leadership"
          intro="An accomplished team with decades of combined experience in medical devices, orthopedics, and operations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border border-ink/8 bg-cream/50 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-amber">
                {leader.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {leader.name}
              </h3>
              <p className="text-sm font-medium text-amber">{leader.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {leader.background}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Join us"
        title="Build the future of spine care"
        intro="We're always looking for accomplished people who share our passion for innovation."
        primary={{ label: "View Careers", href: "/careers" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
