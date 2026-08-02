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

const markdownContent = `# Java Lava Guide

Welcome to the official setup guide for Java Lava! This guide will walk you through configuring and using Java Lava to improve moderation, community management, and overall server functionality.

## Welcome to Java Lava Bot

Welcome to the official Java Lava Discord bot documentation! Java Lava provides powerful moderation tools, community features, fun commands, and automated systems designed to help manage your Discord server.

Whether you're new to Discord bots or an experienced server owner, this guide will help you get started with Java Lava.

## Getting Started

Ready to add Java Lava to your Discord server? Follow the steps below to get started.

### Quick Setup

1. **Invite the Bot** - Use our [invite](https://javalava.phillsphanbh3.me/invite/standard) to add Java Lava to your server.
2. **Set Permissions** - Ensure Java Lava has the permissions required for moderation and community features.
3. **Explore Commands** - Use \`/help\` to view the available commands and features.
4. **Join Support** - Need help? Join our [Support server](https://javalava.phillsphanbh3.me/support) for assistance and community discussions.
5. **Check Status** - View uptime and current incidents on our [Status page](https://javalava.phillsphanbh3.me/status).
6. **Read the Docs** - Explore the documentation for detailed information about Java Lava.
7. **You're all set!** - Start using Java Lava to manage and grow your Discord community.

### Detailed Configuration

1. **Invite Java Lava**: Click [here](https://javalava.phillsphanbh3.me/invite/standard) to invite Java Lava to your server. Make sure to grant the bot the necessary permissions.

2. **Set Up Roles**: Create a role for Java Lava with appropriate permissions, including managing messages, banning members, and reading message history.

3. **Configure Systems**: Use the available automod commands to configure automated moderation rules. Customize these systems to fit your server's needs.

4. **Explore Features**: Use \`/help\` to view Java Lava's available commands. Experiment with moderation, community, and fun features.

5. **Let Java Lava Work**: Once configured, Java Lava can help automate moderation and other server management tasks.

6. **Stay Updated**: Keep an eye on our [Support server](https://javalava.phillsphanbh3.me/support) for updates, announcements, and support.

---

### Key Features

- **Advanced Moderation** - Comprehensive tools for managing your community
- **Custom Welcome Messages** - Personalized greetings for new members
- **Community Engagement** - Fun commands and interactive features
- **Automated Reminders** - Helpful reminders for important events and announcements
- **24/7 Uptime** - Reliable service designed for continuous operation

## Support & Community

Need help or want to connect with other Java Lava users?

- **Discord Server**: [Join our community](https://javalava.phillsphanbh3.me/support) for support, updates, and discussions
- **Status Page**: [Check service status](https://javalava.phillsphanbh3.me/status) for real-time updates and incidents
- **Documentation**: You're already here! Explore the rest of our documentation for additional guides.

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
        title: 'Java Lava Documentation',
        description:
          'Complete guide to Java Lava Discord bot features and setup',
        lastUpdated: '04-26-2026',
        tags: ['documentation', 'bot-setup', 'getting-started'],
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
              <span className='text-[#a78bfa]'>Documentation.</span>
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              Everything you need to get Java Lava running and configured for
              your Discord community.
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

          {/* Documentation content */}
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
