'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [serverCount, setServerCount] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    fetch('https://us-1-fjfahczzk.muffindiscord.me/servercount')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch server count');
        }

        return res.json();
      })
      .then(data => {
        setServerCount(data.serverCount);
      })
      .catch(() => {
        setServerCount(null);
      });
  }, []);

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  return (
    <section className='relative isolate overflow-hidden bg-[#0b0a12] text-white'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 opacity-[0.045]'
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-[120px]'
      />

      <div className='relative mx-auto max-w-7xl px-5 pb-28 pt-24 sm:px-8 lg:px-10 lg:pb-36 lg:pt-32'>
        <div className='grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
          <div className='max-w-2xl'>
            <motion.div {...motionProps} className='mb-7'>
              <div className='inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
                <span className='h-2 w-2 rounded-full bg-[#fb923c] shadow-[0_0_14px_#fb923c]' />
                Java Lava / Discord bot
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className='max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-black leading-[0.86] tracking-[-0.065em]'
            >
              Keep your
              <br />
              server{' '}
              <span className='relative inline-block text-[#a78bfa]'>
                under control.
                <span className='absolute -bottom-2 left-0 h-[3px] w-1/2 bg-[#fb923c]' />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className='mt-8 max-w-xl text-base leading-7 text-white/55 sm:text-lg'
            >
              Java Lava gives Discord moderators the tools they need for
              everyday server management, including moderation, welcome
              messages, reminders, configuration, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className='mt-9 flex flex-col gap-3 sm:flex-row'
            >
              <a
                href='/invite/standard'
                target='_blank'
                rel='noopener noreferrer'
                className='group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#a78bfa] px-6 font-semibold text-[#0b0a12] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0b0a12]'
              >
                <svg
                  aria-hidden='true'
                  className='h-5 w-5'
                  viewBox='0 0 640 512'
                  fill='currentColor'
                >
                  <path d='M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91A483.689 483.689 0 0 0 116.085 69.137a1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375A487.666 487.666 0 0 0 176.02 479.918a1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126c3.082-2.309 6.166-4.711 9.109-7.137a1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233c2.944 2.426 6.027 4.851 9.132 7.16a1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352C623.729 277.594 590.933 167.465 524.531 69.836ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239S193.056 219.1 222.491 219.1c29.665 0 53.306 26.82 52.843 59.239C275.334 310.993 251.924 337.58 222.491 337.58Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239S388.437 219.1 417.871 219.1c29.667 0 53.307 26.82 52.844 59.239C470.715 310.993 447.538 337.58 417.871 337.58Z' />
                </svg>
                Add to Discord
                <span className='transition-transform group-hover:translate-x-0.5'>
                  →
                </span>
              </a>

              <a
                href='/features'
                className='inline-flex min-h-12 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-6 font-semibold text-white/80 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30'
              >
                Explore features
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className='relative'
          >
            <div
              className='relative'
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                aria-hidden='true'
                className='absolute -bottom-3 -right-3 h-full w-full border border-[#fb923c]/20 bg-[#fb923c]/[0.04]'
              />

              <div className='relative overflow-hidden border border-white/10 bg-[#11101a] shadow-[0_30px_100px_rgba(0,0,0,.45)]'>
                <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
                  <div className='flex items-center gap-3'>
                    <div className='flex gap-1.5'>
                      <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
                      <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
                      <span className='h-2.5 w-2.5 rounded-full bg-white/15' />
                    </div>

                    <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                      java-lava / moderation
                    </span>
                  </div>

                  <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400'>
                    <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]' />
                    Online
                  </div>
                </div>

                <div className='grid md:grid-cols-[1fr_0.8fr]'>
                  <div className='border-b border-white/10 p-5 md:border-b-0 md:border-r'>
                    <div className='mb-5 flex items-end justify-between'>
                      <div>
                        <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/30'>
                          Recent activity
                        </div>

                        <div className='mt-1 text-lg font-semibold'>
                          Mod queue
                        </div>
                      </div>

                      <span className='rounded-sm bg-[#a78bfa]/10 px-2 py-1 font-mono text-[10px] text-[#a78bfa]'>
                        LIVE
                      </span>
                    </div>

                    <div className='space-y-2'>
                      {[
                        {
                          command: '/warn',
                          user: '@nightshift',
                          reason: 'Spam',
                          time: 'now',
                        },
                        {
                          command: '/timeout',
                          user: '@pixelvoid',
                          reason: 'Rule 04',
                          time: '2m',
                        },
                        {
                          command: '/welcome',
                          user: '@newmember',
                          reason: 'Joined',
                          time: '5m',
                        },
                        {
                          command: '/reminder',
                          user: '#general',
                          reason: 'Scheduled',
                          time: '12m',
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.command + item.user}
                          animate={
                            shouldReduceMotion
                              ? {}
                              : {
                                  x: isHovered && index === 0 ? 4 : 0,
                                }
                          }
                          transition={{ duration: 0.25 }}
                          className='group flex items-center gap-3 border border-white/[0.06] bg-white/[0.025] p-3 transition-colors hover:border-white/10 hover:bg-white/[0.04]'
                        >
                          <div className='flex h-8 w-8 shrink-0 items-center justify-center bg-[#a78bfa]/10 font-mono text-xs text-[#a78bfa]'>
                            /
                          </div>

                          <div className='min-w-0 flex-1'>
                            <div className='flex items-center gap-2'>
                              <span className='font-mono text-xs font-bold text-white/80'>
                                {item.command}
                              </span>

                              <span className='truncate text-xs text-white/35'>
                                {item.user}
                              </span>
                            </div>

                            <div className='mt-1 text-[10px] text-white/25'>
                              {item.reason}
                            </div>
                          </div>

                          <span className='font-mono text-[9px] text-white/20'>
                            {item.time}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className='p-5'>
                    <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/30'>
                      Server tools
                    </div>

                    <div className='mt-5 border-b border-white/10 pb-5'>
                      <div className='text-2xl font-black tracking-[-0.04em]'>
                        Moderation
                      </div>

                      <div className='mt-1 text-xs text-white/35'>
                        Tools for everyday server management
                      </div>
                    </div>

                    <div className='space-y-2 pt-5'>
                      {[
                        {
                          name: 'Moderation',
                          command: '/moderate',
                        },
                        {
                          name: 'Welcome messages',
                          command: '/welcome',
                        },
                        {
                          name: 'Reminders',
                          command: '/reminder',
                        },
                      ].map((tool, index) => (
                        <motion.div
                          key={tool.command}
                          animate={
                            shouldReduceMotion
                              ? {}
                              : {
                                  x: isHovered ? 3 : 0,
                                }
                          }
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                          className='flex items-center justify-between border border-white/[0.07] bg-white/[0.02] px-3 py-3'
                        >
                          <span className='text-xs text-white/55'>
                            {tool.name}
                          </span>

                          <span className='font-mono text-[9px] text-[#a78bfa]'>
                            {tool.command}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className='border-t border-white/10 bg-black/20 px-5 py-4'>
                  <div className='flex flex-wrap items-center justify-between gap-4'>
                    <div className='flex items-center gap-3 font-mono text-xs'>
                      <span className='text-[#fb923c]'>java@lava</span>
                      <span className='text-white/20'>:</span>
                      <span className='text-[#a78bfa]'>~</span>
                      <span className='text-white/20'>$</span>
                      <span className='text-white/60'>
                        ready for moderation_
                      </span>
                    </div>

                    {/* Live server count */}
                    <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em]'>
                      <span className='h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]' />

                      <span className='text-white/35'>
                        {serverCount !== null
                          ? `${serverCount} servers`
                          : 'Loading...'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className='mt-24 border-y border-white/10 py-4'
        >
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              Made for Discord communities that need reliable moderation
            </div>

            <div className='flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35'>
              <a
                href='/features'
                className='transition-colors hover:text-white focus:outline-none focus:text-white'
              >
                Features
              </a>

              <a
                href='/status'
                className='transition-colors hover:text-white focus:outline-none focus:text-white'
              >
                Status
              </a>

              <a
                href='/invite/standard'
                className='text-[#a78bfa] transition-colors hover:text-[#c4b5fd] focus:outline-none'
              >
                Add bot →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
