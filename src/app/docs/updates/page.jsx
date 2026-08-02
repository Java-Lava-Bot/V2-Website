'use client';

import {
  ArrowPathIcon,
  ClockIcon,
  PencilSquareIcon,
  SparklesIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { MdRemoveModerator } from 'react-icons/md';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const updates = [
  {
    id: 'v2.3 update',
    version: 'Java Lava v2.3',
    date: '05-30-2026',
    type: 'Major',
    title: 'Major Bot Update - Java Lava v2.3',
    description:
      'Honeypot system, new commands, performance improvements, and more!',
    changes: {
      added: [
        'Brand New Honeypot System!',
        'Honeypot system punishment settings (purge, timeout, soft ban)',
        'New Utility Commands: /avatar, /server-info, and /user-info',
        'Performance Improvements',
      ],
      updated: [
        'We have improved the performance of Java Lava, resulting in faster response times and a more efficient bot overall!',
        'We have also improved the error handling and stability of the bot, ensuring a smoother experience for all users!',
        'We have updated the website to include the latest features and improvements!',
      ],
      deprecated: ['No deprecated features in this update.'],
      removed: ['No removed features in this update.'],
    },
  },
];

const getTypeColor = type => {
  switch (type.toLowerCase()) {
    case 'major':
      return {
        bg: 'bg-[#a78bfa]/10',
        border: 'border-[#a78bfa]/20',
        text: 'text-[#a78bfa]',
      };

    case 'minor':
      return {
        bg: 'bg-[#fb923c]/10',
        border: 'border-[#fb923c]/20',
        text: 'text-[#fb923c]',
      };

    case 'patch':
      return {
        bg: 'bg-emerald-400/10',
        border: 'border-emerald-400/20',
        text: 'text-emerald-400',
      };

    default:
      return {
        bg: 'bg-white/[0.04]',
        border: 'border-white/10',
        text: 'text-white/50',
      };
  }
};

const formatDate = dateString => {
  const [month, day, year] = dateString.split('-');

  return new Date(
    Number(year),
    Number(month) - 1,
    Number(day)
  ).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const changeSections = [
  {
    key: 'added',
    title: 'Added',
    icon: SparklesIcon,
    color: 'text-emerald-400',
    border: 'border-emerald-400/20',
  },
  {
    key: 'updated',
    title: 'Updated',
    icon: PencilSquareIcon,
    color: 'text-[#a78bfa]',
    border: 'border-[#a78bfa]/20',
  },
  {
    key: 'deprecated',
    title: 'Deprecated',
    icon: MdRemoveModerator,
    color: 'text-[#fb923c]',
    border: 'border-[#fb923c]/20',
  },
  {
    key: 'removed',
    title: 'Removed',
    icon: TrashIcon,
    color: 'text-red-400',
    border: 'border-red-400/20',
  },
];

export default function UpdatesPage() {
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

        <div className='relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28'>
          {/* Header */}
          <div className='mb-14 max-w-2xl'>
            <div className='mb-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 rounded-full bg-[#fb923c]' />
              Changelog
            </div>

            <h1 className='text-4xl font-black tracking-[-0.04em] sm:text-5xl'>
              Java Lava Updates
            </h1>

            <p className='mt-5 max-w-2xl text-base leading-7 text-white/50 sm:text-lg'>
              Stay informed about the latest features, improvements, and bug
              fixes for Java Lava.
            </p>
          </div>

          {/* Updates */}
          <div className='space-y-6'>
            {updates.map(update => {
              const typeColors = getTypeColor(update.type);

              return (
                <article
                  key={update.id}
                  className='relative overflow-hidden border border-white/10 bg-[#11101a]'
                >
                  {/* Accent edge */}
                  <div className='absolute inset-y-0 left-0 w-px bg-[#a78bfa]/50' />

                  <div className='p-6 sm:p-8'>
                    {/* Update metadata */}
                    <div className='flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between'>
                      <div className='flex flex-wrap items-center gap-3'>
                        <span
                          className={`border px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${typeColors.bg} ${typeColors.border} ${typeColors.text}`}
                        >
                          {update.version}
                        </span>

                        <span className='flex items-center gap-2 text-sm text-white/35'>
                          <ClockIcon className='h-4 w-4' />
                          {formatDate(update.date)}
                        </span>
                      </div>

                      <span
                        className={`w-fit font-mono text-[10px] font-bold uppercase tracking-[0.15em] ${typeColors.text}`}
                      >
                        {update.type} update
                      </span>
                    </div>

                    {/* Title */}
                    <div className='py-7'>
                      <h2 className='text-2xl font-bold tracking-[-0.02em] sm:text-3xl'>
                        {update.title}
                      </h2>

                      <p className='mt-3 max-w-2xl text-sm leading-6 text-white/45 sm:text-base'>
                        {update.description}
                      </p>
                    </div>

                    {/* Changes */}
                    <div className='grid gap-4 md:grid-cols-2'>
                      {changeSections.map(section => {
                        const Icon = section.icon;
                        const items = update.changes[section.key];

                        return (
                          <div
                            key={section.key}
                            className='border border-white/[0.07] bg-white/[0.02] p-5'
                          >
                            <div className='mb-4 flex items-center gap-3'>
                              <div
                                className={`flex h-8 w-8 items-center justify-center border ${section.border} bg-white/[0.02]`}
                              >
                                <Icon className={`h-4 w-4 ${section.color}`} />
                              </div>

                              <h3
                                className={`text-sm font-semibold ${section.color}`}
                              >
                                {section.title}
                              </h3>
                            </div>

                            <ul className='space-y-3'>
                              {items.map((item, index) => (
                                <li
                                  key={index}
                                  className='flex gap-3 text-sm leading-6 text-white/45'
                                >
                                  <span className='mt-2 h-1 w-1 shrink-0 bg-white/25' />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Stay updated */}
          <div className='mt-10 border border-white/10 bg-[#11101a] p-6 sm:p-7'>
            <div className='flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <div className='mb-2 flex items-center gap-2'>
                  <ArrowPathIcon className='h-5 w-5 text-[#a78bfa]' />
                  <h3 className='font-semibold'>Stay updated</h3>
                </div>

                <p className='max-w-xl text-sm leading-6 text-white/40'>
                  Join our Discord community to get notified about new updates
                  and participate in beta testing.
                </p>
              </div>

              <div className='flex flex-col gap-2 sm:flex-row'>
                <a
                  href='https://discord.gg/tM8Y5acUta'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center justify-center border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-5 text-sm font-semibold text-[#a78bfa] transition-colors hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/15 hover:text-white'
                >
                  Join Discord
                  <span className='ml-2'>→</span>
                </a>

                <a
                  href='https://javalava.statuspage.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center justify-center border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-white/60 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
                >
                  Check Status
                  <span className='ml-2'>→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className='mt-12 border-t border-white/10 pt-6'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/docs'
                className='inline-flex w-fit items-center border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white'
              >
                ← Back to Docs
              </a>

              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                {updates.length} update • Last updated:{' '}
                {formatDate(updates[0].date)}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
