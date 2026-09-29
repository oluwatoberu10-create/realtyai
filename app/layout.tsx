import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${site.name} — AI Lead Generation & AI Agents for Real Estate`,
  description:
    "AI systems that help real estate agents, brokers, and teams generate, qualify, and convert more leads — AI inbound and outbound agents, automated follow-up, appointment booking, and CRM automation.",
};

export const viewport: Viewport = {
  themeColor: "#07080a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}>
      <head>
        <noscript>
          <style>{`.reveal,.rise{opacity:1!important;transform:none!important;animation:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
