import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/video/') || pathname.startsWith('/images/') || pathname.startsWith('/cursos/') || pathname.startsWith('/_next') || pathname.startsWith('/api/')) {
        return NextResponse.next();
    }

    const publicPaths = ['/login', '/registro', '/recuperar-contrasena', '/'];
    const isPublicPath = publicPaths.some(path => pathname === path || pathname.startsWith(path + '/'));

    if (isPublicPath) {
        return NextResponse.next();
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

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)']
};
