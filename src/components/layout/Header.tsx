"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_1px_0_rgba(30,24,16,0.08)]"
          : "bg-white",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" className="relative z-10 flex items-center" aria-label="CTL Amedica home">
          <Image
            src="/logos/ctl-logo-wordmark.png"
            alt="CTL Amedica"
            width={2048}
            height={427}
            priority
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate transition-colors hover:text-ink"
              >
                {item.label}
                {item.children && (
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-stone-light transition-transform group-hover:rotate-180" fill="none">
                    <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[230px] translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-ink/5 bg-white p-2 shadow-card">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-3.5 py-2.5 text-sm text-slate transition-colors hover:bg-cream hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span className={cn("block h-0.5 w-6 bg-ink transition-transform", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-ink transition-opacity", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-ink transition-transform", mobileOpen && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 overflow-y-auto bg-white px-5 pb-10 pt-4 transition-opacity duration-200 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col divide-y divide-ink/5">
          {mainNav.map((item) => (
            <div key={item.label} className="py-1">
              {item.children ? (
                <>
                  <button
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between py-3 text-left text-lg font-medium text-ink"
                  >
                    {item.label}
                    <svg viewBox="0 0 12 12" className={cn("h-3 w-3 text-stone transition-transform", openGroup === item.label && "rotate-180")} fill="none">
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {openGroup === item.label && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 text-base text-slate"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-ink"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <Button href="/contact" className="mt-6 w-full" size="lg">
          Contact Us
        </Button>
      </div>
    </header>
  );
}
