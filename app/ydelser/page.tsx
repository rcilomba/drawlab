import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/arrow-icon";

export const metadata: Metadata = {
  title: "Ydelser",
  description:
    "Se Drawlabs løsninger for boligejere, husejere, boligforeninger og kursusdeltagere.",
};

const audiences = [
  {
    number: "01",
    id: "boligejer",
    title: "Boligejer",
    subtitle: "Når boligen skal udvikle sig med dig",
    description:
      "En ombygning eller ny indretning begynder ofte med mange muligheder. Vi hjælper med at gøre idéerne synlige, så du kan vurdere rum, funktion og udtryk, inden arbejdet går i gang.",
    points: [
      "Idé- og skitseforslag",
      "Visualisering af ombygning og indretning",
      "Et tydeligt grundlag for den videre dialog",
    ],
    image: "/gallery/pent2.jpg",
    imageAlt: "3D-visualisering af en moderne etagebolig",
  },
  {
    number: "02",
    id: "husejer",
    title: "Husejer",
    subtitle: "Se helheden før du vælger retning",
    description:
      "Fra tilbygning til et helt nyt hus gør visualisering det lettere at forstå proportioner, lys og sammenhænge. Sammen undersøger vi, hvordan huset kan passe til både stedet og hverdagen.",
    points: [
      "Bolig- og tilbygningsidéer",
      "Visualisering af facade, materialer og rum",
      "Løbende justering af den valgte løsning",
    ],
    image: "/images/typehuse.jpg",
    imageAlt: "Visualisering af et moderne enfamiliehus",
  },
  {
    number: "03",
    id: "boligforening",
    title: "Boligforening",
    subtitle: "Et fælles billede skaber bedre beslutninger",
    description:
      "Når flere mennesker skal forstå og tage stilling til et projekt, er tydelig kommunikation afgørende. Visualiseringer gør forslag mere konkrete for bestyrelse, beboere og øvrige samarbejdspartnere.",
    points: [
      "Visualisering af fælles projekter",
      "Præsentationsmateriale til dialog og møder",
      "Tydelig formidling af ændringer og muligheder",
    ],
    image: "/images/boligejer.jpg",
    imageAlt: "Arkitektonisk visualisering af moderne boliger",
  },
  {
    number: "04",
    id: "kurser",
    title: "Kurser",
    subtitle: "Fra værktøj til anvendelig tegning",
    description:
      "Kurser er for dig, der vil blive tryggere i arbejdet med digitale tegninger og visualisering. Indhold og niveau aftales efter behov, så undervisningen tager udgangspunkt i det, du skal kunne bruge bagefter.",
    points: [
      "Praktisk og visuelt fokus",
      "Indhold tilpasset niveau og behov",
      "Kontakt os for aktuelle kursusmuligheder",
    ],
    image: "/images/kurser.jpg",
    imageAlt: "Plantegning med pen og lineal til undervisning i teknisk tegning",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="blueprint-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
            <span className="h-px w-8 bg-accent-secondary" />
            Ydelser
          </p>
          <h1 className="mt-7 max-w-5xl text-5xl leading-[0.96] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.5rem]">
            Se mulighederne.
            <span className="text-gradient block">Vælg med ro.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Drawlab gør rumlige idéer tydelige for dem, der skal forstå,
            vælge og føre dem videre. Vi tilpasser processen til projektet og
            de mennesker, løsningen er til for.
          </p>
        </div>
      </section>

      <nav
        aria-label="Genveje til ydelser"
        className="sticky top-20 z-40 border-b border-white/10 bg-background/85 backdrop-blur-xl"
      >
        <div className="mx-auto flex w-full max-w-[76rem] gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10">
          {audiences.map((audience) => (
            <a
              key={audience.id}
              href={`#${audience.id}`}
              className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/65 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {audience.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto w-full max-w-[76rem] px-5 sm:px-8 lg:px-10">
        {audiences.map((audience, index) => (
          <section
            key={audience.id}
            id={audience.id}
            className="scroll-mt-36 border-b border-white/10 py-20 sm:py-28"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-surface ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={audience.image}
                  alt={audience.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-xs text-white/65 backdrop-blur-md">
                  / {audience.number}
                </span>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-semibold tracking-[0.18em] text-accent-secondary uppercase">
                  {audience.subtitle}
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                  {audience.title}
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                  {audience.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {audience.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-white/75"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-secondary shadow-[0_0_10px_var(--accent-secondary)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold"
                >
                  Tal med os om dit projekt
                  <span className="transition-transform group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <div className="relative mx-auto max-w-[76rem] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-accent/25 via-surface to-accent-secondary/15 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              Ikke sikker på, hvor du skal starte?
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.045em] text-balance sm:text-6xl">
              Fortæl os, hvad du gerne vil forandre.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Vi hjælper med at finde det rigtige første skridt og den løsning,
              der passer til dit projekt.
            </p>
            <Link
              href="/kontakt"
              className="group mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              Kontakt Drawlab
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
