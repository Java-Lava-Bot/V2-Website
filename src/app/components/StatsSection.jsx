"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StatsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const stats = [
    { value: "16.7K+", label: "Servers" },
    { value: "2.3M+", label: "Users" },
    { value: "63.5M+", label: "Commands Run" },
    { value: "99.9%", label: "Uptime" }
  ];

  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section ref={sectionRef} className="py-20 relative">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute h-px w-full top-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20"></div>
        <div className="absolute h-px w-full bottom-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20"></div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, y }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Trusted by thousands of Discord communities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the thousands of servers already using Java Lava to enhance their Discord experience.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 rounded-xl bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-20"
            >
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-[var(--color-accent)] bg-opacity-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></div>
                </div>
                <h3 className="text-4xl font-bold text-[var(--color-accent)] mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] bg-opacity-20 flex items-center justify-center text-[var(--color-accent)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold ml-3">Real-time Monitoring</h4>
            </div>
            <p className="text-gray-400">
              We constantly monitor our systems to ensure maximum uptime and performance. Our infrastructure 
              is designed to handle millions of commands every day without breaking a sweat.
            </p>
          </div>

          <div className="bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] bg-opacity-20 flex items-center justify-center text-[var(--color-accent)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold ml-3">Premium Support</h4>
            </div>
            <p className="text-gray-400">
              Our dedicated support team is always ready to help with any issues or questions. Premium users enjoy 
              priority support with response times measured in minutes, not hours.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
