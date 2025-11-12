'use client';

import { cn } from '@/utils/styles';

import { buttonVariants } from '../ui/button';

export default function SkipToMain() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#main"
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: 'default' }),
        'fixed top-4 left-4 z-50',
        '-translate-y-20 opacity-0',
        'focus:translate-y-0 focus:opacity-100',
        'transition-all duration-300 ease-in-out'
      )}
    >
      Skip to main content
    </a>
  );
}
