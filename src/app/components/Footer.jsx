
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                delay: 0.3,
                staggerChildren: 0.1
            } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.footer 
            className="relative bg-[#0a0a14] py-16 mt-16 text-center text-gray-400 border-t border-[var(--color-primary)] border-opacity-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerVariants}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-left" variants={itemVariants}>
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">
                            Java<span className="text-[var(--color-secondary)]">Lava</span>
                        </h3>
                        <p className="mb-4 text-sm">
                            An advanced Discord bot designed to enhance your community experience with powerful moderation tools, automod features, and fun commands.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://discord.gg/ZZbuatGPHr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)]">
                                <i className="fab fa-discord text-xl"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)]">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[var(--color-primary)]">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-us" className="text-gray-400 hover:text-[var(--color-accent)] transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/premium" className="text-gray-400 hover:text-[var(--color-accent)] transition">
                                    Premium Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-gray-400 hover:text-[var(--color-accent)] transition">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <a href="https://javalava.statuspage.io/" className="text-gray-400 hover:text-[var(--color-accent)] transition" target="_blank" rel="noopener noreferrer">
                                    Status Page
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms-of-service" className="text-gray-400 hover:text-[var(--color-accent)] transition">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-[var(--color-accent)] transition">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <a href="https://discord.gg/ZZbuatGPHr" className="text-gray-400 hover:text-[var(--color-accent)] transition" target="_blank" rel="noopener noreferrer">
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="pt-6 border-t border-gray-800">
                    <p className="text-sm">
                        © {currentYear} Java Lava Discord Bot. All rights reserved.
                    </p>
                    <p className="text-xs mt-2 text-gray-600">
                        Made with <span className="text-[var(--color-secondary)]">♥</span> by Navin
                    </p>
                </motion.div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                        fill="#0F0F1A" fillOpacity="1"></path>
                </svg>
            </div>
        </motion.footer>
    );
}