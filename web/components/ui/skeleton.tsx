import { cn } from '@/utils/styles';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-primary animate-pulse rounded-2xl', className)}
      {...props}
    />
  );
}

export { Skeleton };
