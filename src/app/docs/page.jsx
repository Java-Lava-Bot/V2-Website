'use client';

import {
  ArrowPathIcon,
  BookOpenIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StatusScript from '../components/StatusScript';
import { BugAntIcon } from '@heroicons/react/24/solid';
import { FaVoteYea, FaHandsHelping } from 'react-icons/fa';

const docSections = [
  {
    title: 'Getting Started',
    description: 'Quick start guide to set up Java Lava in your Discord server',
    href: '/docs/getting_started',
    icon: RocketLaunchIcon,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    title: 'Commands',
    description:
      'Complete reference for all moderation, community, fun, and utility commands',
    href: '/docs/commands',
    icon: CommandLineIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'Updates',
    description: 'Latest features, improvements, and bug fixes',
    href: '/docs/updates',
    icon: ArrowPathIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    title: 'Setup Guide',
    description: 'Detailed configuration and customization options',
    href: '/docs/setup_guide',
    icon: Cog6ToothIcon,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
  {
    title: 'FAQ',
    description: 'Common questions and troubleshooting help',
    href: '/docs/faq',
    icon: QuestionMarkCircleIcon,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
  },
  {
    title: 'Bugs & Issues',
    description: 'Report bugs and track known issues with Java Lava',
    href: '/docs/bugs',
    icon: BugAntIcon,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    title: 'Vote for Java Lava',
    description: 'Support Java Lava by voting on popular bot listing sites',
    href: '/docs/vote',
    icon: FaVoteYea,
    color: 'text-pink-400',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/20',
  },
  {
    title: 'Contributors',
    description: 'Meet the amazing people who contribute to Java Lava',
    href: '/docs/contributors',
    icon: FaHandsHelping,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/20',
  }
];

export default function DocsPage() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className="relative min-h-screen">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6">
                <BookOpenIcon className="h-5 w-5 text-[var(--color-primary)] mr-2" />
                <span className="text-sm font-medium text-[var(--color-primary)]">
                  Documentation
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Java Lava
                <br />
                <span className="text-gradient bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)]">
                  Documentation
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Everything you need to build amazing Discord communities with
                Java Lava's powerful moderation and engagement tools.
              </p>
            </div>
          </div>
        </div>

        {/* Documentation Grid */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <a
                  key={section.title}
                  href={section.href}
                  className={`group block p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${section.bgColor} ${section.borderColor} hover:border-opacity-40`}
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-3 rounded-xl ${section.bgColor} ${section.borderColor} border mr-4`}
                    >
                      <Icon className={`h-6 w-6 ${section.color}`} />
                    </div>
                    <h3 className={`text-2xl font-bold ${section.color}`}>
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span>Explore</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-20 p-8 rounded-2xl glass-effect">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">
                  50+
                </div>
                <div className="text-gray-300">Available Commands</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-secondary)] mb-2">
                  99.9%
                </div>
                <div className="text-gray-300">Uptime Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Active Support</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
