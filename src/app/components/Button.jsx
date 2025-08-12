"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({ 
  href, 
  children, 
  className = "", 
  external = false,
  color = "blue",
  Icon = null,
  ...props 
}) {
  // Base styles for all buttons
  const baseStyle = "font-bold px-8 py-4 rounded-lg text-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 text-white";
  
  // Color variants using CSS variables
  const colorVariants = {
    primary: "bg-[var(--color-primary)] hover:bg-opacity-90",
    secondary: "bg-[var(--color-secondary)] hover:bg-opacity-90",
    accent: "bg-[var(--color-accent)] hover:bg-opacity-90 text-[var(--color-dark)]",
    dark: "bg-[var(--color-dark)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-20",
    outline: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-10"
  };

  // Combine all classes
  const buttonClasses = `${baseStyle} ${colorVariants[color] || colorVariants.blue} ${className}`;

  // Animation properties
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 10 }
  };

  if (external) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
        {...props}
      >
        {Icon && <span>{Icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link href={href} className={buttonClasses} {...props}>
        {Icon && <span>{Icon}</span>}
        {children}
      </Link>
    </motion.div>
  );
}
