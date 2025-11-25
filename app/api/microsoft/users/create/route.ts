import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { MicrosoftGraphService } from '@/lib/microsoft/graph-services';
import { OutlookEmailService } from '@/lib/microsoft/email-service';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';

const prisma = new PrismaClient();

const M365_DOMAIN = process.env.M365_DOMAIN || 'distmah-atc.com';
const A1_STUDENTS_SKU = '314c4481-f395-4525-be8b-2ec4bb1e9d91';
const A1_FACULTY_SKU = '94763226-9b3c-4e75-a931-5c89701abe66';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado. Solo administradores pueden crear cuentas M365.' },
        { status: 401 }
      );
    }

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { error: 'userId es requerido' },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    if ((user as any).m365UserId) {
      return NextResponse.json(
        { error: 'Usuario ya tiene cuenta M365 configurada' },
        { status: 400 }
      );
    }

    const tempPassword = generateSecurePassword();
    const mailNickname = user.email.split('@')[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    const userPrincipalName = `${mailNickname}@${M365_DOMAIN}`;

    const m365User = await MicrosoftGraphService.createUser({
      displayName: user.name,
      userPrincipalName,
      mailNickname,
      password: tempPassword,
    });

    if (!m365User.id) {
      throw new Error('No se pudo crear usuario en Microsoft 365');
    }

    const skuId = user.role === 'INSTRUCTOR' || user.role === 'ADMIN'
      ? A1_FACULTY_SKU
      : A1_STUDENTS_SKU;

    await MicrosoftGraphService.assignLicense(m365User.id, skuId);

    await prisma.user.update({
      where: { id: userId },
      data: {
        m365UserId: m365User.id,
        m365Email: userPrincipalName,
      },
    });

    await OutlookEmailService.sendWelcomeEmail(
      user.email,
      user.name,
      tempPassword
    );

    return NextResponse.json({
      success: true,
      message: 'Cuenta Microsoft 365 creada exitosamente',
      data: {
        m365UserId: m365User.id,
        m365Email: userPrincipalName,
        licenseType: user.role === 'INSTRUCTOR' || user.role === 'ADMIN' ? 'A1 for Faculty' : 'A1 for Students',
      },
    });

  } catch (error: any) {
    console.error('Error creating M365 user:', error);

    return NextResponse.json(
      {
        error: 'Error al crear cuenta Microsoft 365',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth();

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'userId es requerido' },
        { status: 400 }
      );
    }

    const user = await (prisma as any).user.findUnique({
      where: { id: userId },
      select: { m365UserId: true },
    });

    if (!(user as any)?.m365UserId) {
      return NextResponse.json(
        { error: 'Usuario no tiene cuenta M365' },
        { status: 404 }
      );
    }

    await MicrosoftGraphService.deleteUser((user as any).m365UserId);

    await prisma.user.update({
      where: { id: userId },
      data: {
        m365UserId: null,
        m365Email: null,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Cuenta Microsoft 365 eliminada exitosamente',
    });

  } catch (error: any) {
    console.error('Error deleting M365 user:', error);

    return NextResponse.json(
      {
        error: 'Error al eliminar cuenta Microsoft 365',
        details: error.message,
      },
      { status: 500 }
    );
  }
}

function generateSecurePassword(): string {
  const length = 16;
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%&*';

  let password = '';
  password += uppercase[crypto.randomInt(uppercase.length)];
  password += lowercase[crypto.randomInt(lowercase.length)];
  password += numbers[crypto.randomInt(numbers.length)];
  password += symbols[crypto.randomInt(symbols.length)];

  const allChars = uppercase + lowercase + numbers + symbols;
  for (let i = password.length; i < length; i++) {
    password += allChars[crypto.randomInt(allChars.length)];
  }

  return password.split('').sort(() => crypto.randomInt(3) - 1).join('');
}
