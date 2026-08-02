'use client';

import {
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { useMemo, useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

export const commandCategories = [
  {
    name: 'Moderation',
    icon: ShieldCheckIcon,
    color: 'text-red-400',
    accent: '#f87171',
    description: 'Powerful tools to keep your server safe and organized',
    commands: [
      {
        name: '/ban',
        description: 'Ban a member from the server',
        usage: '/ban @user [reason]',
        permissions: 'Ban Members',
        examples: ['/ban @user Spamming in chat', '/ban @user'],
      },
      {
        name: '/ban-remove',
        description: 'Unban a previously banned member',
        usage: '/ban-remove @user [reason]',
        permissions: 'Ban Members',
        examples: [
          '/ban-remove @user Accidental or appealed',
          '/ban-remove @user',
        ],
      },
      {
        name: '/ban-temp',
        description: 'Temporarily ban a member from the server',
        usage: '/ban-temp @user <duration> [reason]',
        permissions: 'Ban Members',
        examples: ['/ban-temp @user 1h Spamming', '/ban-temp @user 30m'],
      },
      {
        name: '/ban-soft',
        description: 'Kick a member and delete their recent messages',
        usage: '/ban-soft @user [reason]',
        permissions: 'Ban Members',
        examples: ['/ban-soft @user Spamming', '/ban-soft @user'],
      },
      {
        name: '/kick',
        description: 'Remove a member from the server',
        usage: '/kick @user [reason]',
        permissions: 'Kick, Approve, and Reject Members',
        examples: ['/kick @user Breaking rules'],
      },
      {
        name: '/timeout',
        description: "Temporarily restrict a member's ability to interact",
        usage: '/timeout @user <duration> [reason]',
        permissions: 'Moderate/Timeout Members',
        examples: [
          '/timeout @user 10m Inappropriate behavior',
          '/timeout @user 1h',
        ],
      },
      {
        name: '/timeout-remove',
        description: "Remove a member's timeout restriction",
        usage: '/timeout-remove @user [reason]',
        permissions: 'Moderate/Timeout Members',
        examples: [
          '/timeout-remove @user Accidental or appealed',
          '/timeout-remove @user',
        ],
      },
      {
        name: '/warn',
        description: 'Issue a warning to a member',
        usage: '/warn @user <reason>',
        permissions: 'Manage Messages',
        examples: ['/warn @user Please follow server rules'],
      },
      {
        name: '/warn-remove',
        description: 'Remove a warning from a member',
        usage: '/warn-remove @user <reason>',
        permissions: 'Manage Messages',
        examples: ['/warn-remove @user Incorrect warning'],
      },
      {
        name: '/purge',
        description: 'Delete multiple messages at once',
        usage: '/purge <amount> [user]',
        permissions: 'Manage Messages',
        examples: ['/purge 10', '/purge 5 @user'],
      },
      {
        name: '/lock',
        description: 'Lock a channel to prevent new messages',
        usage: '/lock [channel] [reason]',
        permissions: 'Manage Channels',
        examples: ['/lock #general Maintenance', '/lock'],
      },
      {
        name: '/lock-remove',
        description: 'Unlock a previously locked channel',
        usage: '/lock-remove [channel] [reason]',
        permissions: 'Manage Channels',
        examples: [
          '/lock-remove #general Maintenance complete',
          '/lock-remove',
        ],
      },
      {
        name: '/nickname',
        description: "Change a member's nickname",
        usage: '/nickname @user [new nickname]',
        permissions: 'Manage Nicknames',
        examples: ['/nickname @user NewNickname', '/nickname @user'],
      },
      {
        name: '/role-add',
        description: 'Add a role to a member',
        usage: '/role-add @user <role>',
        permissions: 'Manage Roles',
        examples: ['/role-add @user @Member', '/role-add @user @Moderator'],
      },
      {
        name: '/role-remove',
        description: 'Remove a role from a member',
        usage: '/role-remove @user <role>',
        permissions: 'Manage Roles',
        examples: [
          '/role-remove @user @Member',
          '/role-remove @user @Moderator',
        ],
      },
      {
        name: '/slowmode',
        description: 'Set a slowmode duration for a channel',
        usage: '/slowmode [channel] <duration>',
        permissions: 'Manage Channels',
        examples: ['/slowmode #general 10s', '/slowmode 5m'],
      },
      {
        name: '/report',
        description: 'Report a member to the moderation team',
        usage: '/report @user <reason>',
        permissions: 'Use Application Commands',
        examples: ['/report @user Spamming in chat'],
      },
      {
        name: '/report-setup',
        description: 'Setup report configuration for the moderation team',
        usage: '/report-setup [channel]',
        permissions: 'Manage Server',
        examples: ['/report-setup #reports', '/report-setup'],
      },
    ],
  },

  {
    name: 'Community',
    icon: ChatBubbleLeftRightIcon,
    color: 'text-blue-400',
    accent: '#60a5fa',
    description: 'Engage your community with interactive features',
    commands: [
      {
        name: '/clicker',
        description: 'Fun clicking game for community engagement',
        usage: '/clicker',
        permissions: 'Use Application Commands',
        examples: ['/clicker'],
      },
      {
        name: '/poll',
        description: 'Create interactive polls for your server',
        usage: '/poll <question> <option1> <option2> [more options]',
        permissions: 'Manage Messages',
        examples: ['/poll "What should we do next?" Gaming Movie Night'],
      },
      {
        name: '/giveaway',
        description:
          'Host giveaways in your server to boost engagement - Under development and may not work properly',
        usage: '/giveaway <prize> <duration> <winners>',
        permissions: 'Manage Server',
        examples: ['/giveaway "Discord Nitro" 1h 1'],
      },
      {
        name: '/welcome',
        description:
          'Configure welcome messages for new members - Under development and may not work properly',
        usage: '/welcome setup [channel] [message]',
        permissions: 'Manage Server',
        examples: ['/welcome setup #general "Welcome {user}!"'],
      },
    ],
  },

  {
    name: 'Fun',
    icon: SparklesIcon,
    color: 'text-purple-400',
    accent: '#a78bfa',
    description: 'Entertainment commands to keep your server lively',
    commands: [
      {
        name: '/meme',
        description: 'Get a random meme to share',
        usage: '/meme [category]',
        permissions: 'Use Application Commands',
        examples: ['/meme', '/meme programming'],
      },
      {
        name: '/8ball',
        description: 'Ask the magic 8-ball a question',
        usage: '/8ball <question>',
        permissions: 'Use Application Commands',
        examples: ['/8ball Will it rain tomorrow?'],
      },
      {
        name: '/joke',
        description: 'Get a random joke',
        usage: '/joke [type]',
        permissions: 'Use Application Commands',
        examples: ['/joke', '/joke dad'],
      },
      {
        name: '/poke',
        description: 'Poke the Java Lava bot playfully',
        usage: '/poke',
        permissions: 'Use Application Commands',
        examples: ['/poke'],
      },
    ],
  },

  {
    name: 'Utility',
    icon: WrenchScrewdriverIcon,
    color: 'text-green-400',
    accent: '#4ade80',
    description: 'Helpful tools and information commands',
    commands: [
      {
        name: '/reminder',
        description: 'Set a reminder for yourself or others',
        usage: '/reminder <time> <message> [user]',
        permissions: 'Use Application Commands',
        examples: [
          '/reminder 1h Take a break',
          '/reminder 30m @user Meeting starts',
        ],
      },
      {
        name: '/userinfo',
        description:
          'Get information about a user - Under development and may not work properly',
        usage: '/userinfo [user]',
        permissions: 'Use Application Commands',
        examples: ['/userinfo @user', '/userinfo'],
      },
      {
        name: '/serverinfo',
        description:
          'Display server information and statistics - Under development and may not work properly',
        usage: '/serverinfo',
        permissions: 'Use Application Commands',
        examples: ['/serverinfo'],
      },
      {
        name: '/avatar',
        description:
          "Display a user's avatar - Under development and may not work properly",
        usage: '/avatar [user]',
        permissions: 'Use Application Commands',
        examples: ['/avatar @user', '/avatar'],
      },
      {
        name: '/ping',
        description: "Check Java Lava's latency and responsiveness.",
        usage: '/ping',
        permissions: 'Use Application Commands',
        examples: ['/ping'],
      },
      {
        name: '/study-buddy',
        description:
          "DM's ONLY COMMAND - Use Java Lava as a study buddy to help ace your tests and quizzes while using Discord!",
        usage: '/study-buddy',
        permissions: "DM's with Bot",
        examples: ['/study-buddy'],
      },
    ],
  },
];

export default function CommandsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCommands, setExpandedCommands] = useState({});

  const totalCommands = useMemo(
    () =>
      commandCategories.reduce(
        (total, category) => total + category.commands.length,
        0
      ),
    []
  );

  const filteredCategories = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return commandCategories
      .map(category => ({
        ...category,
        commands: category.commands.filter(command => {
          if (!search) return true;

          return (
            command.name.toLowerCase().includes(search) ||
            command.description.toLowerCase().includes(search) ||
            command.usage.toLowerCase().includes(search)
          );
        }),
      }))
      .filter(category => {
        if (selectedCategory === 'all') {
          return category.commands.length > 0;
        }

        return (
          category.name.toLowerCase() === selectedCategory &&
          category.commands.length > 0
        );
      });
  }, [searchTerm, selectedCategory]);

  const toggleCommandDetails = (categoryName, commandName) => {
    const key = `${categoryName}-${commandName}`;

    setExpandedCommands(previous => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  return (
    <>
      <StatusScript />
      <Header />

      <main className='relative isolate min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
        {/* Shared grid background */}
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

        {/* Purple glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-14rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
        />

        {/* Orange glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14rem] top-[50rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10'>
          {/* Header */}
          <div className='mb-14 text-center'>
            <div className='mb-5 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / commands
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Java Lava
              <br />
              <span className='text-[#a78bfa]'>Commands.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              Browse {totalCommands} commands across moderation, community, fun,
              and utility features.
            </p>

            {/* Search */}
            <div className='mx-auto mt-9 flex max-w-3xl flex-col gap-3 sm:flex-row'>
              <div className='relative flex-1'>
                <MagnifyingGlassIcon className='pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/25' />

                <input
                  type='text'
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)}
                  placeholder='Search commands...'
                  className='w-full border border-white/10 bg-[#11101a] py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/25 transition-colors focus:border-[#a78bfa]/40'
                />
              </div>

              <select
                value={selectedCategory}
                onChange={event => setSelectedCategory(event.target.value)}
                className='border border-white/10 bg-[#11101a] px-4 py-3.5 text-sm text-white/60 outline-none transition-colors focus:border-[#a78bfa]/40'
              >
                <option value='all'>All Categories</option>

                {commandCategories.map(category => (
                  <option
                    key={category.name}
                    value={category.name.toLowerCase()}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className='space-y-14'>
            {filteredCategories.map(category => {
              const Icon = category.icon;

              return (
                <section key={category.name}>
                  {/* Category header */}
                  <div className='mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between'>
                    <div className='flex items-center gap-4'>
                      <div
                        className='flex h-11 w-11 shrink-0 items-center justify-center border bg-white/[0.02]'
                        style={{
                          borderColor: `${category.accent}33`,
                          color: category.accent,
                        }}
                      >
                        <Icon className='h-5 w-5' />
                      </div>

                      <div>
                        <div
                          className='mb-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em]'
                          style={{ color: category.accent }}
                        >
                          Command category
                        </div>

                        <h2 className='text-2xl font-bold tracking-[-0.02em] text-white/90'>
                          {category.name}
                        </h2>

                        <p className='mt-1 text-sm text-white/35'>
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className='self-start border px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em]'
                      style={{
                        borderColor: `${category.accent}33`,
                        color: category.accent,
                        backgroundColor: `${category.accent}08`,
                      }}
                    >
                      {category.commands.length} commands
                    </div>
                  </div>

                  {/* Command grid */}
                  <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
                    {category.commands.map(command => {
                      const uniqueKey = `${category.name}-${command.name}`;
                      const isExpanded = expandedCommands[uniqueKey];

                      return (
                        <article
                          key={uniqueKey}
                          className='group relative overflow-hidden border border-white/10 bg-[#11101a] transition-all duration-200 hover:border-white/15 hover:bg-[#13121c]'
                        >
                          <div className='p-5'>
                            <div className='mb-4 flex items-start justify-between gap-3'>
                              <div>
                                <div
                                  className='mb-2 font-mono text-[9px] uppercase tracking-[0.14em]'
                                  style={{ color: `${category.accent}99` }}
                                >
                                  {category.name}
                                </div>

                                <h3 className='font-mono text-base font-bold text-white/90'>
                                  {command.name}
                                </h3>
                              </div>

                              <button
                                type='button'
                                onClick={() =>
                                  toggleCommandDetails(
                                    category.name,
                                    command.name
                                  )
                                }
                                className='shrink-0 border border-white/10 bg-white/[0.025] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-white/40 transition-colors hover:border-white/20 hover:text-white/70'
                              >
                                {isExpanded ? 'Less' : 'More'}
                              </button>
                            </div>

                            <p className='min-h-[3rem] text-sm leading-6 text-white/40'>
                              {command.description}
                            </p>

                            <div className='mt-5'>
                              <div className='mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/20'>
                                Usage
                              </div>

                              <code className='block overflow-x-auto border border-white/5 bg-black/20 p-3 font-mono text-xs leading-5 text-white/60'>
                                {command.usage}
                              </code>
                            </div>

                            {isExpanded && (
                              <div className='mt-5 space-y-5 border-t border-white/10 pt-5'>
                                <div>
                                  <div className='mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/20'>
                                    Required permission
                                  </div>

                                  <div className='border border-white/5 bg-white/[0.015] p-3 text-sm text-white/45'>
                                    {command.permissions}
                                  </div>
                                </div>

                                <div>
                                  <div className='mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/20'>
                                    Examples
                                  </div>

                                  <div className='space-y-2'>
                                    {command.examples.map((example, index) => (
                                      <code
                                        key={index}
                                        className='block overflow-x-auto border border-white/5 bg-black/20 p-3 font-mono text-xs leading-5 text-white/55'
                                      >
                                        {example}
                                      </code>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>

                          <div
                            className='absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full'
                            style={{ backgroundColor: category.accent }}
                          />
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {/* No results */}
          {filteredCategories.length === 0 && (
            <div className='border border-white/10 bg-[#11101a] px-6 py-16 text-center'>
              <CommandLineIcon className='mx-auto mb-4 h-12 w-12 text-white/15' />

              <h2 className='text-xl font-semibold text-white/70'>
                No commands found
              </h2>

              <p className='mt-2 text-sm text-white/30'>
                Try adjusting your search or category filter.
              </p>
            </div>
          )}

          {/* Help */}
          <section className='mt-16 overflow-hidden border border-white/10 bg-[#11101a]'>
            <div className='p-6 text-center sm:p-8'>
              <CommandLineIcon className='mx-auto mb-4 h-10 w-10 text-[#a78bfa]' />

              <div className='mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#a78bfa]'>
                Need assistance?
              </div>

              <h2 className='text-2xl font-bold tracking-[-0.02em] text-white/90'>
                Need help with a command?
              </h2>

              <p className='mx-auto mt-3 max-w-xl text-sm leading-6 text-white/35'>
                Join the Java Lava community for support, examples, and help
                configuring commands for your server.
              </p>

              <a
                href='/support'
                className='mt-6 inline-flex min-h-10 items-center gap-2 border border-white/10 bg-white/[0.025] px-5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/50 transition-colors hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/[0.06] hover:text-[#c4b5fd]'
              >
                Get Support
                <span>→</span>
              </a>
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
                {totalCommands} Commands • Updated August 2, 2026
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
