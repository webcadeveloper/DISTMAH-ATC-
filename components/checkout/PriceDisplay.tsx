'use client';

interface PriceDisplayProps {
  price: number;
  priceVEF?: number;
  className?: string;
  showCurrency?: boolean;
}

export default function PriceDisplay({
  price,
  priceVEF,
  className = '',
  showCurrency = true,
}: PriceDisplayProps) {
  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-bold text-primary-600">
          ${price}
        </span>
        {showCurrency && (
          <span className="text-xl text-neutral-600">USD</span>
        )}
      </div>
      {priceVEF && (
        <div className="text-neutral-600">
          <span className="text-lg">Bs. {priceVEF.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
}
