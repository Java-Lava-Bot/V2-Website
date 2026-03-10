'use client';

import Link from 'next/link';

export default function Header() {

  const message =
    'The Java Lava development team strongly recommends enabling the Automod Scam Prevention system to help protect against recent scam activity.';

  return (
    <>
      <header className="sticky top-0 z-50 bg-red-600 text-white backdrop-blur-xl border-b border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-10">
          {/* MOBILE LAYOUT */}
          <div className="md:hidden py-2">
            {/* Row 1: left title + hamburger on right */}
            <div className="flex items-center justify-between gap-3">
              <Link href="/" className="text-xl font-bold text-white whitespace-nowrap">
                Java Lava Alert
              </Link>
            </div>

            {/* Row 2: centered message (no crazy squeezing) */}
            <div className="mt-1 text-center">
              <Link href="/" className="block text-xs font-semibold leading-snug text-white/95">
                {message}
              </Link>
            </div>
          </div>

          {/* DESKTOP LAYOUT */}
          <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center h-16 gap-4">
            {/* Left */}
            <div className="justify-self-start">
              <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap">
                Java Lava Alert
              </Link>
            </div>

            {/* Center */}
            <div className="min-w-0 justify-self-stretch px-2">
              <Link href="/" className="block w-full text-center text-sm lg:text-base font-bold text-white">
                {message}
              </Link>
            </div>

            {/* Right */}
            <div className="justify-self-end flex items-center gap-3">
              <Link href="/" className="text-2xl font-bold text-white whitespace-nowrap">
                Java Lava Alert
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}