import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/arrow-icon";
import { HeroVisual } from "@/components/home/hero-visual";
import { Reveal } from "@/components/motion/reveal";

const services = [
  {
    number: "01",
    title: "Bolig & ombygning",
    description:
      "Vi gør dine boligdrømme konkrete med gennemtænkte planløsninger og et klart visuelt udgangspunkt.",
  },
  {
    number: "02",
    title: "3D-visualisering",
    description:
      "Se materialer, proportioner og rumlighed, før de store beslutninger bliver taget.",
  },
  {
    number: "03",
    title: "Indretning & erhverv",
    description:
      "Funktionelle rum og visuelle koncepter, der samler identitet, flow og den daglige brug.",
  },
] as const;

const processSteps = [
  {
    number: "01",
    title: "Vi lytter",
    description: "Vi starter med dine behov, rammer og idéer.",
  },
  {
    number: "02",
    title: "Vi tegner",
    description: "Mulighederne bliver samlet i en tydelig retning.",
  },
  {
    number: "03",
    title: "Vi visualiserer",
    description: "Du ser løsningen og kan træffe sikre valg.",
  },
  {
    number: "04",
    title: "Vi afleverer",
    description: "Du får et gennemarbejdet grundlag til næste skridt.",
  },
] as const;

const collaborations = [
  {
    name: "Adoni Design",
    image: "/clients/adoni-design.jpg",
  },
  {
    name: "Den Serbisk Ortodokse Kirke",
    image: "/clients/serbisk-ortodokse-kirke.jpg",
  },
  {
    name: "Carlsbergbyen",
    image: "/clients/carlsberg.png",
  },
  {
    name: "Line Reenmers",
    image: "/clients/lr.png",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="blueprint-grid absolute inset-0 opacity-35" />
        <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[76rem] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
          <Reveal className="relative z-10" y={20}>
            <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              <span className="h-px w-8 bg-accent-secondary" />
              Arkitektur · 3D · Indretning
            </p>

            <h1 className="max-w-3xl text-5xl leading-[0.94] font-semibold tracking-[-0.055em] text-balance sm:text-7xl lg:text-[5.6rem]">
              Se din idé,
              <span className="text-gradient block">før den bygges.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              Drawlab omsætter tanker og skitser til tydelige tegninger og
              levende visualiseringer, så du kan se mulighederne, før du
              vælger retning.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Start dit projekt
                <span className="transition-transform group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
              <Link
                href="/galleri"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-white/30 hover:bg-white/10"
              >
                Se projekter
              </Link>
            </div>
          </Reveal>

          <HeroVisual />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid w-full max-w-[76rem] grid-cols-1 divide-y divide-white/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
          {["Klare beslutninger", "Gennemtænkte rum", "Personlig proces"].map(
            (value) => (
              <div
                key={value}
                className="flex items-center gap-3 py-5 text-sm font-medium text-white/70 sm:justify-center"
              >
                <span className="size-1.5 rounded-full bg-accent-secondary shadow-[0_0_12px_var(--accent-secondary)]" />
                {value}
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <Reveal>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              Det vi gør
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Fra første streg til et klart beslutningsgrundlag.
            </h2>
          </div>
          <Link
            href="/ydelser"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white"
          >
            Se alle ydelser
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-surface-elevated sm:p-8"
            >
              <div className="absolute -top-20 -right-20 size-48 rounded-full bg-accent/0 blur-3xl transition-colors duration-300 group-hover:bg-accent/15" />
              <div className="relative flex h-full flex-col">
                <span className="font-mono text-xs text-accent-secondary">
                  / {service.number}
                </span>
                <div className="mt-auto pt-20">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <Reveal className="mx-auto w-full max-w-[76rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
                Udvalgte samarbejder
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Skabt i godt selskab.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted">
              Et udvalg af virksomheder og organisationer, vi har skabt
              løsninger sammen med.
            </p>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {collaborations.map((collaboration) => (
              <li
                key={collaboration.name}
                className="group flex flex-col items-center justify-center py-4 text-center"
              >
                <div className="relative size-20 overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:size-24">
                  <Image
                    src={collaboration.image}
                    alt={`${collaboration.name} logo`}
                    fill
                    sizes="96px"
                    className="object-cover grayscale transition-[filter,opacity] duration-300 group-hover:grayscale-0"
                  />
                </div>
                <p className="mt-5 text-xs leading-5 font-semibold tracking-[0.08em] text-white/55 uppercase transition-colors group-hover:text-white">
                  {collaboration.name}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface lg:grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[38rem]">
            <Image
              src="/images/boligejer.jpg"
              alt="Arkitektonisk visualisering af moderne boliger"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-surface/30" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              Visualisering skaber ro
            </p>
            <h2 className="mt-5 text-3xl leading-tight font-semibold tracking-[-0.035em] sm:text-4xl">
              Gør det komplekse nemt at forstå.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted">
              En god visualisering handler ikke kun om et flot billede. Den
              gør proportioner, materialer og sammenhænge tydelige, mens der
              stadig er tid til at justere.
            </p>
            <Link
              href="/galleri"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Udforsk galleriet
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <Reveal className="mx-auto w-full max-w-[76rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
                Sådan arbejder vi
              </p>
              <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">
                En enkel proces. Et tydeligt resultat.
              </h2>
            </div>

            <ol className="border-t border-white/15">
              {processSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-3 border-b border-white/15 py-7 sm:grid-cols-[4rem_0.8fr_1.2fr] sm:items-start sm:gap-6"
                >
                  <span className="font-mono text-xs text-accent-secondary">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid w-full max-w-[76rem] gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-10">
        <div className="blueprint-card relative aspect-square max-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
          <div className="absolute inset-[12%] border border-accent-secondary/40" />
          <div className="absolute top-[28%] right-[20%] bottom-[28%] left-[20%] border border-white/25" />
          <div className="absolute top-[18%] bottom-[18%] left-1/2 w-px bg-white/15" />
          <div className="absolute top-1/2 right-[18%] left-[18%] h-px bg-white/15" />
          <span className="absolute top-7 left-7 font-mono text-xs tracking-widest text-white/40">
            DRAWLAB / SPACE 01
          </span>
          <span className="absolute right-7 bottom-7 text-7xl font-semibold tracking-[-0.08em] text-white/5 sm:text-9xl">
            DL
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
            Om Drawlab
          </p>
          <h2 className="mt-5 max-w-xl text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
            Godt design begynder med at forstå hverdagen.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            Drawlab arbejder i krydsfeltet mellem funktion, form og digital
            visualisering. Målet er at gøre dine idéer konkrete og skabe et
            trygt grundlag for de beslutninger, der former dit rum.
          </p>
          <Link
            href="/kontakt"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Fortæl os om din idé
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10">
        <Reveal className="relative mx-auto max-w-[76rem] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-accent/25 via-surface to-accent-secondary/15 px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="blueprint-grid absolute inset-0 opacity-20" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              Har du en idé?
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.045em] text-balance sm:text-6xl">
              Lad os tegne det næste skridt sammen.
            </h2>
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
        </Reveal>
      </section>
    </>
  );
}
