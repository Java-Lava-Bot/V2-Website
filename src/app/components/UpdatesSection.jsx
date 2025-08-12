"use client";

import { motion } from "framer-motion";
import { BugAntIcon, XMarkIcon, ArrowPathIcon, AdjustmentsHorizontalIcon, UsersIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";

export default function UpdatesSection() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const updates = [
    {
      icon: <BugAntIcon className="h-6 w-6" />,
      title: "Fixed bugs!",
      description: "We have fixed the ban command after multiple developer errors sorry everyone."
    },
    {
      icon: <XMarkIcon className="h-6 w-6" />,
      title: "Removed commands",
      description: "We have removed the /gag-a-member command from all bots. I thought it was removed on all bots but somehow it was not on multiple custom branding bots and premium."
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6" />,
      title: "New features!",
      description: "We have added some new features to the bot and website! check them out below!"
    },
    {
      icon: <AdjustmentsHorizontalIcon className="h-6 w-6" />,
      title: "Bot itself",
      description: "Java Lava now can help remind you of things you set through the bot, this requires you to have dms turn on!"
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Website updates",
      description: "We have buttons that turn from for example yellow to pink for our premium button! And the new premium page, about us, and in Development a documentation page!"
    },
    {
      icon: <ArrowsPointingOutIcon className="h-6 w-6" />,
      title: "Open Beta bot!",
      description: "We have made a brand new Java Lava Open beta discord bot! It is highly unstable but it has the newest features!"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-secondary)] opacity-5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-[var(--color-secondary)] bg-opacity-20 text-[var(--color-secondary)]">
            What's New
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[var(--color-accent)]">Version 1.20</span> has Released!
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Released on July 24th, 2025 - Check out the latest improvements and changes to Java Lava
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-accent)]">{update.title}</h3>
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
            href="/changelog" 
            className="inline-flex items-center px-6 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-10 transition-all duration-300"
          >
            View Complete Changelog
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
