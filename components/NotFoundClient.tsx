'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { motion } from 'motion/react';

export default function NotFoundClient() {
  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col justify-between selection:bg-[#0328EE] selection:text-white">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md w-full text-center mx-auto"
        >
          {/* Glowing 404 Text with breathing animation */}
          <motion.div
            animate={{
              textShadow: [
                '0 0 30px rgba(3,40,238,0.5)',
                '0 0 60px rgba(3,40,238,0.9)',
                '0 0 30px rgba(3,40,238,0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-7xl sm:text-9xl font-black text-[#0328EE] tracking-tight mb-4 select-none"
          >
            404
          </motion.div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
            Page Not Found
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-10 font-normal">
            The page you&apos;re looking for can&apos;t be found. Double-check the URL and try again. Or click the button below.
          </p>

          {/* Action Buttons with Spring Micro-interactions */}
          <div className="flex flex-col gap-3.5 w-full max-w-xs mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 16 }}
            >
              <Link
                href="/pricing"
                className="block w-full py-3.5 px-6 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#0328EE]/30 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] text-center transition-shadow"
              >
                VIEW PRICING
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 16 }}
            >
              <Link
                href="/"
                className="block w-full py-3.5 px-6 rounded-full bg-[#0a1236] hover:bg-[#121f52] border border-white/10 hover:border-[#0328EE]/60 text-white font-semibold text-xs tracking-wider uppercase shadow-sm text-center transition-all"
              >
                BACK TO HOMEPAGE
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-white/5 text-center text-xs text-slate-400">
        Finance Flow © {new Date().getFullYear()} — All rights reserved.
      </footer>
    </div>
  );
}
