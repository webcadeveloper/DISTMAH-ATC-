import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { notifyCourseEnrollment } from '@/lib/notifications';
import { sendEnrollmentEmail } from '@/lib/email';
import { notifyPaymentCompleted, notifyEnrollmentCreated, notifyPaymentFailed } from '@/lib/n8n-webhooks';
import Stripe from 'stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent succeeded:', paymentIntent.id);
        break;
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.error('PaymentIntent failed:', paymentIntent.id);
        await handlePaymentFailed(paymentIntent);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(
  session: Stripe.Checkout.Session
) {
  const {
    courseId,
    userId,
    couponCode,
    originalPrice,
    discountAmount,
    finalPrice,
  } = session.metadata || {};

  const customerEmail = session.customer_email || session.customer_details?.email;

  console.log('Checkout session completed:', {
    sessionId: session.id,
    courseId,
    userId,
    email: customerEmail,
    couponCode,
    originalPrice,
    discountAmount,
    finalPrice,
    amountTotal: session.amount_total,
    paymentStatus: session.payment_status,
  });

  if (!courseId || !customerEmail) {
    console.error('Missing courseId or email in session metadata');
    return;
  }

  try {
    let enrollmentUserId = userId;

    if (!userId || userId === '') {
      const existingUser = await prisma.user.findUnique({
        where: { email: customerEmail },
      });

      if (existingUser) {
        enrollmentUserId = existingUser.id;
      } else {
        const customerName = session.customer_details?.name || customerEmail.split('@')[0];
        const newUser = await prisma.user.create({
          data: {
            email: customerEmail,
            name: customerName,
            role: 'STUDENT',
            emailVerified: true,
          },
        });
        enrollmentUserId = newUser.id;
        console.log('Created new user:', { id: newUser.id, email: newUser.email });
      }
    }

    if (!enrollmentUserId) {
      console.error('Failed to determine userId for enrollment');
      return;
    }

    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId: enrollmentUserId,
          courseId: courseId,
        },
      },
    });

    if (existingEnrollment) {
      console.log('Enrollment already exists:', existingEnrollment.id);
      return;
    }

    const [enrollment, course, user] = await prisma.$transaction([
      prisma.enrollment.create({
        data: {
          userId: enrollmentUserId,
          courseId: courseId,
          status: 'ACTIVE',
          paymentMethod: 'stripe',
          paymentId: session.payment_intent as string,
          amount: (session.amount_total || 0) / 100,
          currency: (session.currency || 'usd').toUpperCase(),
          progressPercent: 0,
          enrolledAt: new Date(),
        },
      }),
      prisma.course.update({
        where: { id: courseId },
        data: {
          enrollmentCount: {
            increment: 1,
          },
        },
        include: {
          instructor: {
            select: { name: true, email: true },
          },
        },
      }),
      prisma.user.findUnique({
        where: { id: enrollmentUserId },
        select: { name: true, email: true },
      }),
    ]);

    if (user) {
      await Promise.all([
        notifyCourseEnrollment(enrollmentUserId, course.title, courseId),
        sendEnrollmentEmail(user.email, user.name, course.title, courseId),
        notifyPaymentCompleted({
          customer: { id: enrollmentUserId, name: user.name, email: user.email },
          course: { id: courseId, title: course.title },
          payment: {
            stripeId: session.payment_intent as string,
            amount: (session.amount_total || 0) / 100,
            currency: (session.currency || 'USD').toUpperCase(),
            paidAt: new Date().toISOString(),
          },
        }),
        notifyEnrollmentCreated({
          enrollment: { id: enrollment.id, enrolledAt: enrollment.enrolledAt.toISOString() },
          student: { id: enrollmentUserId, name: user.name, email: user.email },
          course: {
            id: courseId,
            title: course.title,
            slug: course.slug,
            instructor: course.instructor?.name || 'DISTMAH',
            instructorEmail: course.instructor?.email || 'info@distmah.com.ve',
            duration: `${course.duration || 40} horas`,
            level: course.level || 'Básico',
          },
        }),
      ]);
    }

    console.log(`
    ====================================================
    ENROLLMENT CREATED SUCCESSFULLY
    ====================================================
    Enrollment ID: ${enrollment.id}
    Course ID: ${courseId}
    User ID: ${enrollmentUserId}
    Email: ${customerEmail}
    Coupon: ${couponCode || 'None'}
    Original Price: $${originalPrice}
    Discount: $${discountAmount || '0'}
    Final Price: $${finalPrice}
    Payment ID: ${session.payment_intent}
    Payment Status: ${session.payment_status}
    ====================================================
  `);
  } catch (error) {
    console.error('Error creating enrollment:', error);
    throw error;
  }
}

async function handlePaymentFailed(paymentIntent: Stripe.PaymentIntent) {
  const { courseId, userId } = paymentIntent.metadata || {};
  const customerEmail = typeof paymentIntent.receipt_email === 'string'
    ? paymentIntent.receipt_email
    : '';

  if (!courseId) {
    console.error('Missing courseId in payment metadata');
    return;
  }

  try {
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      select: { id: true, title: true },
    });

    let customerName = 'Cliente';
    let customerId = userId || '';

    if (userId) {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { id: true, name: true, email: true },
      });
      if (user) {
        customerName = user.name;
        customerId = user.id;
      }
    }

    const errorMessage = paymentIntent.last_payment_error?.message || 'Pago rechazado';

    await notifyPaymentFailed({
      customer: {
        id: customerId,
        name: customerName,
        email: customerEmail || 'unknown@email.com',
      },
      course: {
        id: courseId,
        title: course?.title || 'Curso',
      },
      payment: {
        stripeId: paymentIntent.id,
        amount: (paymentIntent.amount || 0) / 100,
        currency: (paymentIntent.currency || 'usd').toUpperCase(),
        errorMessage,
        failedAt: new Date().toISOString(),
      },
    });

    console.log(`Payment failed notification sent for ${paymentIntent.id}`);
  } catch (error) {
    console.error('Error handling payment failed:', error);
  }
}
