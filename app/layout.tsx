import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";

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
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
