import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const updateCouponSchema = z.object({
  active: z.boolean().optional(),
  validUntil: z.string().datetime().optional(),
  maxUses: z.number().int().min(1).optional(),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const validatedData = updateCouponSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: validatedData.error.errors },
        { status: 400 }
      );
    }

    const updateData: {
      active?: boolean;
      validUntil?: Date;
      maxUses?: number;
    } = {};
    if (validatedData.data.active !== undefined) {
      updateData.active = validatedData.data.active;
    }
    if (validatedData.data.validUntil) {
      updateData.validUntil = new Date(validatedData.data.validUntil);
    }
    if (validatedData.data.maxUses) {
      updateData.maxUses = validatedData.data.maxUses;
    }

    const coupon = await prisma.coupon.update({
      where: { id: params.id },
      data: updateData,
    });

    return NextResponse.json({ coupon }, { status: 200 });
  } catch (error) {
    console.error('Error updating coupon:', error);
    return NextResponse.json(
      { error: 'Error al actualizar cupón' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.coupon.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: 'Cupón eliminado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting coupon:', error);
    return NextResponse.json(
      { error: 'Error al eliminar cupón' },
      { status: 500 }
    );
  }
}
