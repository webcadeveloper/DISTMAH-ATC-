import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
  typescript: true,
});

export interface CreateCheckoutSessionParams {
  courseId: string;
  courseName: string;
  price: number;
  userId?: string;
  email: string;
  couponCode?: string;
}

export interface CouponData {
  discount: number;
  type: 'percentage' | 'fixed';
  maxUses?: number;
  expiresAt?: Date;
}

export const COUPONS: Record<string, CouponData> = {
  'DISTMAH2026': {
    discount: 0.10,
    type: 'percentage',
  },
  'BLACKFRIDAY': {
    discount: 0.50,
    type: 'percentage',
  },
  'FIRSTCOURSE': {
    discount: 50,
    type: 'fixed',
  },
  'STUDENT10': {
    discount: 0.15,
    type: 'percentage',
  },
};

export function validateCoupon(couponCode: string): CouponData | null {
  const upperCode = couponCode.toUpperCase().trim();
  const coupon = COUPONS[upperCode];

  if (!coupon) {
    return null;
  }

  if (coupon.expiresAt && new Date() > coupon.expiresAt) {
    return null;
  }

  return coupon;
}

export function calculateDiscount(
  price: number,
  coupon: CouponData
): { discount: number; finalPrice: number } {
  let discount = 0;

  if (coupon.type === 'percentage') {
    discount = price * coupon.discount;
  } else {
    discount = Math.min(coupon.discount, price);
  }

  const finalPrice = Math.max(0, price - discount);

  return { discount, finalPrice };
}

export async function createCheckoutSession({
  courseId,
  courseName,
  price,
  userId,
  email,
  couponCode,
}: CreateCheckoutSessionParams): Promise<Stripe.Checkout.Session> {
  let finalPrice = price;
  let discountAmount = 0;

  if (couponCode) {
    const coupon = validateCoupon(couponCode);
    if (coupon) {
      const calculation = calculateDiscount(price, coupon);
      finalPrice = calculation.finalPrice;
      discountAmount = calculation.discount;
    }
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: courseName,
            description: `Curso profesional Autodesk - Universidad DISTMAH ATC`,
          },
          unit_amount: Math.round(finalPrice * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/checkout/cancel?course_id=${courseId}`,
    customer_email: email,
    metadata: {
      courseId,
      courseName,
      userId: userId || '',
      couponCode: couponCode || '',
      originalPrice: price.toString(),
      discountAmount: discountAmount.toString(),
      finalPrice: finalPrice.toString(),
    },
    billing_address_collection: 'required',
    phone_number_collection: {
      enabled: true,
    },
  });

  return session;
}
