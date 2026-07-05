import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Se Drawlabs kreative ydelser inden for illustration og design.",
};

export default function ServicesPage() {
  return (
    <PageIntro
      eyebrow="Ydelser"
      title="Kreative løsninger med et tydeligt formål."
      description="Her præsenteres illustration, grafisk design, branding, animation og digital kunst i milstolpe 3."
    />
  );
}
