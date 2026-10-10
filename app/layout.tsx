import type { Metadata } from "next";
import { Caveat, Lexend, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { OffscreenPause } from "@/components/offscreen-pause";
import { ScrollBackdrop } from "@/components/scroll-backdrop";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// the handwritten note in section 2
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

// the face of the Faxtor wordmark (Quicksand Medium, as in the logo files)
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-logo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faxtor",
  description:
    "Faxtor brings your sales, orders, operations and payments together in one powerful system.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${jakarta.variable} ${caveat.variable} ${quicksand.variable} font-sans antialiased`}>
        <ScrollBackdrop />
        <SmoothScroll />
        <OffscreenPause />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
