import type { Metadata, Viewport } from "next";
import { Caveat, Lexend, Plus_Jakarta_Sans, Quicksand } from "next/font/google";
import { OffscreenPause } from "@/components/offscreen-pause";
import { ScrollBackdrop } from "@/components/scroll-backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site-config";
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

// what search engines and share previews read; the values live in lib/site-config.ts
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0b1b4d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${lexend.variable} ${jakarta.variable} ${caveat.variable} ${quicksand.variable} font-sans antialiased`}>
        <ScrollBackdrop />
        <SmoothScroll />
        <OffscreenPause />
        <StructuredData />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
