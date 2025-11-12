import { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/utils/styles';

export default function Header({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'header'>) {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 flex justify-center items-center z-30 p-4',
        className
      )}
      {...restProps}
    />
  );
}
