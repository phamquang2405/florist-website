import { getServerSession } from 'next-auth';

import { authConfig } from '@/lib/auth/auth.config';

export function auth() {
  return getServerSession(authConfig);
}

