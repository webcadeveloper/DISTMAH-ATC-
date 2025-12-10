export { auth as middleware } from '@/lib/auth';

export const config = {
  matcher: [
    '/admin/:path*',
    '/instructor/:path*',
    '/estudiante/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
