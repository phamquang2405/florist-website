import Link from 'next/link';
import { User } from 'next-auth';

import { LogoutButton } from '@/features/auth/components/logout-button';
import { DashboardPreferences } from '@/features/items/components/dashboard-preferences';
import { Badge } from '@/components/ui/badge';

export function DashboardShell({
  children,
  user
}: {
  children: React.ReactNode;
  user: User;
}) {
  return (
    <main className="container py-8">
      <div className="space-y-6">
        <header className="surface flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <Badge variant="secondary">Protected route</Badge>
            <div>
              <h1 className="font-heading text-4xl">Welcome back, {user.name ?? 'Florist team'}.</h1>
              <p className="text-sm text-muted-foreground">
                Manage arrangements, review stock notes, and test the example CRUD workflow.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium transition hover:bg-secondary"
            >
              Back home
            </Link>
            <DashboardPreferences />
            <LogoutButton />
          </div>
        </header>
        {children}
      </div>
    </main>
  );
}

