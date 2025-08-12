"use client";

import { useEffect } from 'react';

export default function StatusScript() {
  useEffect(() => {
    // Load the StatusPage script
    const script = document.createElement('script');
    script.src = 'https://javalava.statuspage.io/embed/script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
