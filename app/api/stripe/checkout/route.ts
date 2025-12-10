import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';
import { paymentLimiter, getClientIp } from '@/lib/rate-limit';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimitResult = paymentLimiter.check(request, 3, ip);

  if (rateLimitResult) return rateLimitResult;

  try {
    const body = await request.json();
    const { courseId, email, couponCode, userId } = body;

    if (!courseId || !email) {
      return NextResponse.json(
        { error: 'courseId and email are required' },
        { status: 400 }
      );
    }

    const course = await prisma.course.findFirst({
      where: {
        OR: [
          { id: courseId },
          { slug: courseId }
        ]
      }
    });

    if (!course) {
      return NextResponse.json(
        { error: 'Course not found' },
        { status: 404 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const session = await createCheckoutSession({
      courseId: course.id,
      courseName: course.title,
      price: Number(course.price),
      userId,
      email,
      couponCode,
    });

    return NextResponse.json({
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
