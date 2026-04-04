'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function StatusRedirect() {
  const [count, setCount] = useState(5);
  const timerRef = useRef(null);

  useEffect(() => {
    if (count === 0) {
      window.location.href = 'https://javalava.statuspage.io/';
      return;
    }

    timerRef.current = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-dark)] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
      />

      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-secondary)] opacity-[0.03] blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
      />

      <div className="max-w-md mx-auto text-center px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.div
            className="text-6xl md:text-7xl font-bold text-[var(--color-primary)]"
            animate={{
              textShadow: [
                '0 0 10px rgba(123, 63, 228, 0.5)',
                '0 0 20px rgba(123, 63, 228, 0.7)',
                '0 0 10px rgba(123, 63, 228, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            Status Page Redirect
          </motion.div>

          <motion.h1
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Redirecting to Status Page!
          </motion.h1>

          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Click the button or wait for the countdown to finish.
          </motion.p>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a
              href="https://javalava.statuspage.io/"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-opacity-90 transition-all duration-300"
              rel="noopener noreferrer"
            >
              Status Page Link
            </a>
          </motion.div>

          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Redirecting to Status Page in {count} seconds...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}