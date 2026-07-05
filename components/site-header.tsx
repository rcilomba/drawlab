"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Forside" },
  { href: "/ydelser", label: "Ydelser" },
  { href: "/galleri", label: "Galleri" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[76rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="text-xl font-bold tracking-[-0.04em]"
          onClick={closeMenu}
        >
          drawlab<span className="text-accent">.</span>
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Luk menu" : "Åbn menu"}
          </span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-transform ${isMenuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        <nav
          id="primary-navigation"
          aria-label="Primær navigation"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute top-20 right-5 left-5 flex-col gap-2 rounded-3xl border border-white/10 bg-surface/95 p-3 shadow-2xl backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
                className={`rounded-full px-4 py-3 text-sm font-medium transition-colors md:py-2 ${
                  isActive
                    ? "bg-white text-black"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

