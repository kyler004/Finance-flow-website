'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinTechBackground from '@/components/FinTechBackground';
import HoloCard from '@/components/HoloCard';
import { ArrowLeftRight, BarChart3, Wallet, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export default function PricingPage() {
  const plans = [
    {
      badge: 'BASIC',
      price: '$ 100 USD',
      description: 'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.',
      features: [
        'Everything included in Basic',
        'Trading up to $1MM per month',
        'Windows & macOS App',
        'Premium Support',
      ],
    },
    {
      badge: 'PRO',
      price: '$ 100 USD',
      description: 'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.',
      features: [
        'Everything included in Basic',
        'Trading up to $1MM per month',
        'Windows & macOS App',
        'Premium Support',
      ],
    },
    {
      badge: 'EXPERT',
      price: '$ 100 USD',
      description: 'Lorem ipsum dolor sit amet, ametor consectetur adipiscing elit. Et nibh.',
      features: [
        'Everything included in Basic',
        'Trading up to $1MM per month',
        'Windows & macOS App',
        'Premium Support',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <FinTechBackground />
      <Navbar />

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
              Pricing
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque
            </p>
          </motion.div>

          {/* Feature Badges Strip with Staggered Entrance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shadow-md shadow-[#0328EE]/40">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Send & receive
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shadow-md shadow-[#0328EE]/40">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Trading Charts
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shadow-md shadow-[#0328EE]/40">
                <Wallet className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Wallet
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shadow-md shadow-[#0328EE]/40">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-white">
                Real Time Trading
              </span>
            </motion.div>
          </motion.div>

          {/* 3 Pricing Cards with Staggered Entrance & Hover Lift */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <HoloCard
                key={idx}
                className="rounded-3xl flex-1 flex flex-col"
                glowColor={idx === 1 ? 'rgba(3, 40, 238, 0.55)' : 'rgba(3, 40, 238, 0.3)'}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  className={`bg-[#010D50] border rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-colors h-full ${
                    idx === 1
                      ? 'border-[#0328EE] shadow-[0_0_30px_rgba(3,40,238,0.25)]'
                      : 'border-white/10 hover:border-[#0328EE]/60'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0328EE] text-[10px] font-bold tracking-wider text-white uppercase mb-6 shadow-sm shadow-[#0328EE]/50">
                      {plan.badge}
                    </span>

                    {/* Price */}
                    <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                      {plan.price}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed mb-8">
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                        FEATURES
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0328EE] shrink-0 shadow-[0_0_6px_rgba(3,40,238,0.8)]" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Contact Us Button with motion hover/tap */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.96, y: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                  >
                    <Link
                      href="/contact"
                      className="block w-full py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase text-center shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
                    >
                      CONTACT US
                    </Link>
                  </motion.div>
                </motion.div>
              </HoloCard>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
