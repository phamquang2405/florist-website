import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/app/globals.css';
import { cn } from '@/lib/utils/cn';
import { createMetadata } from '@/lib/seo/metadata';

const headingFont = localFont({
  src: '../assets/fonts/Georgia.ttf',
  variable: '--font-heading',
  display: 'swap'
});

const bodyFont = localFont({
  src: '../assets/fonts/Verdana.ttf',
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = createMetadata({
  title: 'Bloom Flower Shop',
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
          headingFont.variable,
          bodyFont.variable,
          'font-sans text-foreground'
        )}
      >
        {children}
      </body>
    </html>
  );
}
