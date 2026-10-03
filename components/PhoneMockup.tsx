'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface PhoneMockupProps {
  type?: 'ios' | 'android' | 'dual' | 'simple';
  className?: string;
}

export default function PhoneMockup({ type = 'simple', className = '' }: PhoneMockupProps) {
  if (type === 'dual') {
    return (
      <div className={`relative flex items-center justify-center select-none py-6 ${className}`}>
        {/* Left phone - tilted slightly counter-clockwise with floating idle */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            rotate: [-12, -9, -12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ rotate: -5, scale: 1.05 }}
          className="relative w-44 sm:w-56 h-[340px] sm:h-[420px] rounded-[36px] bg-[#1a2138] border-[6px] border-[#2e3754] shadow-2xl p-2.5 -mr-16 z-0 transition-transform duration-300"
        >
          {/* Dynamic Island */}
          <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3" />
          
          {/* Screen Content Preview */}
          <div className="h-[calc(100%-32px)] rounded-[26px] bg-[#0c1228] p-3 flex flex-col justify-between overflow-hidden relative">
            {/* Ambient subtle glow */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#0328EE]/25 rounded-full blur-xl pointer-events-none" />

            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span className="font-semibold text-white">Portfolio</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                +18.4%
              </span>
            </div>
            <div className="text-sm font-bold text-white tracking-tight flex items-baseline gap-1">
              $48,290.12
              <ArrowUpRight className="w-3 h-3 text-emerald-400" />
            </div>
            
            {/* Animated Wave mini graph */}
            <div className="h-20 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50">
                <defs>
                  <linearGradient id="phoneChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0328EE" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0328EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,35 Q25,10 50,30 T100,15 L100,50 L0,50 Z" fill="url(#phoneChartGrad)" />
                <motion.path
                  d="M0,35 Q25,10 50,30 T100,15"
                  fill="none"
                  stroke="#0328EE"
                  strokeWidth="2.5"
                />
                <circle cx="100" cy="15" r="3" fill="#38bdf8" className="animate-pulse" />
              </svg>
            </div>

            {/* Mini token list with subtle highlights */}
            <div className="space-y-1.5 text-[9px]">
              <div className="flex justify-between p-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-500/40 transition-colors">
                <span className="text-white font-medium">Bitcoin</span>
                <span className="text-emerald-400 font-mono">+$2,410</span>
              </div>
              <div className="flex justify-between p-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-emerald-500/40 transition-colors">
                <span className="text-white font-medium">Ethereum</span>
                <span className="text-emerald-400 font-mono">+$890</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right phone - tilted clockwise with counter-phase floating idle */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            rotate: [6, 9, 6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          whileHover={{ rotate: 2, scale: 1.05 }}
          className="relative w-44 sm:w-56 h-[340px] sm:h-[420px] rounded-[36px] bg-[#1d2642] border-[6px] border-[#374266] shadow-[0_25px_50px_rgba(0,0,0,0.7)] p-2.5 z-10 transition-transform duration-300"
        >
          {/* Dynamic Island */}
          <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3" />
          
          {/* Screen Content Preview */}
          <div className="h-[calc(100%-32px)] rounded-[26px] bg-[#0e1633] p-3 flex flex-col justify-between overflow-hidden relative">
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span className="font-semibold text-white">FinanceFlow</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse"></span>
            </div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-[#0328EE] rounded-xl p-2.5 text-center text-white my-auto shadow-lg shadow-[#0328EE]/40 border border-blue-400/30"
            >
              <div className="text-[10px] opacity-80 uppercase tracking-wider">Rewards Earned</div>
              <div className="text-lg font-bold tracking-tight">12.5% APY</div>
            </motion.div>
            <div className="text-[9px] text-center text-slate-400 font-medium">
              Auto-compounding daily
            </div>
            <div className="w-full py-1.5 rounded-lg bg-white/10 text-center text-[9px] font-semibold text-white border border-white/10 shadow-sm">
              Instant Withdrawal
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Single phone frame (iOS / Android)
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative mx-auto select-none ${className}`}
    >
      <div className="relative w-52 sm:w-64 h-[380px] sm:h-[430px] rounded-[40px] bg-[#161c31] border-[6px] border-[#29324d] shadow-2xl p-2.5 flex flex-col overflow-hidden">
        {/* Notch / Speaker bar */}
        {type === 'android' ? (
          <div className="w-3.5 h-3.5 rounded-full bg-[#0a0d17] border border-white/20 mx-auto mb-2" />
        ) : (
          <div className="w-24 h-4 bg-[#0a0d17] rounded-full mx-auto mb-2 flex items-center justify-end px-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
          </div>
        )}

        {/* Screen inner area */}
        <div className="flex-1 rounded-[30px] bg-[#0a0f24] border border-white/5 p-3 flex flex-col justify-between overflow-hidden relative">
          {/* Subtle ambient gradient */}
          <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#0328EE]/25 rounded-full blur-2xl pointer-events-none" />

          {/* Status Bar */}
          <div className="flex justify-between items-center text-[9px] text-slate-400">
            <span>9:41</span>
            <div className="flex items-center gap-1.5">
              <span>5G</span>
              <span className="w-3.5 h-2 border border-slate-400 rounded-sm inline-block"></span>
            </div>
          </div>

          {/* Minimalist interactive preview */}
          <div className="my-auto space-y-3 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 rounded-2xl bg-[#0328EE]/20 border border-[#0328EE]/40 flex items-center justify-center mx-auto text-[#0328EE] shadow-md shadow-[#0328EE]/30"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 3-3-7-7 7-7-3-3z"/>
              </svg>
            </motion.div>
            <div className="h-3 w-28 bg-white/20 rounded-full mx-auto animate-pulse" />
            <div className="h-2 w-36 bg-white/10 rounded-full mx-auto" />
          </div>

          {/* Bottom home indicator */}
          <div className="w-20 h-1 bg-white/30 rounded-full mx-auto mt-2" />
        </div>
      </div>
    </motion.div>
  );
}
