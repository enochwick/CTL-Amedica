import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CTL Amedica — request a demo, ask about clinical evidence, or connect with our team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk spine care"
        intro="Request a demo, ask about clinical evidence, or connect with our team. We'd love to hear from you."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-semibold text-ink">Get in touch</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-stone">
              Reach our team directly, or use the form and we&apos;ll get back to
              you shortly.
            </p>

            <div className="mt-8 space-y-6">
              <ContactRow label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\./g, "")}`} />
              <ContactRow label="Fax" value={site.fax} />
              <ContactRow label="Email" value={site.email} href={`mailto:${site.email}`} />
            </div>

            <div className="mt-10 grid gap-5">
              {site.locations.map((loc) => (
                <div
                  key={loc.label}
                  className="rounded-2xl border border-ink/8 bg-cream/50 p-6"
                >
                  <p className="font-display text-sm font-semibold text-ink">
                    {loc.label}
                  </p>
                  <p className="mt-2 text-sm text-stone">{loc.address}</p>
                  <p className="text-sm text-stone">{loc.city}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-card sm:p-9">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="w-14 flex-none text-xs font-semibold uppercase tracking-wider text-stone-light">
        {label}
      </span>
      {href ? (
        <a href={href} className="font-display text-lg font-medium text-ink link-underline">
          {value}
        </a>
      ) : (
        <span className="font-display text-lg font-medium text-ink">{value}</span>
      )}
    </div>
  );
}
