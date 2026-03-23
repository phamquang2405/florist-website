import { Slot } from '@radix-ui/react-slot';
import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'default' | 'lg';
};

export function Button({
  asChild,
  className,
  children,
  isLoading,
  variant = 'primary',
  size = 'default',
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const content = asChild ? (
    children
  ) : (
    <>
      {isLoading ? <LoaderCircle className="size-4 animate-spin" /> : null}
      {children}
    </>
  );

  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-60',
        size === 'default' && 'h-11 px-5 text-sm',
        size === 'lg' && 'h-12 px-6 text-base',
        variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90',
        variant === 'secondary' &&
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        variant === 'ghost' && 'border border-border bg-white/70 hover:bg-white',
        variant === 'danger' && 'bg-danger text-white hover:opacity-90',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </Comp>
  );
}
