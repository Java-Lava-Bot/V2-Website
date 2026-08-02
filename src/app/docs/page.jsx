'use client';

import {
  ArrowPathIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { BugAntIcon } from '@heroicons/react/24/solid';
import { FaHandsHelping, FaVoteYea } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StatusScript from '../components/StatusScript';

const docSections = [
  {
    title: 'Getting Started',
    description: 'Quick start guide to set up Java Lava in your Discord server',
    href: '/docs/getting_started',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Commands',
    description:
      'Complete reference for all moderation, community, fun, and utility commands',
    href: '/docs/commands',
    icon: CommandLineIcon,
  },
  {
    title: 'Updates',
    description: 'Latest features, improvements, and bug fixes',
    href: '/docs/updates',
    icon: ArrowPathIcon,
  },
  {
    title: 'Setup Guide',
    description: 'Detailed configuration and customization options',
    href: '/docs/setup_guide',
    icon: Cog6ToothIcon,
  },
  {
    title: 'FAQ',
    description: 'Common questions and troubleshooting help',
    href: '/docs/faq',
    icon: QuestionMarkCircleIcon,
  },
  {
    title: 'Bugs & Issues',
    description: 'Report bugs and track known issues with Java Lava',
    href: '/docs/bugs',
    icon: BugAntIcon,
  },
  {
    title: 'Vote for Java Lava',
    description: 'Support Java Lava by voting on popular bot listing sites',
    href: '/docs/vote',
    icon: FaVoteYea,
  },
  {
    title: 'Contributors',
    description: 'Meet the amazing people who contribute to Java Lava',
    href: '/docs/contributors',
    icon: FaHandsHelping,
  },
];

export default function DocsPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
        {/* Subtle shared background */}
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
                Java Lava / documentation
              </div>

              <h1 className='text-4xl font-bold tracking-[-0.035em] sm:text-5xl'>
                Documentation
              </h1>

              <p className='mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
                Everything you need to set up, configure, and get the most out
                of Java Lava in your Discord server.
              </p>
            </div>
          </div>
        </section>

        <section className='relative'>
          <div className='mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20'>
            <div className='mb-8'>
              <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                Documentation
              </div>

              <h2 className='mt-2 text-2xl font-semibold tracking-[-0.02em]'>
                Browse the docs
              </h2>
            </div>

            <div className='overflow-hidden border border-white/10 bg-[#11101a]'>
              <div className='flex items-center gap-3 border-b border-white/10 px-5 py-4'>
                <div className='flex gap-1.5'>
                  <span className='h-2 w-2 bg-white/15' />
                  <span className='h-2 w-2 bg-white/15' />
                  <span className='h-2 w-2 bg-white/15' />
                </div>

                <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                  java-lava / docs
                </span>
              </div>

              <div className='grid md:grid-cols-2'>
                {docSections.map((section, index) => {
                  const Icon = section.icon;

                  return (
                    <a
                      key={section.title}
                      href={section.href}
                      className={`group relative border-b border-white/10 p-6 transition-colors hover:bg-white/[0.02] ${
                        index % 2 === 0 ? 'md:border-r' : ''
                      }`}
                    >
                      <div className='flex items-start gap-4'>
                        <div className='flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 bg-white/[0.025] text-white/50 transition-colors group-hover:border-[#a78bfa]/30 group-hover:text-[#a78bfa]'>
                          <Icon className='h-5 w-5' />
                        </div>

                        <div className='min-w-0'>
                          <div className='flex items-center gap-3'>
                            <h3 className='font-semibold tracking-[-0.01em]'>
                              {section.title}
                            </h3>

                            <span className='font-mono text-[9px] text-white/15'>
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>

                          <p className='mt-2 text-sm leading-6 text-white/40'>
                            {section.description}
                          </p>

                          <div className='mt-4 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-white/25 transition-colors group-hover:text-[#a78bfa]'>
                            View documentation
                            <span className='transition-transform group-hover:translate-x-1'>
                              →
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className='absolute bottom-0 left-0 h-px w-0 bg-[#a78bfa] transition-all duration-300 group-hover:w-full' />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className='mt-10 border-y border-white/10 py-4'>
              <div className='flex flex-wrap items-center justify-between gap-4'>
                <span className='font-mono text-[10px] uppercase tracking-[0.16em] text-white/25'>
                  Guides / commands / updates / support
                </span>

                <a
                  href='/docs/commands'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd]'
                >
                  Browse commands →
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
