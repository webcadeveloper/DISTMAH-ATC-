import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { auth } from '@/lib/auth';

const intlMiddleware = createIntlMiddleware({
    locales: ['en', 'es'],
    defaultLocale: 'es'
});

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const publicPaths = ['/login', '/registro', '/recuperar-contrasena', '/api/auth'];
    const isPublicPath = publicPaths.some(path => pathname.includes(path));

    if (isPublicPath) {
        return intlMiddleware(request);
    }

    const session = await auth();

    if (pathname.includes('/admin')) {
        if (!session || session.user.role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (pathname.includes('/instructor')) {
        if (!session || session.user.role !== 'INSTRUCTOR') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if (pathname.includes('/estudiante')) {
        if (!session || session.user.role !== 'STUDENT') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ['/', '/(es|en)/:path*', '/((?!_next|api|favicon.ico).*)']
};
