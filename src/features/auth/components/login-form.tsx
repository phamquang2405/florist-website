'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Route } from 'next';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { FormMessage } from '@/components/ui/form-message';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  loginSchema,
  type LoginFormValues
} from '@/features/auth/schemas/login-schema';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const callbackUrl = searchParams.get('callbackUrl') ?? '/dashboard';
  const redirectPath: Route = callbackUrl.startsWith('/') ? (callbackUrl as Route) : '/dashboard';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'admin@florist.local',
      password: 'changeme123'
    }
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    const response = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: redirectPath
    });

    if (response?.error) {
      setSubmitError('Invalid credentials. Check your environment values and try again.');
      return;
    }

    router.push(redirectPath);
    router.refresh();
  });

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Team login
        </p>
        <h2 className="mt-2 font-heading text-4xl">Sign in to continue</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Use the credentials defined in your `.env` file to access the protected dashboard.
        </p>
      </div>
      <form className="space-y-5" onSubmit={onSubmit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register('email')} />
          <FormMessage>{errors.email?.message}</FormMessage>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          <FormMessage>{errors.password?.message}</FormMessage>
        </div>
        <FormMessage>{submitError}</FormMessage>
        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Sign in
        </Button>
      </form>
    </div>
  );
}
