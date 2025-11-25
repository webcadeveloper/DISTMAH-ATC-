import { NextRequest, NextResponse } from 'next/server';

const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function rateLimiter(options: {
  interval: number;
  uniqueTokenPerInterval: number;
}) {
  const cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [token, data] of rateLimit.entries()) {
      if (now > data.resetTime) {
        rateLimit.delete(token);
      }
    }
  }, options.interval);

  if (typeof process !== 'undefined' && process.on) {
    process.on('beforeExit', () => {
      clearInterval(cleanupInterval);
    });
  }

  return {
    check: (req: NextRequest, limit: number, token: string) => {
      const now = Date.now();
      const tokenCount = rateLimit.get(token) || {
        count: 0,
        resetTime: now + options.interval,
      };

      if (now > tokenCount.resetTime) {
        tokenCount.count = 0;
        tokenCount.resetTime = now + options.interval;
      }

      tokenCount.count += 1;
      rateLimit.set(token, tokenCount);

      const remaining = limit - tokenCount.count;
      const reset = new Date(tokenCount.resetTime);

      if (tokenCount.count > limit) {
        return NextResponse.json(
          {
            error: 'Rate limit exceeded',
            message: 'Demasiadas solicitudes. Por favor intenta de nuevo más tarde.',
          },
          {
            status: 429,
            headers: {
              'X-RateLimit-Limit': limit.toString(),
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': reset.toISOString(),
              'Retry-After': Math.ceil((tokenCount.resetTime - now) / 1000).toString(),
            },
          }
        );
      }

      return null;
    },
  };
}

export const loginLimiter = rateLimiter({
  interval: 15 * 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export const registerLimiter = rateLimiter({
  interval: 60 * 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export const apiLimiter = rateLimiter({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export const paymentLimiter = rateLimiter({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export const strictLimiter = rateLimiter({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
});

export function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  return 'unknown';
}
