'use client';

import {
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1305190785536360519&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fjavalava.phillsphanbh3.me%2F&integration_type=0&scope=bot+applications.commands.permissions.update+applications.commands';

const features = [
  'Early access to new features',
  'Upcoming command changes',
  'Beta testing environment',
  'Discord application commands',
];

export default function BetaInvite() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
        {/* Shared documentation background */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 opacity-[0.025]'
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Subtle purple glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-16rem] top-[-16rem] h-[32rem] w-[32rem] rounded-full bg-[#a78bfa]/[0.035] blur-[120px]'
        />

        {/* Header */}
        <section className='relative border-b border-white/10'>
          <div className='mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24'>
            <div className='max-w-3xl'>
              <div className='mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a78bfa]'>
                <span className='h-1.5 w-1.5 bg-[#a78bfa]' />
                Java Lava Beta / bot invite
              </div>

              <div className='flex items-center gap-4'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.05] text-[#a78bfa]'>
                  <BeakerIcon className='h-6 w-6' />
                </div>

                <h1 className='text-4xl font-bold tracking-[-0.035em] sm:text-5xl'>
                  Invite Java Lava Beta
                </h1>
              </div>

              <p className='mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
                Install Java Lava Beta on your Discord server to test upcoming
                features and changes before they reach the production bot.
              </p>

              <div className='mt-6 flex flex-wrap items-center gap-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                <div className='flex items-center gap-2'>
                  <span className='h-1.5 w-1.5 bg-[#a78bfa]' />
                  Beta release
                </div>

                <span className='text-white/10'>•</span>

                <span>Java Lava / Testing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className='relative'>
          <div className='mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
            <div className='grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.2fr_0.8fr]'>
              {/* Invite card */}
              <div className='bg-[#11101a] p-7 sm:p-9'>
                <div className='mb-6 flex items-center gap-3'>
                  <BeakerIcon className='h-5 w-5 text-[#a78bfa]' />

                  <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                    java-lava / beta / invite
                  </span>
                </div>

                <h2 className='text-2xl font-semibold tracking-[-0.02em]'>
                  Add the beta bot
                </h2>

                <p className='mt-4 max-w-xl text-sm leading-7 text-white/40'>
                  Java Lava Beta gives you access to features currently being
                  tested. Features may change, be incomplete, or be removed
                  before reaching the production bot.
                </p>

                <a
                  href={INVITE_URL}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-8 inline-flex items-center gap-2 border border-[#a78bfa]/30 bg-[#a78bfa]/[0.08] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/[0.12] hover:text-[#c4b5fd]'
                >
                  Continue to Discord
                  <ArrowTopRightOnSquareIcon className='h-4 w-4' />
                </a>
              </div>

              {/* Beta features */}
              <div className='bg-[#11101a] p-7 sm:p-9'>
                <div className='mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                  Beta features
                </div>

                <div className='space-y-4'>
                  {features.map(feature => (
                    <div
                      key={feature}
                      className='flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0'
                    >
                      <CheckIcon className='h-4 w-4 shrink-0 text-[#a78bfa]' />

                      <span className='text-sm text-white/55'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Beta warning */}
            <div className='mt-8 border border-[#a78bfa]/15 bg-[#a78bfa]/[0.025] p-5'>
              <div className='flex gap-4'>
                <BeakerIcon className='mt-0.5 h-5 w-5 shrink-0 text-[#a78bfa]' />

                <div>
                  <div className='font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#a78bfa]'>
                    Beta software
                  </div>

                  <p className='mt-2 text-sm leading-6 text-white/40'>
                    Java Lava Beta is intended for testing and previewing
                    upcoming functionality. You may encounter bugs, incomplete
                    features, or unexpected behavior.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className='mt-10 border-y border-white/10 py-4'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <a
                  href='/invite'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white'
                >
                  ← All invites
                </a>

                <div className='flex items-center gap-6'>
                  <a
                    href='/invite/java-lava'
                    className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white'
                  >
                    Production bot
                  </a>

                  <a
                    href='/docs'
                    className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd]'
                  >
                    Documentation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
