import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";

export const metadata: Metadata = {
  title: "Moritz Leter Tchapder | Portfolio",
  description: "Maschinenbau-Student & Entwickler — Portfolio mit Projekten, Kompetenzen und akademischem Werdegang.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="noise-bg antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
