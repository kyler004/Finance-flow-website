'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyLogos from '@/components/CompanyLogos';
import LaptopMockup from '@/components/LaptopMockup';
import PhoneMockup from '@/components/PhoneMockup';
import BlogCard from '@/components/BlogCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import DownloadAppModal from '@/components/DownloadAppModal';
import FinTechBackground from '@/components/FinTechBackground';
import HoloCard from '@/components/HoloCard';
import CountUp from '@/components/CountUp';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeftRight,
  Wallet,
  BarChart3,
  RefreshCw,
  TrendingDown,
  Zap,
  Lock,
  ShieldCheck,
  Award,
  MessageSquare,
  Play,
  Download,
  UserPlus,
  TrendingUp,
  Apple,
} from 'lucide-react';

export default function HomePage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <FinTechBackground />
      <Navbar />

      <main className="flex-1 relative z-10">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-700/15 via-indigo-600/10 to-orange-500/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Headlines & CTAs */}
              <div className="lg:col-span-6 text-center lg:text-left z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
                >
                  Buy, trade, and hold <CountUp end={350} suffix="+" /> cryptocurrencies
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                >
                  {/* Primary CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                    onClick={() => setDownloadModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#0328EE]/30 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] transition-shadow duration-300"
                  >
                    DOWNLOAD APP
                  </motion.button>

                  {/* Secondary CTA */}
                  <motion.div
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96, y: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                    className="w-full sm:w-auto"
                  >
                    <Link
                      href="/pricing"
                      className="block w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0a1236] hover:bg-[#121f52] border border-white/10 hover:border-[#0328EE]/60 text-white font-semibold text-xs tracking-wider uppercase transition-colors text-center hover:shadow-[0_0_15px_rgba(3,40,238,0.3)]"
                    >
                      VIEW PRICING
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Sleek Laptop Mockup with Motion Entrance */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 flex justify-center items-center"
              >
                <LaptopMockup showScreenContent={true} className="w-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== FEATURED ON ===================== */}
        <section className="py-6 border-y border-white/5 bg-[#010725]">
          <CompanyLogos label="Finance flow has been featured on" />
        </section>

        {/* ===================== BUILD YOUR CRYPTO PORTFOLIO ===================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Build your crypto portfolio
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-16 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </motion.div>

            {/* 3-Column Bento Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: 2 Cards */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-6">
                {/* Send & Receive */}
                <HoloCard className="rounded-3xl flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 rounded-3xl p-7 text-left flex-1 flex flex-col justify-start group transition-colors h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                    >
                      <ArrowLeftRight className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-200 transition-colors">
                      SEND & RECEIVE
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </p>
                  </motion.div>
                </HoloCard>

                {/* 100% Secure Wallet */}
                <HoloCard className="rounded-3xl flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 rounded-3xl p-7 text-left flex-1 flex flex-col justify-start group transition-colors h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                    >
                      <Wallet className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-200 transition-colors">
                      100% SECURE WALLET
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </p>
                  </motion.div>
                </HoloCard>
              </div>

              {/* Center Column: Big Blue Card IOS & ANDROID APP */}
              <HoloCard className="lg:col-span-6 rounded-3xl" glowColor="rgba(255, 255, 255, 0.25)">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-[#0328EE] rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative text-left hover:shadow-[0_0_40px_rgba(3,40,238,0.5)] transition-shadow"
                >
                  <div className="mb-6 z-10">
                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-white mb-3">
                      IOS & ANDROID APP
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 max-w-md leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In amet, morbi non at sed neque.
                    </p>
                  </div>

                  {/* Phone mockup popping up with hover float */}
                  <div className="mt-4 -mb-16 flex justify-center">
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <PhoneMockup type="simple" className="scale-95" />
                    </motion.div>
                  </div>
                </motion.div>
              </HoloCard>

              {/* Right Column: 2 Cards */}
              <div className="lg:col-span-3 flex flex-col justify-between gap-6">
                {/* Trading Charts */}
                <HoloCard className="rounded-3xl flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 rounded-3xl p-7 text-left flex-1 flex flex-col justify-start group transition-colors h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                    >
                      <BarChart3 className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-200 transition-colors">
                      TRADING CHARTS
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </p>
                  </motion.div>
                </HoloCard>

                {/* Real Time Trading */}
                <HoloCard className="rounded-3xl flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 rounded-3xl p-7 text-left flex-1 flex flex-col justify-start group transition-colors h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40 cursor-default"
                    >
                      <RefreshCw className="w-6 h-6" />
                    </motion.div>
                    <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-200 transition-colors">
                      REAL TIME TRADING
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                    </p>
                  </motion.div>
                </HoloCard>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                onClick={() => setDownloadModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#0328EE]/30 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] transition-shadow"
              >
                DOWNLOAD APP
              </motion.button>
            </div>
          </div>
        </section>

        {/* ===================== EARN DAILY REWARDS (PART 1: PHONES) ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: 2 Tilted Phones */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex justify-center"
            >
              <PhoneMockup type="dual" />
            </motion.div>

            {/* Right: Content & 3 Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    Lowest fees in market
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    Fast and secure transactions
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <Lock className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    256-bit secure encryption
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== EARN DAILY REWARDS (PART 2: LAPTOP) ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Content & 3 Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 text-left order-2 lg:order-1"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight leading-tight">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-sm text-slate-300 mb-8 leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    <CountUp end={100} suffix="%" /> Private data
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    <CountUp end={99.99} decimals={2} suffix="%" /> Uptime guarantee
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    24/7 Dedicated support
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Laptop Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 flex justify-center order-1 lg:order-2"
            >
              <LaptopMockup className="w-full" />
            </motion.div>
          </div>
        </section>

        {/* ===================== EXPLORE ENDLESS POSSIBILITIES (ROYAL BLUE BANNER) ===================== */}
        <section className="relative bg-[#0328EE] overflow-hidden my-16 py-20 px-4 sm:px-6 lg:px-8 shadow-2xl">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left z-10"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Explore endless possibilities with FinanceFlow
              </h2>
              <p className="text-sm sm:text-base text-white/90 max-w-xl mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                onClick={() => setDownloadModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0328EE] font-bold text-xs tracking-wider uppercase shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all"
              >
                DOWNLOAD APP
              </motion.button>
            </motion.div>

            {/* Phones Mockup sticking into banner with subtle float */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end -mb-28 lg:-mb-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="scale-105"
              >
                <PhoneMockup type="dual" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== WHAT OUR USERS SAY? ===================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                What our users say?
              </h2>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                onClick={() => setDownloadModalOpen(true)}
                className="px-6 py-2.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.6)] transition-all"
              >
                DOWNLOAD APP
              </motion.button>
            </motion.div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* ===================== GET STARTED TODAY ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Heading & 3 Steps */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 text-left"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                  Get started today
                </h2>
                <p className="text-sm text-slate-300 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </p>

                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                      <Download className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      Download app
                    </span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                      <UserPlus className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      Create a free account
                    </span>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:shadow-[0_0_12px_rgba(3,40,238,0.8)] transition-shadow">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      Start trading
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column: Video Card with Interactive Pulsing Play Button */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setVideoModalOpen(true)}
                  className="group relative w-full aspect-[16/10] bg-[#010D50] border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center cursor-pointer shadow-2xl hover:border-[#0328EE]/60 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#010725]/80 via-transparent to-[#0328EE]/20" />
                  
                  {/* Glowing circular Play button with soundwave ripple */}
                  <div className="relative z-10 flex items-center justify-center">
                    {/* Ripple ring */}
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-24 h-24 rounded-full bg-[#0328EE]/40 pointer-events-none"
                    />

                    <div className="relative w-20 h-20 rounded-full bg-[#1e274a]/90 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#0328EE] group-hover:shadow-[0_0_30px_rgba(3,40,238,0.9)] transition-all duration-300 shadow-2xl">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== BROWSE OUR LATEST NEWS ===================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Browse our latest news
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <BlogCard
                  slug="the-basics-about-cryptocurrency"
                  category="PRODUCTS"
                  title="The Basics about Cryptocurrency"
                  excerpt="Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                  authorName="ALEX TURNER"
                  date="AUGUST 2, 2021"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <BlogCard
                  slug="the-basics-about-cryptocurrency"
                  category="PRODUCTS"
                  title="The Basics about Cryptocurrency"
                  excerpt="Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                  authorName="ALEX TURNER"
                  date="AUGUST 2, 2021"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <BlogCard
                  slug="the-basics-about-cryptocurrency"
                  category="PRODUCTS"
                  title="The Basics about Cryptocurrency"
                  excerpt="Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo."
                  authorName="ALEX TURNER"
                  date="AUGUST 2, 2021"
                />
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                className="inline-block"
              >
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0a1236] hover:bg-[#121f52] border border-white/10 hover:border-[#0328EE]/60 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(3,40,238,0.4)]"
                >
                  VIEW ALL ARTICLES
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== DOWNLOAD OUR APP ===================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Download our app
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque orci amet, amet .
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: iOS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Download for iOS
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                    onClick={() => setDownloadModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
                  >
                    <Apple className="w-4 h-4 fill-white" />
                    <span>APP STORE</span>
                  </motion.button>
                </div>

                <div className="mt-8 -mb-28 flex justify-center">
                  <PhoneMockup type="ios" className="scale-90" />
                </div>
              </motion.div>

              {/* Card 2: Android */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative transition-colors"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Download for Android
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer in pellentesque tortor semper elementum. Felis.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                    onClick={() => setDownloadModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.39 0 .76.15 1.04.42l9.96 8.58-9.96 8.58c-.28.27-.65.42-1.04.42-.83 0-1.5-.67-1.5-1.5zm11.75-7.75l2.25 1.94-11.2 6.46 8.95-8.4zm0-1.5L5.8 2.85l11.2 6.46-2.25 1.94zm2.14 1.84l3.52-2.03c.7-.4.7-1.06 0-1.47l-3.52-2.03-1.64 1.41 1.64 2.12z" />
                    </svg>
                    <span>PLAY STORE</span>
                  </motion.button>
                </div>

                <div className="mt-8 -mb-28 flex justify-center">
                  <PhoneMockup type="android" className="scale-90" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Video Demo Modal with motion entrance */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setVideoModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className="relative w-full max-w-3xl bg-[#010D50] border border-white/20 rounded-3xl p-6 shadow-2xl z-10"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-white">FinanceFlow Platform Overview</h3>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
                >
                  ✕
                </motion.button>
              </div>
              <div className="aspect-video bg-black/90 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-white/10">
                <div className="w-16 h-16 rounded-full bg-[#0328EE] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#0328EE]/50 animate-pulse">
                  <Play className="w-7 h-7 ml-1" />
                </div>
                <p className="text-white font-medium text-sm">Interactive demo preview initialized</p>
                <p className="text-xs text-slate-400 mt-1">Real-time orderbook, fast trade execution, and bank-grade vault custody.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Download Modal */}
      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
