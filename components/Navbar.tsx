'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandIcon } from './BrandLogo';
import { Menu, X } from 'lucide-react';
import DownloadAppModal from './DownloadAppModal';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PRICING', href: '/pricing' },
    { label: 'TOKENS', href: '/tokens' },
    { label: 'BLOG', href: '/blog' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#010725]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#010725]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Desktop Left: FinanceFlow Logo + divider + Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2.5 group cursor-pointer select-none">
              <motion.div
                whileHover={{ rotate: 12, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                className="relative"
              >
                <BrandIcon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(3,40,238,0.5)]" />
              </motion.div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                FinanceFlow
              </span>
            </Link>

            {/* Vertical separator with subtle glow */}
            <div className="h-6 w-[1px] bg-white/20" aria-hidden="true" />

            {/* Nav Links with animated hover / active sliding indicator */}
            <nav
              onMouseLeave={() => setHoveredNav(null)}
              className="flex items-center space-x-7 text-xs font-semibold tracking-wider text-slate-300 relative py-2"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                const isHovered = hoveredNav === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredNav(item.href)}
                    className="relative py-2.5 px-1 whitespace-nowrap transition-colors"
                  >
                    <motion.span
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                      className={`relative z-10 transition-colors duration-200 inline-block ${
                        active ? 'text-white font-bold' : isHovered ? 'text-white' : 'text-slate-300'
                      }`}
                    >
                      {item.label}
                    </motion.span>

                    {/* Active State Underline */}
                    {active && (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Hover State Sliding Soft Indicator */}
                    {isHovered && !active && (
                      <motion.span
                        layoutId="hover-nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#0328EE] rounded-full shadow-[0_0_12px_rgba(3,40,238,0.9)]"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right: DOWNLOAD APP Button with spring hover & active press */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 16 }}
              onClick={() => setDownloadModalOpen(true)}
              className="relative inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] transition-shadow duration-300"
            >
              DOWNLOAD APP
            </motion.button>
          </div>

          {/* Mobile Header: Logo Crypto + Circular Menu Button */}
          <div className="flex lg:hidden items-center justify-between w-full">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <BrandIcon className="w-6 h-6 text-white" />
              </motion.div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-300 transition-colors">
                Crypto
              </span>
            </Link>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              onClick={() => setMobileMenuOpen(true)}
              className="w-11 h-11 rounded-full bg-[#0328EE] flex items-center justify-center text-white shadow-lg shadow-[#0328EE]/40 hover:bg-[#021ec0] hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay with Staggered Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#010725]/95 flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top header row inside mobile menu */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <BrandIcon className="w-6 h-6 text-white" />
                <span className="font-bold text-xl tracking-tight text-white">
                  Crypto
                </span>
              </Link>

              <motion.button
                whileTap={{ scale: 0.88 }}
                whileHover={{ rotate: 90, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-[#0328EE] flex items-center justify-center text-white shadow-lg shadow-[#0328EE]/40 hover:bg-[#021ec0] hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Centered navigation links with staggered fade-in & slide */}
            <nav className="flex flex-col items-center justify-center space-y-7 my-auto text-center">
              {navItems.map((item, idx) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                      delay: 0.04 * idx,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold tracking-wider uppercase transition-all duration-200 inline-block pb-1 hover:scale-105 active:scale-95 ${
                        active
                          ? 'text-white border-b-2 border-white drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]'
                          : 'text-slate-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(3,40,238,0.6)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Download Button with Spring scale */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-sm mx-auto mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 16 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDownloadModalOpen(true);
                }}
                className="w-full py-4 rounded-full bg-[#0328EE] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#021ec0] shadow-xl shadow-[#0328EE]/40 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] transition-all"
              >
                DOWNLOAD APP
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Download App Modal */}
      <DownloadAppModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
}
