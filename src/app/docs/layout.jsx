'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  CommandLineIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import './prose.css';

const sidebarSections = [
  {
    title: 'Getting Started',
    icon: BookOpenIcon,
    items: [
      { title: 'Overview', href: '/docs' },
      { title: 'Setup Guide', href: '/docs/setup_guide' },
      { title: 'FAQ', href: '/docs/faq' },
    ],
  },
  {
    title: 'Commands',
    icon: CommandLineIcon,
    items: [
      { title: 'All Commands', href: '/docs/commands' },
    ],
  },
  {
    title: 'Updates',
    icon: ArrowPathIcon,
    items: [{ title: 'Changelog', href: '/docs/updates' }],
  },
];

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState({
    'Getting Started': true,
    Commands: true,
    Updates: true,
  });

  const toggleCategory = category => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // For pages that already include the Header/Footer (like the main pages),
  // just render the children directly
  if (
    pathname === '/docs' ||
    pathname === '/docs/updates' ||
    pathname.startsWith('/docs/updates/') ||
    pathname === '/docs/commands' ||
    pathname.startsWith('/docs/commands/') ||
    pathname === '/docs/setup_guide' ||
    pathname === '/docs/faq' ||
    pathname === '/docs/bugs'
  ) {
    return <>{children}</>;
  }

  // Otherwise, show the sidebar layout for deeper pages
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-dark)]">
      <main className="flex-grow flex">
        {/* Sidebar */}
        <aside className="w-64 bg-[var(--color-dark)]/50 backdrop-blur-xl border-r border-white/10 hidden lg:block">
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-1">
                Documentation
              </h2>
              <p className="text-sm text-gray-400">
                Explore Java Lava features
              </p>
            </div>

            <nav className="space-y-6">
              {sidebarSections.map(section => {
                const Icon = section.icon;
                const isExpanded = expandedCategories[section.title];

                return (
                  <div key={section.title}>
                    <button
                      className="flex items-center justify-between w-full text-left group mb-3"
                      onClick={() => toggleCategory(section.title)}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors" />
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">
                          {section.title}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="ml-6 space-y-2">
                        {section.items.map(item => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={`block text-sm py-1.5 px-2 rounded transition-colors ${
                                pathname === item.href
                                  ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10 font-medium'
                                  : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                              }`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-4xl mx-auto p-8">
            <article className="prose prose-invert prose-lg max-w-none">
              {children}
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
