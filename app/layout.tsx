import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Drawlab — Illustration & design",
    template: "%s | Drawlab",
  },
  description:
    "Drawlab skaber illustration, grafisk design, branding, animation og digital kunst.",
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

