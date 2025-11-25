import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { strictLimiter, getClientIp } from '@/lib/rate-limit';
import crypto from 'crypto';
import { sendPasswordResetEmail } from '@/lib/email';

const forgotPasswordSchema = z.object({
  email: z.string().email('Email inválido'),
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimitResult = strictLimiter.check(request, 3, ip);

  if (rateLimitResult) return rateLimitResult;

  try {
    const body = await request.json();
    const validatedData = forgotPasswordSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validatedData.error.errors },
        { status: 400 }
      );
    }

    const { email } = validatedData.data;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'Si el email existe, recibirás un correo de recuperación' },
        { status: 200 }
      );
    }

    if (!user.password) {
      return NextResponse.json(
        { error: 'Esta cuenta usa autenticación de Microsoft. No se puede resetear contraseña.' },
        { status: 400 }
      );
    }

    await prisma.passwordResetToken.updateMany({
      where: {
        userId: user.id,
        used: false,
      },
      data: {
        used: true,
      },
    });

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/reset-password?token=${token}`;

    await sendPasswordResetEmail(user.email, user.name, resetUrl);

    return NextResponse.json(
      { message: 'Si el email existe, recibirás un correo de recuperación' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en forgot password:', error);
    return NextResponse.json(
      { error: 'Error al procesar solicitud' },
      { status: 500 }
    );
  }
}
