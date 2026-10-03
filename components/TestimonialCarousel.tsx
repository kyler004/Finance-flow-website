'use client';

import React, { useState, useEffect, useRef } from 'react';
import Avatar from './Avatar';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '“FinanceFlow transformed our treasury rebalancing. Execution speed across 350+ crypto pairs is unmatched, and 256-bit vault security gives our entire board complete peace of mind.”',
    name: 'JOHN CARTER',
    role: 'VP OF DIGITAL ASSETS',
    company: 'APEX BLOCK',
  },
  {
    quote:
      '“The mobile app experience is buttery smooth. Instant multi-chain swaps, zero-slippage routing, and real-time biometric authorization make this our daily institutional trading flow.”',
    name: 'SOPHIE MOORE',
    role: 'HEAD OF DEFI RESEARCH',
    company: 'LUMINA LABS',
  },
  {
    quote:
      '“Managing liquidity across Solana, Ethereum, and TRON used to require three separate platforms. FinanceFlow unified everything into one ultra-fast, responsive terminal.”',
    name: 'ALEX RIVERA',
    role: 'CHIEF QUANT TRADER',
    company: 'NEXUS ASSETS',
  },
  {
    quote:
      '“The staking rewards and automated daily yields compound seamlessly. I’ve benchmarked over a dozen exchanges, and FinanceFlow’s 99.99% uptime guarantee genuinely holds up.”',
    name: 'ELENA ROSTOVA',
    role: 'PORTFOLIO STRATEGIST',
    company: 'HORIZON VENTURES',
  },
  {
    quote:
      '“Zero hidden spreads, instantaneous order matching, and transparent on-chain settlement. It’s rare to find an exchange this reliable even during peak volatility events.”',
    name: 'MARCUS VANCE',
    role: 'SENIOR CRYPTO ANALYST',
    company: 'ALPHAPULSE',
  },
  {
    quote:
      '“From high-throughput token swaps to automated recurring investments, FinanceFlow provides the exact institutional-grade tools modern Web3 investors demand.”',
    name: 'DAVID CHEN',
    role: 'FOUNDER & ARCHITECT',
    company: 'BLOCKCRAFT',
  },
];

const AUTO_ROTATE_DELAY_MS = 4000;

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance without waiting for user action
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection('right');
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_ROTATE_DELAY_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex]);

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
  };

  // Get 3 visible cards wrapping around
  const visibleCards = [
    TESTIMONIALS[activeIndex],
    TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(activeIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="User Testimonials Carousel"
    >
      {/* Cards container with smooth transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: direction === 'right' ? 24 : -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 'right' ? -24 : 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleCards.map((t, idx) => (
            <motion.div
              key={`${t.name}-${idx}`}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#010D50] border border-white/10 rounded-3xl p-7 flex flex-col justify-between shadow-xl hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 transition-all group"
            >
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal group-hover:text-white transition-colors">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <Avatar name={t.name} size="md" />
                <div>
                  <div className="text-xs font-bold text-white tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                    {t.role} · <span className="text-blue-400">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots - all white */}
      <div className="flex items-center justify-center gap-3 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="group relative py-2 px-1 focus:outline-none"
          >
            <div
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'w-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]'
                  : 'w-2.5 bg-white/40 group-hover:bg-white/80'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
