import { ComponentProps } from 'react';

import { cn } from '@/utils/styles';

export default function ContentContainer({
  className,
  ...restProps
}: ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-background text-foreground rounded-3xl md:rounded-4xl lg:rounded-5xl max-w-3xl p-6 md:p-8 lg:p-10 mx-auto',
        className
      )}
      {...restProps}
    />
  );
}
