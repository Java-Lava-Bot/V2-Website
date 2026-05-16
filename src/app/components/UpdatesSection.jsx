'use client';

import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  BugAntIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function UpdatesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const updates = [
    {
      icon: <ArrowPathIcon className="h-6 w-6" />,
      title: 'Study Buddy Improvements!',
      description:
        'We have implement a LOT of improvements to the study buddy feature, and it is now going to be a lot more useful and better than before!',
    },
    {
      icon: <XMarkIcon className="h-6 w-6" />,
      title: 'Scam Prevention System updated!',
      description:
        'We have updated the scam prevention system to better detect and prevent scam related activities!',
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6" />,
      title: 'Prefix Updates!',
      description:
        'We have re-added the prefix commands into Java Lava after getting taken out silently for 2 to 3 weeks!',
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
      title: 'Bot itself',
      description:
        'Java Lava version 3 is in development and we are working hard to bring you the best experience possible with the bot itself, stay tuned for more updates on this!',
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: 'Website updates',
      description:
        'We have updated the website to include the latest features and improvements!',
    },
    {
      icon: <ArrowsPointingOutIcon className="h-6 w-6" />,
      title: 'Invite system updated!',
      description:
        'We have implemented a new invite system for the bot, which allows you to easily invite the bot to your server and manage your invites through the website and it redirects to this page!',
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-primary)]\60 opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-secondary)]\60 opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-[var(--color-secondary)] bg-opacity-20 text-[var(--color-WhatsNew)]">
            What's New
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[var(--color-accent)]">Version 2.2</span> has
            Released!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Released on May 12th, 2026 - Check out the latest improvements and
            changes to Java Lava
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-[var(--color-primary)] border-opacity-20 bg-[#1a1a2e] hover:border-[var(--color-secondary)] transition-all duration-300"
              variants={itemVariants}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 rounded-md bg-[var(--color-primary)] bg-opacity-20 text-[var(--color-accent)]">
                  {update.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">
                    {update.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{update.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="/docs/updates"
            className="inline-flex items-center px-6 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-Changelog)] hover:bg-opacity-10 transition-all duration-300"
          >
            View Complete Changelog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
