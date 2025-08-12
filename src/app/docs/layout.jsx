'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './prose.css';

export default function DocsLayout({ children }) {
  const pathname = usePathname();
  const [expandedCategories, setExpandedCategories] = useState({
    commands: true,
    updates: true
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // For pages that already include the Header/Footer (like the main pages), 
  // just render the children directly
  if (pathname === '/docs' || 
      pathname === '/docs/updates' || 
      pathname.startsWith('/docs/updates/') ||
      pathname === '/docs/commands' ||
      pathname.startsWith('/docs/commands/') ||
      pathname === '/docs/markdown-test') {
    return <>{children}</>;
  }

  // Otherwise, show the sidebar layout for deeper pages
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-50 dark:bg-gray-900 p-4 hidden md:block overflow-y-auto border-r border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Documentation</h2>
          
          <div className="mb-4">
            <button 
              className="flex items-center justify-between w-full text-left font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => toggleCategory('commands')}
            >
              Commands
              {expandedCategories.commands ? (
                <ChevronDownIcon className="w-5 h-5" />
              ) : (
                <ChevronRightIcon className="w-5 h-5" />
              )}
            </button>

            {expandedCategories.commands && (
              <div className="ml-4 mt-2 space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Moderation</p>
                  <ul className="space-y-1 ml-2">
                    <li>
                      <Link 
                        href="/docs/commands/moderation/ban"
                        className={`text-sm ${pathname === '/docs/commands/moderation/ban' ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
                      >
                        Ban Command
                      </Link>
                    </li>
                    {/* Add more commands here */}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Community</p>
                  <ul className="space-y-1 ml-2">
                    <li>
                      <Link 
                        href="/docs/commands/community/clicker"
                        className={`text-sm ${pathname === '/docs/commands/community/clicker' ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
                      >
                        Clicker Command
                      </Link>
                    </li>
                    {/* Add more commands here */}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Test</p>
                  <ul className="space-y-1 ml-2">
                    <li>
                      <Link 
                        href="/docs/commands/test/markdown-test"
                        className={`text-sm ${pathname === '/docs/commands/test/markdown-test' ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
                      >
                        Markdown Test
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="mb-4">
            <button 
              className="flex items-center justify-between w-full text-left font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={() => toggleCategory('updates')}
            >
              Updates 
              {expandedCategories.updates ? (
                <ChevronDownIcon className="w-5 h-5" />
              ) : (
                <ChevronRightIcon className="w-5 h-5" />
              )}
            </button>

            {expandedCategories.updates && (
              <div className="ml-4 mt-2 space-y-1">
                <Link 
                  href="/docs/updates"
                  className={`block text-sm ${pathname === '/docs/updates' ? 'text-indigo-600 dark:text-indigo-400 font-medium' : 'text-gray-600 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
                >
                  All Updates
                </Link>
                {/* We'll dynamically generate update links in the updates page */}
              </div>
            )}
            
            <div className="mt-6">
              <Link 
                href="/docs/markdown-test"
                className={`block text-sm font-medium ${pathname === '/docs/markdown-test' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-600 dark:text-gray-400'} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
              >
                Markdown Test Page
              </Link>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow p-6 overflow-auto">
          <div className="max-w-3xl mx-auto prose dark:prose-invert prose-headings:scroll-mt-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}