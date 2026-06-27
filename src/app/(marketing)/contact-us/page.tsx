import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/sections/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to us with any inquiries, feedback, or support requests you might have. Our team is ready to assist you with any questions or needs related to our products and services.",
};

const details = [
  {
    label: "Address",
    lines: ["2052 McKenzie Drive, Building 1", "Carrollton, TX 75006"],
  },
  { label: "Fax", lines: ["F 1.888.831.4892"] },
  { label: "Email Us", lines: ["info@CTLAmedica.com"], href: "mailto:info@ctlamedica.com" },
  { label: "Call Us", lines: ["P 1.800.713.9489"], href: "tel:18007139489" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We're ready to assist you"
        intro="Reach out to us with any inquiries, feedback, or support requests you might have. Our team is ready to assist you with any questions or needs related to our products and services."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="rounded-2xl border border-ink/8 bg-cream/50 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                    {d.label}
                  </p>
                  <div className="mt-2 space-y-0.5">
                    {d.lines.map((line) =>
                      d.href ? (
                        <a
                          key={line}
                          href={d.href}
                          className="block font-display text-[15px] font-medium text-ink link-underline"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-[15px] text-slate">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Locations */}
            <div className="mt-6 grid gap-4">
              {site.locations.map((loc) => (
                <div key={loc.label} className="rounded-2xl border border-ink/8 bg-white p-6">
                  <p className="font-display text-sm font-semibold text-ink">{loc.label}</p>
                  {loc.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-stone">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-ink/8 bg-white p-7 shadow-card sm:p-9">
            <h2 className="font-display text-2xl font-semibold text-ink">Send us a message</h2>
            <p className="mt-2 text-[15px] text-stone">
              Fill out the form below with your details, and we&apos;ll get back to
              you as soon as possible
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
