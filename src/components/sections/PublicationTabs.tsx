"use client";

import { useState } from "react";
import { publicationCategories } from "@/data/publications";
import { cn } from "@/lib/utils";

export function PublicationTabs() {
  const [active, setActive] = useState(publicationCategories[0].key);
  const current = publicationCategories.find((c) => c.key === active)!;

  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {publicationCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors",
              active === c.key
                ? "bg-ink text-white"
                : "bg-cream text-slate hover:bg-ink/5 hover:text-ink",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* List */}
      <ul className="mt-10 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white">
        {current.items.map((title, i) => (
          <li key={i} className="group flex items-start gap-4 p-5 transition-colors hover:bg-cream/50">
            <span className="mt-0.5 font-display text-sm font-semibold text-amber">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="flex-1 text-[15px] leading-relaxed text-slate">{title}</p>
            <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 flex-none text-stone-light transition-colors group-hover:text-amber" fill="none">
              <path d="M7 13 13 7m0 0H8m5 0v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
}
