import type { NextAuthConfig } from 'next-auth';
import { Role } from '@prisma/client';

export const authConfig = {
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      if (pathname.startsWith('/admin')) {
        return isLoggedIn && auth.user.role === Role.ADMIN;
      }

      if (pathname.startsWith('/instructor')) {
        return isLoggedIn && auth.user.role === Role.INSTRUCTOR;
      }

      if (pathname.startsWith('/estudiante')) {
        return isLoggedIn && auth.user.role === Role.STUDENT;
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = user.role;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
