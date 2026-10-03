'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CompanyLogos from '@/components/CompanyLogos';
import GlobeVisual from '@/components/GlobeVisual';
import Avatar from '@/components/Avatar';
import { Users, Globe2, Search, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  const milestones = [
    {
      year: '2014',
      badge: 'ANNOUNCEMENT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.',
    },
    {
      year: '2016',
      badge: 'ANNOUNCEMENT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.',
    },
    {
      year: '2018',
      badge: 'ANNOUNCEMENT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.',
    },
    {
      year: '2022',
      badge: 'ANNOUNCEMENT',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at mattis bibendum congue cras id interdum. Risus leo et.',
    },
  ];

  const teamMembers = [
    {
      name: 'JOHN CARTER',
      role: 'CEO & CO-FOUNDER',
      bio: 'Visionary leadership with 15+ years in fintech and decentralized protocols.',
    },
    {
      name: 'SOPHIE MOORE',
      role: 'COMMUNITY LEAD',
      bio: 'Cultivating global developer communities and high-engagement education.',
    },
    {
      name: 'ALEX TURNER',
      role: 'OPERATIONS',
      bio: 'Overseeing institutional integrations, compliance, and resilient infrastructure.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              About Finance Flow
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae dolor non aliquam. Malesuada.
            </p>
          </motion.div>
        </section>

        {/* ===================== WHAT DRIVES FINANCE FLOW? ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  What drives Finance Flow?
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </motion.div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: OPEN SOURCE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-start group transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                >
                  <Users className="w-6 h-6" />
                </motion.div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-300 transition-colors">
                  OPEN SOURCE
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                </p>
              </motion.div>

              {/* Card 2: WORLDWIDE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-start group transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                >
                  <Globe2 className="w-6 h-6" />
                </motion.div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-300 transition-colors">
                  WORLDWIDE
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                </p>
              </motion.div>

              {/* Card 3: TRANSPARENT */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-start group transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                >
                  <Search className="w-6 h-6" />
                </motion.div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-300 transition-colors">
                  TRANSPARENT
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                </p>
              </motion.div>

              {/* Card 4: COMMUNITY DRIVEN */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="bg-[#010D50] border border-white/10 hover:border-[#0328EE]/60 rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-start group transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-[#0328EE] flex items-center justify-center text-white mb-6 shadow-md shadow-[#0328EE]/40"
                >
                  <Compass className="w-6 h-6" />
                </motion.div>
                <h3 className="text-base font-bold uppercase tracking-wider text-white mb-3 group-hover:text-blue-300 transition-colors">
                  COMMUNITY DRIVEN
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================== OUR MISSION ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                Our mission
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.
              </p>
            </motion.div>

            {/* Right Column: 3D Dotted Globe with Rings */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex justify-center"
            >
              <GlobeVisual />
            </motion.div>
          </div>
        </section>

        {/* ===================== OUR STORY ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Our story
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies. Sollicitudin odio elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor, blandit augue ac feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu penatibus congue orci turpis. Enim diam id.
            </p>
          </motion.div>
        </section>

        {/* ===================== TIMELINE ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
                Timeline
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-12 max-w-2xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </motion.div>

            {/* Timeline items with white circle markers */}
            <div className="relative border-l-2 border-white/20 pl-6 sm:pl-8 space-y-12 ml-4">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.4, delay: 0.08 * idx }}
                  className="relative group"
                >
                  {/* Timeline circle node with glow */}
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#010725] shadow-[0_0_12px_rgba(255,255,255,0.9)] transition-transform"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <span className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== OUR TEAM ===================== */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                Our Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.
              </p>
            </motion.div>

            {/* 3 Team Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35, delay: 0.1 * idx }}
                  className="bg-[#010D50] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-[#0328EE]/60 hover:shadow-2xl hover:shadow-[#0328EE]/20 transition-all group"
                >
                  {/* Photo area */}
                  <div className="w-full aspect-[4/5] rounded-2xl bg-[#091136] border border-white/10 mb-6 overflow-hidden flex flex-col items-center justify-center relative shadow-inner group-hover:border-[#0328EE]/40 transition-colors">
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      <Avatar name={member.name} size="xl" className="scale-125" />
                    </div>
                  </div>

                  {/* Member info */}
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== INVESTORS ===================== */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                Investors
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo, ultricies.
              </p>
            </motion.div>

            <CompanyLogos label="" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
