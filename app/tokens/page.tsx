'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarketTicker from '@/components/MarketTicker';
import FinTechBackground from '@/components/FinTechBackground';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export default function TokensPage() {
  const tokens = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      marketCap: '$252,844,036,453 USD',
      volume: '$30,504,879,301 USD',
      url: 'https://bitcoin.org',
      icon: (
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#010725] shrink-0 font-bold shadow-md group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#010725]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546zM15.7 10.87c.214-1.43-.876-2.2-2.366-2.714l.484-1.94-1.18-.295-.47 1.888c-.31-.077-.63-.15-.947-.222l.474-1.9-1.18-.295-.483 1.94c-.256-.058-.508-.116-.752-.178l.002-.007-1.628-.407-.314 1.26s.876.2.858.213c.478.12.564.437.55.69l-.55 2.207c.033.008.076.02.123.038l-.126-.03-.772 3.097c-.058.146-.208.365-.544.281.012.018-.858-.214-.858-.214l-.586 1.353 1.536.383c.286.072.566.147.842.218l-.49 1.97 1.18.294.484-1.942c.322.087.635.17.94.248l-.48 1.928 1.18.294.49-1.963c2.012.38 3.526.227 4.164-1.593.514-1.465-.025-2.31-1.085-2.863.77-.18 1.352-.686 1.506-1.737z" />
          </svg>
        </div>
      ),
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      marketCap: '$252,844,036,453 USD',
      volume: '$30,504,879,301 USD',
      url: 'https://ethereum.org',
      icon: (
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#010725] shrink-0 font-bold shadow-md group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#010725]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
          </svg>
        </div>
      ),
    },
    {
      name: 'Litecoin',
      symbol: 'LTC',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      marketCap: '$252,844,036,453 USD',
      volume: '$30,504,879,301 USD',
      url: 'https://litecoin.org',
      icon: (
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#010725] shrink-0 font-bold shadow-md group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#010725]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.57 6.452h2.24l-1.34 5.48h2.09l-.49 2.01h-2.09l-.98 4.02h5.81l-.64 2.63H7.55l3.14-12.87-.26-1.27z" />
          </svg>
        </div>
      ),
    },
    {
      name: 'TRON',
      symbol: 'TRX',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      marketCap: '$252,844,036,453 USD',
      volume: '$30,504,879,301 USD',
      url: 'https://tron.network',
      icon: (
        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#010725] shrink-0 font-bold shadow-md group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 text-[#010725]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.385 1.488L22.25 7.64l-9.155 14.872L1.385 1.488zm18.3 6.326L4.475 3.197l6.634 14.47 8.576-9.853zm-7.66 9.43L7.76 8.528l9.78.69-5.515 8.026z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <FinTechBackground />
      <Navbar />
      <MarketTicker />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Tokens
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
            </p>
          </motion.div>

          {/* Desktop Table View with Staggered Entrance */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 pr-6">NAME</th>
                  <th className="py-4 px-6">DESCRIPTION</th>
                  <th className="py-4 px-6">MARKET CAP</th>
                  <th className="py-4 px-6">VOLUME</th>
                  <th className="py-4 pl-6 text-right">WEBSITE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs">
                {tokens.map((token, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                    className="hover:bg-white/[0.06] transition-colors group cursor-default"
                  >
                    {/* Name & Symbol */}
                    <td className="py-6 pr-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {token.icon}
                        <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                          {token.name}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#0328EE]/30 border border-[#0328EE]/50 text-[10px] font-bold text-white uppercase tracking-wider">
                          {token.symbol}
                        </span>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="py-6 px-6 text-slate-300 max-w-xs leading-relaxed">
                      {token.description}
                    </td>

                    {/* Market Cap */}
                    <td className="py-6 px-6 whitespace-nowrap font-semibold text-white tabular-nums">
                      {token.marketCap}
                    </td>

                    {/* Volume */}
                    <td className="py-6 px-6 whitespace-nowrap font-semibold text-white tabular-nums">
                      {token.volume}
                    </td>

                    {/* Website Link with micro-interaction */}
                    <td className="py-6 pl-6 text-right whitespace-nowrap">
                      <motion.a
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        href={token.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-white hover:text-blue-400 underline underline-offset-4 font-medium transition-colors"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                      </motion.a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View (matches Tokens-1.png) with Staggered Entrance */}
          <div className="md:hidden space-y-6">
            {tokens.map((token, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, delay: 0.08 * idx }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-6 shadow-xl space-y-4 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    NAME
                  </span>
                  <div className="flex items-center gap-3">
                    {token.icon}
                    <span className="text-base font-bold text-white">
                      {token.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#0328EE]/30 border border-[#0328EE]/50 text-[10px] font-bold text-white uppercase tracking-wider">
                      {token.symbol}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    DESCRIPTION
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {token.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    MARKET CAP
                  </span>
                  <p className="text-xs font-semibold text-white tabular-nums">
                    {token.marketCap}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    VOLUME
                  </span>
                  <p className="text-xs font-semibold text-white tabular-nums">
                    {token.volume}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    WEBSITE
                  </span>
                  <a
                    href={token.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-white hover:text-blue-400 underline underline-offset-4 font-medium transition-colors inline-flex items-center gap-1"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
