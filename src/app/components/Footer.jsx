'use client';

import {
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PlusIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className='relative mt-16 border-t border-white/10 bg-[#0a0910] text-white'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle grid */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[-12rem] top-[-12rem] h-[24rem] w-[24rem] rounded-full bg-[#a78bfa]/[0.035] blur-[120px]'
      />

      <div className='relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10'>
        {/* Main footer content */}
        <div className='grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]'>
          {/* Brand */}
          <div>
            <Link
              href='/'
              className='inline-flex items-center text-xl font-bold tracking-[-0.03em] text-white'
            >
              Java <span className='text-[#a78bfa]'>Lava</span>
            </Link>

            <p className='mt-4 max-w-md text-sm leading-7 text-white/35'>
              An advanced Discord bot built to provide powerful moderation,
              automation, utility, and community features for your server.
            </p>

            <div className='mt-6 flex flex-wrap gap-3'>
              <a
                href='https://discord.gg/tM8Y5acUta'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:border-[#a78bfa]/30 hover:text-[#c4b5fd]'
              >
                <ChatBubbleLeftRightIcon className='h-3.5 w-3.5' />
                Discord
              </a>

              <a
                href='https://github.com/Java-Lava-Bot'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/40 transition-colors hover:border-[#a78bfa]/30 hover:text-[#c4b5fd]'
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className='mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/25'>
              Navigation
            </div>

            <nav className='space-y-3'>
              <Link
                href='/about-us'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                About Us
              </Link>

              <Link
                href='/docs'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                <BookOpenIcon className='h-4 w-4 text-white/20' />
                Documentation
              </Link>

              <Link
                href='/invite'
                className='flex items-center gap-2 text-sm text-[#a78bfa] transition-colors hover:text-[#c4b5fd]'
              >
                <PlusIcon className='h-4 w-4' />
                Invite
              </Link>

              <a
                href='https://javalava.statuspage.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                Status Page
              </a>

              <a
                href='https://discord.gg/tM8Y5acUta'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                Support
              </a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <div className='mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/25'>
              Legal
            </div>

            <nav className='space-y-3'>
              <Link
                href='/legal/tos'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                <DocumentTextIcon className='h-4 w-4 text-white/20' />
                Terms of Service
              </Link>

              <Link
                href='/legal/privacy'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                Privacy Policy
              </Link>

              <Link
                href='/legal/cookies'
                className='flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white'
              >
                Cookies Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className='mt-12 border-t border-white/10 pt-6'>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <div>
              <p className='font-mono text-[9px] uppercase tracking-[0.14em] text-white/20'>
                © 2025–{currentYear} Java Lava Discord Bot
              </p>

              <p className='mt-2 text-xs text-white/15'>
                Built by Phil, Jeo, Ziggy, and Heliki.
              </p>
            </div>

            <div className='flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/15'>
              <ShieldCheckIcon className='h-3.5 w-3.5' />
              <span>Java Lava / Official Site</span>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
