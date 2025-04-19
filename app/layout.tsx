import './global.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import Footer from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'My Portfolio',
    template: '%s | My Portfolio',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        "bg-white text-black dark:bg-black dark:text-white",
        `${geistSans.variable} ${geistMono.variable}`
      )}
    >
      <body className="flex min-h-screen max-w-xl flex-col antialiased lg:mx-auto">
        <main className="mt-6 flex min-w-0 flex-1 flex-col px-2 md:px-0">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}