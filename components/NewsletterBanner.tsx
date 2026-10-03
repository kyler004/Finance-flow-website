'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-[#0328EE] py-16 px-4 sm:px-6 lg:px-8 my-16 shadow-2xl relative overflow-hidden"
    >
      {/* Subtle ambient light ripple */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        {/* Left: Mail Icon & Headline */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#0328EE] shrink-0 shadow-xl cursor-default"
          >
            <Mail className="w-8 h-8" />
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight max-w-md">
            Subscribe to our crypto news weekly newsletter!
          </h3>
        </div>

        {/* Right: Input & Subscribe Button */}
        <div className="w-full lg:w-auto">
          {isSubscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2 bg-white/20 text-white px-6 py-3.5 rounded-full font-medium text-sm backdrop-blur-sm"
            >
              <CheckCircle className="w-5 h-5 text-emerald-300" />
              <span>Thank you for subscribing! Check your inbox soon.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full h-12 px-6 rounded-full bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-4 focus:ring-white/40 shadow-md transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                className="h-12 px-8 rounded-full bg-[#010725] hover:bg-[#060e36] text-white font-bold text-xs tracking-wider uppercase shadow-xl hover:shadow-[0_0_20px_rgba(1,7,37,0.7)] transition-all shrink-0"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
