import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src="/logos/ctl-logo-wordmark.png"
              alt="CTL Amedica"
              width={2048}
              height={427}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              The world&apos;s exclusive provider of Silicon Nitride implants for
              spine. Rethink what&apos;s possible.
            </p>
            <div className="mt-7 space-y-4">
              {site.locations.map((loc) => (
                <div key={loc.label} className="text-sm">
                  <p className="font-display font-medium text-white">{loc.label}</p>
                  <p className="text-white/55">{loc.address}</p>
                  <p className="text-white/55">{loc.city}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/60 transition-colors hover:text-amber"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href={`tel:${site.phone.replace(/\./g, "")}`} className="text-white/60 transition-colors hover:text-amber">
                    {site.phone}
                  </a>
                </li>
                <li className="text-white/50">Fax: {site.fax}</li>
                <li>
                  <a href={`mailto:${site.email}`} className="text-white/60 transition-colors hover:text-amber">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Rethink What&apos;s Possible®</p>
        </div>
      </div>
    </footer>
  );
}
