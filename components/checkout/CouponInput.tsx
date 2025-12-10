'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tag, CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface CouponInputProps {
  courseId?: string;
  totalAmount: number;
  onCouponApplied: (discount: number, couponCode: string, finalAmount: number) => void;
  onCouponRemoved: () => void;
}

interface AppliedCoupon {
  code: string;
  discount: number;
  finalAmount: number;
}

export default function CouponInput({
  courseId,
  totalAmount,
  onCouponApplied,
  onCouponRemoved,
}: CouponInputProps) {
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(null);

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      setError('Por favor ingresa un código de cupón');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: couponCode.toUpperCase(),
          courseId,
          totalAmount,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.valid) {
        setError(data.error || 'Cupón inválido');
        setLoading(false);
        return;
      }

      setAppliedCoupon({
        code: data.coupon.code,
        discount: data.discount,
        finalAmount: data.finalAmount,
      });

      onCouponApplied(data.discount, data.coupon.code, data.finalAmount);
      setCouponCode('');
    } catch {
      setError('Error al validar cupón. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setError(null);
    setCouponCode('');
    onCouponRemoved();
  };

  return (
    <div className="space-y-4">
      {/* Applied Coupon Display */}
      {appliedCoupon && (
        <Alert className="border-green-500 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 flex items-center justify-between">
            <div>
              <span className="font-semibold">Cupón aplicado:</span> {appliedCoupon.code}
              <br />
              <span className="text-sm">Descuento: ${appliedCoupon.discount.toFixed(2)}</span>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveCoupon}
              className="text-green-700 hover:text-green-900 hover:bg-green-100"
            >
              Remover
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Coupon Input */}
      {!appliedCoupon && (
        <div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Código de cupón"
                value={couponCode}
                onChange={(e) => {
                  setCouponCode(e.target.value.toUpperCase());
                  setError(null);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleApplyCoupon();
                  }
                }}
                className="pl-10 uppercase"
                disabled={loading}
              />
            </div>
            <Button
              type="button"
              onClick={handleApplyCoupon}
              disabled={loading || !couponCode.trim()}
              variant="outline"
              className="shrink-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Validando...
                </>
              ) : (
                'Aplicar'
              )}
            </Button>
          </div>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive" className="mt-2">
              <XCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Helper Text */}
          <p className="text-xs text-neutral-500 mt-2">
            ¿Tienes un código de descuento? Ingrésalo aquí para obtener tu beneficio.
          </p>
        </div>
      )}
    </div>
  );
}
