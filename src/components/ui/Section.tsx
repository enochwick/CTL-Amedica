import { cn } from "@/lib/utils";

type Tone = "white" | "cream" | "ink" | "mist";

// All tones are dark surfaces — slight value shifts create rhythm.
const tones: Record<Tone, string> = {
  white: "bg-base", // #0A0A0A
  mist: "bg-[#0d0d0d]",
  cream: "bg-[#0f0f0f]",
  ink: "bg-black",
};

export function Section({
  tone = "white",
  className,
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-white/[0.06] py-20 sm:py-28",
        tones[tone],
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "white";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.05] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-stone">{intro}</p>
      )}
    </div>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path
        d="M4 10h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
