'use client';

import React from 'react';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#010725] text-white flex items-center justify-center min-h-screen p-4 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#010D50] border border-white/10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center mx-auto text-2xl font-bold">
            !
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Something went wrong</h2>
            <p className="text-xs text-slate-300">
              A critical application error occurred. Please try reloading the application.
            </p>
          </div>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-full bg-[#0328EE] hover:bg-[#021ec0] text-white font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            RELOAD APP
          </button>
        </div>
      </body>
    </html>
  );
}
