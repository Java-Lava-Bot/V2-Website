"use client";

import { useEffect } from 'react';

export default function useAnimationScripts() {
  useEffect(() => {
    // Set current year in footer
    const yearElements = document.querySelectorAll('#current-year');
    if (yearElements.length > 0) {
      const currentYear = new Date().getFullYear();
      yearElements.forEach(element => {
        element.textContent = currentYear;
      });
    }

    // Add scroll animations
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.scroll-animate');
      
      scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
          element.classList.add('animate-visible');
        }
      });
    };

    // Run once on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
