import { z } from 'zod';

const defaultEnv = {
  NEXTAUTH_URL: 'http://localhost:3000',
  NEXTAUTH_SECRET: 'replace-this-secret-in-production',
  AUTH_DEMO_EMAIL: 'admin@florist.local',
  AUTH_DEMO_PASSWORD: 'changeme123',
  NEXT_PUBLIC_APP_NAME: 'Bloom Flower Shop'
};

const envSchema = z.object({
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  AUTH_DEMO_EMAIL: z.string().email(),
  AUTH_DEMO_PASSWORD: z.string().min(8),
  NEXT_PUBLIC_APP_NAME: z.string().default('Florist Web')
});

export const env = envSchema.parse({
  NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? defaultEnv.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ?? defaultEnv.NEXTAUTH_SECRET,
  AUTH_DEMO_EMAIL: process.env.AUTH_DEMO_EMAIL ?? defaultEnv.AUTH_DEMO_EMAIL,
  AUTH_DEMO_PASSWORD: process.env.AUTH_DEMO_PASSWORD ?? defaultEnv.AUTH_DEMO_PASSWORD,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? defaultEnv.NEXT_PUBLIC_APP_NAME
});
