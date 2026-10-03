'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Avatar from '@/components/Avatar';
import LaptopMockup from '@/components/LaptopMockup';
import NewsletterBanner from '@/components/NewsletterBanner';
import BlogCard from '@/components/BlogCard';
import { motion } from 'motion/react';

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Author Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 group cursor-default"
          >
            <Avatar name="ALEX TURNER" size="md" />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-blue-300 transition-colors">
                ALEX TURNER
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                AUGUST 2, 2021
              </span>
            </div>
          </motion.div>

          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              The Basics about Cryptocurrency
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-12">
              Lorem ipsum dolor sit ametro irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full bg-[#0a0f26] rounded-3xl p-6 sm:p-12 mb-16 shadow-2xl flex justify-center border border-white/5"
          >
            <LaptopMockup className="w-full" />
          </motion.div>

          {/* Article Prose Content with In-view Entrances */}
          <div className="space-y-12 text-slate-300 text-sm leading-relaxed max-w-3xl">
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Learn what you need to know before you invest in a virtual currency
              </h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                How do I know how secure is my wallet?
              </h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Mid-Article Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="my-12 py-8 bg-[#0a0f26] rounded-3xl flex justify-center border border-white/5"
            >
              <LaptopMockup className="w-full scale-95" />
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Learn what you need to know before you invest in a virtual currency
              </h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Highlight Quote Box with Glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
              className="my-8 p-8 rounded-3xl bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 text-white font-medium text-base sm:text-lg leading-relaxed shadow-xl hover:shadow-[0_0_30px_rgba(3,40,238,0.2)] transition-all"
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,”
            </motion.div>

            {/* Section 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Learn what you need to know before you invest in a virtual currency
              </h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>
          </div>
        </article>

        {/* Newsletter Banner */}
        <div className="mt-20">
          <NewsletterBanner />
        </div>

        {/* Latest Posts Section */}
        <div className="max-w-7xl mx-auto pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Latest Posts
            </h2>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/blog"
                className="inline-block px-6 py-2.5 rounded-full bg-[#0a1236] hover:bg-[#121f52] border border-white/10 hover:border-[#0328EE]/60 text-white font-semibold text-xs tracking-wider uppercase transition-colors shadow-md hover:shadow-[0_0_15px_rgba(3,40,238,0.4)]"
              >
                VIEW ALL ARTICLES
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.05 }}
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
              transition={{ duration: 0.45, delay: 0.15 }}
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
              transition={{ duration: 0.45, delay: 0.25 }}
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
        </div>
      </main>

      <Footer />
    </div>
  );
}
