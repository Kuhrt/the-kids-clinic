import { ComponentPropsWithRef } from 'react';

import { cn } from '@/utils/styles';

export default function Container({
  className,
  ...restProps
}: ComponentPropsWithRef<'div'>) {
  return (
    <div className={cn('px-4 max-w-6xl mx-auto', className)} {...restProps} />
  );
}
