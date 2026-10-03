'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

interface LaptopMockupProps {
  className?: string;
  showScreenContent?: boolean;
}

export default function LaptopMockup({ className = '', showScreenContent = false }: LaptopMockupProps) {
  // Real-time order execution stream simulation
  const [currentTrade, setCurrentTrade] = useState({
    type: 'BUY',
    amount: '0.45 BTC',
    price: '$64,285.20',
    time: 'just now',
  });

  useEffect(() => {
    if (!showScreenContent) return;
    const trades = [
      { type: 'BUY', amount: '0.45 BTC', price: '$64,285.20', time: 'just now' },
      { type: 'BUY', amount: '1.20 ETH', price: '$3,494.50', time: '1s ago' },
      { type: 'SELL', amount: '25.0 SOL', price: '$154.20', time: 'just now' },
      { type: 'BUY', amount: '0.88 BTC', price: '$64,291.00', time: 'just now' },
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % trades.length;
      setCurrentTrade(trades[idx]);
    }, 3200);
    return () => clearInterval(interval);
  }, [showScreenContent]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative mx-auto select-none ${className}`}
    >
      {/* Dynamic atmospheric radial backdrop with breathing pulse */}
      <motion.div
        animate={{
          opacity: [0.45, 0.8, 0.45],
          scale: [0.98, 1.05, 0.98],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -inset-6 bg-gradient-to-r from-orange-500/25 via-blue-600/35 to-purple-600/25 blur-3xl rounded-full pointer-events-none"
      />

      {/* Laptop assembly with subtle idle float */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full max-w-[580px] mx-auto"
      >
        {/* Screen lid / upper display */}
        <div className="relative mx-auto w-[90%] aspect-[16/10] bg-[#0c1228] rounded-t-2xl border-[5px] border-[#222738] border-b-0 shadow-2xl overflow-hidden flex flex-col justify-between">
          {/* Subtle top bezel with web camera & status LED */}
          <div className="w-full h-3 bg-[#171c2c] flex items-center justify-center gap-1.5 border-b border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-700/80"></span>
            <span className="w-1 h-1 rounded-full bg-emerald-500/80 animate-pulse"></span>
          </div>

          {/* Screen area */}
          <div className="relative flex-1 bg-gradient-to-b from-[#090e24] via-[#05091b] to-[#010725] p-3 flex flex-col justify-between overflow-hidden">
            {showScreenContent ? (
              <div className="h-full flex flex-col justify-between text-xs relative">
                {/* Header bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-semibold text-white tracking-wide">BTC/USD $64,285.20</span>
                    <span className="text-[9px] text-emerald-400 font-mono font-bold">+4.28%</span>
                  </div>
                  <div className="flex gap-1 text-[8px] text-slate-400 font-medium">
                    <span className="px-1.5 py-0.5 rounded bg-[#0328EE] text-white font-semibold shadow-sm">1D</span>
                    <span className="px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors">1W</span>
                    <span className="px-1.5 py-0.5 rounded hover:bg-white/10 transition-colors">1M</span>
                  </div>
                </div>

                {/* Animated real-time candlestick & wave chart with sweeping scanner line */}
                <div className="my-auto py-2 relative h-20 w-full overflow-hidden">
                  {/* Subtle grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between opacity-15 pointer-events-none">
                    <div className="border-b border-white" />
                    <div className="border-b border-white" />
                    <div className="border-b border-white" />
                  </div>

                  {/* Sweeping radar scanner line */}
                  <motion.div
                    animate={{ x: ['-20%', '320%'] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none z-10"
                  />

                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0328EE" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#0328EE" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0328EE" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#60a5fa" />
                      </linearGradient>
                    </defs>

                    {/* Gradient area */}
                    <path
                      d="M0,60 Q30,65 60,40 T120,45 T180,25 T240,30 T300,12 L300,80 L0,80 Z"
                      fill="url(#chartGrad)"
                    />

                    {/* Glowing chart path */}
                    <motion.path
                      d="M0,60 Q30,65 60,40 T120,45 T180,25 T240,30 T300,12"
                      fill="none"
                      stroke="url(#lineGrad)"
                      strokeWidth="2.5"
                    />

                    {/* Pulsing price node */}
                    <circle cx="300" cy="12" r="3.5" fill="#38bdf8" className="animate-pulse" />
                    <circle cx="300" cy="12" r="8" stroke="#38bdf8" strokeWidth="1" opacity="0.6" className="animate-ping" />
                  </svg>
                </div>

                {/* Live Orderflow pill ticker */}
                <div className="flex items-center justify-between text-[9px] border-t border-white/5 pt-1.5 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>Live Match:</span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentTrade.price + currentTrade.type}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className={`font-mono font-semibold ${
                          currentTrade.type === 'BUY' ? 'text-emerald-400' : 'text-rose-400'
                        }`}
                      >
                        {currentTrade.type} {currentTrade.amount}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="text-right text-emerald-400 font-semibold font-mono">
                    ● 0.002s latency
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                {/* Vibrant ambient neon keyboard reflection on screen */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 via-pink-600/10 to-transparent"></div>
                <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-cyan-500/20 via-orange-500/20 to-transparent"></div>
                
                {/* Subtle FinanceFlow brand watermark in center */}
                <div className="relative z-10 flex flex-col items-center opacity-40">
                  <div className="flex gap-1.5 items-center mb-1">
                    <span className="w-2.5 h-6 bg-white rounded-full transform -rotate-12"></span>
                    <span className="w-2.5 h-6 bg-white rounded-full transform -rotate-12"></span>
                  </div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-white">FinanceFlow</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Laptop hinge & keyboard deck (with warm orange & cyan backlit key glow) */}
        <div className="relative z-10 w-full bg-[#1b2030] rounded-b-xl border border-[#2b3145] p-2.5 shadow-2xl">
          {/* Glowing keyboard cavity */}
          <div className="relative w-full h-20 sm:h-24 bg-[#0a0d18] rounded-md border border-white/10 p-2 overflow-hidden flex flex-col justify-between">
            {/* Keyboard ambient dynamic sweep layer */}
            <motion.div
              animate={{
                opacity: [0.35, 0.65, 0.35],
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-amber-400/35 to-cyan-500/45 blur-sm pointer-events-none"
              style={{ backgroundSize: '200% 200%' }}
            />

            {/* Glowing key rows */}
            <div className="relative z-10 flex justify-between gap-1 opacity-90">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2.5 sm:h-3 flex-1 bg-[#1a1f33]/90 rounded-[2px] border border-orange-400/30 shadow-[0_0_8px_rgba(249,115,22,0.4)]"
                />
              ))}
            </div>

            <div className="relative z-10 flex justify-between gap-1 opacity-90">
              {Array.from({ length: 13 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2.5 sm:h-3 flex-1 bg-[#1a1f33]/90 rounded-[2px] border border-amber-300/30 shadow-[0_0_8px_rgba(251,191,36,0.35)]"
                />
              ))}
            </div>

            <div className="relative z-10 flex justify-between gap-1 opacity-90">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2.5 sm:h-3 flex-1 bg-[#1a1f33]/90 rounded-[2px] border border-sky-400/30 shadow-[0_0_8px_rgba(56,189,248,0.35)]"
                />
              ))}
            </div>

            {/* Spacebar row */}
            <div className="relative z-10 flex justify-center gap-1 opacity-95">
              <div className="h-2.5 sm:h-3 w-8 bg-[#1a1f33]/90 rounded-[2px] border border-sky-400/30" />
              <div className="h-2.5 sm:h-3 flex-1 max-w-[140px] bg-[#1a1f33]/90 rounded-[2px] border border-cyan-400/40 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              <div className="h-2.5 sm:h-3 w-8 bg-[#1a1f33]/90 rounded-[2px] border border-cyan-400/30" />
            </div>
          </div>

          {/* Trackpad */}
          <div className="w-20 sm:w-24 h-6 sm:h-8 mx-auto mt-2 bg-[#121626] rounded-sm border border-white/10" />

          {/* Bottom lip notch */}
          <div className="w-16 h-1 mx-auto mt-1.5 bg-slate-600 rounded-full" />
        </div>

        {/* Base reflection shadow */}
        <div className="w-[96%] h-3 mx-auto bg-black/60 blur-md rounded-full mt-0.5" />
      </motion.div>
    </motion.div>
  );
}
