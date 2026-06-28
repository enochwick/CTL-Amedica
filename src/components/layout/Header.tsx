"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/site";
import { products, categoryMeta, categoryOrder } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const productGroups = categoryOrder.map((key) => ({
  key,
  meta: categoryMeta[key],
  items: products.filter((p) => p.category === key),
}));

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>("products");

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
      onMouseLeave={() => setMega(false)}
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || mega
          ? "border-b border-white/10 bg-base/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
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
            className="h-7 w-auto brightness-0 invert sm:h-[30px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if ("mega" in item && item.mega) {
              return (
                <button
                  key={item.label}
                  onMouseEnter={() => setMega(true)}
                  onClick={() => setMega((m) => !m)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    mega ? "text-white" : "text-stone hover:text-white",
                  )}
                  aria-expanded={mega}
                >
                  {item.label}
                  <Chevron open={mega} />
                </button>
              );
            }
            const children = "children" in item ? item.children : undefined;
            return (
              <div key={item.label} className="group relative" onMouseEnter={() => setMega(false)}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-stone transition-colors hover:text-white"
                >
                  {item.label}
                  {children && <Chevron />}
                </Link>
                {children && (
                  <div className="invisible absolute left-0 top-full min-w-[200px] translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] p-2 shadow-card">
                      {children.map((c) => (
                        <Link
                          key={c.label}
                          href={c.href}
                          className="block rounded-xl px-3.5 py-2.5 text-sm text-stone transition-colors hover:bg-white/5 hover:text-white"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact-us" size="sm">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="space-y-1.5">
            <span className={cn("block h-0.5 w-6 bg-white transition-transform", mobileOpen && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-white transition-opacity", mobileOpen && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-white transition-transform", mobileOpen && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {/* ─── Desktop MEGA MENU ─── */}
      <div
        onMouseEnter={() => setMega(true)}
        className={cn(
          "absolute inset-x-0 top-full hidden origin-top border-y border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-200 lg:block",
          mega ? "visible opacity-100" : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="container-page grid grid-cols-[repeat(4,1fr)_0.9fr] gap-8 py-10">
          {productGroups.map((group) => (
            <div key={group.key}>
              <Link
                href={`/products?category=${group.key}`}
                onClick={() => setMega(false)}
                className="group flex items-baseline justify-between border-b border-white/10 pb-2.5"
              >
                <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-amber">
                  {group.meta.label}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-stone opacity-0 transition-opacity group-hover:opacity-100">
                  View
                </span>
              </Link>
              <ul className="mt-3 space-y-0.5">
                {group.items.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      onClick={() => setMega(false)}
                      className="group -mx-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13.5px] text-stone transition-colors hover:bg-white/5 hover:text-white"
                    >
                      <span className="flex-1">{p.menuLabel}</span>
                      {p.nitro && (
                        <span className="rounded bg-amber px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-black">
                          NITRO
                        </span>
                      )}
                      {!p.nitro && p.material === "Silicon Nitride" && (
                        <span className="font-mono text-[10px] font-semibold text-amber/80">Si₃N₄</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Feature card */}
          <Link
            href="/nitro"
            onClick={() => setMega(false)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber/25 blur-2xl transition-opacity group-hover:opacity-80" />
            <div className="relative">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber">
                Exclusive Material
              </span>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight text-white">
                The NITRO Family
              </p>
              <p className="mt-2 text-sm text-stone">
                Silicon Nitride interbody fusion. In the race to achieve interbody fusion, material matters.
              </p>
            </div>
            <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber">
              Explore NITRO
              <svg viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none">
                <path d="M4 10h12m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
        <div className="border-t border-white/[0.06] bg-white/[0.02]">
          <div className="container-page flex items-center justify-between py-3 text-sm">
            <span className="font-mono text-[11px] uppercase tracking-wider text-stone">
              Browse the complete spinal portfolio
            </span>
            <Link href="/products" onClick={() => setMega(false)} className="font-medium text-amber link-underline">
              View all products →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Mobile menu ─── */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 overflow-y-auto bg-base px-5 pb-16 pt-4 transition-opacity duration-200 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col divide-y divide-white/[0.06]">
          <div className="py-1">
            <button
              onClick={() => setMobileGroup((g) => (g === "products" ? null : "products"))}
              className="flex w-full items-center justify-between py-3 text-left text-lg font-medium text-white"
            >
              Product
              <Chevron open={mobileGroup === "products"} />
            </button>
            {mobileGroup === "products" && (
              <div className="space-y-5 pb-4">
                {productGroups.map((group) => (
                  <div key={group.key}>
                    <Link
                      href={`/products?category=${group.key}`}
                      onClick={() => setMobileOpen(false)}
                      className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-amber"
                    >
                      {group.meta.label}
                    </Link>
                    <ul className="mt-1.5 grid grid-cols-2 gap-x-4 gap-y-1">
                      {group.items.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/products/${p.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-sm text-stone"
                          >
                            {p.menuLabel}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/products" onClick={() => setMobileOpen(false)} className="inline-block text-sm font-medium text-amber link-underline">
                  View all products →
                </Link>
              </div>
            )}
          </div>

          {mainNav
            .filter((i) => !("mega" in i && i.mega))
            .map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-lg font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
        </nav>
        <Button href="/contact-us" className="mt-6 w-full" size="lg">
          Contact Us
        </Button>
      </div>
    </header>
  );
}

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      className={cn("h-2.5 w-2.5 text-stone transition-transform", open && "rotate-180")}
      fill="none"
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
