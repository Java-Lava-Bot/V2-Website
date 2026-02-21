'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import StatusScript from '../../components/StatusScript';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DocsContentPage() {
  const [docContent, setDocContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [docMeta, setDocMeta] = useState({});

  useEffect(() => {
    // Fetch and process the index.md content
    fetchDocContent();
  }, []);

  const fetchDocContent = async () => {
    try {
      // Import the markdown content directly
      const markdownContent = `# Java Lava Advanced Setup Guide

# Welcome to the advanced setup guide for Java Lava! This guide will walk you through the detailed configuration and customization options available to optimize Java Lava for your Discord server.

## Welcome to Java Lava Bot

Welcome to the official Java Lava Discord bot documentation! This comprehensive guide will help you get the most out of your Discord server with our powerful moderation and community tools. Whether you're new to Discord bots or an experienced server owner, Java Lava has something for everyone. Let's dive in and explore how to set up and use Java Lava to enhance your community experience.

## Getting Started

Ready to add Java Lava to your Discord server? Here's what you need to know:

### Quick Setup

1. **Invite the Bot** - Use our [invite](https://discord.com/oauth2/authorize?client_id=1305190785536360519) to add Java Lava to your server
2. **Set Permissions** - Ensure the bot has the necessary permissions for moderation
3. **Configure Commands** - Set up your preferred settings using our setup commands
4. **Start Moderating** - Begin using Java Lava's powerful features!

### Detailed Configuration

1. **Invite Java Lava**: Click (here)[https://discord.com/oauth2/authorize?client_id=1305190785536360519] to invite the bot to your server. Make sure to grant it the necessary permissions for optimal functionality.

2. **Set Up Roles**: Create a role for Java Lava with appropriate permissions, including managing messages, banning members, and reading message history.

3. **Configure Systems and what you need to get started**: Use the automod commands to set up automated moderation rules. You can customize the rules to fit your server's specific needs, and way more!

4. **Explore Features**: Familiarize yourself with Java Lava's features by checking out the command list using \`/help\` and if you got more questions check out the docs! Experiment with moderation commands, fun interactions, and community engagement tools.

5. **Let Java Lava Work**: Sit back and let Java Lava help you manage and grow your Discord community effectively!

6. **Stay Updated**: Keep an eye on our [Support server](https://discord.gg/tM8Y5acUta) for updates, new features, and support.

---

### Key Features

- **Advanced Moderation** - Comprehensive tools for managing your community
- **Custom Welcome Messages** - Personalized greetings for new members  
- **Community Engagement** - Fun commands and interactive features
- **Automated Reminders** - Never forget important events or announcements
- **24/7 Uptime** - Reliable service with 99.9% uptime

## Support & Community

Need help or want to connect with other Java Lava users?

- **Discord Server**: [Join our community](https://discord.gg/tM8Y5acUta)
- **Status Page**: [Check service status](https://javalava.statuspage.io/)
- **Documentation**: You're already here!

---

*Java Lava is developed with ❤️ by PhillsPhanbh3_the_bot_dev and the Java Lava team.*`;

      setDocContent(markdownContent);
      setDocMeta({
        title: 'Java Lava Documentation',
        description:
          'Complete guide to Java Lava Discord bot features and setup',
        lastUpdated: '08-01-2025',
        tags: ['documentation', 'bot-setup', 'getting-started'],
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading documentation:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <StatusScript />
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-center">
            <BookOpenIcon className="h-12 w-12 text-[var(--color-primary)] mx-auto mb-4" />
            <p className="text-gray-400">Loading documentation...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <StatusScript />
      <Header />

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <BookOpenIcon className="h-4 w-4" />
              <span>Documentation</span>
              <span className="text-gray-600">•</span>
              <span>Getting Started</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {docMeta.lastUpdated && (
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Updated {docMeta.lastUpdated}</span>
                </div>
              )}

              {docMeta.tags && (
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-gray-400" />
                  <div className="flex gap-2">
                    {docMeta.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded text-xs text-[var(--color-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: docContent
                  .split('\n')
                  .map(line => {
                    // Convert markdown to basic HTML
                    if (line.startsWith('# ')) {
                      return `<h1>${line.substring(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2>${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3>${line.substring(4)}</h3>`;
                    } else if (line.startsWith('- ')) {
                      return `<li>${line.substring(2)}</li>`;
                    } else if (line.startsWith('1. ')) {
                      return `<li>${line.substring(3)}</li>`;
                    } else if (line === '---') {
                      return '<hr>';
                    } else if (line.trim() === '') {
                      return '<br>';
                    } else {
                      // Handle bold text
                      let processedLine = line.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>'
                      );
                      // Handle inline code
                      processedLine = processedLine.replace(
                        /`([^`]+)`/g,
                        '<code>$1</code>'
                      );
                      // Handle links
                      processedLine = processedLine.replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:text-[var(--color-secondary)]">$1</a>'
                      );
                      return `<p>${processedLine}</p>`;
                    }
                  })
                  .join(''),
              }}
            />
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between">
              <div></div>
              <div className="flex items-center gap-4">
                <a
                  href="/docs"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
                >
                  <BookOpenIcon className="h-4 w-4" />
                  <span>Back to Docs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
