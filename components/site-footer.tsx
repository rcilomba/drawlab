import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/arrow-icon";

const footerNavigation = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#050507]">
      <div className="mx-auto w-full max-w-[76rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-14 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent-secondary uppercase">
              Har du en idé?
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-[-0.045em] text-balance sm:text-5xl">
              Lad os gøre den synlig sammen.
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Kontakt Drawlab
            <span className="transition-transform group-hover:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <Link href="/" className="relative block h-12 w-[7.5rem]">
              <Image
                src="/logo/drawlab_white.png"
                alt="Drawlab"
                fill
                sizes="120px"
                className="object-contain"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
              Arkitektur, boligdesign og 3D-visualisering, der gør idéer
              lettere at forstå og føre videre.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">
              Navigation
            </p>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {footerNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">
              Kontakt
            </p>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p>København · Vanløse</p>
              <a
                href="mailto:info@drawlab.dk"
                className="block transition-colors hover:text-white"
              >
                info@drawlab.dk
              </a>
              <p>CVR 36681608</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Drawlab</p>
          <p>Arkitektur · Visualisering · Indretning</p>
        </div>
      </div>
    </footer>
  );
}

