import type { Metadata } from "next";

import { GalleryCarousel } from "@/components/gallery/gallery-carousel";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Galleri",
  description:
    "Udforsk Drawlabs projekter inden for bolig, erhverv, renovering og kultur.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
            <span className="h-px w-8 bg-accent-secondary" />
            Galleri
          </p>
          <h1 className="mt-7 max-w-5xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.5rem]">
            Idéer gjort
            <span className="text-gradient block">synlige.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Gå på opdagelse i udvalgte visualiseringer, rumlige studier og
            projekter på tværs af bolig, erhverv og renovering.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[76rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <Reveal>
          <GalleryCarousel />
        </Reveal>
      </section>
    </>
  );
}
