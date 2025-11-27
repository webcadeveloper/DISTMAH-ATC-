import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { registerLimiter } from '@/lib/rate-limit';
import { getClientIp, getGeoLocation } from '@/lib/geolocation';

const registerSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  phone: z.string().optional(),
  country: z.string().optional(),
});

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimitResult = registerLimiter.check(request, 5, ip);

  if (rateLimitResult) return rateLimitResult;

  try {
    const body = await request.json();
    const validatedData = registerSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password, phone, country } = validatedData.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El email ya está registrado' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const geo = await getGeoLocation(ip);

    const user = await (prisma as any).user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phoneNumber: phone,
        country: geo.country || country,
        countryCode: geo.countryCode,
        region: geo.regionName,
        city: geo.city,
        zip: geo.zip,
        latitude: geo.lat,
        longitude: geo.lon,
        registrationIp: ip,
        isp: geo.isp,
        timezone: geo.timezone || 'America/Caracas',
        role: 'STUDENT',
        emailVerified: false,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (process.env.N8N_WEBHOOK_REGISTER) {
      fetch(process.env.N8N_WEBHOOK_REGISTER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'user_registered',
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: phone || null,
            registeredAt: new Date().toISOString(),
          },
          location: {
            ip: geo.ip,
            country: geo.country,
            countryCode: geo.countryCode,
            region: geo.regionName,
            city: geo.city,
            zip: geo.zip,
            lat: geo.lat,
            lon: geo.lon,
            timezone: geo.timezone,
            isp: geo.isp,
          },
        }),
      }).catch(err => console.error('n8n webhook error:', err));
    }

    return NextResponse.json(
      { message: 'Usuario registrado exitosamente', user },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en registro:', error);
    return NextResponse.json(
      { error: 'Error al registrar usuario' },
      { status: 500 }
    );
  }
}
