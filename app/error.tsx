'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in dev mode
    console.error('App error boundary caught:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#010725] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-3xl bg-[#010D50] border border-white/10 shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
          !
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            An unexpected error occurred while loading this view. You can reload the page or return to safety.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase shadow-md transition-colors"
          >
            TRY AGAIN
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0a1236] hover:bg-[#121f52] border border-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
