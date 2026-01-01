import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { absoluteUrl, defaultKeywords, getSiteUrl } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const defaultOgImage = absoluteUrl("/images/projects/brightlife/backend/Screenshot%20(72).png");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yeasin Arafat | Full-Stack Software Engineer",
    template: "%s | Yeasin Arafat",
  },
  description:
    "Full-stack portfolio showcasing React/Next.js frontends, Django REST backends, Azure deployments, and ML case studies built with production-grade SDLC.",
  keywords: defaultKeywords,
  authors: [{ name: "Yeasin Arafat", url: siteUrl }],
  openGraph: {
    title: "Yeasin Arafat | Full-Stack Software Engineer",
    description:
      "Full-stack portfolio showcasing React/Next.js frontends, Django REST backends, Azure deployments, and ML case studies built with production-grade SDLC.",
    url: siteUrl,
    siteName: "Yeasin Arafat Portfolio",
    images: [{ url: defaultOgImage, width: 1600, height: 900, alt: "Yeasin Arafat Portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeasin Arafat | Full-Stack Software Engineer",
    description:
      "Full-stack portfolio showcasing React/Next.js frontends, Django REST backends, Azure deployments, and ML case studies built with production-grade SDLC.",
    images: [defaultOgImage],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://img.icons8.com/?size=100&id=LoyAjcvVKv1K&format=png&color=000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Yeasin Arafat",
              url: siteUrl,
              jobTitle: "Full-Stack Software Engineer",
              sameAs: [
                "https://yeasindev.me",
                "https://github.com/yeasin-dev-me",
                "https://www.linkedin.com/in/yeasinarafat/",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
