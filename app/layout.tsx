import "./global.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import Footer from "./components/footer";
import Header from "./components/header";
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
      className={cx(`${figTreeSans.variable} ${geistMono.variable}`)}
      lang="en"
    >
      <body className="bg-gray-50/20">
        <PageTransition>
          <div className="isolate mx-auto flex min-h-screen max-w-[692px] flex-col overflow-x-hidden px-4 py-12 text-gray-900 antialiased md:overflow-x-visible">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PageTransition>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
