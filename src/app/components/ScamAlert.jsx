'use client';

import Link from 'next/link';

export default function AlertBanner() {
  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white border-b border-white/10">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        {/* Fixed height so the header offset is predictable */}
        <div className="h-10 flex items-center justify-center text-center">
          <Link
            href="/"
            className="text-[11px] sm:text-sm font-semibold leading-snug text-white/95 line-clamp-2"
          >
            The Java Lava development team strongly recommends enabling the Automod Scam Prevention
            system to help protect against recent scam activity.
          </Link>
        </div>
      </div>
    </div>
  );
}