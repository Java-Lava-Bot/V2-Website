'use client';

import {
  ArrowTopRightOnSquareIcon,
  CommandLineIcon,
  CubeIcon,
} from '@heroicons/react/24/outline';

import Footer from '../components/Footer';
import Header from '../components/Header';
import StatusScript from '../components/StatusScript';

const bots = [
  {
    name: 'Java Lava',
    label: 'Production',
    description:
      'The production Java Lava Discord bot with moderation, community, utility, and server management features.',
    href: '/invite/standard',
    invite:
      'https://discord.com/oauth2/authorize?client_id=1305190785536360519&permissions=8',
  },
  {
    name: 'Java Lava Beta',
    label: 'Beta',
    description:
      'The beta version of Java Lava for testing new features and changes before they reach the production bot.',
    href: '/invite/beta',
    invite:
      'https://discord.com/oauth2/authorize?client_id=1390723130904805376&permissions=8&response_type=code&redirect_uri=https%3A%2F%2Fjavalava.phillsphanbh3.me%2F&integration_type=0&scope=bot+applications.commands.permissions.update+applications.commands',
  },
];

export default function InvitePage() {
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

        {/* Purple glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-16rem] top-[-16rem] h-[32rem] w-[32rem] rounded-full bg-[#a78bfa]/[0.035] blur-[120px]'
        />

        <section className='relative border-b border-white/10'>
          <div className='mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-8 lg:px-10 lg:pb-20 lg:pt-24'>
            <div className='max-w-3xl'>
              <div className='mb-5 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a78bfa]'>
                <span className='h-1.5 w-1.5 bg-[#a78bfa]' />
                Java Lava / invites
              </div>

              <h1 className='text-4xl font-bold tracking-[-0.035em] sm:text-5xl'>
                Invite a bot
              </h1>

              <p className='mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
                Choose the Java Lava bot you want to add to your Discord server.
              </p>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
            <div className='mb-8'>
              <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                Available bots
              </div>

              <h2 className='mt-2 text-2xl font-semibold tracking-[-0.02em]'>
                Select an invite
              </h2>
            </div>

            <div className='grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2'>
              {bots.map((bot, index) => (
                <div
                  key={bot.invite}
                  className='group relative bg-[#11101a] p-6 transition-colors hover:bg-[#14131e] sm:p-8'
                >
                  <div className='mb-7 flex items-start justify-between'>
                    <div className='flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.025] text-[#a78bfa]'>
                      <CubeIcon className='h-5 w-5' />
                    </div>

                    <span className='font-mono text-[10px] text-white/15'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className='text-xl font-semibold tracking-[-0.02em]'>
                    {bot.name}
                  </h3>

                  <p className='mt-3 max-w-md text-sm leading-6 text-white/40'>
                    {bot.description}
                  </p>

                  <div className='mt-7 flex flex-wrap gap-3'>
                    <a
                      href={bot.invite}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 border border-[#a78bfa]/30 bg-[#a78bfa]/[0.08] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[#a78bfa] transition-colors hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/[0.12] hover:text-[#c4b5fd]'
                    >
                      Invite bot
                      <ArrowTopRightOnSquareIcon className='h-3.5 w-3.5' />
                    </a>

                    <a
                      href={bot.href}
                      className='inline-flex items-center gap-2 border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35 transition-colors hover:border-white/20 hover:text-white'
                    >
                      Details
                      <span>→</span>
                    </a>
                  </div>

                  <div className='absolute bottom-0 left-0 h-px w-0 bg-[#a78bfa] transition-all duration-300 group-hover:w-full' />
                </div>
              ))}
            </div>

            <div className='mt-10 border-y border-white/10 py-4'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-white/25'>
                  Discord / bot / authorization
                </span>

                <a
                  href='/docs'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd]'
                >
                  Read the documentation →
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
