'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    total: difference,
  };
};

export function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.total <= 0 && onComplete) {
        onComplete();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  if (timeLeft.total <= 0) {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-green-600">La clase ha comenzado</p>
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center">
      {timeLeft.days > 0 && (
        <div className="text-center">
          <div className="text-3xl font-bold text-neutral-900">{timeLeft.days}</div>
          <div className="text-xs text-neutral-500 uppercase">d\u00edas</div>
        </div>
      )}
      <div className="text-center">
        <div className="text-3xl font-bold text-neutral-900">
          {String(timeLeft.hours).padStart(2, '0')}
        </div>
        <div className="text-xs text-neutral-500 uppercase">horas</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-neutral-900">
          {String(timeLeft.minutes).padStart(2, '0')}
        </div>
        <div className="text-xs text-neutral-500 uppercase">min</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-neutral-900">
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <div className="text-xs text-neutral-500 uppercase">seg</div>
      </div>
    </div>
  );
}
