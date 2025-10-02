'use client';

import {
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const bugCategories = [
  {
    name: 'Moderation Bugs',
    icon: ShieldCheckIcon,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
    description: 'Bugs found in our moderation commands',
    bugs: [
      {
        name: 'Automod commands not showing up',
        description: 'We are getting issues with our automod commands not showing up in some servers, we are currently looking into recoding this just a fyi',
        reproduced: 'Yes this has been reproduced in multiple servers.',
      },
    ],
  },
  {
    name: 'Community Command Bugs',
    icon: ChatBubbleLeftRightIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    description: 'Bugs found in our community commands',
    bugs: [
      {
        name: 'Clicker command not showing up',
        description: 'We are getting issues with the clicker command not showing up in some servers, we are currently looking into recoding this just a fyi',
        reproduced: 'not yet but we are looking into it',
      },
    ],
  },
  {
    name: 'Fun command bugs',
    icon: SparklesIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    description: 'Bugs found in our commands that are meant for entertainment commands to keep your server lively',
    bugs: [
      {
        name: 'poke command not loading nor working',
        description: 'our poke command is not loading in some servers, others it is showing up but giving errors, we found the root cause',
        reproduced: 'Yes, has been reproduced in multiple servers.',
      },
    ],
  },
  {
    name: 'Utility bugs',
    icon: WrenchScrewdriverIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
    description: 'bugs found in our helpful tools and information commands',
    bugs: [
      {
        name: 'giveaway command not loading',
        description: 'getting reports of the giveaway command not loading, we are looking into it',
        reproduced: 'Yes. We have found that it is not showing up at all',
      },
      {
        name: 'Help command not loading',
        description: 'getting reports of the help command not loading, we are looking into it',
        reproduced: 'this bug has not been reproduced yet however we are trying our best to reproduce it',
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
        bugs =>
          bugs.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          bugs.description.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(
      category =>
        selectedCategory === 'all' ||
        category.name.toLowerCase() === selectedCategory ||
        category.bugs.length > 0
    );

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
                Command Reference
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Java Lava Bugs
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Discover all {totalBugs}+ bugs and issues in Java Lava.
              From powerful moderation tools to fun community features that are not working right!
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search commands..."
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
                    {category.bugs.map((bugs, bugsIndex) => {
                      const uniqueKey = `${category.name}-${bugs.name}`;
                      const isExpanded = expandedBugs[uniqueKey];

                      return (
                        <div
                          key={uniqueKey}
                          className={`relative p-6 rounded-xl border transition-all duration-300 hover:transform hover:translate-y-[-2px] ${category.bgColor} ${category.borderColor} hover:border-opacity-60`}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-lg font-bold text-white font-mono pr-2">
                              {bugs.name}
                            </h3>
                            <button
                              onClick={() =>
                                toggleBugDetails(
                                  category.name,
                                  bugs.name
                                )
                              }
                              className={`flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${category.color} border ${category.borderColor} hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                              style={{ focusRingColor: category.color }}
                            >
                              {isExpanded ? 'Less' : 'More'}
                            </button>
                          </div>

                          <p className="text-gray-300 text-sm mb-4 leading-relaxed min-h-[2.5rem]">
                            {bugs.description}
                          </p>

                          <div className="space-y-3">
                            <div>
                              <span className="text-xs font-medium text-gray-400 mb-1 block">
                                Reproduced:
                              </span>
                              <code className="block p-3 bg-black/30 rounded-md text-sm text-gray-200 font-mono leading-relaxed">
                                {bugs.reproduced}
                              </code>
                            </div>

                            {isExpanded && (
                              <div className="space-y-4 pt-4 border-t border-gray-700/50 animate-fade-in">
                                <div>
                                  <span className="text-xs font-medium text-gray-400 mb-1 block">
                                    Required Permission:
                                  </span>
                                  <p className="text-sm text-gray-300 bg-gray-800/30 rounded-md p-2">
                                    {command.permissions}
                                  </p>
                                </div>

                                <div>
                                  <span className="text-xs font-medium text-gray-400 mb-2 block">
                                    Examples:
                                  </span>
                                  <div className="space-y-2">
                                    {command.examples.map(
                                      (example, exIndex) => (
                                        <code
                                          key={exIndex}
                                          className="block p-3 bg-black/30 rounded-md text-sm text-gray-200 font-mono leading-relaxed"
                                        >
                                          {example}
                                        </code>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
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
            filteredCategories.every(cat => cat.commands.length === 0) && (
              <div className="text-center py-12">
                <CommandLineIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-400 mb-2">
                  No commands found
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
              Found a bug that isn't on this list?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Join our Discord community to report the bug.
            </p>
            <a
              href="https://discord.gg/6tF3UFWA6F"
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
                {totalBugs} bugs • Last updated: October 2nd, 2025
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
