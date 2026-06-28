import Link from "next/link";
import Image from "next/image";
import { footerNav, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          {/* Brand + company description */}
          <div>
            <Image
              src="/logos/ctl-logo-wordmark.png"
              alt="CTL Amedica"
              width={2048}
              height={427}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              CTL Amedica is a forward-thinking medical device design,
              development, and manufacturing company.
            </p>
            <div className="mt-6 flex gap-3">
              <Social href={site.social.linkedin} label="LinkedIn">
                <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6 0h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.6 22 10.6 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
              </Social>
              <Social href={site.social.instagram} label="Instagram">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71C3.21 8.49 3.2 8.86 3.2 12s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32C15.51 4.01 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.13-2.94a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </Social>
              <Social href={site.social.facebook} label="Facebook">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.47-4.05 4.16V9.9H7.5V13h2.75v8h3.25Z" />
              </Social>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-amber">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/60 transition-colors hover:text-amber">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <div className="text-sm">
              <p className="font-display font-medium text-white">Manufacturing &amp; Distribution HQ</p>
              <p className="mt-1.5 text-white/55">
                <a href={`tel:${site.phone.replace(/\./g, "")}`} className="hover:text-amber">P: {site.phone}</a>
              </p>
              <p className="text-white/55">F: {site.fax}</p>
              <p className="text-white/55">
                <a href={`mailto:${site.email}`} className="hover:text-amber">E: {site.email}</a>
              </p>
              <p className="mt-1.5 text-white/55">2052 McKenzie Drive, Building 1</p>
              <p className="text-white/55">Carrollton, TX 75006</p>
            </div>
            <div className="text-sm">
              <p className="font-display font-medium text-white">Research &amp; Development Center</p>
              <p className="mt-1.5 text-white/55">460 Norristown Rd. Suite 100</p>
              <p className="text-white/55">Blue Bell, PA 19422</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center">
          <p>{site.copyright}</p>
          <p>Powered by CTL Amedica</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-amber hover:text-amber"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
