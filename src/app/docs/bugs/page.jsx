'use client';

import {
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const bugCategories = [
  {
    name: 'Major Bugs',
    icon: ShieldCheckIcon,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Bugs that significantly impact functionality',
    bugs: [
      {
        name: 'Honeypot - spam bots ignore the honeypot channel because the channel is named honeypot.',
        description:
          'We have been made aware of issues where the scam bots are starting to become several steps ahead of us with seeing the channel names, and message history. We are going to be adding a system where users can have required channel names that rotate every 72 hours (3 days).',
        Reproduced:
          'We have been made aware of this issue by several users, and we have seen it ourselves as well. We are currently working on a fix for this and it will be updated in the next week or two.',
      },
      {
        name: 'Warn command - failing to save data',
        description:
          'We have noticed on our database that the bot is failing to save data on the warn and warn remove commands. We are currently working on a fix for it.',
        Reproduced:
          'We have found it several times. It will be a few days before everything is updated as we have higher priority issues at this time.',
      },
    ],
  },
  {
    name: 'Intermediate Bugs',
    icon: ChatBubbleLeftRightIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Bugs that affect user interaction and experience',
    bugs: [
      {
        name: 'None found yet',
        description: "We haven't identified any intermediate bugs so far.",
        Reproduced: '',
      },
    ],
  },
  {
    name: 'Minor Bugs',
    icon: SparklesIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    description: 'Bugs that affect minor features and aesthetics',
    bugs: [
      {
        name: 'Commands Used number - placeholder text',
        description:
          'We are aware of an issue where the "Commands Used" number in the help command is showing as placeholder text instead of the actual number. We are currently working on a fix for this.',
        Reproduced:
          'Correct, this is just placeholder text that we forgot to update. We are currently working on a fix for this and it will be updated in the next few weeks once we make a websocket/API update.',
      },
    ],
  },
];

export default function BugsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedBugs, setExpandedBugs] = useState({});

  const toggleBugDetails = (categoryName, bugName) => {
    const key = `${categoryName}-${bugName}`;

    setExpandedBugs(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filteredCategories = bugCategories
    .map(category => ({
      ...category,
      bugs: category.bugs.filter(
        bug =>
          bug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bug.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bug.Reproduced.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => {
      if (selectedCategory === 'all') {
        return category.bugs.length > 0;
      }

      return category.name.toLowerCase() === selectedCategory;
    });

  const totalBugs = bugCategories.reduce(
    (total, category) => total + category.bugs.length,
    0
  );

  return (
    <>
      <StatusScript />
      <Header />

      <main className='min-h-screen bg-[var(--color-dark)]'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6'>
              <CommandLineIcon className='h-5 w-5 text-[var(--color-primary)] mr-2' />

              <span className='text-sm font-medium text-[var(--color-primary)]'>
                Reported Bugs
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
              Java Lava&apos;s Reported Bugs
            </h1>

            <p className='text-xl text-gray-400 max-w-3xl mx-auto mb-8'>
              Discover all {totalBugs} reported bugs in Java Lava. From
              moderation systems to community features, this page keeps track of
              known issues and their current status.
            </p>

            {/* Search and Filter */}
            <div className='flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto'>
              {/* Search */}
              <div className='relative flex-1'>
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none' />

                <input
                  type='text'
                  placeholder='Search bugs...'
                  className='w-full pl-10 pr-4 py-3 bg-gray-900/60 border border-gray-700/70 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)]/50 transition-all'
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Filter */}
              <select
                className='px-4 py-3 bg-gray-900/60 border border-gray-700/70 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/50 focus:border-[var(--color-primary)]/50 transition-all cursor-pointer'
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value='all'>All Categories</option>

                {bugCategories.map(category => (
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

          {/* Bug Categories */}
          <div className='space-y-14'>
            {filteredCategories.map((category, categoryIndex) => {
              if (category.bugs.length === 0) {
                return null;
              }

              const Icon = category.icon;

              return (
                <section key={categoryIndex} className='space-y-6'>
                  {/* Category Header */}
                  <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                    <div
                      className={`flex items-center justify-center p-3 rounded-xl ${category.bgColor} ${category.borderColor} border`}
                    >
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>

                    <div>
                      <h2 className={`text-3xl font-bold ${category.color}`}>
                        {category.name}
                      </h2>

                      <p className='text-gray-400 mt-1'>
                        {category.description}
                      </p>
                    </div>

                    <div className='sm:ml-auto'>
                      <span
                        className={`inline-flex px-3 py-1.5 text-sm font-medium rounded-full ${category.bgColor} ${category.color} border ${category.borderColor}`}
                      >
                        {category.bugs.length}{' '}
                        {category.bugs.length === 1 ? 'bug' : 'bugs'}
                      </span>
                    </div>
                  </div>

                  {/* Single-column Bug List */}
                  <div className='space-y-4'>
                    {category.bugs.map(bug => {
                      const uniqueKey = `${category.name}-${bug.name}`;
                      const isExpanded = expandedBugs[uniqueKey];

                      return (
                        <div
                          key={uniqueKey}
                          className={`group relative overflow-hidden rounded-2xl border ${category.borderColor} bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-950/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:border-opacity-60`}
                        >
                          {/* Left Accent */}
                          <div
                            className={`absolute left-0 top-0 bottom-0 w-1 ${category.bgColor}`}
                          />

                          <div className='p-6 sm:p-7'>
                            {/* Bug Header */}
                            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5'>
                              <div className='flex-1 min-w-0'>
                                <div className='flex items-start gap-3'>
                                  {/* Status Indicator */}
                                  <div
                                    className={`flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full ${category.bgColor} border ${category.borderColor}`}
                                  />

                                  <div className='min-w-0'>
                                    <h3 className='text-lg sm:text-xl font-semibold text-white leading-relaxed'>
                                      {bug.name}
                                    </h3>

                                    <p className='mt-2 text-sm text-gray-400 leading-relaxed'>
                                      {bug.description}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Details Button */}
                              <button
                                type='button'
                                onClick={() =>
                                  toggleBugDetails(category.name, bug.name)
                                }
                                className={`flex-shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border ${category.borderColor} ${category.bgColor} ${category.color} text-sm font-medium transition-all duration-200 hover:brightness-125 hover:scale-[1.02] active:scale-[0.98]`}
                              >
                                <span>
                                  {isExpanded ? 'Hide Details' : 'View Details'}
                                </span>

                                <svg
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    isExpanded ? 'rotate-180' : ''
                                  }`}
                                  fill='none'
                                  viewBox='0 0 24 24'
                                  stroke='currentColor'
                                  strokeWidth='2'
                                >
                                  <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='m19 9-7 7-7-7'
                                  />
                                </svg>
                              </button>
                            </div>

                            {/* Expanded Details */}
                            {isExpanded && (
                              <div className='mt-6 pt-6 border-t border-gray-800/80'>
                                <div className='rounded-xl bg-black/25 border border-gray-800/70 p-5'>
                                  <div className='flex items-center gap-2 mb-3'>
                                    <div
                                      className={`h-2 w-2 rounded-full ${category.bgColor} border ${category.borderColor}`}
                                    />

                                    <span className='text-sm font-semibold text-gray-300'>
                                      Reproduction / Status
                                    </span>
                                  </div>

                                  <p className='text-sm text-gray-400 leading-relaxed'>
                                    {bug.Reproduced ||
                                      'No reproduction steps have been provided.'}
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {/* No Search Results */}
          {searchTerm &&
            filteredCategories.every(
              category => category.bugs.length === 0
            ) && (
              <div className='text-center py-16'>
                <div className='inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gray-900/70 border border-gray-800 mb-5'>
                  <CommandLineIcon className='h-8 w-8 text-gray-600' />
                </div>

                <h3 className='text-xl font-medium text-gray-300 mb-2'>
                  No bugs found
                </h3>

                <p className='text-gray-500'>
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}

          {/* Need Help Section */}
          <div className='mt-16 relative overflow-hidden text-center p-8 sm:p-10 bg-gradient-to-br from-[var(--color-secondary)]/10 via-gray-900/40 to-[var(--color-primary)]/10 rounded-2xl border border-[var(--color-secondary)]/20'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none' />

            <CommandLineIcon className='relative h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4' />

            <h3 className='relative text-2xl font-bold text-white mb-2'>
              Need to Report a Bug or Get Help?
            </h3>

            <p className='relative text-gray-400 mb-6 max-w-md mx-auto'>
              Join our Discord community for reporting bugs, seeking support,
              and connecting with other users.
            </p>

            <a
              href='/support'
              className='relative inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-xl hover:bg-[var(--color-secondary)]/80 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[var(--color-secondary)]/10'
            >
              <span>Get Support</span>

              <svg className='h-4 w-4' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
                <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-800'>
            <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
              <a
                href='/docs'
                className='inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 hover:bg-gray-800/80 hover:text-white hover:border-gray-600 transition-all'
              >
                ← Back to Docs
              </a>

              <div className='text-sm text-gray-500'>
                {totalBugs} bugs • Last updated: January 8, 2025
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
