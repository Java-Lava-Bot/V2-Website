"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheckIcon, 
  ClockIcon, 
  ChatBubbleLeftRightIcon, 
  BoltIcon, 
  MegaphoneIcon,
  CpuChipIcon
} from "@heroicons/react/24/outline";

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const features = [
    {
      icon: <ShieldCheckIcon className="h-7 w-7" />,
      title: "Advanced Moderation",
      description: "Powerful tools to keep your server safe. Ban, kick, mute, and more with just a few clicks."
    },
    {
      icon: <ClockIcon className="h-7 w-7" />,
      title: "Reminder System",
      description: "Never forget important events. Set reminders for you and your server members."
    },
    {
      icon: <ChatBubbleLeftRightIcon className="h-7 w-7" />,
      title: "Welcome Messages",
      description: "Greet new members with customizable welcome messages and make them feel at home."
    },
    {
      icon: <BoltIcon className="h-7 w-7" />,
      title: "Auto Roles",
      description: "Automatically assign roles to new members when they join your server."
    },
    {
      icon: <MegaphoneIcon className="h-7 w-7" />,
      title: "Announcement System",
      description: "Easily make server-wide announcements with rich formatting and customization."
    },
    {
      icon: <CpuChipIcon className="h-7 w-7" />,
      title: "Custom Commands",
      description: "Create your own commands that respond exactly how you want them to."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[var(--color-primary)] opacity-[0.03] blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[var(--color-accent)] bg-opacity-20 text-[var(--color-accent)]">
            Features
          </span>
          <h2 className="text-4xl font-bold mb-4">Everything You Need for Your Discord Server</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Java Lava comes packed with powerful features to enhance your Discord server experience.
            From moderation to fun commands, we've got you covered.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-[var(--color-secondary)] bg-opacity-10 text-[var(--color-accent)]">
                  {feature.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400 pl-16">{feature.description}</p>
              
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
          <a 
            href="/commands" 
            className="inline-flex items-center px-8 py-3 rounded-lg bg-[var(--color-secondary)] text-white hover:bg-opacity-90 transition-all duration-300"
          >
            Explore All Commands
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
