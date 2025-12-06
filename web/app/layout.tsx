import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Head from 'next/head';

import SkipToMain from '@/components/accessibility/SkipToMain';
import TownsquareScripts from '@/components/analytics/TownsquareScripts';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { getContactInfo } from '@/repositories/page-repository';

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
  metadataBase: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://thekids.clinic'
      : 'http://localhost:3000'
  ),
  title: {
    template: '%s | The Kids Clinic',
    default: 'The Kids Clinic'
  },
  description:
    'No appointment necessary, after hours care, open 6 days a week, a welcoming, comfortable environment. Pediatric care. Call 806-771-5437.',
  keywords:
    "Pediatrician near me, Children's doctor, Pediatric clinic, after-hours care, urgent care, walk-in, Pediatric care, Lubbock pediatricians, Baby doctor, Infant doctor",
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

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contactInfo = await getContactInfo();

  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''}
        dataLayerName="config"
      />
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
        <Header contactInfo={contactInfo ?? undefined} />
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer contactInfo={contactInfo ?? undefined} />
        </div>
        <TownsquareScripts />
      </body>
    </html>
  );
}
