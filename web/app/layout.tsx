import './globals.css';

import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import SkipToMain from '@/components/accessibility/SkipToMain';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MainNav from '@/components/navigaion/MainNav';
import MobileNav from '@/components/navigaion/MobileNav';

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
        <Header className="justify-end md:justify-center">
          <Link href="/">
            <Image
              className="block h-16 md:h-20 w-auto absolute top-1/2 left-4 -translate-y-1/2"
              src="/images/logos/tkc-logo.png"
              alt="The Kids Clinic"
              width={320}
              height={160}
            />
          </Link>
          <MainNav className="hidden md:block" />
          <MobileNav className="md:hidden" />
        </Header>
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
