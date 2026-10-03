'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function CompanyLogos({ label = "Finance flow has been featured on" }: { label?: string }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 text-center">
      {label && (
        <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal tracking-wide">
          {label}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
        {/* Company 1 */}
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-default"
        >
          <svg className="w-5 h-5 text-[#0328EE]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 12l10 10 3-3-7-7 7-7-3-3zm6 3l-7 7 7 7 3-3-4-4 4-4-3-3z"/>
          </svg>
          <span className="font-bold text-base tracking-tight">company</span>
        </motion.div>

        {/* Company 2 */}
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-default"
        >
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-4 bg-[#0328EE] rounded-sm"></span>
            <span className="w-1.5 h-4 bg-white rounded-sm"></span>
          </div>
          <span className="font-bold text-base tracking-tight">Company</span>
        </motion.div>

        {/* Company 3 */}
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-default"
        >
          <svg className="w-5 h-5 text-[#0328EE]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.5L5.5 8 12 11.5 18.5 8 12 4.5z"/>
          </svg>
          <span className="font-bold text-base tracking-tight">company</span>
        </motion.div>

        {/* Company 4 */}
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-default"
        >
          <svg className="w-5 h-5 text-[#0328EE]" viewBox="0 0 24 24" fill="currentColor">
            <rect x="4" y="4" width="16" height="16" rx="3"/>
            <path d="M9 9h6v6H9z" fill="#010725"/>
          </svg>
          <span className="font-bold text-base tracking-tight">Company</span>
        </motion.div>

        {/* Company 5 */}
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-default"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0328EE]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
          </div>
          <span className="font-bold text-base tracking-tight">Company</span>
        </motion.div>
      </div>
    </div>
  );
}
