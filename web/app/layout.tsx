import './globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

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
  title: 'The Kids Clinic',
  description:
    'No appointment necessary, after hours care, open 6 days a week, a welcoming, comfortable environment. Pediatric care. Call 806-771-5437.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
