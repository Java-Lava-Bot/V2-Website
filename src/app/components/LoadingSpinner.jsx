"use client";

import { motion } from "framer-motion";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        {/* Main spinner */}
        <motion.div 
          className="w-16 h-16 rounded-full border-t-4 border-b-4 border-[var(--color-primary)]"
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Secondary spinner */}
        <motion.div 
          className="absolute top-0 left-0 w-16 h-16 rounded-full border-l-4 border-r-4 border-[var(--color-secondary)]"
          animate={{ rotate: -360 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Center dot */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--color-accent)] rounded-full"
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="ml-4">
        <motion.div
          className="text-xl font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading<span className="text-[var(--color-accent)]">...</span>
        </motion.div>
      </div>
    </div>
  );
}
