'use client';

import {
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const votingSites = [
  {
    name: 'Top.gg',
    description: 'Support Java Lava by voting for the bot on Top.gg.',
    href: 'https://top.gg/bot/1305190785536360519/vote',
    button: 'Vote on Top.gg',
  },
  {
    name: 'Discord Bot List',
    description: 'Help Java Lava grow by leaving a vote on Discord Bot List.',
    href: 'https://discordbotlist.com/bots/java-lava/upvote',
    button: 'Vote on Discord Bot List',
  },
  {
    name: 'Directum',
    description: 'Support Java Lava with a vote on Directum.',
    href: 'https://directum.org/bot/6d4e7712-2998-4490-aee2-2dfa052c8c51',
    button: 'Vote on Directum',
  },
];

export default function VotingPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
        {/* Shared page background */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 opacity-[0.035]'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[#7c3aed]/[0.07] blur-[120px]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute bottom-[-16rem] left-[-14rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28'>
          {/* Header */}
          <div className='mb-14 max-w-2xl'>
            <div className='mb-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 rounded-full bg-[#fb923c]' />
              Support Java Lava
            </div>

            <h1 className='text-4xl font-black tracking-[-0.04em] sm:text-5xl'>
              Vote for Java Lava
            </h1>

            <p className='mt-5 max-w-xl text-base leading-7 text-white/50 sm:text-lg'>
              Voting helps Java Lava gain visibility and reach more Discord
              communities. Choose a listing below to cast your vote.
            </p>
          </div>

          {/* Voting links */}
          <div className='space-y-4'>
            {votingSites.map((site, index) => (
              <div
                key={site.name}
                className='group relative overflow-hidden border border-white/10 bg-[#11101a] transition-colors duration-200 hover:border-white/15'
              >
                <div className='absolute inset-y-0 left-0 w-px bg-[#a78bfa]/40' />

                <div className='flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7'>
                  <div className='flex items-start gap-4'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03]'>
                      <ArrowUpIcon className='h-5 w-5 text-[#a78bfa]' />
                    </div>

                    <div>
                      <div className='flex items-center gap-3'>
                        <h2 className='text-lg font-semibold text-white'>
                          {site.name}
                        </h2>

                        <span className='font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                          0{index + 1}
                        </span>
                      </div>

                      <p className='mt-1.5 max-w-lg text-sm leading-6 text-white/40'>
                        {site.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={site.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-11 shrink-0 items-center justify-center gap-2 border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white/75 transition-all duration-200 hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/40'
                  >
                    {site.button}
                    <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className='mt-14 border-t border-white/10 pt-6'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/'
                className='inline-flex w-fit items-center border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
              >
                ← Back to website
              </a>

              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                3 voting pages
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
