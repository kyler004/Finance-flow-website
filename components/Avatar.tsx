'use client';

import React from 'react';

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Avatar({ name, size = 'md', className = '' }: AvatarProps) {
  const sizeClasses = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-14 h-14 text-base',
    xl: 'w-24 h-24 text-2xl',
  };

  // Color palette and portrait SVG styling based on persona
  if (name.includes('ALEX') || name.includes('Alex')) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-tr from-sky-500 to-indigo-700 p-[2px] flex items-center justify-center shrink-0 overflow-hidden shadow-md ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full bg-[#18203c]" fill="none">
          {/* Head & Neck */}
          <circle cx="50" cy="42" r="22" fill="#ffd1b3" />
          {/* Hair */}
          <path d="M26 36 C28 20, 72 20, 74 36 C70 26, 45 22, 26 36 Z" fill="#4a2e18" />
          {/* Glasses */}
          <rect x="34" y="38" width="13" height="9" rx="2" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <rect x="53" y="38" width="13" height="9" rx="2" fill="none" stroke="#1e293b" strokeWidth="2.5" />
          <line x1="47" y1="42" x2="53" y2="42" stroke="#1e293b" strokeWidth="2.5" />
          {/* Smile */}
          <path d="M42 54 Q50 60 58 54" stroke="#c27d53" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Hoodie */}
          <path d="M15 95 C15 70, 32 68, 50 68 C68 68, 85 70, 85 95 Z" fill="#111827" />
          <path d="M38 72 L44 95 M62 72 L56 95" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (name.includes('JOHN') || name.includes('John')) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 p-[2px] flex items-center justify-center shrink-0 overflow-hidden shadow-md ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full bg-[#1e2640]" fill="none">
          {/* Head */}
          <circle cx="50" cy="44" r="24" fill="#fed7aa" />
          {/* Short hair */}
          <path d="M28 35 C32 18, 68 18, 72 35 C68 25, 40 22, 28 35 Z" fill="#78350f" />
          {/* Eyes & Smile */}
          <circle cx="41" cy="42" r="2" fill="#334155" />
          <circle cx="59" cy="42" r="2" fill="#334155" />
          <path d="M40 54 Q50 62 60 54" stroke="#9a3412" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* Collared shirt */}
          <path d="M15 95 C15 72, 30 70, 50 70 C70 70, 85 72, 85 95 Z" fill="#3b82f6" />
          <polygon points="50,75 42,88 58,88" fill="white" />
        </svg>
      </div>
    );
  }

  if (name.includes('SOPHIE') || name.includes('Sophie')) {
    return (
      <div
        className={`${sizeClasses[size]} rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 p-[2px] flex items-center justify-center shrink-0 overflow-hidden shadow-md ${className}`}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full rounded-full bg-[#201d36]" fill="none">
          {/* Long dark wavy hair */}
          <path d="M22 36 C22 15, 78 15, 78 36 C80 65, 76 75, 74 88 C70 88, 65 72, 65 72 C65 72, 35 72, 35 72 C35 72, 30 88, 26 88 C24 75, 20 65, 22 36 Z" fill="#1f2937" />
          {/* Face */}
          <circle cx="50" cy="45" r="21" fill="#fde68a" />
          {/* Eyes & Smile */}
          <circle cx="43" cy="43" r="2" fill="#1f2937" />
          <circle cx="57" cy="43" r="2" fill="#1f2937" />
          <path d="M42 54 Q50 61 58 54" stroke="#b45309" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          {/* Cozy sweater */}
          <path d="M15 95 C15 74, 30 72, 50 72 C70 72, 85 74, 85 95 Z" fill="#0f172a" />
        </svg>
      </div>
    );
  }

  // Fallback initial avatar
  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-[#0328EE] flex items-center justify-center font-bold text-white shrink-0 shadow-md ${className}`}
    >
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
}
