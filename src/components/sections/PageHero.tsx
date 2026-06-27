import Link from "next/link";

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
    <section className="relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-amber/15 blur-[120px]" />
      <div className="container-page relative py-20 sm:py-24">
        {breadcrumb && (
          <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/45">
            {breadcrumb.map((b, i) => (
              <span key={b.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">/</span>}
                <Link href={b.href} className="transition-colors hover:text-amber">
                  {b.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] text-white sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
