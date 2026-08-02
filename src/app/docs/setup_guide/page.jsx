'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

import StatusScript from '../../components/StatusScript';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function parseInline(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#a78bfa] hover:text-[#c4b5fd] transition-colors">$1</a>'
    );
}

function parseMarkdown(markdown) {
  return markdown
    .split('\n')
    .map(line => {
      if (line.startsWith('### ')) {
        return `<h3>${parseInline(line.slice(4))}</h3>`;
      }

      if (line.startsWith('## ')) {
        return `<h2>${parseInline(line.slice(3))}</h2>`;
      }

      if (line.startsWith('# ')) {
        return `<h1>${parseInline(line.slice(2))}</h1>`;
      }

      if (line.startsWith('- ')) {
        return `<li>${parseInline(line.slice(2))}</li>`;
      }

      if (/^\d+\.\s/.test(line)) {
        return `<li>${parseInline(line.replace(/^\d+\.\s/, ''))}</li>`;
      }

      if (line === '---') {
        return '<hr>';
      }

      if (line.trim() === '') {
        return '<br>';
      }

      return `<p>${parseInline(line)}</p>`;
    })
    .join('');
}

const markdownContent = `# Java Lava Advanced Setup Guide

Welcome to the advanced setup guide for Java Lava! This guide will walk you through the detailed configuration and customization options available to optimize Java Lava for your Discord server.

## Welcome to Java Lava Bot

Welcome to the official Java Lava Discord bot documentation! This comprehensive guide will help you get the most out of your Discord server with Java Lava's moderation, security, utility, and community features.

### Current Version: 2.3

Java Lava is currently on **version 2.3**, packed with improvements and new features designed to provide a faster, more reliable, and more secure experience for Discord communities.

## What's New in Version 2.3?

You can check out the full list of updates at [Java Lava Updates](https://javalava.phillsphanbh3.me/updates).

Here are some of the highlights:

- **New Honeypot System** - A new security system designed to help detect and remove users who send scam or malicious content into designated honeypot channels.
- **Honeypot Punishment Settings** - Configure how Java Lava responds when a honeypot is triggered, including purge, timeout, and soft-ban actions.
- **New Utility Commands** - New commands including \`/avatar\`, \`/server-info\`, and \`/user-info\`.
- **Improved Performance** - Faster response times and more efficient processing across the bot.
- **Improved Error Handling** - Better error handling and stability for a smoother experience.
- **Website Improvements** - Updated documentation and website features to reflect the latest Java Lava functionality.

## Getting Started

Ready to add Java Lava to your Discord server? Here's what you need to know:

### Quick Setup

1. **Invite the Bot** - Use our [invitation link](https://javalava.phillsphanbh3.me/invite/standard) to add Java Lava to your server.
2. **Set Permissions** - Ensure Java Lava has the permissions required for moderation and any other features you want to use.
3. **Configure Commands** - Use Java Lava's setup and configuration commands to customize the bot for your server.
4. **Configure Moderation** - Set up your preferred moderation and automod systems.
5. **Configure Honeypot Protection** - Set up your honeypot channel and punishment preferences if you want additional scam protection.
6. **Explore Commands** - Use \`/help\` to view the available commands and features.
7. **Start Moderating** - Java Lava is now ready to help manage your Discord community.

### Detailed Configuration

1. **Invite Java Lava** - Click [here](https://javalava.phillsphanbh3.me/invite/standard) to invite Java Lava to your server. Make sure to grant the bot the permissions required for the features you intend to use.

2. **Set Up Roles** - Create a role for Java Lava with appropriate permissions. Depending on the features you use, this may include managing messages, moderating members, banning members, managing roles, and reading message history.

3. **Configure Moderation** - Use Java Lava's moderation and automod commands to configure automated protection for your server. Customize the rules to match your community's needs.

4. **Configure Honeypot Protection** - Create and configure a honeypot channel for Java Lava. Messages sent to the honeypot can trigger the configured protection system.

5. **Configure Punishments** - Customize the actions Java Lava should take when a honeypot is triggered. Available options can include purge, timeout, and soft-ban actions.

6. **Explore Features** - Familiarize yourself with Java Lava's features by checking the command list using \`/help\`. Explore moderation, utility, fun, and community commands.

7. **Test Your Configuration** - Before relying on automated moderation, verify that Java Lava has the appropriate permissions and that your configuration matches the behavior you expect.

8. **Stay Updated** - Keep an eye on our [Support server](https://javalava.phillsphanbh3.me/support) and [Updates page](https://javalava.phillsphanbh3.me/updates) for new features, fixes, and announcements.

---

### Key Features

- **Advanced Moderation** - Comprehensive tools for managing and protecting your community
- **Honeypot Protection** - Detect suspicious users attempting to send scam content into designated channels
- **Automated Punishments** - Configure automated actions for moderation events
- **Utility Commands** - Useful commands for users and server administrators
- **Custom Welcome Messages** - Personalized greetings for new members
- **Community Engagement** - Fun commands and interactive features
- **Automated Reminders** - Keep track of important events and announcements
- **Performance Improvements** - Faster response times and improved efficiency
- **24/7 Service** - Reliable bot infrastructure designed for continuous availability

## Moderation & Security

Java Lava provides several tools to help server administrators protect their communities.

### Honeypot System

The Java Lava honeypot system is designed to help detect suspicious users who attempt to send scam content into a designated honeypot channel.

When configured correctly, messages sent to the honeypot can trigger the configured protection system.

### Honeypot Punishments

Administrators can configure the action Java Lava should take after a honeypot is triggered.

Available punishment options include:

- **Purge** - Remove the relevant messages
- **Timeout** - Temporarily restrict the user
- **Soft Ban** - Apply the configured soft-ban behavior

Make sure Java Lava has the required permissions for whichever punishment system you enable.

## Utility Commands

Java Lava 2.3 includes several new utility commands.

### /avatar

View a user's Discord avatar.

### /server-info

View information about the current Discord server.

### /user-info

View information about a Discord user.

### /help

View the available Java Lava commands and features.

## Performance & Reliability

Version 2.3 includes several performance and stability improvements.

Java Lava has received improvements to:

- Response times
- Error handling
- Overall stability
- Command processing
- Resource efficiency
- Website and documentation functionality

These improvements are intended to provide a smoother experience for both server administrators and regular users.

## Support & Community

Need help or want to connect with other Java Lava users?

- **Discord Server** - [Join our community](https://javalava.phillsphanbh3.me/support) for support, updates, and discussions
- **Status Page** - [Check service status](https://javalava.phillsphanbh3.me/status) for service information and incidents
- **Updates** - [View the latest updates](https://javalava.phillsphanbh3.me/updates)
- **Documentation** - You're already here!

---

*Java Lava is developed with ❤️ by PhillsPhanbh3_the_bot_dev and the Java Lava team.*`;

export default function DocsContentPage() {
  const [docContent, setDocContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [docMeta, setDocMeta] = useState({});

  useEffect(() => {
    try {
      setDocContent(parseMarkdown(markdownContent));

      setDocMeta({
        title: 'Java Lava Advanced Setup Guide',
        description:
          'Complete guide to Java Lava Discord bot features, moderation, security, and setup',
        lastUpdated: '08-02-2026',
        tags: [
          'documentation',
          'bot-setup',
          'moderation',
          'security',
          'getting-started',
        ],
      });
    } catch (error) {
      console.error('Error loading documentation:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <>
        <StatusScript />
        <Header />

        <main className='relative isolate min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
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
            className='pointer-events-none absolute left-[-14rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
          />

          <div
            aria-hidden='true'
            className='pointer-events-none absolute right-[-14rem] top-[50rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
          />

          <div className='relative flex min-h-screen items-center justify-center'>
            <div className='text-center'>
              <BookOpenIcon className='mx-auto mb-4 h-12 w-12 text-[#a78bfa]' />
              <p className='font-mono text-xs uppercase tracking-[0.15em] text-white/35'>
                Loading documentation...
              </p>
            </div>
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

        <div className='relative mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:px-10'>
          {/* Header */}
          <header className='mb-12'>
            <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / documentation
            </div>

            <h1 className='text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[0.95] tracking-[-0.055em]'>
              Java Lava
              <br />
              <span className='text-[#a78bfa]'>Advanced Setup.</span>
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              Complete documentation for configuring Java Lava's moderation,
              security, utility, and community systems.
            </p>

            <div className='mt-7 flex flex-wrap items-center gap-4'>
              {docMeta.lastUpdated && (
                <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-white/30'>
                  <ClockIcon className='h-4 w-4' />
                  Updated {docMeta.lastUpdated}
                </div>
              )}

              {docMeta.tags && (
                <div className='flex flex-wrap items-center gap-2'>
                  <TagIcon className='h-4 w-4 text-white/25' />

                  {docMeta.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='border border-[#a78bfa]/20 bg-[#a78bfa]/[0.05] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[#a78bfa]'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Documentation */}
          <article className='docs-content border border-white/10 bg-[#11101a] p-6 sm:p-8 lg:p-10'>
            <div
              dangerouslySetInnerHTML={{
                __html: docContent,
              }}
            />
          </article>

          {/* Navigation */}
          <div className='mt-10 border-y border-white/10 py-5'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/20'>
                Java Lava Documentation
              </div>

              <a
                href='/docs'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                ← Back to docs
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style jsx global>{`
        .docs-content {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.8;
        }

        .docs-content h1 {
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.95);
          font-size: 2.25rem;
          line-height: 1;
          font-weight: 900;
          letter-spacing: -0.045em;
        }

        .docs-content h2 {
          margin-top: 3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.92);
          font-size: 1.6rem;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.025em;
        }

        .docs-content h3 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: #c4b5fd;
          font-size: 1.05rem;
          line-height: 1.4;
          font-weight: 700;
        }

        .docs-content p {
          margin: 0.9rem 0;
          color: rgba(255, 255, 255, 0.48);
        }

        .docs-content strong {
          color: rgba(255, 255, 255, 0.82);
          font-weight: 700;
        }

        .docs-content code {
          display: inline-block;
          border: 1px solid rgba(167, 139, 250, 0.15);
          background: rgba(167, 139, 250, 0.06);
          padding: 0.1rem 0.35rem;
          color: #c4b5fd;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.88em;
        }

        .docs-content a {
          color: #a78bfa;
          transition: color 0.2s;
        }

        .docs-content a:hover {
          color: #c4b5fd;
        }

        .docs-content li {
          margin: 0.7rem 0;
          margin-left: 1.5rem;
          padding-left: 0.25rem;
          color: rgba(255, 255, 255, 0.48);
        }

        .docs-content hr {
          margin: 2.5rem 0;
          border: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .docs-content br {
          content: '';
          display: block;
          height: 0.4rem;
        }
      `}</style>
    </>
  );
}
