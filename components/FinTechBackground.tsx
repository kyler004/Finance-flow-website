'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function FinTechBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none">
      {/* Subtle fine financial grid line overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.25) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating ambient radial orbs with slow breathing cycles */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.12, 0.2, 0.14, 0.12],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -left-40 w-[650px] h-[650px] bg-[#0328EE] rounded-full blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 0.9, 1.12, 1],
          opacity: [0.08, 0.15, 0.09, 0.08],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-2/3 -right-40 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px]"
      />

      {/* Micro-sparkle nodes representing active market nodes */}
      <div className="absolute inset-0">
        {[
          { top: '15%', left: '20%', delay: 0 },
          { top: '35%', left: '85%', delay: 1.5 },
          { top: '55%', left: '12%', delay: 3 },
          { top: '75%', left: '78%', delay: 2.2 },
          { top: '90%', left: '30%', delay: 4 },
        ].map((node, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: node.delay,
            }}
            style={{ top: node.top, left: node.left }}
            className="absolute w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]"
          />
        ))}
      </div>
    </div>
  );
}
