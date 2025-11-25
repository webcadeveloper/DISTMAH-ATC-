import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const createCouponSchema = z.object({
  code: z.string().min(3, 'Código debe tener al menos 3 caracteres').toUpperCase(),
  type: z.enum(['PERCENTAGE', 'FIXED_AMOUNT']),
  value: z.number().min(0, 'Valor debe ser positivo'),
  minPurchase: z.number().min(0).optional(),
  maxDiscount: z.number().min(0).optional(),
  validFrom: z.string().datetime(),
  validUntil: z.string().datetime(),
  maxUses: z.number().int().min(1).optional(),
  applicableCourses: z.array(z.string()).optional(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const active = searchParams.get('active');

    const coupons = await prisma.coupon.findMany({
      where: active !== null ? { active: active === 'true' } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ coupons }, { status: 200 });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return NextResponse.json(
      { error: 'Error al obtener cupones' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = createCouponSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validatedData.error.errors },
        { status: 400 }
      );
    }

    const {
      code,
      type,
      value,
      minPurchase,
      maxDiscount,
      validFrom,
      validUntil,
      maxUses,
      applicableCourses,
    } = validatedData.data;

    const existingCoupon = await prisma.coupon.findUnique({
      where: { code },
    });

    if (existingCoupon) {
      return NextResponse.json(
        { error: 'Ya existe un cupón con este código' },
        { status: 400 }
      );
    }

    if (type === 'PERCENTAGE' && value > 100) {
      return NextResponse.json(
        { error: 'El porcentaje no puede ser mayor a 100' },
        { status: 400 }
      );
    }

    const coupon = await prisma.coupon.create({
      data: {
        code,
        type,
        value,
        minPurchase,
        maxDiscount,
        validFrom: new Date(validFrom),
        validUntil: new Date(validUntil),
        maxUses,
        applicableCourses: applicableCourses || [],
      },
    });

    return NextResponse.json({ coupon }, { status: 201 });
  } catch (error) {
    console.error('Error creating coupon:', error);
    return NextResponse.json(
      { error: 'Error al crear cupón' },
      { status: 500 }
    );
  }
}
