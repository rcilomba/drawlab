import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Ydelser",
  description: "Se Drawlabs ydelser inden for arkitektur, boligdesign og 3D-visualisering.",
};

export default function ServicesPage() {
  return (
    <PageIntro
      eyebrow="Ydelser"
      title="Rumlige løsninger med et tydeligt formål."
      description="Her præsenteres boligdesign, ombygning, indretning og 3D-visualisering i milstolpe 3."
    />
  );
}
