import { cn } from '@/lib/utils/cn';

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <article className={cn('surface p-6', className)}>{children}</article>;
}

export function CardHeader({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('mb-4 space-y-2', className)}>{children}</div>;
}

export function CardTitle({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h3 className={cn('font-heading text-2xl', className)}>{children}</h3>;
}

export function CardContent({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

