'use client';

import React, { useState } from 'react';
import { X, Smartphone, Check, Apple } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadAppModal({ isOpen, onClose }: DownloadAppModalProps) {
  const [storeFeedback, setStoreFeedback] = useState<string | null>(null);

  const handleStoreClick = (storeName: string) => {
    setStoreFeedback(`Connecting to ${storeName}...`);
    setTimeout(() => {
      setStoreFeedback(null);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 15 }}
            transition={{ type: 'spring', stiffness: 450, damping: 25 }}
            className="relative w-full max-w-md bg-[#010D50] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-center z-10"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
              className="w-14 h-14 mx-auto rounded-2xl bg-[#0328EE] flex items-center justify-center mb-4 text-white shadow-lg shadow-[#0328EE]/40"
            >
              <Smartphone className="w-7 h-7" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Download FinanceFlow
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Trade 350+ cryptocurrencies seamlessly on iOS and Android with zero hidden fees.
            </p>

            {/* QR Code Container */}
            <div className="p-4 bg-white rounded-2xl inline-block mb-6 shadow-inner group transition-transform hover:scale-105 duration-300">
              <svg className="w-36 h-36 mx-auto" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" fill="white" />
                <rect x="10" y="10" width="26" height="26" fill="#010725" rx="3" />
                <rect x="14" y="14" width="18" height="18" fill="white" rx="2" />
                <rect x="18" y="18" width="10" height="10" fill="#010725" rx="1" />

                <rect x="64" y="10" width="26" height="26" fill="#010725" rx="3" />
                <rect x="68" y="14" width="18" height="18" fill="white" rx="2" />
                <rect x="72" y="18" width="10" height="10" fill="#010725" rx="1" />

                <rect x="10" y="64" width="26" height="26" fill="#010725" rx="3" />
                <rect x="14" y="68" width="18" height="18" fill="white" rx="2" />
                <rect x="18" y="72" width="10" height="10" fill="#010725" rx="1" />

                <rect x="42" y="12" width="6" height="6" fill="#0328EE" rx="1" />
                <rect x="52" y="18" width="6" height="6" fill="#010725" rx="1" />
                <rect x="42" y="28" width="6" height="6" fill="#010725" rx="1" />
                <rect x="52" y="34" width="6" height="6" fill="#0328EE" rx="1" />
                
                <rect x="14" y="44" width="6" height="6" fill="#010725" rx="1" />
                <rect x="26" y="44" width="6" height="6" fill="#0328EE" rx="1" />
                <rect x="36" y="44" width="8" height="8" fill="#010725" rx="1" />
                <rect x="48" y="48" width="6" height="6" fill="#010725" rx="1" />
                <rect x="60" y="44" width="8" height="8" fill="#0328EE" rx="1" />
                <rect x="74" y="44" width="6" height="6" fill="#010725" rx="1" />
                <rect x="84" y="48" width="6" height="6" fill="#010725" rx="1" />

                <rect x="44" y="64" width="6" height="6" fill="#010725" rx="1" />
                <rect x="54" y="70" width="8" height="8" fill="#0328EE" rx="1" />
                <rect x="68" y="64" width="6" height="6" fill="#010725" rx="1" />
                <rect x="80" y="72" width="8" height="8" fill="#010725" rx="1" />
                <rect x="44" y="80" width="8" height="8" fill="#010725" rx="1" />
                <rect x="60" y="80" width="6" height="6" fill="#0328EE" rx="1" />
                <rect x="74" y="84" width="6" height="6" fill="#010725" rx="1" />
              </svg>
              <div className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1">
                Scan to Install
              </div>
            </div>

            {/* In-modal feedback */}
            {storeFeedback && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 text-xs font-semibold text-emerald-400 flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>{storeFeedback}</span>
              </motion.div>
            )}

            {/* Store Buttons with spring hover and tactile active feedback */}
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                onClick={() => handleStoreClick('Apple App Store')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.6)] transition-shadow"
              >
                <Apple className="w-4 h-4 fill-white" />
                <span>APP STORE</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                onClick={() => handleStoreClick('Google Play Store')}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.6)] transition-shadow"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.39 0 .76.15 1.04.42l9.96 8.58-9.96 8.58c-.28.27-.65.42-1.04.42-.83 0-1.5-.67-1.5-1.5zm11.75-7.75l2.25 1.94-11.2 6.46 8.95-8.4zm0-1.5L5.8 2.85l11.2 6.46-2.25 1.94zm2.14 1.84l3.52-2.03c.7-.4.7-1.06 0-1.47l-3.52-2.03-1.64 1.41 1.64 2.12z" />
                </svg>
                <span>PLAY STORE</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
