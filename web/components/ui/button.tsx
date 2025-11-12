import { cva, type VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

import { cn } from '@/utils/styles';

const buttonVariants = cva(
  "border-primary-purple-700 text-primary-purple-700 ring-0 shadow-md hover:shadow-sm active:shadow-xs hover:-translate-x-[1.5px] active:-translate-x-[1.5px] rounded-full hover:cursor-pointer font-display uppercase font-black text-sm relative border-1 inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: 'bg-primary-purple-100 ',
        secondary: 'bg-secondary',
        sky: 'bg-sky-500',
        coral: 'bg-coral-500',
        sage: 'bg-sage-500',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'px-6 py-3 has-[>svg]:px-3',
        sm: 'gap-1.5 px-3 py-1 has-[>svg]:px-2.5',
        lg: 'px-8 py-4 has-[>svg]:px-4',
        icon: 'px-2 py-3'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
