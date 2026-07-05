import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Drawlab og fortæl os om dit næste projekt inden for bolig, indretning eller visualisering.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
            <span className="h-px w-8 bg-accent-secondary" />
            Kontakt
          </p>
          <h1 className="mt-7 max-w-5xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.5rem]">
            Lad os tale om
            <span className="text-gradient block">din idé.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Fortæl kort, hvad du gerne vil skabe eller forandre. Vi vender
            tilbage og hjælper med at finde et godt første skridt.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[76rem] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-secondary uppercase">
            Direkte kontakt
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            Du er også velkommen til at skrive direkte.
          </h2>

          <div className="mt-10 space-y-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-xs tracking-[0.14em] text-white/35 uppercase">
                E-mail
              </p>
              <a
                href="mailto:info@drawlab.dk"
                className="mt-2 inline-block text-lg font-medium transition-colors hover:text-accent-secondary"
              >
                info@drawlab.dk
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] text-white/35 uppercase">
                Område
              </p>
              <p className="mt-2 text-lg font-medium">København · Vanløse</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.14em] text-white/35 uppercase">
                Virksomhed
              </p>
              <p className="mt-2 text-lg font-medium">CVR 36681608</p>
            </div>
          </div>

          <div className="blueprint-card relative mt-10 aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface">
            <div className="absolute inset-[14%] border border-accent-secondary/30" />
            <div className="absolute top-[30%] right-[24%] bottom-[30%] left-[24%] border border-white/20" />
            <span className="absolute bottom-5 left-5 font-mono text-xs tracking-widest text-white/35">
              KØBENHAVN / DK
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
