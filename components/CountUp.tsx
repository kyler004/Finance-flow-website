'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CountUp({
  end,
  decimals = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutExpo for crisp financial snap
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easedProgress * end;

      setValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  const formatted = decimals > 0 
    ? value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : Math.floor(value).toLocaleString();

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
