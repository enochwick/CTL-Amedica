import type { Metadata } from "next";
import { DM_Sans, Work_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ctlamedica.com"),
  title: {
    default: "CTL Amedica — The world's exclusive provider of Silicon Nitride spinal implants",
    template: "%s | CTL Amedica",
  },
  description:
    "CTL Amedica is a forward-thinking medical device design, development, and manufacturing company — the world's exclusive provider of Silicon Nitride (Si3N4) implants for spine.",
  keywords: [
    "Silicon Nitride",
    "spinal implants",
    "interbody fusion",
    "Si3N4",
    "spine surgery",
    "CTL Amedica",
    "NITRO",
  ],
  openGraph: {
    title: "CTL Amedica — Rethink What's Possible",
    description:
      "The world's exclusive provider of Silicon Nitride implants for spine.",
    type: "website",
    url: "https://ctlamedica.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
