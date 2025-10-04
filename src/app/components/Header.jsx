'use client';

import {
  Bars3Icon,
  BookOpenIcon,
  HandRaisedIcon,
  HomeIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/about-us', label: 'About', icon: InformationCircleIcon },
  { href: '/docs', label: 'Docs', icon: BookOpenIcon },
  { href: '/vote', label: 'Vote', icon: HandRaisedIcon }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--color-dark)]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="text-[var(--color-Java)]">Java</span>
              <span className="text-[var(--color-Lava)]">Lava</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => {
                const Icon = link.icon;
                return (
                  <div key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="h-4 w-4 group-hover:text-[var(--color-accent)] transition-colors" />
                        <span className="font-medium">{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-[var(--color-primary)] transition-colors" />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded"
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
              className="fixed top-16 left-0 right-0 bg-[var(--color-dark)]/95 backdrop-blur-xl border-b border-white/10 z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map(link => {
                  const Icon = link.icon;
                  return (
                    <div key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{link.label}</span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="font-medium">{link.label}</span>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
