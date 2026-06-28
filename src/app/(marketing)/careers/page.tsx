import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { values } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Career",
  description: "Drive Your Career Forward — Explore Our Opportunities at CTL Amedica.",
};

const employmentTypes = [
  "Contract",
  "Contract - Remote",
  "Freelance",
  "Full Time",
  "Internship",
  "Part Time",
  "Remote",
  "Temporary",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Drive Your Career Forward"
        intro="CTL Amedica is a forward-thinking medical device design, development, and manufacturing company."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />

      {/* People Power Passion */}
      <Section tone="white">
        <SectionHeading eyebrow="People · Power · Passion" title="Why CTL Amedica" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-white/8 bg-cream/60 p-8">
              <h3 className="font-display text-xl font-semibold text-white">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Explore Our Opportunities */}
      <Section tone="cream">
        <SectionHeading eyebrow="Explore Our Opportunities" title="Find your role" />

        <div className="mt-10 rounded-3xl border border-white/8 bg-white/[0.03] p-6 shadow-card sm:p-8">
          {/* Search */}
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">Keywords</label>
              <input
                type="text"
                placeholder="Job title, skill…"
                className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-white">Location</label>
              <input
                type="text"
                placeholder="City, state…"
                className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/30"
              />
            </div>
            <button className="h-12 rounded-full bg-amber px-7 font-display text-sm font-medium text-white transition-colors hover:bg-gold">
              Search
            </button>
          </div>

          <label className="mt-4 flex items-center gap-2 text-sm text-slate">
            <input type="checkbox" className="h-4 w-4 rounded border-white/30 text-amber focus:ring-amber/40" />
            Remote positions only
          </label>

          {/* Employment type filters */}
          <div className="mt-6 border-t border-white/8 pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-light">
              Employment type
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {employmentTypes.map((t) => (
                <span
                  key={t}
                  className="cursor-pointer rounded-full border border-white/12 bg-cream px-3.5 py-1.5 text-sm text-slate transition-colors hover:border-amber hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="mt-8 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-10 text-center">
          <p className="text-[15px] text-stone">
            Don&apos;t see the right role? We&apos;re always glad to hear from
            talented people. Email{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-white link-underline">
              {site.email}
            </a>
            .
          </p>
          <button className="mt-6 rounded-full border border-white/15 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-ink/5">
            Load more listings
          </button>
        </div>
      </Section>
    </>
  );
}
