'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function DashboardError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container flex min-h-[70vh] items-center justify-center py-12">
      <div className="surface max-w-lg space-y-4 p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Dashboard error
        </p>
        <h1 className="font-heading text-3xl">Something went wrong while loading your dashboard.</h1>
        <p className="text-sm text-muted-foreground">
          Try again now, or inspect the server logs if the issue persists.
        </p>
        <Button onClick={reset}>Retry</Button>
      </div>
    </main>
  );
}

