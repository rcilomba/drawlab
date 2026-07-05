import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/motion/page-transition";
import { ScrollToTop } from "@/components/scroll-to-top";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Drawlab — Arkitektur & 3D-visualisering",
    template: "%s | Drawlab",
  },
  description:
    "Drawlab skaber arkitektoniske løsninger, boligdesign og 3D-visualiseringer, der gør idéer tydelige.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="da">
      <body>
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-[200] -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform focus:translate-y-0"
        >
          Spring til indhold
        </a>
        <SiteHeader />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />
        <ScrollToTop />
      </body>
    </html>
  );
}
