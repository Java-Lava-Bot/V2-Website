'use client';

import {
  ChevronDownIcon,
  ExternalLinkIcon,
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
          "Java Lava is a powerful Discord bot designed to enhance your server experience with advanced moderation tools, fun commands, and community features. It's developed by PhillsPhanbh3_the_bot_dev and offers both free and premium functionality.",
      },
      {
        question: 'How do I add Java Lava to my server?',
        answer:
          'Simply click our invitation link and select your server. Make sure you have Administrator permissions on the server you want to add the bot to.',
        link: {
          text: 'Invite Java Lava',
          url: 'https://discord.com/oauth2/authorize?client_id=1305190785536360519',
        },
      },
      {
        question: 'Is Java Lava free to use?',
        answer:
          'Yes! Java Lava offers a comprehensive set of features completely free.',
      },
      {
        question: 'What version is Java Lava currently on?',
        answer:
          'Java Lava is currently on version 1.20.2! This version includes major bug fixes, new features, and improved stability. Check our updates section for detailed changelog information.',
      },
    ],
  },
  {
    category: 'Technical Issues',
    questions: [
      {
        question: 'Java Lava is offline, what should I do?',
        answer:
          'If Java Lava appears offline, it might be undergoing maintenance, experiencing temporary downtime, or having connection issues. Check our status page and Discord server for real-time updates.',
        link: { text: 'Check Status', url: 'https://javalava.statuspage.io/' },
      },
      {
        question: "Commands aren't working properly",
        answer:
          'First, ensure Java Lava has the necessary permissions in your server. If issues persist, try refreshing Discord or rejoining the voice channel. For persistent problems, contact our support team.',
      },
      {
        question: 'How do I report a bug?',
        answer:
          "Report bugs in our Discord server's bug report channel, or help us test new features with our open beta bot! Our developers actively monitor reports and work quickly to resolve issues.",
        link: {
          text: 'Join Support Server',
          url: 'https://discord.gg/6tF3UFWA6F',
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
          'We aim for updates every 3-6 months, though the timeline can vary depending on feature complexity and testing requirements. We prioritize stability and thorough testing over rushed releases.',
      },
      {
        question: 'Where can I suggest new features?',
        answer:
          'Join our Discord server and use the suggestions channel! We love hearing from our community and many user suggestions have been implemented in past updates.',
        link: {
          text: 'Make a Suggestion',
          url: 'https://discord.gg/6tF3UFWA6F',
        },
      },
      {
        question: "What's new in version 1.20?",
        answer:
          'Version 1.20 includes major bug fixes (ban command errors, memory leaks), a new reminder system, open beta bot access, premium features, and this improved documentation site!',
      },
      {
        question: 'Can I test beta features?',
        answer:
          "Yes! We now offer an open beta bot where you can test new features before they're released to the main bot. Join our Discord server to get access.",
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        question: "I need help that isn't covered here",
        answer:
          'Join our Discord server for direct support from our team and community. We have dedicated support channels and active staff members ready to help.',
        link: { text: 'Get Support', url: 'https://discord.gg/6tF3UFWA6F' },
      },
      {
        question: 'How can I view current known bugs?',
        answer:
          'Check the Bugs section in our documentation or visit the bug tracker channel in our support server for the most up-to-date information on known issues.',
      },
      {
        question: 'How can I contribute to Java Lava?',
        answer:
          "While Java Lava isn't open source, you can contribute by reporting bugs, suggesting features, helping other users in our community, and providing feedback on beta features.",
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

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6">
              <QuestionMarkCircleIcon className="h-5 w-5 text-[var(--color-accent)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-accent)]">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">Need Help?</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find answers to the most common questions about Java Lava Discord
              bot. Can't find what you're looking for? Join our support
              community!
            </p>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900/30 rounded-2xl p-6 border border-gray-800/50"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <div
                    className={`w-2 h-8 rounded-full ${categoryIndex === 0 ? 'bg-[var(--color-primary)]' : categoryIndex === 1 ? 'bg-[var(--color-secondary)]' : categoryIndex === 2 ? 'bg-[var(--color-accent)]' : 'bg-gray-500'}`}
                  ></div>
                  {category.category}
                </h2>

                <div className="space-y-3">
                  {category.questions.map((faq, questionIndex) => {
                    const key = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedItems[key];

                    return (
                      <div
                        key={questionIndex}
                        className="border border-gray-800/50 rounded-lg overflow-hidden hover:border-gray-700/50 transition-colors"
                      >
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
                          onClick={() =>
                            toggleExpanded(categoryIndex, questionIndex)
                          }
                        >
                          <span className="font-medium text-white pr-4">
                            {faq.question}
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="px-6 pb-6 pt-2">
                            <div className="text-gray-300 leading-relaxed">
                              <p>{faq.answer}</p>
                              {faq.link && (
                                <div className="mt-4">
                                  <a
                                    href={faq.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[var(--color-accent)] hover:text-[var(--color-secondary)] transition-colors font-medium"
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
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 rounded-2xl border border-[var(--color-primary)]/20">
            <QuestionMarkCircleIcon className="h-12 w-12 text-[var(--color-primary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Still Need Help?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Can't find the answer you're looking for? Our community and
              support team are here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/6tF3UFWA6F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary)]/80 transition-colors"
              >
                <span>Join Support Server</span>
              </a>
              <a
                href="https://javalava.statuspage.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors"
              >
                <span>Check Status</span>
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
