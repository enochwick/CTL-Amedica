import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading, ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { LightTrails } from "@/components/ui/LightTrails";
import { categoryMeta, categoryOrder, productsByCategory } from "@/data/products";
import { homeReferences } from "@/data/publications";

const whyChooseUs = [
  {
    title: "A Masterful Portfolio",
    body: "Named after renowned artists, our systems epitomize the artistry in spine care, blending advanced technology with masterful design to offer superior solutions.",
  },
  {
    title: "Dedicated R&D Focus",
    body: "CTL Amedica's award-winning R&D team tirelessly develops innovative medical technologies, including proprietary surface technologies and biomaterials, continually driving advancements in spinal care.",
  },
  {
    title: "Technology",
    body: "The combination of our exclusive NITRO™ (Silicon Nitride) active osteogenic biomaterial with comprehensive surface texturing options, our proprietary TiCro® machined metal-velcro surface architecture, our patented pedicle screw housing with strongest pull out force, and much more cements CTL Amedica as a leader in medical technology.",
  },
  {
    title: "Global Reach",
    body: "With a worldwide footprint, our products are trusted across the globe, providing reliable and effective spinal solutions on an international scale.",
  },
  {
    title: "Comprehensive Support",
    body: "We offer comprehensive support from professional training to customer service, ensuring effective product use and customer satisfaction.",
  },
  {
    title: "Innovation",
    body: "At CTL Amedica, spinal fusion implants are just the beginning. We are a company with a single-focused vision: to provide simple, high-quality, and affordable universal spinal product and surgery solutions. Our offerings are backed by an innovative patent portfolio of differentiated products and cost-effective surgical system solutions. We have the capability to develop and commercialize these solutions for the rapidly changing technology landscape.",
  },
];

const stats = [
  {
    eyebrow: "BONE FORMATION",
    value: "2-3 Times",
    body: "More regenerated bone at 3 months, in comparison to PEEK or Titanium.",
  },
  {
    eyebrow: "OSSEOINTEGRATION",
    value: "2 to 6 Times",
    body: "More bone at Si3N4 implant interface, in comparison to PEEK or Titanium.",
  },
  {
    eyebrow: "ANTIBACTERIAL",
    value: "8 to 30 Times",
    body: "Less live bacteria associated with Si3N4 implants in comparison to PEEK and Titanium.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-base">
        <LightTrails />
        <div className="container-page relative flex min-h-[82vh] flex-col justify-center py-24">
          <div className="max-w-4xl animate-fade-up">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-stone">
              <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_2px_rgba(255,177,0,0.6)]" />
              Exclusive provider of Silicon Nitride implants for spine
            </span>
            <h1 className="mt-7 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[5.5rem]">
              Innovative Spine
              <br />
              <span className="text-amber">Surgery Solution</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone">
              CTL Amedica is a forward-thinking medical device design,
              development, and manufacturing company. We lead in medical device
              technologies with exclusive bioactive osteogenic materials and
              patented innovations. Our full portfolio of spinal fusion and
              fixation products incorporates bone growth material and innovative
              features designed to enhance patient outcomes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/about-us" variant="secondary" size="lg">
                Learn More
                <ArrowRight />
              </Button>
              <Button href="/products" variant="ghost" size="lg">
                Explore Products
              </Button>
            </div>
          </div>
        </div>
        <div className="hairline" />
      </section>

      {/* ── Why Choose Us ── */}
      <Section tone="white">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Discover the Difference: Exceptional Spinal Solutions Tailored for You"
          intro="CTL Amedica stands at the forefront of spinal health innovation, combining advanced technology with proven clinical results for superior care."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/8 bg-cream/60 p-7 transition-colors hover:border-amber/40"
            >
              <span className="font-display text-4xl font-bold text-amber/30">
                0{i + 1}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-stone">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Silicon Nitride exclusive ── */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <p className="font-display text-8xl font-bold text-amber">Si₃N₄</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/50">
                  Silicon Nitride
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-amber/20 blur-3xl" />
          </div>
          <div>
            <span className="eyebrow">
              The world&apos;s exclusive provider of SILICON NITRIDE implants for spine
            </span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Transforming Spine Surgery with Silicon Nitride
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              As the exclusive global provider of silicon nitride implants for
              spine care, CTL Amedica sets the standard for excellence and
              innovation. Our silicon nitride technology is designed not only for
              its exceptional durability and compatibility but also for its unique
              ability to promote bone growth and resist infection. By specializing
              in this advanced material, we ensure that patients receive the most
              sophisticated and effective spinal implants available on the market
              today.
            </p>
            <Button href="/silicon-nitride" className="mt-8">
              Explore
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Section>

      {/* ── See how we stack up (stats) ── */}
      <Section tone="cream">
        <SectionHeading
          eyebrow="The Material Difference"
          title="See how we stack up against the competition"
          intro="Silicon Nitride outperforms: with 2-3 times more bone formation, 2-6 times better osseointegration, and up to 30 times less bacterial association than PEEK or Titanium. Explore the edge our technology provides."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.eyebrow}
              className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 shadow-card"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-amber">
                {s.eyebrow}
              </span>
              <p className="mt-3 font-display text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone">{s.body}</p>
            </div>
          ))}
        </div>
        <ol className="mt-10 space-y-1.5 border-t border-white/10 pt-6 text-xs leading-relaxed text-stone-light">
          {homeReferences.map((ref, i) => (
            <li key={i}>
              {i + 1}. {ref}
            </li>
          ))}
        </ol>
      </Section>

      {/* ── R&D ── */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Research and Development at CTL Amedica</span>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Driving Innovation in Spine Care
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              CTL Amedica is at the forefront of spinal health innovation, thanks
              to our robust Research and Development efforts. Our team of experts
              is dedicated to pushing the boundaries of medical technology,
              creating advanced biomaterials and surface technologies that set new
              industry standards. Our R&D isn&apos;t just about meeting current
              needs—it&apos;s about anticipating future challenges and responding
              with innovative solutions that improve surgical outcomes and patient
              care
            </p>
            <Button href="/technology" variant="secondary" className="mt-8">
              Explore
              <ArrowRight />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              ["NITRO™", "Active osteogenic Silicon Nitride biomaterial"],
              ["TiCro®", "Machined metal-velcro surface architecture"],
              ["Patented", "Pedicle screw housing with strongest pull out force"],
              ["Award-Winning", "R&D team driving advancements in spinal care"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/8 bg-cream/60 p-6">
                <p className="font-display text-xl font-semibold text-amber">{t}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Portfolio categories ── */}
      <Section tone="mist">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The Portfolio" title="Explore our spinal solutions" />
          <Button href="/products" variant="ghost">
            View all products
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categoryOrder.map((key) => {
            const meta = categoryMeta[key];
            const items = productsByCategory(key);
            return (
              <Link
                key={key}
                href={`/products?category=${key}`}
                className="group flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-amber">
                  {meta.segment}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-white">{meta.label}</h3>
                <ul className="mt-4 flex-1 space-y-1.5">
                  {items.slice(0, 4).map((p) => (
                    <li key={p.slug} className="text-sm text-stone">
                      {p.menuLabel}
                    </li>
                  ))}
                  {items.length > 4 && (
                    <li className="text-sm font-medium text-amber">
                      +{items.length - 4} more
                    </li>
                  )}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                  Browse
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
