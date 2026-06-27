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
    <section className="bg-ink">
      <div className="container-page py-20 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a2114] via-ink to-ink px-8 py-14 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              <Button
                href={secondary.href}
                variant="ghost"
                size="lg"
                className="text-white ring-white/25 hover:bg-white/10 hover:ring-white/50"
              >
                {secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
