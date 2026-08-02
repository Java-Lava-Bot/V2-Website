'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Navin_profile_picture = require('../public/avatars/Navin_profile_picture.png');
const ADKA_profile_picture = require('../public/avatars/ADKA_profile_picture.png');
const JR_PFP = require('../public/avatars/JR_PFP.png');
const JJ_PFP = require('../public/avatars/JJ_PFP.png');
const Ryan_PFP = require('../public/avatars/Ryan_pfp.png');
const ziggy_PFP = require('../public/avatars/ziggy.gif');
const ritz_PFP = require('../public/avatars/Ritz_pfp.png');
const soab_PFP = require('../public/avatars/ttb.soaby.gif');

const testimonials = [
  {
    id: 1,
    quote:
      'Owner is a great guy, bot has many moderation commands as well as fun command to check out.',
    author: 'navin.10',
    role: 'Fellow Discord bot developer',
    avatar: Navin_profile_picture.default.src,
  },
  {
    id: 2,
    quote:
      'I like how it has a lot of great moderation stuff and unique automod modules that other bots do not have. I also like how I can set reminders with this bot.',
    author: 'techadka78',
    role: 'Server Owner',
    avatar: ADKA_profile_picture.default.src,
  },
  {
    id: 3,
    quote:
      'Love the easy access to the majority of the features, the stability of it and the wide range of options available with the bot. It is like multiple bots all into one.',
    author: 'JR The Fantastic',
    role: 'VIP Member and TMTOJ Community Leader',
    avatar: JR_PFP.default.src,
  },
  {
    id: 4,
    quote:
      'Java Lava is an amazing bot. It provides great security measures and makes bans and kicks easier than with larger bots.',
    author: 'JJ The Purple Lad',
    role: 'Former Community Manager',
    avatar: JJ_PFP.default.src,
  },
  {
    id: 5,
    quote:
      "It's quite easy to work with Java Lava. There are some bugs, but the team is doing a great job resolving them.",
    author: 'ℝ𝕪𝕒𝕟𝟛𝟛𝟜𝟛',
    role: 'Server Administrator',
    avatar: Ryan_PFP.default.src,
  },
  {
    id: 6,
    quote:
      "Java Lava is a decent bot, great for small servers. Mainly tailored towards mobile users with automod commands. I'd recommend adding the bot.",
    author: 'ziggy._.mc',
    role: 'Server Owner & Developer',
    avatar: ziggy_PFP.default.src,
  },
  {
    id: 7,
    quote:
      'As someone who loves using the Java Lava bot, I can say it helped me with all of my moderation problems. It helped keep my server monitored and made moderation much easier.',
    author: 'Ritz King',
    role: 'Server Owner',
    avatar: ritz_PFP.default.src,
  },
  {
    id: 8,
    quote:
      'As a new member of Discord and a mildly experienced Twitch mod, Java Lava made moderation much easier for my community. The commands are useful and the team keeps me updated on the bot status.',
    author: '𝑠𝑜𝑎𝑏.',
    role: 'Server Owner',
    avatar: soab_PFP.default.src,
  },
];

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(previous => (previous + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, shouldReduceMotion]);

  const changeTestimonial = (nextIndex, nextDirection) => {
    setAutoPlay(false);
    setDirection(nextDirection);
    setCurrentIndex(nextIndex);
  };

  const previous = () => {
    changeTestimonial(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
      -1
    );
  };

  const next = () => {
    changeTestimonial((currentIndex + 1) % testimonials.length, 1);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className='relative isolate overflow-hidden bg-[#0b0a12] py-28 text-white'>
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
      {/* Shared purple glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute right-[-12rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[#a78bfa]/10 blur-[120px]'
      />
      {/* Shared orange glow */}{' '}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute bottom-[-12rem] left-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#fb923c]/[0.04] blur-[120px]'
      />
      {/* Shared orange glow — continues from Features */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute left-[-12rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#fb923c]/[0.04] blur-[120px]'
      />
      <div className='relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10'>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14 max-w-2xl'
        >
          <div className='mb-5 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
            <span className='h-2 w-2 bg-[#fb923c]' />
            Java Lava / feedback
          </div>

          <h2 className='text-[clamp(2.7rem,5vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
            Built for the people
            <br />
            <span className='text-[#a78bfa]'>running the server.</span>
          </h2>

          <p className='mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg'>
            Server owners and moderators use Java Lava every day. Here&apos;s
            what they have to say about it.
          </p>
        </motion.div>

        <div className='grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16'>
          <div className='border-y border-white/10 py-5'>
            <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              User feedback
            </div>

            <div className='mt-5 font-mono text-5xl font-bold tracking-[-0.05em]'>
              {String(currentIndex + 1).padStart(2, '0')}
            </div>

            <div className='mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
              of {String(testimonials.length).padStart(2, '0')}
            </div>

            <div className='mt-8 h-px bg-white/10' />

            <div className='mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
              Community voices
            </div>
          </div>

          <div className='relative'>
            <div className='absolute -bottom-3 -left-3 h-full w-full border border-[#fb923c]/20 bg-[#fb923c]/[0.03]' />

            <div className='relative overflow-hidden border border-white/10 bg-[#11101a]'>
              <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
                <div className='flex items-center gap-3'>
                  <div className='flex gap-1.5'>
                    <span className='h-2.5 w-2.5 bg-white/15' />
                    <span className='h-2.5 w-2.5 bg-white/15' />
                    <span className='h-2.5 w-2.5 bg-white/15' />
                  </div>

                  <span className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/30'>
                    java-lava / community.log
                  </span>
                </div>

                <div className='flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400'>
                  <span className='h-1.5 w-1.5 bg-emerald-400' />
                  Live
                </div>
              </div>

              <AnimatePresence initial={false} custom={direction} mode='wait'>
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? 40 : -40,
                        }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : {
                          opacity: 0,
                          x: direction > 0 ? -40 : 40,
                        }
                  }
                  transition={{ duration: 0.35 }}
                  className='min-h-[340px] p-7 sm:p-10'
                >
                  <div className='mb-8 flex items-center justify-between border-b border-white/10 pb-5'>
                    <div className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
                      Message received
                    </div>

                    <div className='font-mono text-[10px] text-[#fb923c]'>
                      #{String(testimonial.id).padStart(2, '0')}
                    </div>
                  </div>

                  <div className='grid gap-8 md:grid-cols-[auto_1fr]'>
                    <div className='flex items-start'>
                      <div className='h-16 w-16 overflow-hidden border border-[#a78bfa]/30 bg-[#a78bfa]/10 p-1'>
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={64}
                          height={64}
                          className='h-full w-full object-cover'
                        />
                      </div>
                    </div>

                    <div>
                      <blockquote className='max-w-3xl text-xl font-medium leading-8 tracking-[-0.015em] text-white/85 sm:text-2xl'>
                        &quot;{testimonial.quote}&quot;
                      </blockquote>

                      <div className='mt-8 flex flex-col gap-1'>
                        <span className='font-mono text-sm font-bold text-[#a78bfa]'>
                          {testimonial.author}
                        </span>

                        <span className='text-sm text-white/35'>
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className='flex items-center justify-between border-t border-white/10 bg-black/20 px-5 py-4'>
                <button
                  type='button'
                  onClick={previous}
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]'
                  aria-label='Previous testimonial'
                >
                  ← Previous
                </button>

                <div className='flex items-center gap-2'>
                  {testimonials.map((item, index) => (
                    <button
                      key={item.id}
                      type='button'
                      onClick={() =>
                        changeTestimonial(index, index > currentIndex ? 1 : -1)
                      }
                      className={`h-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] ${
                        index === currentIndex
                          ? 'w-8 bg-[#a78bfa]'
                          : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Show testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  type='button'
                  onClick={next}
                  className='font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-[#a78bfa]'
                  aria-label='Next testimonial'
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 border-y border-white/10 py-4'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <span className='font-mono text-[10px] uppercase tracking-[0.18em] text-white/25'>
              Feedback from Java Lava communities
            </span>

            <button
              type='button'
              onClick={() => setAutoPlay(!autoPlay)}
              className='font-mono text-[10px] uppercase tracking-[0.15em] text-[#a78bfa] transition-colors hover:text-[#c4b5fd] focus:outline-none focus:ring-2 focus:ring-[#a78bfa]'
              aria-label={
                autoPlay
                  ? 'Pause automatic rotation'
                  : 'Resume automatic rotation'
              }
            >
              {autoPlay ? 'Auto / On' : 'Auto / Off'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
