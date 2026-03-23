import { forwardRef } from 'react';

import { cn } from '@/lib/utils/cn';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        'min-h-28 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10',
        className
      )}
      {...props}
    />
  );
});
