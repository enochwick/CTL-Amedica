import { Button } from "@/components/ui/Button";

export function CtaBand({
  title = "Discover Cutting-Edge Spinal Solutions",
  intro = "Ready to elevate your practice with our innovative spinal products? Contact us today to request a demo or consultation. Our expert team is here to assist and guide you through the benefits and uses of our technology, helping you achieve the best outcomes for your patients.",
  primary = { label: "Request a Demo", href: "/contact-us" },
  secondary = { label: "Explore Products", href: "/products" },
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="border-t border-white/[0.06] bg-base">
      <div className="container-page py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d] px-8 py-16 sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-amber/20 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-gold/10 blur-[110px]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(80% 80% at 50% 0%, black, transparent)",
              WebkitMaskImage: "radial-gradient(80% 80% at 50% 0%, black, transparent)",
            }}
          />
          <div className="relative max-w-2xl">
            <span className="label-mono text-amber">[ Get in touch ]</span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">{intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={primary.href} variant="primary" size="lg">
                {primary.label}
              </Button>
              <Button href={secondary.href} variant="ghost" size="lg">
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
