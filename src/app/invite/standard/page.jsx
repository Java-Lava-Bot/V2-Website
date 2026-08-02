'use client';

import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const INVITE_URL =
  'https://discord.com/oauth2/authorize?client_id=1305190785536360519&permissions=8';

const features = [
  'Moderation tools',
  'Community commands',
  'Utility commands',
  'Server management',
];

export default function JavaLavaInvite() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
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

        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-16rem] top-[-16rem] h-[32rem] w-[32rem] rounded-full bg-[#a78bfa]/[0.035] blur-[120px]'
        />

        <section className='relative border-b border-white/10'>
          <div className='mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24'>
            <div className='max-w-3xl'>
              <div className='mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a78bfa]'>
                <span className='h-1.5 w-1.5 bg-[#a78bfa]' />
                Java Lava / bot invite
              </div>

              <h1 className='text-4xl font-bold tracking-[-0.035em] sm:text-5xl'>
                Invite Java Lava
              </h1>

              <p className='mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
                Add Java Lava to your Discord server and get access to its
                moderation, community, utility, and server management features.
              </p>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
            <div className='grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.2fr_0.8fr]'>
              <div className='bg-[#11101a] p-7 sm:p-9'>
                <div className='mb-6 flex items-center gap-3'>
                  <CommandLineIcon className='h-5 w-5 text-[#a78bfa]' />

                  <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                    java-lava / invite
                  </span>
                </div>

                <h2 className='text-2xl font-semibold tracking-[-0.02em]'>
                  Add the bot to your server
                </h2>

                <p className='mt-4 max-w-xl text-sm leading-7 text-white/40'>
                  Continue to Discord to authorize Java Lava. You will be able
                  to select the server where you want to install the bot.
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

              <div className='bg-[#11101a] p-7 sm:p-9'>
                <div className='mb-6 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                  Included features
                </div>

                <div className='space-y-4'>
                  {features.map(feature => (
                    <div
                      key={feature}
                      className='flex items-center gap-3 border-b border-white/10 pb-4 last:border-b-0'
                    >
                      <CheckIcon className='h-4 w-4 text-[#a78bfa]' />

                      <span className='text-sm text-white/55'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className='mt-10 border-y border-white/10 py-4'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <a
                  href='/invite'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white'
                >
                  ← All invites
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
        </section>
      </main>

      <Footer />
    </>
  );
}
