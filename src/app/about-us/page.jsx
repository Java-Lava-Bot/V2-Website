import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function AboutUs() {
  return (
    <>
      <Header />

      <main className='relative isolate overflow-hidden bg-[#0b0a12] py-24 text-white'>
        {/* Shared grid background */}
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

        {/* Subtle shared glows */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14rem] top-16 h-[34rem] w-[34rem] rounded-full bg-[#a78bfa]/[0.045] blur-[130px]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute bottom-[-14rem] left-[-14rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10'>
          {/* Header */}
          <div className='mb-16 border-b border-white/10 pb-10'>
            <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#a78bfa]' />
              Java Lava / about
            </div>

            <h1 className='max-w-4xl text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.95] tracking-[-0.055em]'>
              Where did Java Lava start
              <br />
              and what is it <span className='text-[#a78bfa]'>about?</span>
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              The story behind Java Lava, where it came from, and where we are
              taking it next.
            </p>
          </div>

          {/* Story */}
          <div className='border border-white/10 bg-[#11101a]'>
            <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
              <div className='flex items-center gap-3'>
                <div className='flex gap-1.5'>
                  <span className='h-2.5 w-2.5 bg-white/15' />
                  <span className='h-2.5 w-2.5 bg-white/15' />
                  <span className='h-2.5 w-2.5 bg-white/15' />
                </div>

                <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                  java-lava / story
                </span>
              </div>

              <span className='font-mono text-[10px] uppercase tracking-wider text-emerald-400'>
                November 2024
              </span>
            </div>

            <div className='divide-y divide-white/10'>
              <section className='grid gap-6 p-7 sm:grid-cols-[160px_1fr] sm:p-9'>
                <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                  The beginning
                </div>

                <div className='space-y-5 text-sm leading-7 text-white/50 sm:text-base'>
                  <p>
                    Here at Java Lava, PhillsPhanbh3, Jeo, and Ziggy work hard
                    on all things coding — we're passionate about it.
                  </p>

                  <p>
                    Java Lava started one day in November of 2024 as an
                    ambitious idea to create a public, verified Discord bot.
                  </p>
                </div>
              </section>

              <section className='grid gap-6 p-7 sm:grid-cols-[160px_1fr] sm:p-9'>
                <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                  Building it
                </div>

                <div className='space-y-5 text-sm leading-7 text-white/50 sm:text-base'>
                  <p>
                    PhillsPhanbh3 my lead developer didn’t know where to begin,
                    but with the help of 2 talented coder friends, Jeo and
                    Ziggy, the project began to take off.
                  </p>

                  <p>
                    Since then, Java Lava has grown to over 65 servers and
                    continues expanding with the development of new systems and
                    features.
                  </p>
                </div>
              </section>

              <section className='grid gap-6 p-7 sm:grid-cols-[160px_1fr] sm:p-9'>
                <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                  Today
                </div>

                <div className='space-y-5 text-sm leading-7 text-white/50 sm:text-base'>
                  <p>
                    Right now, Java Lava is focused on moderation and automod
                    functionality.
                  </p>

                  <p className='font-semibold text-[#fb923c]'>
                    Our goal is to provide server admins with powerful tools to
                    keep their communities safe and enjoyable for all members,
                    and to possibly become a competitor to popular bots like
                    MEE6, Dyno, and Carl-bot.
                  </p>
                </div>
              </section>

              <section className='grid gap-6 p-7 sm:grid-cols-[160px_1fr] sm:p-9'>
                <div className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
                  Looking ahead
                </div>

                <div className='space-y-5 text-sm leading-7 text-white/50 sm:text-base'>
                  <p className='font-semibold text-[#a78bfa]'>
                    We're building something new, bold, and exciting — and
                    you're a part of that journey.
                  </p>

                  <p className='font-semibold text-red-300'>
                    The best is yet to come!
                  </p>

                  <p className='font-semibold text-purple-200'>
                    With Java Lava v2 we have worked hard to improve
                    performance, add new features, and create a better user
                    experience overall.
                  </p>

                  <p className='font-semibold text-green-300'>
                    We're excited to continue this journey with you and can't
                    wait to see what the future holds.
                  </p>

                  <p className='font-semibold text-yellow-300'>
                    We thank you for being a part of the Java Lava community!
                  </p>
                </div>
              </section>
            </div>

            {/* Closing */}
            <div className='border-t border-white/10 bg-black/20 px-7 py-7 sm:px-9'>
              <p className='text-sm leading-6 text-white/40'>
                With gratitude,
                <br />
                <span className='text-white/65'>
                  The Java Lava Devs – PhillsPhanbh3, Jeo, &amp; Ziggy
                </span>
              </p>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className='mt-10 border-y border-white/10 py-4'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
              <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                Java Lava / since 2024
              </span>

              <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa]'>
                Java Lava / building
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
