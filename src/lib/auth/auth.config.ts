import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { env } from '@/lib/env';

export const authConfig: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (
          credentials?.email === env.AUTH_DEMO_EMAIL &&
          credentials?.password === env.AUTH_DEMO_PASSWORD
        ) {
          return {
            id: 'demo-user',
            name: 'Operations Manager',
            email: env.AUTH_DEMO_EMAIL,
            role: 'admin'
          };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? '';
        session.user.role = token.role as string | undefined;
      }

      return session;
    }
  }
};
