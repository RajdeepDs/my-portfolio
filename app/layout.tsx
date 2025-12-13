import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import Footer from "./components/footer";
import PageTransition from "./components/page-transition";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Rajdeep Das - React & TypeScript Engineer",
    template: "%s | Rajdeep Das",
  },
  description: "React & TypeScript Engineer",
  openGraph: {
    title: "Rajdeep Das",
    description: "React & TypeScript Engineer",
    url: baseUrl,
    siteName: "Rajdeep Das",
    locale: "en_US",
    type: "website",
    images: "/opengraph-image.png",
  },
  twitter: {
    title: "Rajdeep Das",
    description: "React & TypeScript Engineer",
    card: "summary_large_image",
    site: "@rajdeepdas",
    images: "/opengraph-image.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const figTreeSans = Figtree({
  variable: "--font-figtree-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        `${figTreeSans.variable} ${geistMono.variable}`
      )}
      lang="en"
    >
      <body className="flex min-h-screen max-w-xl flex-col antialiased lg:mx-auto">
        <main className="mt-10 flex min-w-0 flex-1 flex-col px-2 md:px-0">
          <PageTransition>{children}</PageTransition>
        </main>
        <PageTransition>
          <Footer />
        </PageTransition>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
