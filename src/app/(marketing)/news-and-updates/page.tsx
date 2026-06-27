import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News and Updates",
  description:
    "Keep up to date with the most recent advancements and news from our team.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News and Updates"
        title="Keep up to date with the most recent advancements and news from our team."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "News and Updates", href: "/news-and-updates" },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-card-hover"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-cream to-mist">
                <span className="font-display text-2xl font-bold tracking-tight text-ink/12">
                  CTL Amedica
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <time className="text-xs font-medium uppercase tracking-wider text-amber">
                  {item.date}
                </time>
                <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">
                  {item.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                  Read More
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
