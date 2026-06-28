import { cn } from "@/lib/utils";

/**
 * Cinematic amber light-trail backdrop (awwwards-style).
 * Pure SVG + CSS — flowing curved streaks with a warm glow.
 */
export function LightTrails({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {/* warm glow pools */}
      <div className="absolute right-[8%] top-[20%] h-[460px] w-[460px] rounded-full bg-amber/20 blur-[120px]" />
      <div className="absolute -left-[6%] bottom-[5%] h-[360px] w-[360px] rounded-full bg-gold/10 blur-[120px]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="trail" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFB100" stopOpacity="0" />
            <stop offset="55%" stopColor="#FFB100" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F9C349" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trail2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F9C349" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFD37A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FFB100" stopOpacity="0" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" />
          </filter>
        </defs>

        <g filter="url(#soft)" className="animate-trail">
          <path d="M-100 640 C 360 600, 620 360, 1540 120" stroke="url(#trail)" strokeWidth="2" />
          <path d="M-100 690 C 420 660, 700 420, 1560 200" stroke="url(#trail2)" strokeWidth="1.5" />
          <path d="M-100 600 C 320 540, 560 300, 1520 60" stroke="url(#trail)" strokeWidth="1.2" opacity="0.7" />
          <path d="M-100 720 C 480 700, 780 500, 1580 280" stroke="url(#trail2)" strokeWidth="1" opacity="0.6" />
          <path d="M-100 560 C 300 480, 520 240, 1500 20" stroke="url(#trail)" strokeWidth="0.8" opacity="0.5" />
        </g>
      </svg>

      {/* fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 40%, black, transparent)",
        }}
      />
    </div>
  );
}
