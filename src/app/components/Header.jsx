
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { href: "/", label: "Home", icon: "fas fa-home" },
  { href: "/about-us", label: "About Us", icon: "fas fa-info-circle" },
  { href: "/terms-of-service", label: "Terms of Service", icon: "fas fa-file-contract" },
  { href: "/privacy-policy", label: "Privacy Policy", icon: "fas fa-user-shield" },
  { href: "/partners", label: "Partners", icon: "fas fa-handshake" },
  { href: "https://top.gg/bot/1305190785536360519/vote", label: "Vote", icon: "fas fa-vote-yea", external: true },
  { href: "/docs", label: "Docs", icon: "fas fa-info", external: true },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        className="bg-[var(--color-dark)] bg-opacity-95 backdrop-blur-lg border-b border-[var(--color-primary)] border-opacity-40 shadow-xl z-40 relative"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0 text-3xl font-extrabold tracking-wide pl-2 lg:pl-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center gap-2">
                <span className="text-[var(--color-primary)]">Java</span>
                <span className="text-[var(--color-secondary)]">Lava</span>
              </Link>
            </motion.div>

            <nav className="hidden md:flex flex-wrap items-center justify-start gap-x-6 text-lg text-gray-300 ml-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  variants={linkVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  {link.external ? (
                    <a 
                      href={link.href} 
                      className="flex items-center gap-2 text-gray-300 font-semibold transition-all duration-300 hover:text-[var(--color-accent)]" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className={link.icon}></i> {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="flex items-center gap-2 text-gray-300 font-semibold transition-all duration-300 hover:text-[var(--color-accent)]"
                    >
                      <i className={link.icon}></i> {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <Bars3Icon className="h-8 w-8" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />

            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#1E1E30] bg-opacity-95 border border-[var(--color-primary)] p-8 rounded-xl shadow-2xl w-11/12 max-w-sm text-center relative"
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-white focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="h-8 w-8" />
                </motion.button>

                <div className="space-y-4 mt-6 text-xl">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 + 0.2 }
                      }}
                      exit={{ 
                        opacity: 0, 
                        x: -20, 
                        transition: { delay: (navLinks.length - index) * 0.05 } 
                      }}
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          className="flex items-center gap-2 py-3 px-4 rounded-lg transition duration-200 bg-white/10 text-gray-300 font-semibold hover:bg-[var(--color-primary)] hover:text-white"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={toggleMenu}
                        >
                          <i className={link.icon}></i> {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 py-3 px-4 rounded-lg transition duration-200 bg-white/10 text-gray-300 font-semibold hover:bg-[var(--color-primary)] hover:text-white"
                          onClick={toggleMenu}
                        >
                          <i className={link.icon}></i> {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}