'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(2); // Question 2 open by default matching design

  const faqItems = [
    {
      id: 1,
      question: 'Question 1',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.',
    },
    {
      id: 2,
      question: 'Question 2',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.',
    },
    {
      id: 3,
      question: 'Question 3',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.',
    },
    {
      id: 4,
      question: 'Question 4',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.',
    },
    {
      id: 5,
      question: 'Question 5',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col selection:bg-[#0328EE] selection:text-white">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-16"
          >
            Get in touch
          </motion.h1>

          {/* Form & Direct Contacts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-28">
            {/* Left Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#010D50] border border-white/10 rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle2 className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting FinanceFlow. Our team will review your inquiry and reply promptly.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          company: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-[#0328EE]/30 hover:shadow-[0_0_20px_rgba(3,40,238,0.7)] transition-all"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                          NAME
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Full Name"
                          className="w-full h-12 px-5 rounded-2xl bg-[#091136] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0328EE] focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                          EMAIL
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="email@example.com"
                          className="w-full h-12 px-5 rounded-2xl bg-[#091136] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0328EE] focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Company & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                          COMPANY
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company Name"
                          className="w-full h-12 px-5 rounded-2xl bg-[#091136] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0328EE] focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help?"
                          className="w-full h-12 px-5 rounded-2xl bg-[#091136] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0328EE] focus:ring-2 focus:ring-[#0328EE]/30 transition-all"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white mb-2">
                        MESSAGE
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        className="w-full p-5 rounded-2xl bg-[#091136] border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-[#0328EE] focus:ring-2 focus:ring-[#0328EE]/30 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.95, y: 0 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 16 }}
                      className="px-8 py-3.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#0328EE]/30 hover:shadow-[0_0_25px_rgba(3,40,238,0.7)] transition-all"
                    >
                      SEND MESSAGE
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column: Direct Reach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:pl-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                Want to reach us directly?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui pharetra elementum sit id sagittis non donec egestas.
              </p>

              {/* Email List with Micro-interactions */}
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,40,238,0.8)] transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">contact@example.com</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  href="mailto:support@example.com"
                  className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,40,238,0.8)] transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">support@example.com</span>
                </motion.a>

                <motion.a
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  href="mailto:press@example.com"
                  className="flex items-center gap-4 text-white hover:text-blue-300 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0328EE] flex items-center justify-center text-white shrink-0 shadow-md group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(3,40,238,0.8)] transition-all">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">press@example.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section with Smooth Animated Accordion */}
          <div className="max-w-3xl mx-auto pt-16 border-t border-white/5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 tracking-tight"
            >
              FAQ
            </motion.h2>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id} className="py-6">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : item.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer select-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/10 transition-colors"
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-blue-400" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pr-8">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
