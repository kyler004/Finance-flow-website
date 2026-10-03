'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function GlobeVisual({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer ambient glow with breathing effect */}
      <motion.div
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#0328EE]/20 blur-3xl pointer-events-none"
      />

      <motion.svg
        animate={{
          y: [-4, 4, -4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox="0 0 500 500"
        className="w-full max-w-[460px] h-auto drop-shadow-[0_0_30px_rgba(3,40,238,0.25)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="globeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0328EE" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0a1a54" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="ringGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0328EE" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0328EE" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0328EE" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Sphere base gradient */}
        <circle cx="250" cy="250" r="160" fill="url(#globeGrad)" />

        {/* Longitude and Latitude Grid Lines (dotted) */}
        <ellipse cx="250" cy="250" rx="160" ry="160" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.3" />
        <ellipse cx="250" cy="250" rx="120" ry="160" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />
        <ellipse cx="250" cy="250" rx="70" ry="160" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
        <line x1="250" y1="90" x2="250" y2="410" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        <ellipse cx="250" cy="250" rx="160" ry="60" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
        <ellipse cx="250" cy="250" rx="160" ry="110" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 5" opacity="0.2" />
        <line x1="90" y1="250" x2="410" y2="250" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        {/* Continental point cluster approximations */}
        {/* Americas points */}
        <g fill="#ffffff" opacity="0.85">
          <circle cx="210" cy="180" r="2.5" />
          <circle cx="225" cy="190" r="2" />
          <circle cx="200" cy="205" r="2.5" />
          <circle cx="215" cy="215" r="2" />
          <circle cx="230" cy="230" r="2.5" />
          <circle cx="245" cy="245" r="2" />
          <circle cx="240" cy="265" r="2.5" />
          <circle cx="255" cy="285" r="2.5" />
          <circle cx="260" cy="310" r="2" />
          <circle cx="250" cy="330" r="2.5" />
        </g>

        {/* Europe & Africa points */}
        <g fill="#60a5fa" opacity="0.9">
          <circle cx="290" cy="170" r="2.5" />
          <circle cx="310" cy="185" r="2" />
          <circle cx="300" cy="205" r="3" />
          <circle cx="320" cy="225" r="2" />
          <circle cx="310" cy="250" r="2.5" />
          <circle cx="330" cy="270" r="2" />
          <circle cx="315" cy="295" r="2.5" />
          <circle cx="325" cy="320" r="2" />
          <circle cx="280" cy="220" r="2" />
          <circle cx="270" cy="190" r="2.5" />
        </g>

        {/* Constellation connective lines */}
        <g stroke="#38bdf8" strokeWidth="0.8" opacity="0.4">
          <line x1="210" y1="180" x2="225" y2="190" />
          <line x1="225" y1="190" x2="230" y2="230" />
          <line x1="200" y1="205" x2="215" y2="215" />
          <line x1="230" y1="230" x2="240" y2="265" />
          <line x1="240" y1="265" x2="255" y2="285" />
          <line x1="255" y1="285" x2="260" y2="310" />
          <line x1="290" y1="170" x2="310" y2="185" />
          <line x1="310" y1="185" x2="300" y2="205" />
          <line x1="300" y1="205" x2="320" y2="225" />
          <line x1="320" y1="225" x2="310" y2="250" />
          <line x1="310" y1="250" x2="330" y2="270" />
        </g>

        {/* Glowing Trajectory Orbital Ring 1 */}
        <ellipse
          cx="250"
          cy="250"
          rx="220"
          ry="75"
          transform="rotate(-28 250 250)"
          stroke="url(#ringGrad1)"
          strokeWidth="3"
        />
        {/* Orbit Node 1 */}
        <circle cx="100" cy="315" r="5" fill="#38bdf8" className="animate-pulse" />
        <circle cx="100" cy="315" r="9" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />

        {/* Glowing Trajectory Orbital Ring 2 */}
        <ellipse
          cx="250"
          cy="250"
          rx="210"
          ry="65"
          transform="rotate(35 250 250)"
          stroke="url(#ringGrad2)"
          strokeWidth="2.5"
        />
        {/* Orbit Node 2 */}
        <circle cx="410" cy="345" r="4.5" fill="#60a5fa" className="animate-pulse" />

        {/* Additional faint orbital loop */}
        <ellipse
          cx="250"
          cy="250"
          rx="235"
          ry="50"
          transform="rotate(-65 250 250)"
          stroke="#0328EE"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.5"
        />
      </motion.svg>
    </div>
  );
}
