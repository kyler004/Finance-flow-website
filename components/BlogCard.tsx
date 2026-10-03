'use client';

import React from 'react';
import Link from 'next/link';
import Avatar from './Avatar';
import { motion } from 'motion/react';

interface BlogCardProps {
  slug?: string;
  category?: string;
  title?: string;
  excerpt?: string;
  authorName?: string;
  date?: string;
}

export default function BlogCard({
  slug = 'the-basics-about-cryptocurrency',
  category = 'PRODUCTS',
  title = 'The Basics about Cryptocurrency',
  excerpt = 'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
  authorName = 'ALEX TURNER',
  date = 'AUGUST 2, 2021',
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="h-full"
    >
      <Link
        href={`/blog/${slug}`}
        className="group block bg-[#010D50] border border-white/10 rounded-3xl overflow-hidden hover:border-[#0328EE]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#0328EE]/20 flex flex-col h-full"
      >
        {/* Top Image: Sleek laptop with ambient keyboard neon glow */}
        <div className="relative w-full aspect-[16/9] bg-[#0a0f26] overflow-hidden flex items-center justify-center p-3">
          {/* Ambient neon backdrop */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/25 via-blue-600/20 to-transparent group-hover:scale-110 transition-transform duration-500" />
          
          {/* Render laptop thumbnail */}
          <div className="relative w-full max-w-[240px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-[85%] mx-auto aspect-[16/10] bg-[#121832] rounded-t-lg border-2 border-[#2b3352] border-b-0 overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-blue-900/40" />
            </div>
            <div className="w-full h-8 bg-[#1f2642] rounded-b-md border border-[#323d63] p-1 shadow-lg">
              <div className="w-full h-full bg-[#0a0d18] rounded-[2px] p-0.5 flex flex-col justify-around">
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400 rounded-full blur-[0.5px]" />
                <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400 rounded-full blur-[0.5px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            {/* Badge */}
            <span className="inline-block px-3 py-1 rounded-full bg-[#0328EE] group-hover:bg-[#1a3dff] text-[10px] font-bold tracking-wider text-white uppercase mb-3 transition-colors">
              {category}
            </span>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
              {title}
            </h3>

            {/* Excerpt */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
              {excerpt}
            </p>
          </div>

          {/* Author info footer */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
            <Avatar name={authorName} size="md" />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-blue-200 transition-colors">
                {authorName}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                {date}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
