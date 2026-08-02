'use client';

import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

const faqData = [
  {
    category: 'General Questions',
    questions: [
      {
        question: 'What is Java Lava?',
        answer:
          "Java Lava is a Discord bot designed to enhance your server with moderation tools, community features, fun commands, and automated systems. It's developed by PhillsPhanbh3_the_bot_dev and the Java Lava development team.",
      },
      {
        question: 'How do I add Java Lava to my server?',
        answer:
          'Click the invitation link below and select the Discord server you want to add Java Lava to. You will need the appropriate permissions to add bots to that server.',
        link: {
          text: 'Invite Java Lava',
          url: 'https://discord.com/oauth2/authorize?client_id=1305190785536360519&scope=bot&permissions=8',
          external: true,
        },
      },
      {
        question: 'Is Java Lava free to use?',
        answer:
          'Yes! Java Lava provides a comprehensive set of features that you can use for free. Additional functionality may be introduced or changed as the bot continues to develop.',
      },
      {
        question: 'What version is Java Lava currently on?',
        answer:
          'Java Lava is currently on version 2.3. Version 2.3 introduced a major rewrite of the bot with architectural improvements, performance improvements, bug fixes, and new features.',
      },
    ],
  },
  {
    category: 'Technical Issues',
    questions: [
      {
        question: 'Java Lava is offline. What should I do?',
        answer:
          'If Java Lava appears offline, it may be experiencing maintenance, an outage, or a temporary connection issue. Check the status page for current incidents and service information. You can also join the support server for assistance.',
        link: {
          text: 'Check Status',
          url: 'https://javalava.statuspage.io/',
          external: true,
        },
      },
      {
        question: "Commands aren't working properly",
        answer:
          'First, make sure Java Lava has the permissions required for the command you are trying to use. Also check that the command is being used in a channel where the bot can read and send messages. If the issue continues, contact the support team with details about the command and error you are experiencing.',
        link: {
          text: 'Get Support',
          url: 'https://discord.gg/tM8Y5acUta',
          external: true,
        },
      },
      {
        question: 'How do I report a bug?',
        answer:
          'You can report bugs through the Java Lava support server. Include as much useful information as possible, such as the command or feature involved, what you expected to happen, what actually happened, and any relevant error messages.',
        link: {
          text: 'Join Support Server',
          url: 'https://discord.gg/tM8Y5acUta',
          external: true,
        },
      },
    ],
  },
  {
    category: 'Features & Updates',
    questions: [
      {
        question: 'How often does Java Lava get updated?',
        answer:
          'Java Lava does not follow a strict release schedule. Updates are released when new features, improvements, fixes, and testing are ready. Larger releases may take longer because stability and testing are prioritized.',
      },
      {
        question: 'Where can I suggest new features?',
        answer:
          'Feature suggestions can be submitted through the Java Lava support server. Community feedback helps us decide which improvements and features should be prioritized.',
        link: {
          text: 'Make a Suggestion',
          url: 'https://discord.gg/tM8Y5acUta',
          external: true,
        },
      },
      {
        question: "What's new in version 2.3?",
        answer:
          'Version 2.3 is a major rewrite of Java Lava. It introduced architectural improvements, better performance, new functionality, and fixes for various bugs and stability issues.',
        link: {
          text: 'View Changelog',
          url: '/docs/updates',
          external: false,
        },
      },
      {
        question: 'Can I test beta features?',
        answer:
          'Yes! Java Lava has a public beta bot that allows users to test features before they are released to the main bot. Keep in mind that beta features may change or contain bugs while they are being tested.',
        link: {
          text: 'Invite Java Lava Beta',
          url: 'https://discord.com/oauth2/authorize?client_id=1390723130904805376&scope=bot&permissions=8',
          external: true,
        },
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        question: "I need help that isn't covered here",
        answer:
          'If your question is not answered in the documentation, join the Java Lava support server. The community and support team can help with setup, commands, bugs, and other issues.',
        link: {
          text: 'Get Support',
          url: 'https://discord.gg/tM8Y5acUta',
          external: true,
        },
      },
      {
        question: 'How can I view current known bugs?',
        answer:
          'You can view the known bugs section of the documentation to see currently reported issues and their status. You can also check the support server for additional bug reports and updates.',
        link: {
          text: 'View Known Bugs',
          url: '/docs/bugs',
          external: false,
        },
      },
      {
        question: 'How can I contribute to Java Lava?',
        answer:
          'While Java Lava is not open source, you can still contribute by reporting bugs, suggesting features, testing beta features, providing feedback, and helping other members of the community.',
      },
    ],
  },
  {
    category: 'Troubleshooting',
    questions: [
      {
        question: 'Java Lava is not responding to commands',
        answer:
          'Make sure Java Lava is online and has the required permissions in the channel where you are using the command. If slash commands are not appearing, try waiting a short time for Discord to refresh the command list. If the issue continues, check the status page or contact support.',
        link: {
          text: 'Check Status',
          url: 'https://javalava.statuspage.io/',
          external: true,
        },
      },
      {
        question: 'Java Lava cannot moderate members',
        answer:
          'Check that Java Lava has the required moderation permissions and that its role is positioned correctly in your server role hierarchy. Discord prevents bots from moderating users whose highest role is equal to or higher than the bot.',
      },
      {
        question: 'Java Lava cannot delete messages',
        answer:
          'Make sure Java Lava has the Manage Messages permission in the affected channel. Also check whether channel-specific permission overrides are preventing the bot from deleting messages.',
      },
    ],
  },
];

const categoryColors = [
  {
    accent: '#a78bfa',
    background: 'bg-[#a78bfa]/[0.05]',
    border: 'border-[#a78bfa]/20',
    text: 'text-[#a78bfa]',
  },
  {
    accent: '#fb923c',
    background: 'bg-[#fb923c]/[0.05]',
    border: 'border-[#fb923c]/20',
    text: 'text-[#fb923c]',
  },
  {
    accent: '#a78bfa',
    background: 'bg-[#a78bfa]/[0.05]',
    border: 'border-[#a78bfa]/20',
    text: 'text-[#a78bfa]',
  },
  {
    accent: '#fb923c',
    background: 'bg-[#fb923c]/[0.05]',
    border: 'border-[#fb923c]/20',
    text: 'text-[#fb923c]',
  },
  {
    accent: '#a78bfa',
    background: 'bg-[#a78bfa]/[0.05]',
    border: 'border-[#a78bfa]/20',
    text: 'text-[#a78bfa]',
  },
];

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;

    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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

        {/* Shared purple glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-14rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
        />

        {/* Shared orange glow */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14rem] top-[55rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-10'>
          {/* Header */}
          <div className='mb-14 text-center'>
            <div className='mb-5 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / faq
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Frequently
              <br />
              <span className='text-[#a78bfa]'>Asked Questions.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              Answers to common questions about Java Lava, including setup,
              commands, features, troubleshooting, and support.
            </p>
          </div>

          {/* FAQ sections */}
          <div className='space-y-8'>
            {faqData.map((category, categoryIndex) => {
              const style = categoryColors[categoryIndex] || categoryColors[0];

              return (
                <section
                  key={category.category}
                  className='overflow-hidden border border-white/10 bg-[#11101a]'
                >
                  {/* Category header */}
                  <div className='border-b border-white/10 p-6 sm:p-7'>
                    <div className='flex items-center gap-4'>
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center border ${style.border} ${style.background} ${style.text}`}
                      >
                        <QuestionMarkCircleIcon className='h-5 w-5' />
                      </div>

                      <div>
                        <div
                          className={`mb-1 font-mono text-[9px] uppercase tracking-[0.16em] ${style.text}`}
                        >
                          Section {String(categoryIndex + 1).padStart(2, '0')}
                        </div>

                        <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                          {category.category}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className='divide-y divide-white/10'>
                    {category.questions.map((faq, questionIndex) => {
                      const key = `${categoryIndex}-${questionIndex}`;
                      const isExpanded = Boolean(expandedItems[key]);

                      return (
                        <div key={faq.question} className='group'>
                          <button
                            type='button'
                            aria-expanded={isExpanded}
                            onClick={() =>
                              toggleExpanded(categoryIndex, questionIndex)
                            }
                            className='flex w-full items-center justify-between gap-5 px-6 py-5 text-left transition-colors duration-200 hover:bg-white/[0.02] sm:px-7'
                          >
                            <div className='flex min-w-0 items-center gap-4'>
                              <span className='shrink-0 font-mono text-[10px] text-white/15'>
                                {String(questionIndex + 1).padStart(2, '0')}
                              </span>

                              <span className='font-medium leading-6 text-white/75 transition-colors group-hover:text-white/90'>
                                {faq.question}
                              </span>
                            </div>

                            <ChevronDownIcon
                              className={`h-5 w-5 shrink-0 text-white/25 transition-all duration-200 ${
                                isExpanded ? `rotate-180 ${style.text}` : ''
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className='border-t border-white/[0.06] px-6 pb-6 pt-5 sm:px-7'>
                              <div className='ml-0 sm:ml-9'>
                                <p className='max-w-2xl text-sm leading-7 text-white/45'>
                                  {faq.answer}
                                </p>

                                {faq.link && (
                                  <a
                                    href={faq.link.url}
                                    target={
                                      faq.link.external ? '_blank' : undefined
                                    }
                                    rel={
                                      faq.link.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className={`mt-5 inline-flex items-center gap-2 border border-white/10 bg-white/[0.025] px-4 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/45 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.04] hover:${style.text}`}
                                  >
                                    {faq.link.text}
                                    <span aria-hidden='true'>
                                      {faq.link.external ? '↗' : '→'}
                                    </span>
                                  </a>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          {/* Still need help */}
          <section className='relative mt-12 overflow-hidden border border-white/10 bg-[#11101a]'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute right-[-8rem] top-[-8rem] h-64 w-64 rounded-full bg-[#a78bfa]/[0.04] blur-[100px]'
            />

            <div className='relative p-7 text-center sm:p-10'>
              <div className='mx-auto mb-5 flex h-12 w-12 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                <QuestionMarkCircleIcon className='h-6 w-6' />
              </div>

              <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#fb923c]'>
                Need assistance?
              </div>

              <h2 className='text-2xl font-semibold tracking-[-0.025em] text-white/90'>
                Still Need Help?
              </h2>

              <p className='mx-auto mt-3 max-w-md text-sm leading-6 text-white/40'>
                Can't find the answer you're looking for? Our community and
                support team are here to help.
              </p>

              <div className='mt-7 flex flex-col justify-center gap-3 sm:flex-row'>
                <a
                  href='https://discord.gg/tM8Y5acUta'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center justify-center gap-2 border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] px-5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c4b5fd] transition-all duration-200 hover:border-[#a78bfa]/35 hover:bg-[#a78bfa]/[0.1]'
                >
                  Join Support Server
                  <span aria-hidden='true'>↗</span>
                </a>

                <a
                  href='https://javalava.statuspage.io/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex min-h-11 items-center justify-center gap-2 border border-white/10 bg-white/[0.025] px-5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white/45 transition-all duration-200 hover:border-white/15 hover:text-white/70'
                >
                  Check Status
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>
            </div>
          </section>

          {/* Navigation */}
          <div className='mt-12 border-y border-white/10 py-5'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/docs'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                ← Back to docs
              </a>

              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/20'>
                Java Lava v2.3 • Last updated: August 2nd, 2026
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
