"use client";

import { motion } from "framer-motion";
import { SparklesIcon, RocketLaunchIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export default function PremiumCTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const premiumFeatures = [
    {
      icon: <SparklesIcon className="h-6 w-6" />,
      title: "Exclusive Commands",
      description: "Access to premium-only commands and features that enhance your server experience."
    },
    {
      icon: <RocketLaunchIcon className="h-6 w-6" />,
      title: "Priority Support",
      description: "Get faster responses from our dedicated support team when you need assistance."
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Enhanced moderation tools and raid protection for better server security."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--color-primary)] to-transparent opacity-[0.03]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-30 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - content */}
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] text-white mb-6">
                  <svg className="mr-1.5 h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Premium
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Upgrade to <span className="text-gradient bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)]">Premium</span>
                </h2>
                
                <p className="text-gray-400 mb-8">
                  Unlock the full potential of Java Lava with our premium features. 
                  Enhance your server's capabilities and provide a better experience for your members.
                </p>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6 mb-8"
                >
                  {premiumFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={itemVariants}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 p-1.5 rounded-md bg-[var(--color-accent)] bg-opacity-20 text-[var(--color-accent)]">
                        {feature.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a 
                    href="/premium" 
                    className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent)]/20"
                  >
                    Upgrade Now
                  </a>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Right column - image/illustration */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] opacity-10"></div>
              
              {/* Premium badge overlay */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              >
                <div className="w-48 h-48 rounded-full bg-[var(--color-secondary)] bg-opacity-20 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-accent)] opacity-20 flex items-center justify-center">
                      <div className="text-center">
                        <SparklesIcon className="h-12 w-12 mx-auto text-[var(--color-accent)]" />
                        <p className="text-2xl font-bold text-white mt-2">Premium</p>
                        <p className="text-sm text-gray-300">Unlock all features</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative circles */}
              <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-[var(--color-accent)] opacity-10"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-10"></div>
            </div>
          </div>
        </div>
        
        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All premium features come with a 7-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
