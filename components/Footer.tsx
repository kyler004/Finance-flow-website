'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandIcon } from './BrandLogo';
import { Instagram, Facebook, Linkedin, Apple } from 'lucide-react';
import DownloadAppModal from './DownloadAppModal';
import { motion } from 'motion/react';

export default function Footer() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full bg-[#010725] border-t border-white/5 pt-16 pb-12 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Brand & Socials */}
          <div className="flex items-center justify-between pb-12">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <BrandIcon className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                FinanceFlow
              </span>
            </Link>

            {/* Social Icons with tactile micro-interactions */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0328EE] hover:text-white hover:shadow-[0_0_15px_rgba(3,40,238,0.7)] flex items-center justify-center text-slate-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0328EE] hover:text-white hover:shadow-[0_0_15px_rgba(3,40,238,0.7)] flex items-center justify-center text-slate-300 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#0328EE] hover:text-white hover:shadow-[0_0_15px_rgba(3,40,238,0.7)] flex items-center justify-center text-slate-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Main Grid: Menu Links & Download Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-8">
            {/* Menu Column */}
            <div className="lg:col-span-6 max-w-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                MENU
              </h4>
              <div className="w-full h-[1px] bg-white/20 mb-6" />

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
                <div className="space-y-4">
                  <div>
                    <Link href="/" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      HOME
                    </Link>
                  </div>
                  <div>
                    <Link href="/about" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      ABOUT
                    </Link>
                  </div>
                  <div>
                    <Link href="/pricing" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      PRICING
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Link href="/tokens" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      TOKENS
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      BLOG
                    </Link>
                  </div>
                  <div>
                    <Link href="/contact" className="inline-block hover:text-white hover:translate-x-1 transition-all duration-200">
                      CONTACT US
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Download Application Box */}
            <div className="lg:col-span-5 bg-[#010D50] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#0328EE]/40 transition-colors shadow-xl">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
                DOWNLOAD OUR APPLICATION
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                  onClick={() => setDownloadModalOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.6)] transition-shadow"
                >
                  <Apple className="w-4 h-4 fill-white" />
                  <span>APP STORE</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96, y: 0 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                  onClick={() => setDownloadModalOpen(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.6)] transition-shadow"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.39 0 .76.15 1.04.42l9.96 8.58-9.96 8.58c-.28.27-.65.42-1.04.42-.83 0-1.5-.67-1.5-1.5zm11.75-7.75l2.25 1.94-11.2 6.46 8.95-8.4zm0-1.5L5.8 2.85l11.2 6.46-2.25 1.94zm2.14 1.84l3.52-2.03c.7-.4.7-1.06 0-1.47l-3.52-2.03-1.64 1.41 1.64 2.12z" />
                  </svg>
                  <span>PLAY STORE</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="pt-12 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
            <p>All rights reserved</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
