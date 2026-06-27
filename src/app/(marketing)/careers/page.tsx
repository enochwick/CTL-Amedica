import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading, ArrowRight } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { values } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers — Join CTL Amedica",
  description:
    "Join a team of accomplished professionals dedicated to enhancing surgeon experience and patient care. Explore careers at CTL Amedica.",
};

const openings = [
  {
    title: "CNC Machine Programmer",
    location: "Carrollton, TX",
    type: "Full-time · Manufacturing",
  },
  {
    title: "Spatial Sales Associate",
    location: "Field · US",
    type: "Full-time · Sales",
  },
  {
    title: "R&D Engineer, Spine",
    location: "Blue Bell, PA",
    type: "Full-time · Engineering",
  },
  {
    title: "Quality Systems Specialist",
    location: "Carrollton, TX",
    type: "Full-time · Quality",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build remarkable things with{" "}
            <span className="text-amber">remarkable people.</span>
          </>
        }
        intro="We recruit accomplished professionals and empower them to innovate. If you share our passion for spine care, we'd love to meet you."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      {/* Why work here */}
      <Section tone="white">
        <SectionHeading
          eyebrow="People · Power · Passion"
          title="Why CTL Amedica"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-ink/8 bg-cream/60 p-8"
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="Open Positions"
          title="Current openings"
          intro="Don't see the right fit? We're always glad to hear from talented people."
        />
        <div className="mt-10 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white">
          {openings.map((job) => (
            <div
              key={job.title}
              className="group flex flex-col gap-3 p-6 transition-colors hover:bg-cream/50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-stone">
                  {job.location} · {job.type}
                </p>
              </div>
              <Button href="/contact" variant="ghost" size="sm">
                Apply
                <ArrowRight />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-stone">
          To apply, email your resume to{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-medium text-ink link-underline"
          >
            {site.email}
          </a>
          .
        </div>
      </Section>
    </>
  );
}
