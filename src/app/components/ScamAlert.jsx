'use client';

import {
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  NoSymbolIcon,
  LinkIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function ScamAlertSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const alerts = [
    {
      icon: <NoSymbolIcon className="h-7 w-7" />,
      title: 'No DMs From Staff',
      description:
        'We will never DM you first asking for passwords, tokens, or payments. If someone claims to be staff, verify in the server.',
    },
    {
      icon: <LinkIcon className="h-7 w-7" />,
      title: 'Watch Suspicious Links',
      description:
        'Avoid shortened or unfamiliar links. Hover to preview URLs, and only use links posted in official channels.',
    },
    {
      icon: <EnvelopeIcon className="h-7 w-7" />,
      title: 'Fake Giveaways & “Verification”',
      description:
        'Ignore messages about free Nitro, giveaways, or “verify your account” pages. These are common phishing scams.',
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-7 w-7" />,
      title: 'Impersonation Attempts',
      description:
        'Scammers copy names/avatars. Always check the full username, roles, and join date before trusting requests.',
    },
    {
      icon: <ShieldCheckIcon className="h-7 w-7" />,
      title: 'Enable Extra Security',
      description:
        'Turn on 2FA and use a strong unique password. It’s the fastest way to protect your Discord account.',
    },
    // ✅ 6th slot added here
    {
      icon: <ExclamationTriangleIcon className="h-7 w-7" />,
      title: 'Report Suspicious Activity',
      description:
        'If you encounter suspicious activity, report it immediately to Discord support, inform server moderators, and Java Lava staff. They can forward it to the dev team to input it into our scam database to protect other users.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[var(--color-primary)] opacity-[0.03] blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[var(--color-accent)] bg-opacity-20 text-[var(--color-secondary)]">
            <ExclamationTriangleIcon className="h-4 w-4" />
            Scam Alert
          </span>

          <h2 className="text-4xl font-bold mb-4">
            Stay Safe From Discord Scams
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Scammers often target Discord communities with fake giveaways,
            phishing links, and impersonation. Use these quick checks to protect
            your account and your server.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {alerts.map((alert, index) => (
            <motion.div key={index} className="relative" variants={itemVariants}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-[var(--color-secondary)] bg-opacity-10 text-[var(--color-accent)]">
                  {alert.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold">{alert.title}</h3>
              </div>

              <p className="text-gray-400 pl-16">{alert.description}</p>

              {/* Decorative line */}
              <div className="absolute left-6 top-12 h-full w-[1px] bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <a
              href="https://discord.com/safety/360044104071-tips-against-spam-and-hacking"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[var(--color-secondary)] text-white hover:bg-opacity-90 transition-all duration-300"
            >
              Safety Guide
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="/support"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-[var(--color-secondary)] bg-opacity-10 text-white hover:bg-opacity-20 transition-all duration-300"
            >
              Report a Scam
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Tip: If you clicked something suspicious, change your password and
            enable 2FA immediately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}