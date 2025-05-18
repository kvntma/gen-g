'use client';

import { RootLayout } from '../root/root-layout';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
