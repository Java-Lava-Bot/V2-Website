'use client';

import {
  ArrowRightIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count <= 0) {
      window.location.href = '/';
      return;
    }

    const timer = window.setTimeout(() => {
      setCount(current => current - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [count]);

  return (
    <main className='relative isolate min-h-screen overflow-hidden bg-[#0b0a12] text-white'>
      {/* Shared background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-[0.035]'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Shared glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[-14rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute bottom-[-16rem] right-[-14rem] h-[32rem] w-[32rem] rounded-full bg-[#fb923c]/[0.03] blur-[120px]'
      />

      <div className='relative flex min-h-screen items-center justify-center px-5 py-16 sm:px-8 lg:px-10'>
        <div className='w-full max-w-4xl'>
          {/* Breadcrumb */}
          <div className='mb-8 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a78bfa]'>
            <span className='h-1.5 w-1.5 bg-[#a78bfa]' />
            Java Lava / error
          </div>

          {/* Error panel */}
          <div className='border border-white/10 bg-[#11101a]'>
            {/* Terminal header */}
            <div className='flex items-center gap-3 border-b border-white/10 px-5 py-4'>
              <div className='flex gap-1.5'>
                <span className='h-2 w-2 bg-white/15' />
                <span className='h-2 w-2 bg-white/15' />
                <span className='h-2 w-2 bg-white/15' />
              </div>

              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                java-lava / 404
              </span>
            </div>

            <div className='px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
              {/* Status */}
              <div className='mb-6 flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#fb923c]'>
                <ExclamationTriangleIcon className='h-4 w-4' />
                Error 404
              </div>

              {/* 404 */}
              <h1 className='text-[clamp(5rem,14vw,10rem)] font-black leading-[0.8] tracking-[-0.07em]'>
                <span className='text-[#a78bfa]'>404</span>
              </h1>

              <h2 className='mt-8 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl'>
                Page Not Found
              </h2>

              <p className='mt-5 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
                Oops! The page you are looking for doesn't exist or has been
                moved. Check the URL or return to the Java Lava homepage.
              </p>

              {/* Redirect information */}
              <div className='mt-10 border-y border-white/10 py-5'>
                <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
                  <div>
                    <div className='font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                      Automatic redirect
                    </div>

                    <div className='mt-2 font-mono text-sm text-white/60'>
                      java-lava / home
                    </div>
                  </div>

                  <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                    Redirecting in{' '}
                    <span className='text-[#a78bfa]'>{count}s</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className='mt-8'>
                <Link
                  href='/'
                  className='group inline-flex items-center gap-3 border border-[#a78bfa]/30 bg-[#a78bfa]/[0.08] px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#a78bfa] transition-all duration-200 hover:border-[#a78bfa]/50 hover:bg-[#a78bfa]/[0.14] hover:text-[#c4b5fd]'
                >
                  Return Home
                  <ArrowRightIcon className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            </div>
          </div>

          {/* Footer label */}
          <div className='mt-8 flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/15'>
            Java Lava / 404
          </div>
        </div>
      </div>
    </main>
  );
}
