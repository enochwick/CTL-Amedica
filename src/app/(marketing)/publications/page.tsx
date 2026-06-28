import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { PublicationStack } from "@/components/sections/PublicationStack";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "The Science Behind Silicon Nitride — studies and clinical experiences across increased bone formation, bacteriostatic, imaging, and clinical research.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="THE SCIENCE BEHIND SILICON NITRIDE"
        title="Studies and Clinical Experiences"
        intro="Select a category below to explore a variety of studies and research findings that showcase the advancements and applications of Silicon Nitride in various medical fields."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Publications", href: "/publications" },
        ]}
      />

      <PublicationStack />

      <CtaBand />
    </>
  );
}
