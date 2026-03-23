import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-12 w-full rounded-2xl border border-border bg-white px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10',
        className
      )}
      {...props}
    />
  );
});
