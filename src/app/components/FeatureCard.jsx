"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ 
  icon, 
  title, 
  description,
  delay = 0,
}) {
  return (
    <motion.div 
      className="bg-[#1E1E30] border border-[var(--color-primary)] border-opacity-30 p-8 rounded-xl shadow-xl text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ 
        y: -10, 
        borderColor: "var(--color-secondary)",
        transition: { duration: 0.3 } 
      }}
    >
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-20 blur-xl"></div>
      <div className="text-6xl mb-6 flex justify-center text-[var(--color-accent)]">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)]">{title}</h3>
      <p className="text-gray-300 text-lg">
        {description}
      </p>
      <div className="w-16 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded-full"></div>
    </motion.div>
  );
}
