'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
const Navin_profile_pictureName = 'Navin_profile_picture.png';
const Navin_profile_picture = require(`../public/avatars/${Navin_profile_pictureName}`);
const ADKA_profile_pictureName = 'ADKA_profile_picture.png';
const ADKA_profile_picture = require(`../public/avatars/${ADKA_profile_pictureName}`);
const JR_PFPname = 'JR_PFP.png';
const JR_PFP = require(`../public/avatars/${JR_PFPname}`);

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        'Owner is a great guy, bot has many moderation commands as well as fun command to check out.',
      author: 'navin.10',
      role: 'Fellow discord bot developer',
      avatar: `${Navin_profile_picture.default.src}`,
    },
    {
      id: 2,
      quote:
        "I would rate it a 7/10, I like how it has a lot of great moderation stuff and unique automod modules that other bots do not have like banning sexual content, I also like how I can set reminders with this bot",
      author: 'techadka78',
      role: 'Server Owner',
      avatar: `${ADKA_profile_picture.default.src}`,
    },
    {
      id: 3,
      quote:
        'love the easy access to the majority of the features, the stability of it and the wide range of options available with the bot its like multiple bots all into one which is great, only thing so far thats a bit stressful is the current slash commands only for like the ban command it takes a few extra seconds when in a rush other than that even it is good all around!',
      author: 'JR The Fantastic',
      role: 'VIP Member and TMTOJ Community Leader',
      avatar: `${JR_PFP.default.src}`,
    },
    {
      id: 4,
      quote:
        'I run a server with over 50,000 members, and Java Lava handles everything flawlessly. The support team is also incredibly responsive.',
      author: 'Emily Jackson',
      role: 'Content Creator',
      avatar: '/avatars/avatar4.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const handlePrev = () => {
    setAutoPlay(false);
    setDirection(-1);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoPlay(false);
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: direction => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: direction => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-3xl"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[var(--color-primary)] bg-opacity-20 text-[var(--color-secondary/60)]">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what server owners and
            community managers are saying about Java Lava.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-10 left-0 w-20 h-20 rounded-full bg-[var(--color-primary)] bg-opacity-10 blur-xl z-0"></div>
          <div className="absolute bottom-10 right-0 w-20 h-20 rounded-full bg-[var(--color-accent)] bg-opacity-10 blur-xl z-0"></div>

          {/* Decorative quote marks */}
          <div className="absolute -top-10 -left-4 text-[100px] leading-none text-[var(--color-accent)] opacity-10">
            "
          </div>
          <div className="absolute -bottom-20 right-0 text-[100px] leading-none text-[var(--color-accent)] opacity-10">
            "
          </div>

          <div className="bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-20 rounded-xl p-8 md:p-10 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)] bg-opacity-20 p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-[var(--color-accent)]">
                      {testimonials[currentIndex].avatar ? (
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold">
                          {testimonials[currentIndex].author.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-center mb-6">
                    {testimonials[currentIndex].quote}
                  </p>

                  <div className="text-center">
                    <h4 className="text-lg font-bold text-[var(--color-accent)]">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoPlay(false);
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-450 ${index === currentIndex ? 'bg-[var(--color-accent)] w-6' : 'bg-gray-500'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)] hover:bg-opacity-20 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-[var(--color-primary)] bg-opacity-10 text-[var(--color-primary)] hover:bg-opacity-20 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
