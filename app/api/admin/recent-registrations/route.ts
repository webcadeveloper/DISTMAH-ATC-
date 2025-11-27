import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || !['ADMIN', 'INSTRUCTOR'].includes(session.user.role as string)) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }

    const recentUsers = await (prisma as any).user.findMany({
      where: {
        role: 'STUDENT',
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10,
      select: {
        id: true,
        name: true,
        email: true,
        country: true,
        countryCode: true,
        region: true,
        city: true,
        latitude: true,
        longitude: true,
        isp: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ users: recentUsers });
  } catch (error) {
    console.error('Error fetching recent registrations:', error);
    return NextResponse.json(
      { error: 'Error al obtener registros recientes' },
      { status: 500 }
    );
  }
}
