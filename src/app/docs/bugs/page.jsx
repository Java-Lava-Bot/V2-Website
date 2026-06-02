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
        name: 'Several prefix commands failing to work',
        description: 'We are currently aware of a ongoing issue with several prefix commands failing to work at this time, looking like only 2 prefix commands are working, we are currently working on multiple fixes for this and it probably will be v2.3 next month or the following month, we will also be releasing some patches for some errors we have been getting on the bot later in the month just so yous are aware!',
        Reproduced: 'We have repoduced this issue multiple times on our end and even seen in logs that several prefix commands are failing to work, we are currently working on multiple fixes for this and it probably will be v2.3 next month or the following month, we will also be releasing some patches for some errors we have been getting on the bot later in the month just so yous are aware!',
      },
      {
        name: 'Warn command - failing to save data',
        description: 'We have noticed on our database that the bot is failing to save data on the warn and warn remove commands. We are currently working on a fix for it.',
        Reproduced: 'We have found it several times, it will be a few days before everything is updated as we have higher priority issues at this time.'
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
        description: 'We haven\'t identified any intermediate bugs so far.',
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
        name: 'Commmands Used number - placeholder text',
        description: 'We are aware of an issue where the "Commands Used" number in the help command is showing as placeholder text instead of the actual number, we are currently working on a fix for this.',
        Reproduced: 'Correct, this is just a placeholder text that we forgot to update, we are currently working on a fix for this and it will be updated in the next few weeks once we make a websocket/api update.',
      }
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
          bug.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(category => {
      if (selectedCategory === 'all') return category.bugs.length > 0;
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

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6">
              <CommandLineIcon className="h-5 w-5 text-[var(--color-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-primary)]">
                Reported Bugs
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Java Lava's Reported Bugs
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Discover all {totalBugs}+ bugs reported in Java Lava.
              From powerful moderation tools to fun community features.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search bugs..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
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

          {/* Commands Grid */}
          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => {
              if (category.bugs.length === 0) return null;

              const Icon = category.icon;

              return (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${category.bgColor} ${category.borderColor} border`}
                    >
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <div>
                      <h2 className={`text-3xl font-bold ${category.color}`}>
                        {category.name}
                      </h2>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                    <div className="ml-auto">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${category.bgColor} ${category.color}`}
                      >
                        {category.bugs.length} bugs
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {category.bugs.map((bug, bugIndex) => {
                      const uniqueKey = `${category.name}-${bug.name}`;

                      return (
                        <div
                          key={uniqueKey}
                          className={`relative p-6 rounded-xl border transition-all duration-300 hover:transform hover:translate-y-[-2px] ${category.bgColor} ${category.borderColor} hover:border-opacity-60`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-bold text-white font-mono pr-2">
                              {bug.name}
                            </h3>
                          </div>

                          <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[2.5rem]">
                            {bug.description}
                          </p>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-medium text-gray-400 mb-1 block">
                                Reproduced Steps:
                              </span>
                              <code className="block p-3 bg-black/30 rounded-md text-sm text-gray-200 font-mono leading-relaxed">
                                {bug.Reproduced}
                              </code>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {searchTerm &&
            filteredCategories.every(cat => cat.bugs.length === 0) && (
              <div className="text-center py-12">
                <CommandLineIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-400 mb-2">
                  No bugs found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria.
                </p>
              </div>
            )}

          {/* Need Help Section */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-2xl border border-[var(--color-secondary)]/20">
            <CommandLineIcon className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Need to Report a Bug or Get Help?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Join our Discord community for reporting bugs, seeking support,
              and connecting with other users.
            </p>
            <a
              href="/support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Get Support</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <a
                href="/docs"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors"
              >
                ← Back to Docs
              </a>
              <div className="text-sm text-gray-500">
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
