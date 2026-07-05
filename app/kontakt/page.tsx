import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt Drawlab og fortæl os om din næste idé.",
};

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Kontakt"
      title="Lad os illustrere din idé."
      description="Kontaktoplysninger og formular med tydelig validering bygges i milstolpe 5."
    />
  );
}

