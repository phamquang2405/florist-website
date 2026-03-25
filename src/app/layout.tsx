import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';
import { cn } from '@/lib/utils/cn';
import { env } from '@/lib/env';
import { createMetadata } from '@/lib/seo/metadata';

const bodyFont = localFont({
  src: '../assets/fonts/Verdana.ttf',
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = createMetadata({
  title: env.NEXT_PUBLIC_APP_NAME,
  description: 'Landing page and storefront starter for a modern florist brand.',
  path: '/'
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          bodyFont.variable,
          'font-sans text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
