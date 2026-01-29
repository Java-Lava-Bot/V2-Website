'use client';

import { CommandLineIcon } from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

export default function VotingPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='min-h-screen bg-[var(--color-dark)]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Java Lava Voting Links
            </h1>
          </div>

          {/* Voting Links */}
          <div className='mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl border border-[var(--color-secondary)]/20'>
            <CommandLineIcon className='h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>Top.gg</h3>
            <a
              href='https://top.gg/bot/1305190785536360519/vote'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors'
            >
              <span>Vote on top.gg</span>
              <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </a>
          </div>

          <div className='mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl border border-[var(--color-secondary)]/20'>
            <CommandLineIcon className='h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>
              Discord Bot List
            </h3>
            <a
              href='https://discordbotlist.com/bots/java-lava-3011/upvote'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors'
            >
              <span>Vote on Discord Bot List</span>
              <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </a>
          </div>

          <div className='mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl border border-[var(--color-secondary)]/20'>
            <CommandLineIcon className='h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>Discords.com</h3>
            <a
              href='https://discords.com/bots/bot/1305190785536360519/vote'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors'
            >
              <span>Vote on Discords.com</span>
              <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-800'>
            <div className='flex justify-between items-center'>
              <a
                href='/'
                className='flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors'
              >
                ← Back to website
              </a>
              <div className='text-sm text-gray-500'>
                3 voting pages • Last updated: October 2nd, 2025
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
