'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TickerItem {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  isUp: boolean;
  prefix?: string;
}

const INITIAL_TICKERS: TickerItem[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 64280.5, change24h: 3.42, isUp: true },
  { symbol: 'ETH', name: 'Ethereum', price: 3492.15, change24h: 2.18, isUp: true },
  { symbol: 'SOL', name: 'Solana', price: 154.3, change24h: -1.25, isUp: false },
  { symbol: 'LTC', name: 'Litecoin', price: 84.6, change24h: 1.85, isUp: true },
  { symbol: 'TRX', name: 'TRON', price: 0.1584, change24h: 0.94, isUp: true },
  { symbol: 'AVAX', name: 'Avalanche', price: 28.45, change24h: 4.88, isUp: true },
  { symbol: 'LINK', name: 'Chainlink', price: 12.35, change24h: 1.45, isUp: true },
  { symbol: 'ADA', name: 'Cardano', price: 0.384, change24h: -0.62, isUp: false },
  { symbol: 'XRP', name: 'XRP', price: 0.582, change24h: 2.74, isUp: true },
  { symbol: 'BNB', name: 'BNB', price: 592.1, change24h: 1.15, isUp: true },
];

export default function MarketTicker() {
  const [tickers, setTickers] = useState<TickerItem[]>(INITIAL_TICKERS);
  const [flashingIndex, setFlashingIndex] = useState<number | null>(null);

  // Simulate live financial terminal quote updates
  useEffect(() => {
    const interval = setInterval(() => {
      const targetIdx = Math.floor(Math.random() * tickers.length);
      setTickers((prev) =>
        prev.map((item, idx) => {
          if (idx !== targetIdx) return item;
          const delta = (Math.random() - 0.48) * 0.008; // subtle realistic fluctuation
          const newPrice = Number((item.price * (1 + delta)).toFixed(item.price > 10 ? 2 : 4));
          const newChange = Number((item.change24h + delta * 20).toFixed(2));
          return {
            ...item,
            price: newPrice,
            change24h: newChange,
            isUp: newChange >= 0,
          };
        })
      );
      setFlashingIndex(targetIdx);
      const timer = setTimeout(() => setFlashingIndex(null), 800);
      return () => clearTimeout(timer);
    }, 2800);

    return () => clearInterval(interval);
  }, [tickers.length]);

  // Duplicate for seamless infinite loop marquee
  const displayList = [...tickers, ...tickers];

  return (
    <div className="relative w-full overflow-hidden bg-[#00051d]/90 border-y border-blue-900/30 backdrop-blur-md select-none py-2.5 z-20 shadow-[0_4px_20px_rgba(3,40,238,0.08)]">
      {/* Ambient gradient edge fades for high-end look */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#010725] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#010725] to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max group hover:[animation-play-state:paused]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 35,
            repeat: Infinity,
          }}
          className="flex items-center gap-8 pl-4"
        >
          {displayList.map((ticker, index) => {
            const isFlashing = flashingIndex !== null && (index % tickers.length) === flashingIndex;
            return (
              <div
                key={`${ticker.symbol}-${index}`}
                className={`flex items-center gap-2.5 px-3 py-1 rounded-lg border transition-all duration-300 ${
                  isFlashing
                    ? ticker.isUp
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                      : 'bg-rose-950/40 border-rose-500/60 shadow-[0_0_12px_rgba(244,63,94,0.3)]'
                    : 'bg-[#050e33]/50 border-white/5 hover:border-blue-500/30'
                }`}
              >
                {/* Live beacon dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    ticker.isUp ? 'bg-emerald-400' : 'bg-rose-400'
                  } ${isFlashing ? 'animate-ping' : ''}`}
                />

                <span className="font-bold text-xs tracking-wider text-white">
                  {ticker.symbol}
                </span>

                <span className="font-mono text-xs text-slate-300">
                  {ticker.prefix || '$'}
                  {ticker.price.toLocaleString(undefined, {
                    minimumFractionDigits: ticker.price > 10 ? 2 : 4,
                  })}
                </span>

                <span
                  className={`flex items-center font-mono text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                    ticker.isUp
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-rose-400 bg-rose-500/10'
                  }`}
                >
                  {ticker.isUp ? (
                    <ArrowUpRight className="w-3 h-3 inline" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3 inline" />
                  )}
                  {ticker.isUp ? '+' : ''}
                  {ticker.change24h}%
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
