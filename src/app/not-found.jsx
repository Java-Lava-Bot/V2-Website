"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [count, setCount] = useState(10);
  
  useEffect(() => {
    const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
    if (count === 0) {
      window.location.href = "/";
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-dark)] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[var(--color-secondary)] opacity-[0.03] blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
      />
      
      <div className="max-w-md mx-auto text-center px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="text-9xl font-bold text-[var(--color-primary)]"
              animate={{
                textShadow: [
                  "0 0 10px rgba(123, 63, 228, 0.5)",
                  "0 0 20px rgba(123, 63, 228, 0.7)",
                  "0 0 10px rgba(123, 63, 228, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              404
            </motion.div>
            
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[var(--color-accent)]">
                <path d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52001 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52001 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
          
          <motion.h1
            className="text-2xl md:text-3xl font-bold mt-6 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Page Not Found
          </motion.h1>
          
          <motion.p
            className="text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Oops! The page you are looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Return Home
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Redirecting to home page in {count} seconds...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
