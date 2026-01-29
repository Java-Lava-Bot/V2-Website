'use client';

import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StatusScript from '../components/StatusScript';

const faqData = [
  {
    category: 'Setup & Basics',
    questions: [
      {
        question: 'How to get Java Lava added into the server?',
        answer:
          'You can invite Java Lava to your server using our official invite link. Make sure you have the discord permission Administrator to add the bot through this link and select your server!',
        link: {
          text: 'Invite Java Lava',
          url: 'https://discord.com/oauth2/authorize?client_id=1305190785536360519',
        },
      },
      {
        question: 'What are some of the commands I can use?',
        answer:
          'Java Lava offers a variety of commands for moderation, fun, and utility. For a full list of commands, check our documentation or use the /help command in Discord.',
      },
    ],
  },
  {
    category: 'Moderation commands',
    questions: [
      {
        question: 'I want to setup the automd system, how do I do that? ',
        answer:
          'To make the automod system to work, you need to run the /automod commands and use the command selector for it!',
      },
      {
        question:
          "I want to use the moderation commands like timeout, kick, ban, but it's not working?",
        answer:
          'First, ensure Java Lava has the necessary permissions in your server. If issues persist, contact our support team.',
      },
      {
        question: 'How do I report a error or bug I found?',
        answer:
          "Report errors and/or bugs in our Discord server's bug report channel, or help us test new features with our open beta bot! Our developers actively monitor reports and work quickly to resolve issues.",
        link: {
          text: 'Join Support Server',
          url: 'https://discord.gg/tM8Y5acUta',
        },
      },
    ],
  },
  {
    category: 'Community commands',
    questions: [
      {
        question:
          'I want to use commands like /clicker, or /poke, how do I set those up?',
        answer: 'These do NOT require setup, run them and have fun!',
      },
      {
        question: 'Where can I suggest new features?',
        answer:
          'Join our Discord server and use the suggestions channel! We love hearing from our community and many user suggestions have been implemented in past updates.',
        link: {
          text: 'Make a Suggestion',
          url: 'https://discord.gg/tM8Y5acUta',
        },
      },
    ],
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

      <main className='min-h-screen bg-[var(--color-dark)]'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          {/* Header */}
          <div className='text-center mb-12'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6'>
              <QuestionMarkCircleIcon className='h-5 w-5 text-[var(--color-accent)] mr-2' />
              <span className='text-sm font-medium text-[var(--color-accent)]'>
                Setup Guide
              </span>
            </div>

            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Need Help Setting Up?
            </h1>
            <p className='text-xl text-gray-400 max-w-2xl mx-auto'>
              Find answers to the setup questions about Java Lava Discord bot.
              Can't find what you're looking for? Join our support community!
            </p>
          </div>

          {/* FAQ Content */}
          <div className='space-y-8'>
            {faqData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className='bg-gray-900/30 rounded-2xl p-6 border border-gray-800/50'
              >
                <h2 className='text-2xl font-bold text-white mb-6 flex items-center gap-2'>
                  <div
                    className={`w-2 h-8 rounded-full ${categoryIndex === 0 ? 'bg-[var(--color-primary)]' : categoryIndex === 1 ? 'bg-[var(--color-secondary)]' : categoryIndex === 2 ? 'bg-[var(--color-accent)]' : 'bg-gray-500'}`}
                  ></div>
                  {category.category}
                </h2>

                <div className='space-y-3'>
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedItems[key];

                    return (
                      <div
                        key={questionIndex}
                        className='border border-gray-800/50 rounded-lg overflow-hidden hover:border-gray-700/50 transition-colors'
                      >
                        <button
                          className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors'
                          onClick={() =>
                            toggleExpanded(categoryIndex, questionIndex)
                          }
                        >
                          <span className='font-medium text-white pr-4'>
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isExpanded && (
                          <div className='px-6 pb-6 pt-2'>
                            <div className='text-gray-300 leading-relaxed'>
                              <p>{faq.answer}</p>
                              {faq.link && (
                                <div className='mt-4'>
                                  <a
                                    href={faq.link.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors font-medium'
                                  >
                                    <span>{faq.link.text}</span>
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help Section */}
          <div className='mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-2xl border border-[var(--color-primary)]/20'>
            <QuestionMarkCircleIcon className='h-12 w-12 text-[var(--color-primary)] mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-white mb-2'>
              Still Need Help?
            </h3>
            <p className='text-gray-400 mb-6 max-w-md mx-auto'>
              Can't find the answer you're looking for? Our community and
              support team are here to help!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://discord.gg/tM8Y5acUta'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary)]/80 transition-colors'
              >
                <span>Join Support Server</span>
              </a>
              <a
                href='https://javalava.statuspage.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors'
              >
                <span>Check Status</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-800'>
            <div className='flex justify-between items-center'>
              <a
                href='/docs'
                className='flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors'
              >
                ← Back to Docs
              </a>
              <div className='text-sm text-gray-500'>
                Last updated: January 8, 2025
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
