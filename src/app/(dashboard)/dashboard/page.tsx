import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { DashboardShell } from '@/components/layout/dashboard-shell';
import { ItemsClient } from '@/features/items/components/items-client';
import { auth } from '@/lib/auth/auth';
import { createMetadata } from '@/lib/seo/metadata';
import { itemService } from '@/lib/services/item.service';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: 'Dashboard',
    description: 'Protected florist operations dashboard for managing arrangements and inventory.',
    path: '/dashboard',
    robots: {
      index: false,
      follow: false
    }
  });
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  const items = itemService.list();

  return (
    <DashboardShell user={session.user}>
      <ItemsClient initialItems={items} />
    </DashboardShell>
  );
}
