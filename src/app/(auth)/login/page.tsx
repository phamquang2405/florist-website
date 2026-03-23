import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { LoginForm } from '@/features/auth/components/login-form';
import { auth } from '@/lib/auth/auth';
import { createMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: 'Login',
    description: 'Securely sign in to the florist operations dashboard.',
    path: '/login',
    robots: {
      index: false,
      follow: false
    }
  });
}

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className="container flex min-h-[calc(100vh-9rem)] items-center justify-center py-12">
      <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_440px]">
        <section
          aria-labelledby="login-title"
          className="hidden rounded-[2rem] border border-border/70 bg-white/60 p-8 shadow-soft lg:block"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Secure sign in
          </p>
          <h1 id="login-title" className="font-heading text-5xl leading-tight">
            Access the florist operations dashboard.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            This example uses NextAuth credentials authentication with JWT sessions and
            middleware-based route protection.
          </p>
        </section>
        <section aria-label="Login form" className="surface p-6 md:p-8">
          <LoginForm />
        </section>
      </div>
    </main>
  );
}
