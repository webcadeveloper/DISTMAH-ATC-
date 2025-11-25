import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const validateCouponSchema = z.object({
  code: z.string().min(1, 'Código requerido'),
  courseId: z.string().optional(),
  totalAmount: z.number().min(0, 'Monto inválido'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = validateCouponSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    const { code, courseId, totalAmount } = validatedData.data;

    const coupon = await (prisma.coupon as any).findUnique({
      where: { code: code.toUpperCase() },
    });

    if (!coupon) {
      return NextResponse.json(
        { valid: false, error: 'Cupón no encontrado' },
        { status: 404 }
      );
    }

    if (!coupon.active) {
      return NextResponse.json(
        { valid: false, error: 'Cupón desactivado' },
        { status: 400 }
      );
    }

    const now = new Date();
    if (now < coupon.validFrom) {
      return NextResponse.json(
        { valid: false, error: 'Cupón aún no válido' },
        { status: 400 }
      );
    }

    if (now > coupon.validUntil) {
      return NextResponse.json(
        { valid: false, error: 'Cupón expirado' },
        { status: 400 }
      );
    }

    if (coupon.maxUses && coupon.currentUses >= coupon.maxUses) {
      return NextResponse.json(
        { valid: false, error: 'Cupón agotado' },
        { status: 400 }
      );
    }

    if (courseId && coupon.applicableCourses.length > 0) {
      if (!coupon.applicableCourses.includes(courseId)) {
        return NextResponse.json(
          { valid: false, error: 'Cupón no válido para este curso' },
          { status: 400 }
        );
      }
    }

    if (coupon.minPurchase && totalAmount < coupon.minPurchase) {
      return NextResponse.json(
        {
          valid: false,
          error: `Compra mínima de $${coupon.minPurchase} requerida`,
        },
        { status: 400 }
      );
    }

    let discount = 0;
    if (coupon.type === 'PERCENTAGE') {
      discount = (totalAmount * coupon.value) / 100;
      if (coupon.maxDiscount && discount > coupon.maxDiscount) {
        discount = coupon.maxDiscount;
      }
    } else if (coupon.type === 'FIXED_AMOUNT') {
      discount = coupon.value;
    }

    discount = Math.min(discount, totalAmount);

    return NextResponse.json(
      {
        valid: true,
        coupon: {
          id: coupon.id,
          code: coupon.code,
          type: coupon.type,
          value: coupon.value,
        },
        discount: Number(discount.toFixed(2)),
        finalAmount: Number((totalAmount - discount).toFixed(2)),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error validating coupon:', error);
    return NextResponse.json(
      { error: 'Error al validar cupón' },
      { status: 500 }
    );
  }
}
