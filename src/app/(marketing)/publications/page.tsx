import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Publications & Clinical Evidence",
  description:
    "Peer-reviewed research and clinical evidence supporting Silicon Nitride spinal implants from CTL Amedica.",
};

const topics = [
  {
    tag: "Osteogenesis",
    title: "Bone formation at the Silicon Nitride interface",
    summary:
      "Comparative findings show 2–3× more regenerated bone at 3 months and 2–6× more bone at the Si₃N₄ implant interface versus traditional materials.",
  },
  {
    tag: "Antibacterial",
    title: "Bacterial resistance of Silicon Nitride surfaces",
    summary:
      "Studies report 8–30× less live bacteria associated with Silicon Nitride compared with titanium and PEEK implant surfaces.",
  },
  {
    tag: "Fusion Outcomes",
    title: "Interbody fusion rates with Si₃N₄",
    summary:
      "Clinical data indicate an 80% fusion rate at 3 months and a 90.2% overall fusion success rate, with only 3.1% of patients requiring revision surgery.",
  },
  {
    tag: "Imaging",
    title: "Artifact-free visualization in CT and MRI",
    summary:
      "Silicon Nitride enables clear assessment of implant integration across X-ray, CT, and MRI — without the scatter and artifact seen with metallic implants.",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="The evidence behind the material"
        intro="Peer-reviewed research and clinical data supporting Silicon Nitride as a superior biomaterial for interbody fusion."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Publications", href: "/publications" },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <article
              key={t.title}
              className="group flex flex-col rounded-2xl border border-ink/8 bg-cream/50 p-8 transition-colors hover:border-amber/40"
            >
              <span className="eyebrow">{t.tag}</span>
              <h2 className="mt-3 text-xl font-semibold text-ink">{t.title}</h2>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone">
                {t.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Request the research
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-ink/8 bg-mist p-8 text-center">
          <p className="text-[15px] leading-relaxed text-stone">
            Looking for a specific study or white paper? Our clinical team can
            provide the full body of evidence supporting Silicon Nitride.
          </p>
        </div>
      </Section>

      <CtaBand
        eyebrow="Clinical team"
        title="Request the full body of evidence"
        intro="Connect with our team for peer-reviewed publications, white papers, and clinical data."
        primary={{ label: "Contact Our Team", href: "/contact" }}
        secondary={{ label: "Why Silicon Nitride", href: "/silicon-nitride" }}
      />
    </>
  );
}
