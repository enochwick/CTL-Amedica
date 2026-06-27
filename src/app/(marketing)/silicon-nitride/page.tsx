import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Silicon Nitride — The Ideal Biomaterial",
  description:
    "Silicon Nitride (Si₃N₄) is a non-metallic ceramic that builds bone, resists bacteria, attracts fluids, and images with clarity — a superior biomaterial for interbody fusion.",
};

const properties = [
  {
    title: "Antibacterial",
    body: "Surface properties actively repel and/or kill various types of bacteria, reducing infection risk.",
  },
  {
    title: "Bone-Building",
    body: "Unique surface chemistry mechanisms continuously stimulate new bone growth and integration.",
  },
  {
    title: "Hydrophilic",
    body: "Attracts fluids, further deterring bacteria colonization and enhancing bone-building mechanisms.",
  },
  {
    title: "Imaging-Friendly",
    body: "Unlike metal implants, allows for clear visualization in X-rays, CT scans, and MRIs.",
  },
];

const clinical = [
  { value: "80%", label: "fusion rate at 3 months post-operatively" },
  { value: "90.2%", label: "overall fusion success rate" },
  { value: "3.1%", label: "of patients requiring revision surgery" },
];

const compare = [
  { material: "Silicon Nitride", bone: "Active", bacteria: "Resistant", imaging: "Clear", highlight: true },
  { material: "Titanium", bone: "Passive", bacteria: "Neutral", imaging: "Scatter / artifact" },
  { material: "PEEK", bone: "Inert", bacteria: "Neutral", imaging: "Radiolucent only" },
];

export default function SiliconNitridePage() {
  return (
    <>
      <PageHero
        eyebrow="The IDEAL Biomaterial"
        title={
          <>
            Silicon Nitride.{" "}
            <span className="text-amber">In the race to fusion, material matters.</span>
          </>
        }
        intro="Silicon Nitride, a non-metallic ceramic composed of the essential elements silicon and nitrogen, stands out as a superior biomaterial for interbody fusion."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Technology", href: "/technology" },
          { label: "Silicon Nitride", href: "/silicon-nitride" },
        ]}
      />

      {/* What is it */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-ink">
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="font-display text-8xl font-bold text-amber">Si₃N₄</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
                  Silicon · Nitrogen
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="What is Silicon Nitride?"
              title="A ceramic engineered to do what metal and plastic cannot"
              intro="Most implant materials force a trade-off — strength, biology, or imaging. Silicon Nitride was engineered to deliver all three, addressing the core challenges of interbody fusion in a single biomaterial."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {properties.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-ink/8 bg-cream/60 p-7 transition-colors hover:border-amber/40"
            >
              <h3 className="text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Clinical data */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Clinical Evidence"
          title="Outcomes that speak for the material"
          intro="Study findings demonstrate the clinical advantages of Silicon Nitride interbody fusion."
          tone="white"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {clinical.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 text-center"
            >
              <p className="font-display text-5xl font-bold text-amber">{c.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{c.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Comparison */}
      <Section tone="white">
        <SectionHeading
          eyebrow="See how we stack up"
          title="Silicon Nitride vs. PEEK and Titanium"
          intro="Enhanced stability and durability — with biology and imaging traditional materials can't match."
        />
        <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-cream text-ink">
                <th className="px-6 py-4 font-display font-semibold">Material</th>
                <th className="px-6 py-4 font-display font-semibold">Bone Response</th>
                <th className="px-6 py-4 font-display font-semibold">Bacteria</th>
                <th className="px-6 py-4 font-display font-semibold">Imaging</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8">
              {compare.map((row) => (
                <tr
                  key={row.material}
                  className={row.highlight ? "bg-amber/10" : "bg-white"}
                >
                  <td className="px-6 py-4 font-display font-semibold text-ink">
                    {row.material}
                    {row.highlight && (
                      <span className="ml-2 rounded-full bg-amber px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                        CTL
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-slate">{row.bone}</td>
                  <td className="px-6 py-4 text-slate">{row.bacteria}</td>
                  <td className="px-6 py-4 text-slate">{row.imaging}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <CtaBand
        eyebrow="Material matters"
        title="Bring Silicon Nitride to your OR"
        intro="Talk with our team about the clinical evidence and the device portfolio built on Si₃N₄."
        primary={{ label: "Request a Demo", href: "/contact" }}
        secondary={{ label: "Explore the NITRO Family", href: "/nitro" }}
      />
    </>
  );
}
