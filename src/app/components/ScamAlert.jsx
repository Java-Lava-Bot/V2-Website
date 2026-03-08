'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-red-600 text-white backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-[14px] sm:px-[22px] lg:px-[50px]">
          {/* CHANGED: make center column wider and sides narrower */}
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-16 gap-3">
            {/* Left (CHANGED: slightly smaller so it comes in) */}
            <div className="justify-self-start">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
              >
                <span>Java Lava Alert</span>
              </Link>
            </div>

            {/* Center (CHANGED: allow it to span out + use full available width) */}
            <div className="min-w-0 px-2">
              <Link
                href="/"
                className="block w-full text-center text-sm sm:text-base font-bold text-white"
              >
                <span className="block">
                  The Java Lava development team strongly recommends enabling
                  the Automod Scam Prevention system to help protect your server
                  against recent scam activity.
                </span>
              </Link>
            </div>

            {/* Right (CHANGED: slightly smaller so it comes in) */}
            <div className="justify-self-end flex items-center gap-3">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap"
              >
                <span>Java Lava Alert</span>
              </Link>

              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white/90 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
                >
                  {mobileMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-16 left-0 right-0 bg-red-600 text-white backdrop-blur-xl border-b border-white/10 z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="px-4 py-6 space-y-4">
                {/* mobile menu items... */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}