import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';

import SkipToMain from '@/components/accessibility/SkipToMain';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const interFont = Inter({
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  subsets: ['latin']
});

const poppinsFont = Poppins({
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: '%s | The Kids Clinic',
    default: 'The Kids Clinic'
  },
  description:
    'No appointment necessary, after hours care, open 6 days a week, a welcoming, comfortable environment. Pediatric care. Call 806-771-5437.',
  keywords:
    "Pediatrician near me, Children's doctor, Pediatric clinic, Pediatric care, Lubbock pediatricians, Baby doctor, Infant doctor",
  robots: 'index, follow',
  authors: [{ name: 'Kuhrt Cowan', url: 'https://kuhrt.codes' }],
  openGraph: {
    type: 'website',
    title: {
      template: '%s | The Kids Clinic',
      default: 'The Kids Clinic'
    },
    description:
      'No appointment necessary, after hours care, open 6 days a week, a welcoming, comfortable environment. Pediatric care. Call 806-771-5437.',
    url: 'https://thekids.clinic',
    siteName: 'The Kids Clinic',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s | The Kids Clinic',
      default: 'The Kids Clinic'
    },
    description:
      'No appointment necessary, after hours care, open 6 days a week, a welcoming, comfortable environment. Pediatric care. Call 806-771-5437.'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#832a91'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${interFont.variable} ${poppinsFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <SkipToMain />
        <Header />
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
