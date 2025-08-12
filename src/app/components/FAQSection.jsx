"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I add Java Lava to my Discord server?",
      answer: "Adding Java Lava to your server is simple. Just click the 'Add to Discord' button on our website, select your server from the list, and grant the necessary permissions. The bot will join your server immediately and send a welcome message with setup instructions."
    },
    {
      question: "Is Java Lava free to use?",
      answer: "Yes! Java Lava is free to use with a generous set of features available to all servers. We also offer a Premium version with additional features like enhanced moderation tools, priority support, and exclusive commands for those who want to get the most out of their Discord server."
    },
    {
      question: "What permissions does Java Lava need?",
      answer: "For basic functionality, Java Lava needs permissions to read and send messages, embed links, and attach files. For moderation commands, it will need additional permissions like kicking/banning members, managing roles, and managing messages. We recommend using the default permission settings when adding the bot for optimal performance."
    },
    {
      question: "How do I get help if I'm having issues with the bot?",
      answer: "We provide several support channels. You can join our official support server by clicking the 'Support' link in our website footer, check the documentation for common issues, or contact us directly through the site. Premium users have access to priority support with faster response times."
    },
    {
      question: "Can I customize the bot's prefix?",
      answer: "Yes! You can change the command prefix using the /prefix command. For example, /prefix ! will change the command prefix to ! so you can use commands like !help. This is useful if you have multiple bots that might be using the same default prefix."
    },
    {
      question: "Is there a limit to how many commands I can use?",
      answer: "For free users, there are reasonable rate limits to ensure fair usage for everyone. Premium users enjoy higher rate limits and priority command processing. We continuously monitor system performance to provide the best experience for all users while preventing abuse."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--color-primary)] to-transparent opacity-[0.03]"></div>
        <div className="absolute -right-24 top-40 w-48 h-48 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[var(--color-primary)] bg-opacity-20 text-[var(--color-primary)]">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about Java Lava and how to get the most out of it for your Discord server.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border border-[var(--color-primary)] border-opacity-20 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDownIcon 
                  className={`w-5 h-5 text-[var(--color-accent)] transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400">
            Still have questions? Feel free to{" "}
            <a 
              href="/contact" 
              className="text-[var(--color-accent)] hover:underline"
            >
              contact us
            </a>{" "}
            or join our{" "}
            <a 
              href="https://discord.gg/javalava" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              support server
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
