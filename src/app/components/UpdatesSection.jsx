'use client';

import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  ShieldExclamationIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';

const updates = [
  {
    icon: ShieldExclamationIcon,
    type: 'SECURITY',
    title: 'Honeypot system',
    description:
      'The new honeypot system detects suspicious users before they can cause problems. Server owners can choose the punishment, including purge, timeout, or soft ban.',
  },
  {
    icon: XMarkIcon,
    type: 'COMMANDS',
    title: 'Three new utility commands',
    description:
      'Added /avatar, /server-info, and /user-info. Each command gives moderators quick access to useful member or server information.',
  },
  {
    icon: ArrowPathIcon,
    type: 'MODERATION',
    title: 'Temporary bans are back',
    description:
      'The tempban system has returned after the issues in version 2.3. Moderators can now temporarily remove users for a defined period.',
  },
  {
    icon: AdjustmentsHorizontalIcon,
    type: 'WEBSITE',
    title: 'New community reviews',
    description:
      'New reviews from Java Lava users are now available on the website. Want to submit yours? Send it through the reviews forum in the support server.',
  },
  {
    icon: UsersIcon,
    type: 'WEBSITE',
    title: 'Website updates',
    description:
      'The website has been updated with the latest Java Lava features and improvements.',
  },
  {
    icon: ArrowsPointingOutIcon,
    type: 'PERFORMANCE',
    title: 'Faster responses',
    description:
      'Several performance changes have improved response times and reduced unnecessary work across the bot.',
  },
];

export default function UpdatesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='relative overflow-hidden bg-[#0b0a12] py-24 text-white'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-[0.035]'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className='relative mx-auto max-w-6xl px-5 sm:px-8'>
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14 max-w-3xl'
        >
          <div className='mb-5 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
            <span className='h-px w-8 bg-[#fb923c]' />
            Changelog
          </div>

          <div className='flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between'>
            <div>
              <h2 className='text-4xl font-black tracking-[-0.045em] sm:text-5xl'>
                What's new in
                <span className='text-[#a78bfa]'> 2.3</span>
              </h2>

              <p className='mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base'>
                The latest changes to Java Lava, released May 19, 2026.
              </p>
            </div>

            <div className='shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-white/25'>
              Release / 2.3
            </div>
          </div>
        </motion.header>

        <div className='divide-y divide-white/10 border-y border-white/10'>
          {updates.map((update, index) => {
            const Icon = update.icon;

            return (
              <motion.article
                key={update.title}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                }}
                className='group grid gap-6 py-8 sm:grid-cols-[120px_48px_1fr] sm:items-start'
              >
                <div className='font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/25'>
                  {update.type}
                </div>

                <div className='flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.025] text-[#a78bfa] transition-colors duration-200 group-hover:border-[#a78bfa]/30 group-hover:text-[#c4b5fd]'>
                  <Icon className='h-5 w-5' />
                </div>

                <div className='max-w-3xl'>
                  <h3 className='text-xl font-bold tracking-[-0.02em] text-white'>
                    {update.title}
                  </h3>

                  <p className='mt-2 text-sm leading-6 text-white/45'>
                    {update.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'
        >
          <p className='font-mono text-[10px] uppercase tracking-[0.16em] text-white/20'>
            More changes are documented in the full changelog
          </p>

          <a
            href='/docs/updates'
            className='inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-4 focus:ring-offset-[#0b0a12]'
          >
            View changelog
            <span aria-hidden='true'>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
