'use client';

import {
  ArrowPathIcon,
  ClockIcon,
  PencilSquareIcon,
  SparklesIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { MdRemoveModerator } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const updates = [
  {
    id: 'v2-bot',
    version: 'Java Lava v2',
    date: '02-24-2026',
    type: 'major - v2',
    title: 'Major Bot Update - Complete Overhaul and New Features',
    description:
      'A COMPLETE overhaul of the Java Lava bot with numerous bug fixes and exciting new features to enhance your Discord experience.',
    changes: {
      added: [
        'Enhanced reminder system with improved reliability',
        'Open beta bot for testing new features',
        'Premium features access for enhanced functionality',
        'New moderation commands and features',
        'New dedicated support server for assistance',
        'Better way to setup automod rules with our new AND improved automod system!',
        'New error handling system for clearer and more helpful error messages',
        'New command flags for better compatibility and reliability',
        'New Study Buddy feature to help you stay focused and productive while studying or working',
      ],
      updated: [
        'Updated all error messages for clarity, consistency, and helpfulness, including a link to our support server!',
        'Updated all commands to use modern Discord flags',
        'Improved bot stability and performance',
        'Enhanced moderation command reliability',
        'Improved error handling and logging',
        'Updated documentation to reflect new features and changes',
        'Updated reminder system for better reliability and user experience',
        'Updated command flags for better compatibility',
      ],
      deprecated: [
        'Old reminder command variations',
        'Legacy premium feature access methods',
        'Deprecated moderation command variations',
        'Deprecated support methods for old Discord Automod Commands',
        'Deprecated ephemeral message handling',
      ],
      removed: [
        'Legacy timeout command variations',
        'Old reminder system implementation',
        'Outdated error logging and error alerts for cleaner notifications for users',
        'Removed support for old Discord Automod Commands',
        'Old error message formats and logging methods',
      ],
    },
  },
];

const getTypeColor = type => {
  switch (type) {
    case 'major - v2':
      return {
        bg: 'bg-[var(--color-primary)]/10',
        border: 'border-[var(--color-primary)]/20',
        text: 'text-[var(--color-primary)]',
      }
    case 'major':
      return {
        bg: 'bg-[var(--color-primary)]/10',
        border: 'border-[var(--color-primary)]/20',
        text: 'text-[var(--color-primary)]',
      };
    case 'minor':
      return {
        bg: 'bg-[var(--color-accent)]/10',
        border: 'border-[var(--color-accent)]/20',
        text: 'text-[var(--color-accent)]',
      };
    case 'patch':
      return {
        bg: 'bg-[var(--color-secondary)]/10',
        border: 'border-[var(--color-secondary)]/20',
        text: 'text-[var(--color-secondary)]',
      };
    default:
      return {
        bg: 'bg-gray-500/10',
        border: 'border-gray-500/20',
        text: 'text-gray-400',
      };
  }
};

const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function UpdatesPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 mb-6">
              <ArrowPathIcon className="h-5 w-5 text-[var(--color-secondary)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-secondary)]">
                Latest Updates
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Java Lava Updates
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed about the latest features, improvements, and bug
              fixes for Java Lava bot and documentation.
            </p>
          </div>

          {/* Updates Timeline */}
          <div className="space-y-8">
            {updates.map((update, index) => {
              const typeColors = getTypeColor(update.type);

              return (
                <div key={update.id} className="relative">
                  {/* Timeline Line */}
                  {index < updates.length - 1 && (
                    <div className="absolute left-12 top-20 w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent"></div>
                  )}

                  <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 relative">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-4 top-8 w-4 h-4 rounded-full ${typeColors.bg} ${typeColors.border} border-2`}
                    ></div>

                    {/* Update Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div
                          className={`px-3 py-1 rounded-full text-sm font-medium ${typeColors.bg} ${typeColors.text}`}
                        >
                          {update.version}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <ClockIcon className="h-4 w-4" />
                          <span>{formatDate(update.date)}</span>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-lg text-xs font-medium uppercase tracking-wide ${typeColors.bg} ${typeColors.text}`}
                      >
                        {update.type} Update
                      </div>
                    </div>

                    {/* Update Content */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {update.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                          {update.description}
                        </p>
                      </div>

                      {/* Changes */}
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {/* Added */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <SparklesIcon className="h-5 w-5 text-emerald-400" />
                            <h3 className="text-lg font-semibold text-emerald-400">
                              Added
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {update.changes.added.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-300 pl-4 border-l border-emerald-400/30"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Updated */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <PencilSquareIcon className="h-5 w-5 text-blue-400" />
                            <h3 className="text-lg font-semibold text-blue-400">
                              Updated
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {update.changes.updated.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-300 pl-4 border-l border-blue-800/80"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deprecated */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <MdRemoveModerator className="h-5 w-5 text-yellow-400" />
                            <h3 className="text-lg font-semibold text-yellow-400">
                              Deprecated
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {update.changes.deprecated.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-300 pl-4 border-l border-yellow-400/30"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Removed */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <TrashIcon className="h-5 w-5 text-red-400" />
                            <h3 className="text-lg font-semibold text-red-400">
                              Removed
                            </h3>
                          </div>
                          <ul className="space-y-2">
                            {update.changes.removed.map((item, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-300 pl-4 border-l border-red-400/30"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-2xl border border-[var(--color-primary)]/20">
            <ArrowPathIcon className="h-12 w-12 text-[var(--color-primary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Join our Discord community to get notified about new updates and
              participate in beta testing!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/tM8Y5acUta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary)]/80 transition-colors"
              >
                <span>Join Discord Server</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
              <a
                href="https://javalava.statuspage.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors"
              >
                <span>Check Status</span>
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            </div>
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
