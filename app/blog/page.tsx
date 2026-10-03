'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterBanner from '@/components/NewsletterBanner';
import BlogCard from '@/components/BlogCard';
import LaptopMockup from '@/components/LaptopMockup';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['All', 'Apps', 'Products', 'Tutorial'];

  const posts = [
    {
      id: 1,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
    {
      id: 2,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
    {
      id: 3,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
    {
      id: 4,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
    {
      id: 5,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
    {
      id: 6,
      slug: 'the-basics-about-cryptocurrency',
      category: 'PRODUCTS',
      title: 'The Basics about Cryptocurrency',
      excerpt:
        'Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.',
      authorName: 'ALEX TURNER',
      date: 'AUGUST 2, 2021',
    },
  ];

  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Blog
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.
            </p>
          </motion.div>

          {/* Featured Post Card with Hover Lift and Glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl overflow-hidden mb-16 shadow-2xl hover:shadow-[0_0_40px_rgba(3,40,238,0.25)] transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 p-8 sm:p-12">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0328EE] text-[10px] font-bold tracking-wider text-white uppercase mb-4">
                  FEATURED
                </span>
                <Link href="/blog/the-basics-about-cryptocurrency">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors tracking-tight leading-tight">
                    Cryptocurrency Explained With Pros and Cons for Investment
                  </h2>
                </Link>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-8 max-w-lg">
                  Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
                </p>
              </div>

              {/* Right Mockup with gentle scale */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex justify-center bg-[#070e2b] overflow-hidden">
                <div className="w-full scale-95 group-hover:scale-100 transition-transform duration-500">
                  <LaptopMockup className="w-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Newsletter Banner */}
        <NewsletterBanner />

        {/* Latest Posts Section */}
        <div className="max-w-7xl mx-auto pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Latest Posts
            </h2>

            {/* Category Filter Tabs with Sliding Motion Indicator */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 p-1 bg-[#010D50]/60 rounded-full border border-white/10">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-colors whitespace-nowrap ${
                      isSelected ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="active-blog-filter"
                        className="absolute inset-0 rounded-full bg-[#0328EE] shadow-md shadow-[#0328EE]/40"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* 6 Cards Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.08 * idx }}
              >
                <BlogCard
                  slug={post.slug}
                  category={post.category}
                  title={post.title}
                  excerpt={post.excerpt}
                  authorName={post.authorName}
                  date={post.date}
                />
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls with Tactile Micro-Interactions */}
          <div className="flex items-center justify-center gap-3 mt-16">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="w-9 h-9 rounded-full bg-[#010D50] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0328EE] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>

            {[1, 2, 3].map((page) => (
              <motion.button
                key={page}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full font-bold text-xs tracking-wider transition-all ${
                  currentPage === page
                    ? 'bg-[#0328EE] text-white shadow-md shadow-[#0328EE]/50 scale-105'
                    : 'bg-[#010D50] border border-white/10 text-slate-300 hover:text-white hover:border-white/30'
                }`}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
              disabled={currentPage === 3}
              aria-label="Next page"
              className="w-9 h-9 rounded-full bg-[#010D50] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#0328EE] disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
