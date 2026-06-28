"use client";

import { useState } from "react";
import { publicationCategories } from "@/data/publications";
import { cn } from "@/lib/utils";

export function PublicationTabs() {
  const [active, setActive] = useState(publicationCategories[0].key);
  const current = publicationCategories.find((c) => c.key === active)!;

  return (
    <div>
      {/* Tabs — segmented control */}
      <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1">
        {publicationCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={cn(
              "rounded-full px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-wide transition-colors",
              active === c.key
                ? "bg-amber text-black"
                : "text-stone hover:text-white",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* List */}
      <ul className="mt-10 divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
        {current.items.map((title, i) => (
          <li key={i} className="group flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.03]">
            <span className="mt-0.5 font-mono text-sm font-semibold text-amber">
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
