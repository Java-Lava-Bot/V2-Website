'use client';

import { GiCupcake, GiCommercialAirplane } from 'react-icons/gi';
import { IoBookSharp } from 'react-icons/io5';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { SiIcons8 } from 'react-icons/si';
import { FaServer } from 'react-icons/fa';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const contributors = [
  {
    icon: FaServer,
    title: 'ZixeSea and Chrizz - ServerStats Developers',
    description:
      'The Serverstats Developers helped fix up our prefix issues back in alpha testing! I am very grateful for their help!',
    link: 'https://serverstats.bot/',
    linkText: 'Serverstats Discord Bot Website',
  },
  {
    icon: GiCupcake,
    title: 'TrainerJeo - Muffin Bot Developer & Error Logging Specialist!',
    link: 'https://muffindiscord.me/',
    linkText: 'Muffin Discord Bot Website',
  },
  {
    icon: GiCommercialAirplane,
    title:
      'ziggy._.mc - DB Bug Tracker Developer & Reminder system helper and debugger!',
    link: 'https://www.ziggymc.me/zigydbot/',
    linkText: 'Projects',
  },
  {
    icon: IoBookSharp,
    title: 'ProCoderCat - Study Buddy expert & Developer!',
    link: 'https://github.com/hankanderson0103-dev',
    linkText: "ProCoderCat's GitHub",
  },
  {
    icon: SiIcons8,
    title: 'Lord_Nova - Emotes helper and debugger!',
    link: 'https://github.com/sinisterMage',
    linkText: "Lord_Nova's GitHub",
  },
];

const bugHunters = [
  {
    name: 'kitfugll',
    link: 'https://discord.gg/d9vT5hz8H5',
    label: "Kitfugll's Discord",
  },
  {
    name: 'techadka78',
  },
  {
    name: 'vastbethatguy',
  },
  {
    name: 'nielsen1984',
  },
  {
    name: 'pixitan',
    link: 'https://discord.gg/QzPPhb9XWR',
    label: "Pixi's Discord",
  },
  {
    name: 'sorceressrl',
    link: 'https://discord.gg/X6XdCygUtD',
    label: "Sorceress's Discord",
  },
  {
    name: 'svpremesn0wyy',
    link: 'https://discord.gg/pVDwbUMa',
    label: "Sn0wyy's Discord",
  },
];

export default function ContributorsPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative isolate min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
        {/* Shared background */}
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

        {/* Subtle shared glows */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-14rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14rem] top-[50rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-10'>
          {/* Header */}
          <div className='mb-14 text-center'>
            <div className='mb-5 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / contributors
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Java Lava
              <br />
              <span className='text-[#a78bfa]'>Contributors.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              The developers, testers, and community members who have helped
              Java Lava grow.
            </p>
          </div>

          {/* Contributors */}
          <div className='space-y-5'>
            {contributors.map((contributor, index) => {
              const Icon = contributor.icon;

              return (
                <article
                  key={contributor.title}
                  className='group relative overflow-hidden border border-white/10 bg-[#11101a] transition-colors duration-200 hover:border-white/15 hover:bg-[#13121c]'
                >
                  <div className='flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7'>
                    <div className='flex min-w-0 items-start gap-5'>
                      <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                        <Icon className='h-5 w-5' />
                      </div>

                      <div className='min-w-0'>
                        <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                          Contributor {String(index + 1).padStart(2, '0')}
                        </div>

                        <h2 className='text-lg font-semibold leading-6 tracking-[-0.015em] text-white/90 sm:text-xl'>
                          {contributor.title}
                        </h2>

                        {contributor.description && (
                          <p className='mt-2 max-w-2xl text-sm leading-6 text-white/40'>
                            {contributor.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <a
                      href={contributor.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex min-h-10 shrink-0 items-center justify-center gap-2 border border-white/10 bg-white/[0.025] px-4 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/55 transition-all duration-200 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/[0.08] hover:text-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]/50'
                    >
                      {contributor.linkText}
                      <span className='transition-transform duration-200 group-hover:translate-x-0.5'>
                        →
                      </span>
                    </a>
                  </div>

                  <div className='absolute bottom-0 left-0 h-px w-0 bg-[#a78bfa] transition-all duration-300 group-hover:w-full' />
                </article>
              );
            })}
          </div>

          {/* Bug hunters */}
          <section className='mt-12 overflow-hidden border border-white/10 bg-[#11101a]'>
            <div className='border-b border-white/10 p-6 sm:p-7'>
              <div className='flex items-start gap-5'>
                <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-[#fb923c]/20 bg-[#fb923c]/[0.05] text-[#fb923c]'>
                  <BiSolidErrorCircle className='h-5 w-5' />
                </div>

                <div>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#fb923c]'>
                    Testing / feedback
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Our bug hunters and beta testers
                  </h2>

                  <p className='mt-2 text-sm leading-6 text-white/40'>
                    The Devs would like to thank everyone who helped test Java
                    Lava and report issues during development.
                  </p>
                </div>
              </div>
            </div>

            <div className='divide-y divide-white/10'>
              {bugHunters.map((person, index) => (
                <div
                  key={person.name}
                  className='flex flex-col gap-3 px-6 py-5 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between sm:px-7'
                >
                  <div className='flex items-center gap-4'>
                    <span className='font-mono text-[10px] text-white/15'>
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className='font-medium text-white/70'>
                      {person.name}
                    </span>
                  </div>

                  {person.link && (
                    <a
                      href={person.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-2 self-start border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:border-[#fb923c]/30 hover:text-[#fb923c] sm:self-auto'
                    >
                      {person.label}
                      <span>→</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Navigation */}
          <div className='mt-12 border-y border-white/10 py-5'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/docs'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                ← Back to docs
              </a>

              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/20'>
                8 Contributors • Last updated: January 2nd, 2026
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
