'use client';

import { IconPhoneFilled } from '@tabler/icons-react';
import { useMotionValueEvent, useScroll } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentPropsWithoutRef, useState } from 'react';

import { cn } from '@/utils/styles';

import MainNav from '../navigaion/MainNav';
import MobileNav from '../navigaion/MobileNav';

const HIDE_THRESHOLD = 50;

export default function Header({
  className,
  children,
  ...restProps
}: ComponentPropsWithoutRef<'header'>) {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const diff = current - (scrollY?.getPrevious() ?? 0);

    // If scrolling down and past threshold, hide header
    // If scrolling up or above threshold, show header
    if (diff > 0 && current > HIDE_THRESHOLD && !isHidden) {
      setIsHidden(true);
    } else if ((diff < 0 || current <= HIDE_THRESHOLD) && isHidden) {
      setIsHidden(false);
    }
  });

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 flex justify-end md:justify-center items-center z-30 p-4 transition-all',
        isHidden
          ? '-translate-y-full opacity-0 duration-1000'
          : 'translate-y-0 opacity-100 duration-300',
        className
      )}
      {...restProps}
    >
      <Link href="/">
        <Image
          className="block h-16 md:h-32 w-auto absolute top-0 left-4 "
          src="/images/logos/tkc-logo.png"
          alt="The Kids Clinic"
          width={320}
          height={160}
        />
      </Link>
      <MainNav className="hidden md:block" />
      <MobileNav className="md:hidden" />
      <a
        href="tel:8067715437"
        className="group hidden md:flex absolute top-7 right-4 text-base font-display font-bold items-center justify-end gap-1"
      >
        <IconPhoneFilled className="text-primary size-5" />
        <span className="text-foreground/50 transition-colors group-hover:text-primary">
          806.771.5437
        </span>
      </a>
      {children}
    </header>
  );
}
