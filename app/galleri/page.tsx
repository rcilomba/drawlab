import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "Galleri",
  description: "Udforsk et udvalg af Drawlabs kreative projekter.",
};

export default function GalleryPage() {
  return (
    <PageIntro
      eyebrow="Galleri"
      title="Udvalgte projekter og visuelle fortællinger."
      description="Galleriet får kategorier, responsivt grid og lightbox i milstolpe 4."
    />
  );
}
