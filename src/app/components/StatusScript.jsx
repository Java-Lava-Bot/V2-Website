'use client';

import { useEffect } from 'react';

export default function StatusScript() {
  useEffect(() => {
    const src = 'https://javalava.statuspage.io/embed/script.js';

    // Prevent duplicate injection (useful in dev Strict Mode and when navigating)
    const existing = /** @type {HTMLScriptElement|null} */ (document.querySelector(`script[src="${src}"]`));
    if (existing) return;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Only remove if it's still in the DOM (prevents NotFoundError)
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
