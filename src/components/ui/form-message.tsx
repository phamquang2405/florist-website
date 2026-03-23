export function FormMessage({
  children,
  tone = 'error'
}: {
  children?: React.ReactNode;
  tone?: 'error' | 'muted';
}) {
  if (!children) {
    return null;
  }

  return (
    <p className={tone === 'error' ? 'text-sm text-danger' : 'text-sm text-muted-foreground'}>
      {children}
    </p>
  );
}

