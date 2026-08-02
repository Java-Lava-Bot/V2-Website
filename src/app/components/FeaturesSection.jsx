'use client';

import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CpuChipIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';

export default function FeaturesSection() {
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      icon: ShieldCheckIcon,
      command: '/moderate',
      title: 'Moderation',
      description:
        'Ban, kick, timeout, and manage members without leaving Discord.',
      accent: 'purple',
    },
    {
      icon: ClockIcon,
      command: '/reminder',
      title: 'Reminders',
      description:
        'Schedule reminders for yourself or your server when something needs attention.',
      accent: 'orange',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      command: '/welcome',
      title: 'Welcome messages',
      description:
        'Give new members a proper introduction with messages built for your server.',
      accent: 'purple',
    },
    {
      icon: BoltIcon,
      command: '/autorole',
      title: 'Auto roles',
      description:
        'Assign roles automatically when members join your community.',
      accent: 'orange',
    },
    {
      icon: MegaphoneIcon,
      command: '/announce',
      title: 'Announcements',
      description:
        'Publish clean server announcements with the formatting you choose.',
      accent: 'purple',
    },
    {
      icon: CpuChipIcon,
      command: '/custom',
      title: 'Custom commands',
      description:
        'Create responses for the commands your community actually uses.',
      accent: 'orange',
    },
  ];

  return (
    <section className='relative isolate overflow-hidden bg-[#0b0a12] py-28 text-white'>
      {/* Shared background grid */}
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

      {/* Shared purple glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[-14rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#a78bfa]/[0.06] blur-[130px]'
      />

      {/* Shared orange glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute bottom-[-12rem] left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#fb923c]/[0.04] blur-[120px]'
      />

      <div className='relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end'
        >
          <div>
            <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#a78bfa]' />
              Java Lava / commands
            </div>

            <h2 className='text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Everything your
              <br />
              server <span className='text-[#a78bfa]'>needs.</span>
            </h2>
          </div>

          <p className='max-w-xl text-base leading-7 text-white/50 lg:justify-self-end sm:text-lg'>
            Java Lava puts the everyday tools for running a Discord community in
            one place. Moderation, automation, and server utilities without
            filling your bot list with separate services.
          </p>
        </motion.div>

        <div className='overflow-hidden border border-white/10 bg-[#11101a]'>
          <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
            <div className='flex items-center gap-3'>
              <div className='flex gap-1.5'>
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
              </div>

              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                java-lava / commands
              </span>
            </div>

            <div className='font-mono text-[10px] uppercase tracking-wider text-emerald-400'>
              6 modules loaded
            </div>
          </div>

          <div className='grid md:grid-cols-2'>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isPurple = feature.accent === 'purple';

              return (
                <motion.div
                  key={feature.command}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                  }}
                  className='group relative border-b border-white/10 p-6 transition-colors hover:bg-white/[0.025] md:nth-[odd]:border-r'
                >
                  <div className='mb-7 flex items-start justify-between'>
                    <div
                      className={`flex h-10 w-10 items-center justify-center border ${
                        isPurple
                          ? 'border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'
                          : 'border-[#fb923c]/20 bg-[#fb923c]/[0.05] text-[#fb923c]'
                      }`}
                    >
                      <Icon className='h-5 w-5' />
                    </div>

                    <span className='font-mono text-[10px] text-white/15'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className='mb-3 flex flex-wrap items-center gap-3'>
                    <span
                      className={`font-mono text-xs font-medium ${
                        isPurple ? 'text-[#a78bfa]' : 'text-[#fb923c]'
                      }`}
                    >
                      {feature.command}
                    </span>

                    <span className='h-px w-8 bg-white/10' />

                    <span className='font-mono text-[9px] uppercase tracking-[0.15em] text-white/25'>
                      ready
                    </span>
                  </div>

                  <h3 className='text-xl font-semibold tracking-[-0.02em]'>
                    {feature.title}
                  </h3>

                  <p className='mt-3 max-w-lg text-sm leading-6 text-white/40'>
                    {feature.description}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                      isPurple ? 'bg-[#a78bfa]' : 'bg-[#fb923c]'
                    }`}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className='flex flex-col gap-5 border-t border-white/10 bg-black/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7'>
            <div>
              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                Command library
              </div>

              <div className='mt-1 text-sm text-white/45'>
                Browse every command and configuration option.
              </div>
            </div>

            <a
              href='/docs/commands'
              className='inline-flex min-h-11 items-center justify-center gap-2 bg-[#a78bfa] px-5 font-semibold text-[#0b0a12] transition-colors hover:bg-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#11101a]'
            >
              Explore all commands
              <span>→</span>
            </a>
          </div>
        </div>

        <div className='mt-12 border-y border-white/10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              Moderation / automation / utilities
            </span>

            <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa]'>
              Java Lava / ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
