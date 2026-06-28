import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Silicon Nitride — The IDEAL BIOMATERIAL",
  description:
    "Silicon Nitride, a non-metallic ceramic composed of the essential elements silicon and nitrogen, stands out as a superior biomaterial for fusion.",
};

const properties = [
  { title: "Antibacterial", body: "Surface properties actively repel and/or kill various types of bacteria, reducing infection risk." },
  { title: "Bone-Building", body: "Unique surface chemistry mechanisms continuously stimulates new bone growth and integration." },
  { title: "Hydrophilic", body: "Attracts fluids, further deterring bacteria colonization and enhancing bone-building mechanisms." },
  { title: "Imaging-Friendly", body: "Unlike metal implants, allows for clear visualization in X-rays, CT scans, and MRIs." },
  { title: "Superior Benefits", body: "Our Silicon Nitride offers superior conditions for fusion, providing enhanced stability and durability compared to PEEK and Titanium." },
];

const boneTable = [
  { material: "PEEK", iface: "8%", area: "24%" },
  { material: "Titanium", iface: "19%", area: "36%" },
  { material: "SILICON NITRIDE", iface: "65%", area: "71%", highlight: true },
];

const advancements = [
  {
    title: "Superior Bone Growth and Healing",
    intro:
      "The surface chemistry and natural nanostructure topography of silicon nitride provide an optimal environment for stimulation of osteoprogenitor cells to differentiate into osteoblasts.",
    points: [
      ["Sustained Release of Growth Factors", "Continuously delivers signaling molecules that stimulate the production of new bone cells. In Vitro Study May not be representative of clinical performance"],
      ["Enhanced Bone Formation and Preservation", "Promotes the growth of new bone tissue, extends the lifespan of existing bone cells, and prevents bone breakdown. Wistar Rat Study May not be representative of clinical performance"],
      ["Improved Bone Healing", "Facilitates the formation of new blood vessels, delivering essential nutrients and oxygen for robust bone repair. In Vitro Study May not be representative of clinical performance"],
    ],
  },
  {
    title: "Multifaceted Antibacterial Action",
    intro:
      "Silicon nitride demonstrates significantly lower biofilm formation at 4, 24, 48 and 72 hours as compared to PEEK and titanium.",
    points: [
      ["Proven Bacteriostatic Properties", "The unique macrostructure, nano-texture, and elution kinetics of silicon nitride work together to prevent bacteria from adhering and effectively eliminate various strains, including S. epidermidis, S. aureus, MRSA, and even SARS-CoV-2."],
      ["Holistic Approach to Bacterial Deterrence", "Silicon nitride's unparalleled combination of surface characteristics—topography, chemistry, pH, and wettability—creates a comprehensive and hostile environment for bacterial activity."],
    ],
  },
  {
    title: "Enhanced Imaging",
    intro: "Silicon nitride implants provide favorable imaging across all modalities.",
    points: [
      ["Clear Visibility", "Silicon Nitride's lower density and semi-transparency allow X-ray beams to pass through with minimal scattering, resulting in sharp images of both the implant itself and the surrounding bone fusion in X-ray and CT scans."],
      ["Artifact-Free Imaging", "The non-magnetic and bioinert properties of Silicon Nitride ensure accurate imaging of surrounding tissues without interference or adverse reactions within the body."],
      ["Reliable Results", "The robust mechanical strength of Silicon Nitride ensures durability and resistance to deformation, providing consistent and accurate results throughout the manufacturing and imaging processes."],
    ],
  },
];

export default function SiliconNitridePage() {
  return (
    <>
      <PageHero
        eyebrow="The IDEAL BIOMATERIAL"
        title="SILICON NITRIDE"
        intro="In the race to achieve interbody fusion, material matters."
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
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">Silicon · Nitrogen</p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="What is SILICON NITRIDE (Si3N4)?"
              title="A superior biomaterial for fusion"
              intro="Silicon Nitride, a non-metallic ceramic composed of the essential elements silicon and nitrogen, stands out as a superior biomaterial for fusion. Its unique combination of antibacterial, osteoconductive, and osteoinductive properties promotes bone growth and healing. Its hydrophilic nature, strength, and favorable imaging characteristics further distinguish it from traditional PEEK or Titanium implants."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/8 bg-cream/60 p-7">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Clinical + table */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Si3N4 in Medical Implants"
              title="A game-changer in spinal fusion surgery"
              tone="white"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Silicon nitride (Si3N4) is proving to be a game-changer in spinal
              fusion surgery. One of the studies published in The Spine Journal
              found a 80% fusion rate at 3 months post-operatively in patients who
              received Si3N4 cervical interbody implants, indicating its
              effectiveness in promoting bone growth (1). In addition, a separate
              multicenter study demonstrated a 90.2% fusion success rate and only
              3.1% of patients requiring revision surgery due to complications,
              further supporting Si3N4&apos;s superior performance (2). The
              material&apos;s radiolucent properties also offer enhanced
              visualization during surgery and post-operative imaging,
              contributing to improved surgical precision and patient care (3).
            </p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide text-amber">
              Percentage of New Bone Around Implant at 3 Months
            </p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white/[0.06] text-white">
                    <th className="px-5 py-3.5 font-display font-semibold">Material</th>
                    <th className="px-5 py-3.5 font-display font-semibold">Implant Interface</th>
                    <th className="px-5 py-3.5 font-display font-semibold">Surgical Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {boneTable.map((r) => (
                    <tr key={r.material} className={r.highlight ? "bg-amber/15" : ""}>
                      <td className={`px-5 py-4 font-display font-semibold ${r.highlight ? "text-amber" : "text-white"}`}>
                        {r.material}
                      </td>
                      <td className="px-5 py-4 text-white/80">{r.iface}</td>
                      <td className="px-5 py-4 text-white/80">{r.area}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* Key advancements */}
      <Section tone="white">
        <SectionHeading eyebrow="The Science" title="Key Advancements in Si3N4 Technology" />
        <div className="mt-12 space-y-8">
          {advancements.map((a) => (
            <div key={a.title} className="rounded-2xl border border-white/8 bg-cream/40 p-8">
              <h3 className="text-2xl font-semibold text-white">{a.title}</h3>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-stone">{a.intro}</p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {a.points.map(([t, d]) => (
                  <div key={t} className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
                    <h4 className="font-display text-base font-semibold text-white">{t}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Experience the Future of Spine Care"
        intro="Discover firsthand the superior performance and benefits of Silicon Nitride implants. Schedule a demo today and see why leading surgeons are choosing our advanced solutions for their patients."
        primary={{ label: "Let's Talk", href: "/contact-us" }}
        secondary={{ label: "Explore the NITRO Family", href: "/nitro" }}
      />
    </>
  );
}
