"use client";

import { useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Bone, ShieldCheck, ScanLine, Stethoscope, ArrowUpRight } from "lucide-react";
import { publicationCategories } from "@/data/publications";

type Category = (typeof publicationCategories)[number];

const icons: Record<string, typeof Bone> = {
  bone: Bone,
  bacteriostatic: ShieldCheck,
  imaging: ScanLine,
  clinical: Stethoscope,
};

interface StackCardProps {
  i: number;
  total: number;
  category: Category;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackCard({ i, total, category, progress, range, targetScale }: StackCardProps) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = icons[category.key] ?? Bone;

  return (
    <div ref={container} className="sticky top-0 flex h-screen items-center justify-center">
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 28}px)` }}
        className="relative flex w-[92%] max-w-5xl origin-top flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] sm:p-12"
      >
        {/* amber glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber/15 blur-[110px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(90% 70% at 100% 0%, black, transparent)",
            WebkitMaskImage: "radial-gradient(90% 70% at 100% 0%, black, transparent)",
          }}
        />

        {/* Header */}
        <div className="relative flex items-start justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-amber">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {category.label}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-stone">
              {category.items.length} studies &amp; clinical experiences
            </p>
          </div>
          <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-amber">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
        </div>

        {/* Studies */}
        <div className="relative mt-8 grid gap-x-8 gap-y-0 sm:grid-cols-2">
          {category.items.map((title, idx) => (
            <div
              key={idx}
              className="group flex items-start gap-3 border-t border-white/[0.07] py-3"
            >
              <span className="mt-0.5 font-mono text-xs font-semibold text-amber">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="flex-1 text-[13.5px] leading-relaxed text-slate">{title}</p>
              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 flex-none text-stone-light transition-colors group-hover:text-amber" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function PublicationStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const total = publicationCategories.length;

  return (
    <ReactLenis root>
      <section ref={container} className="relative bg-base pb-[10vh]">
        {publicationCategories.map((category, i) => {
          const targetScale = 1 - (total - i) * 0.04;
          return (
            <StackCard
              key={category.key}
              i={i}
              total={total}
              category={category}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </ReactLenis>
  );
}
