import { cn } from '@/lib/utils/cn';

export function Badge({
  children,
  className,
  variant = 'default'
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary';
}) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
        variant === 'default' && 'bg-primary text-primary-foreground',
        variant === 'secondary' && 'bg-secondary text-secondary-foreground',
        className
      )}
    >
      {children}
    </span>
  );
}

