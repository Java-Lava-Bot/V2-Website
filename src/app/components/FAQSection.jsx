'use client';

import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'How do I add Java Lava to my Discord server?',
      answer:
        "Adding Java Lava to your server is simple. Just click the 'Add to Discord' button on our website, select your server from the list, and grant the necessary permissions. The bot will join your server immediately and send a welcome message with setup instructions.",
    },
    {
      question: 'Is Java Lava free to use?',
      answer:
        'Yes! Java Lava is free to use with a generous set of features available to all servers. We also offer a Premium version with additional features like enhanced moderation tools, priority support, and exclusive commands for those who want to get the most out of their Discord server.',
    },
    {
      question: 'What permissions does Java Lava need?',
      answer:
        'For basic functionality, Java Lava needs permissions to read and send messages, embed links, and attach files. For moderation commands, it will need additional permissions like kicking/banning members, managing roles, and managing messages. We recommend using the default permission settings when adding the bot for optimal performance. We do ask for administrator permissions to ensure all features work correctly.',
    },
    {
      question: "How do I get help if I'm having issues with the bot?",
      answer:
        "We provide several support channels. You can join our official support server by clicking the 'Support' link in our website footer, check the documentation for common issues, or contact us directly through the site. Premium users have access to priority support with faster response times.",
    },
    {
      question: "Can I customize the bot's prefix?",
      answer:
        'No. Java Lava does not currently support custom prefixes. The default prefix is "J.", and Java Lava also uses Discord slash commands. This makes commands easier to use without worrying about prefix conflicts with other bots. A custom prefix may be added in the future based on user feedback.',
    },
    {
      question: 'Is there a limit to how many commands I can use?',
      answer:
        'For free users, there are reasonable rate limits to ensure fair usage for everyone. Premium users enjoy higher rate limits and priority command processing. We continuously monitor system performance to provide a reliable experience while preventing abuse.',
    },
    {
      question: 'I have found a bug! What should I do?',
      answer:
        'Please report any bugs through our support server or by using the /report command. Include details such as the command you were using, any error messages, and steps to reproduce the issue. Screenshots can also help us identify and fix problems faster.',
    },
    {
      question: 'Where can I find the documentation for Java Lava commands?',
      answer:
        'You can find the documentation in the Docs section of the navigation menu at the top of the website. From there, select Commands.',
    },
    {
      question:
        'Why does Java Lava ask for Manage access to its commands in a server?',
      answer:
        "Java Lava uses Discord's slash command system. This permission allows the bot to manage its own slash commands and keep them registered correctly, without requiring manual command registration or updates.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='relative isolate overflow-hidden bg-[#0b0a12] py-28 text-white'>
      {/* Grid */}
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
        className='pointer-events-none absolute right-[-14rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#a78bfa]/[0.06] blur-[130px]'
      />

      {/* Orange glow continuing from Testimonials */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[-12rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#fb923c]/[0.04] blur-[120px]'
      />

      <div className='relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end'
        >
          <div>
            <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / faq
            </div>

            <h2 className='text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Questions?
              <br />
              <span className='text-[#a78bfa]'>We've got answers.</span>
            </h2>
          </div>

          <p className='max-w-xl text-base leading-7 text-white/50 lg:justify-self-end sm:text-lg'>
            Everything you need to know about adding Java Lava, configuring your
            server, using commands, and getting support when you need it.
          </p>
        </motion.div>

        {/* FAQ Console */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='overflow-hidden border border-white/10 bg-[#11101a]'
        >
          {/* Console header */}
          <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
            <div className='flex items-center gap-3'>
              <div className='flex gap-1.5'>
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
                <span className='h-2.5 w-2.5 bg-white/15' />
              </div>

              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                java-lava / faq.log
              </span>
            </div>

            <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400'>
              <span className='h-1.5 w-1.5 bg-emerald-400' />
              {faqs.length} entries
            </div>
          </div>

          {/* Questions */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.045,
                  }}
                  className='group border-b border-white/10 last:border-b-0'
                >
                  <button
                    type='button'
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className='flex w-full items-center gap-5 px-5 py-6 text-left transition-colors hover:bg-white/[0.025] sm:px-7'
                  >
                    {/* Number */}
                    <span
                      className={`hidden min-w-8 font-mono text-[10px] tracking-[0.15em] sm:block ${
                        isOpen ? 'text-[#fb923c]' : 'text-white/20'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-base font-semibold tracking-[-0.01em] transition-colors sm:text-lg ${
                        isOpen
                          ? 'text-white'
                          : 'text-white/75 group-hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Status */}
                    <span className='hidden font-mono text-[9px] uppercase tracking-[0.15em] text-white/20 sm:block'>
                      {isOpen ? 'open' : 'view'}
                    </span>

                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-[#a78bfa] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          ease: 'easeInOut',
                        }}
                        className='overflow-hidden'
                      >
                        <div className='px-5 pb-7 sm:pl-[4.9rem] sm:pr-16'>
                          <div className='border-l border-[#a78bfa]/30 pl-5'>
                            <p className='max-w-3xl text-sm leading-7 text-white/40 sm:text-[15px]'>
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Console footer */}
          <div className='flex flex-col gap-5 border-t border-white/10 bg-black/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7'>
            <div>
              <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                Need more help?
              </div>

              <div className='mt-1 text-sm text-white/45'>
                Our support community is available if your question isn't
                answered here.
              </div>
            </div>

            <a
              href='https://javalava.phillsphanbh3.me/support'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex min-h-11 items-center justify-center gap-2 bg-[#a78bfa] px-5 font-semibold text-[#0b0a12] transition-colors hover:bg-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#11101a]'
            >
              Join support
              <span>→</span>
            </a>
          </div>
        </motion.div>

        {/* Footer status line */}
        <div className='mt-12 border-y border-white/10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              Documentation / support / answers
            </span>

            <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa]'>
              Java Lava / ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
