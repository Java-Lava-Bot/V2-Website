'use client';

import { useEffect } from 'react';

export default function DebugMarkdown() {
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV === 'development') {
      console.log("Debug Markdown activated");
      
      // Log all h1, h2, h3 elements
      const headings = document.querySelectorAll('.prose h1, .prose h2, .prose h3');
      console.log('Found headings:', headings.length);
      headings.forEach((heading, i) => {
        console.log(`Heading ${i+1}:`, heading.textContent, heading);
      });
      
      // Log all code elements
      const codeElements = document.querySelectorAll('.prose code');
      console.log('Found code elements:', codeElements.length);
      
      // Log all pre elements
      const preElements = document.querySelectorAll('.prose pre');
      console.log('Found pre elements:', preElements.length);
    }
  }, []);
  
  return null;
}
