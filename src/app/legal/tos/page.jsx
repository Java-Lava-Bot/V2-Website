'use client';

import { ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: (
      <p>
        By using Java Lava, you confirm that you are at least 13 years old and
        meet the minimum age requirements established by Discord's Terms of
        Service. If you do not agree with these terms, you should remove Java
        Lava from your server and discontinue use of the service.
      </p>
    ),
  },
  {
    title: 'Usage Guidelines',
    content: (
      <>
        <p>
          You agree to use Java Lava as intended and in compliance with
          Discord's Terms of Service and Community Guidelines.
        </p>

        <ul>
          <li>
            Do not exploit, reverse engineer, or attempt to modify the bot.
          </li>
          <li>
            Do not use the bot for spam, harassment, or illegal activities.
          </li>
          <li>
            Respect other users and maintain a positive community environment.
          </li>
          <li>Report bugs and issues through the official support channels.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Data Collection & Privacy',
    content: (
      <>
        <p>
          Java Lava collects minimal data necessary for functionality, including
          server information, command usage statistics, error logs, and user IDs
          required for command execution and moderation features.
        </p>

        <p>
          For complete details about how Java Lava handles data, see our{' '}
          <a href='/legal/privacy'>Privacy Policy</a>.
        </p>
      </>
    ),
  },
  {
    title: 'Service Availability',
    content: (
      <p>
        Java Lava is provided "as is" without warranties of any kind. We work to
        maintain reliable service, but uninterrupted availability cannot be
        guaranteed. Planned maintenance may be announced in advance when
        possible.
      </p>
    ),
  },
  {
    title: 'Limitations & Liability',
    content: (
      <p>
        To the extent permitted by applicable law, the Java Lava development
        team is not responsible for damages, data loss, server issues, service
        interruptions, or other problems resulting from use of the bot. Server
        administrators are responsible for maintaining appropriate backups and
        configurations.
      </p>
    ),
  },
  {
    title: 'Enforcement & Termination',
    content: (
      <p>
        We reserve the right to restrict, suspend, or terminate access to Java
        Lava for users or servers that violate these terms or applicable Discord
        policies. Violations may result in immediate termination of service
        without prior notice.
      </p>
    ),
  },
  {
    title: 'Changes to Terms',
    content: (
      <p>
        These terms may be updated as Java Lava evolves. Significant changes may
        be announced through the official Java Lava support server or other
        official communication channels. Continued use of Java Lava after
        changes become effective constitutes acceptance of the updated terms.
      </p>
    ),
  },
  {
    title: 'Discord Integration',
    content: (
      <p>
        Java Lava operates within Discord's ecosystem and depends on Discord's
        services and APIs. Your use of Discord remains subject to Discord's
        Terms of Service, Community Guidelines, and Privacy Policy.
      </p>
    ),
  },
  {
    title: 'Contact Information',
    content: (
      <>
        <p>For questions, concerns, or support:</p>

        <ul>
          <li>
            Discord: <strong>PhillsPhanbh3_the_bot_developer</strong>
          </li>

          <li>
            Support Server:{' '}
            <a
              href='https://discord.gg/tM8Y5acUta'
              target='_blank'
              rel='noopener noreferrer'
            >
              Join our community →
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function TermsOfService() {
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
          {/* Header - matches Cookies Policy */}
          <div className='mb-14 text-center'>
            <div className='mb-5 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#a78bfa]' />
              Java Lava / legal
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Terms of
              <br />
              <span className='text-[#a78bfa]'>Service.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              The terms and conditions governing your use of Java Lava.
            </p>

            <div className='mt-6 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
              <ClockIcon className='h-4 w-4' />
              <span>Last updated: August 2, 2026</span>
            </div>
          </div>

          {/* Terms content */}
          <article className='space-y-5'>
            {sections.map((section, index) => (
              <section
                key={section.title}
                className='border border-white/10 bg-[#11101a] p-6 sm:p-7'
              >
                <div className='mb-5 flex items-center gap-4'>
                  <span className='font-mono text-[10px] text-[#a78bfa]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                    {section.title}
                  </h2>
                </div>

                <div className='max-w-3xl text-sm leading-7 text-white/45 [&_a]:text-[#a78bfa] [&_a]:underline [&_a]:decoration-[#a78bfa]/30 [&_a]:underline-offset-4 [&_a:hover]:text-[#c4b5fd] [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-2 [&_li]:text-white/45 [&_p+p]:mt-4'>
                  {section.content}
                </div>
              </section>
            ))}
          </article>

          {/* Navigation */}
          <div className='mt-12 border-y border-white/10 py-5'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/docs'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                ← Documentation
              </a>

              <div className='flex flex-wrap items-center gap-6'>
                <a
                  href='/legal/privacy'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd]'
                >
                  Privacy Policy →
                </a>

                <a
                  href='/legal/cookies'
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
                >
                  Cookies Policy →
                </a>
              </div>
            </div>
          </div>

          {/* Footer label */}
          <div className='mt-8 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/15'>
            <ShieldCheckIcon className='h-3.5 w-3.5' />
            Java Lava / Legal &amp; Terms
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
