'use client';

import {
  Bars3Icon,
  BookOpenIcon,
  HomeIcon,
  InformationCircleIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/about-us', label: 'About', icon: InformationCircleIcon },
  { href: '/docs', label: 'Docs', icon: BookOpenIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className='sticky top-0 z-50 border-b border-white/10 bg-[#0b0a12]/95 backdrop-blur-xl'>
        <div className='mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
          <div className='flex h-16 items-center justify-between'>
            {/* Logo */}
            <Link
              href='/'
              className='group flex items-center'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='text-lg font-bold tracking-[-0.03em] text-white transition-colors group-hover:text-[#c4b5fd] sm:text-xl'>
                Java <span className='text-[#a78bfa]'>Lava</span>
              </span>

              <span className='ml-2 hidden border-l border-white/10 pl-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/25 sm:block'>
                Discord Bot
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className='hidden items-center gap-2 md:flex'>
              <nav className='flex items-center gap-1'>
                {navLinks.map(link => {
                  const Icon = link.icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className='group flex items-center gap-2 px-3 py-2 text-sm text-white/45 transition-colors hover:text-white'
                    >
                      <Icon className='h-4 w-4 text-white/25 transition-colors group-hover:text-[#a78bfa]' />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Invite CTA */}
              <Link
                href='/invite'
                className='ml-3 inline-flex items-center gap-2 border border-[#a78bfa]/30 bg-[#a78bfa]/[0.08] px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c4b5fd] transition-all duration-200 hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/[0.14] hover:text-white'
              >
                <PlusIcon className='h-3.5 w-3.5' />
                Invite
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              type='button'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              className='p-2 text-white/50 transition-colors hover:text-white md:hidden'
            >
              {mobileMenuOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              className='fixed left-0 right-0 top-16 z-50 border-b border-white/10 bg-[#0b0a12]/98 backdrop-blur-xl md:hidden'
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <nav className='mx-auto max-w-7xl px-5 py-5 sm:px-8'>
                <div className='space-y-1'>
                  {navLinks.map(link => {
                    const Icon = link.icon;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className='group flex items-center gap-3 px-4 py-3 text-sm text-white/50 transition-colors hover:bg-white/[0.035] hover:text-white'
                      >
                        <Icon className='h-5 w-5 text-white/25 transition-colors group-hover:text-[#a78bfa]' />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </div>

                <div className='mt-4 border-t border-white/10 pt-4'>
                  <Link
                    href='/invite'
                    onClick={() => setMobileMenuOpen(false)}
                    className='flex items-center justify-center gap-2 border border-[#a78bfa]/30 bg-[#a78bfa]/[0.08] px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c4b5fd] transition-all hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/[0.14] hover:text-white'
                  >
                    <PlusIcon className='h-4 w-4' />
                    Invite Java Lava
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
