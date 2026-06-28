"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/ui/Section";

type Status = "idle" | "submitting" | "success" | "error";

const inquiryTypes = [
  "Request a product demo",
  "Clinical evidence / publications",
  "Sales inquiry",
  "Careers",
  "General question",
];

const inputClass =
  "h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white placeholder:text-stone-light outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/25";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-amber/40 bg-amber/10 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber text-black">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-white">
          Thank you — message received
        </h3>
        <p className="mt-2 text-sm text-stone">A member of our team will be in touch shortly.</p>
        <button onClick={() => setStatus("idle")} className="mt-5 text-sm font-medium text-amber link-underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="First name" name="firstName" required />
        <Field label="Last name" name="lastName" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Organization / Practice" name="organization" />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white">How can we help?</label>
        <select name="inquiry" className={inputClass} defaultValue="">
          <option value="" disabled className="bg-[#111] text-stone">
            Select a topic
          </option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t} className="bg-[#111] text-white">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-white">Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-stone-light outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/25"
          placeholder="Tell us a little about what you're looking for…"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-amber px-7 font-display text-sm font-medium text-black transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-base disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
        {status !== "submitting" && <ArrowRight />}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white">
        {label} {required && <span className="text-amber">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white placeholder:text-stone-light outline-none transition-colors focus:border-amber focus:ring-2 focus:ring-amber/25"
      />
    </div>
  );
}
