import Link from "next/link";
import { LightTrails } from "@/components/ui/LightTrails";

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-base">
      <LightTrails />
      <div className="container-page relative py-24 sm:py-28">
        {breadcrumb && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-stone">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-stone-light">/</span>}
                <Link href={b.href} className="transition-colors hover:text-amber">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.0] tracking-[-0.03em] text-white sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">{intro}</p>
        )}
      </div>
      <div className="hairline" />
    </section>
  );
}
