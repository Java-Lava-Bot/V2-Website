'use client';

import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  LinkIcon,
  NoSymbolIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';

const alerts = [
  {
    icon: NoSymbolIcon,
    command: 'STAFF_DM',
    title: 'Staff will not DM you first',
    description:
      'Java Lava staff will not contact you first asking for passwords, tokens, or payments.',
  },
  {
    icon: LinkIcon,
    command: 'LINK_CHECK',
    title: 'Check links before opening them',
    description:
      "Be careful with shortened links and websites you don't recognize. Check where a link leads before opening it.",
  },
  {
    icon: EnvelopeIcon,
    command: 'GIVEAWAY',
    title: 'Treat giveaways with caution',
    description:
      'Fake Nitro offers and verification pages are common ways to trick Discord users into giving away account access.',
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    command: 'IDENTITY',
    title: 'Check for impersonators',
    description:
      "A copied username or profile picture doesn't make someone staff. Check their username, roles, and server permissions.",
  },
  {
    icon: ShieldCheckIcon,
    command: 'ACCOUNT',
    title: 'Protect your account',
    description:
      'Use a strong password and enable two-factor authentication on your Discord account.',
  },
  {
    icon: ExclamationTriangleIcon,
    command: 'REPORT',
    title: 'Report suspicious activity',
    description:
      'Report suspicious messages to Discord and tell the server moderators so they can review what happened.',
  },
];

export default function ScamAlertSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className='relative isolate overflow-hidden bg-[#0b0a12] py-28 text-white'>
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
        className='pointer-events-none absolute left-[-14rem] top-24 h-[32rem] w-[32rem] rounded-full bg-[#fb923c]/[0.06] blur-[130px]'
      />

      <div className='relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end'
        >
          <div>
            <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#fb923c]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / security
            </div>

            <h2 className='text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Don't give
              <br />
              <span className='text-[#fb923c]'>scammers access.</span>
            </h2>
          </div>

          <div className='max-w-xl lg:justify-self-end'>
            <p className='text-base leading-7 text-white/50 sm:text-lg'>
              Most Discord scams rely on a small number of tricks. These checks
              can help you spot them before they become a problem.
            </p>
          </div>
        </motion.div>

        <div className='relative overflow-hidden border border-white/10 bg-[#11101a]'>
          <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
            <div className='flex items-center gap-3'>
              <div className='flex gap-1.5'>
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
              </div>

              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                java-lava / security.check
              </span>
            </div>

            <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#fb923c]'>
              <ExclamationTriangleIcon className='h-3.5 w-3.5' />
              Attention
            </div>
          </div>

          <div className='divide-y divide-white/10'>
            {alerts.map((alert, index) => {
              const Icon = alert.icon;

              return (
                <motion.div
                  key={alert.command}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -15 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.05,
                  }}
                  className='group grid gap-5 px-5 py-6 transition-colors hover:bg-white/[0.025] sm:grid-cols-[180px_1fr_auto] sm:items-center sm:px-7'
                >
                  <div className='flex items-center gap-3'>
                    <div className='flex h-9 w-9 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                      <Icon className='h-4 w-4' />
                    </div>

                    <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                      {alert.command}
                    </span>
                  </div>

                  <div>
                    <h3 className='text-base font-semibold text-white/90'>
                      {alert.title}
                    </h3>

                    <p className='mt-1 max-w-2xl text-sm leading-6 text-white/40'>
                      {alert.description}
                    </p>
                  </div>

                  <div className='hidden font-mono text-[10px] text-white/15 sm:block'>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className='flex flex-col gap-4 border-t border-white/10 bg-black/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7'>
            <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
              If something feels wrong, stop before continuing.
            </div>

            <div className='flex flex-col gap-3 sm:flex-row'>
              <a
                href='https://discord.com/safety/360044104071-tips-against-spam-and-hacking'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-11 items-center justify-center gap-2 bg-[#a78bfa] px-5 font-semibold text-[#0b0a12] transition-colors hover:bg-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#11101a]'
              >
                Discord safety guide
                <span>→</span>
              </a>

              <a
                href='/support'
                className='inline-flex min-h-11 items-center justify-center border border-white/10 bg-white/[0.03] px-5 font-semibold text-white/75 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30'
              >
                Report a scam
              </a>
            </div>
          </div>
        </div>

        <div className='mt-12 border-y border-white/10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              Java Lava security guidance
            </span>

            <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-emerald-400'>
              Checks active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
