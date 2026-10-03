'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export function BrandIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="6"
        y="12"
        width="6.5"
        height="14"
        rx="3.25"
        transform="rotate(-30 6 12)"
        fill="white"
      />
      <rect
        x="16"
        y="6"
        width="6.5"
        height="14"
        rx="3.25"
        transform="rotate(-30 16 6)"
        fill="white"
      />
    </svg>
  );
}

export default function BrandLogo({ variant = 'desktop', className = '' }: BrandLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      <BrandIcon className="w-6 h-6 shrink-0 transition-transform duration-200 group-hover:scale-105" />
      <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
        {variant === 'mobile' ? 'Crypto' : 'FinanceFlow'}
      </span>
    </Link>
  );
}
