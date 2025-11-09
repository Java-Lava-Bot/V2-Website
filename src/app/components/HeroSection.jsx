'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[var(--color-primary)] to-transparent opacity-10"></div>

        {/* Animated circles */}
        <motion.div
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.07, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-secondary)] bg-opacity-20 text-[var(--color-secondary/60)]">
                Discord Bot
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Ultimate Discord <br />
              <span className="text-gradient bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)]">
                Moderation Bot
              </span>
            </motion.h1>

            <motion.p
              className="text-text text-lg mb-8 max-w-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Java Lava is a powerful, feature-rich Discord bot designed to
              elevate your server experience with advanced moderation tools,
              custom welcome messages, and much more.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
            <a
              href="/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:bg-opacity-90 transition-all duration-300"
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 640 512"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              />
              </svg>
                Add to Discord
                </a>

              <a
                href="/features"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:bg-opacity-10 transition-all duration-300"
              >
                Explore Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>

            <motion.div
              className="mt-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#1a1a2e] bg-gray-800"
                  ></div>
                ))}
              </div>
              <div className="ml-3">
                <span className="text-sm font-medium">Trusted by</span>
                <span className="text-sm text-[var(--color-accent)] ml-1 font-semibold">
                  16,700+
                </span>
                <span className="text-sm ml-1 font-medium">servers</span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Bot illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Bot dashboard mockup */}
              <div className="bg-[#1a1a2e] border border-[var(--color-primary)] border-opacity-30 rounded-xl overflow-hidden shadow-xl shadow-[var(--color-primary)]/5">
                <div className="border-b border-[var(--color-primary)] border-opacity-20 p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Java Lava Dashboard - fix being worked on.
                  </div>
                  <div></div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[var(--color-primary)] bg-opacity-10 p-4 rounded-lg">
                      <div className="text-xs text-gray-400 mb-1">
                        Active Servers
                      </div>
                      <div className="text-2xl font-bold">52</div>
                    </div>
                    <div className="bg-[var(--color-accent)] bg-opacity-10 p-4 rounded-lg">
                      <div className="text-xs text-Black-400 mb-1">
                        Commands Used
                      </div>
                      <div className="text-2xl font-bold">63.5M</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[1, 2, 3].map(i => (
                      <div
                        key={i}
                        className="flex items-center p-3 rounded-lg bg-black bg-opacity-20"
                      >
                        <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] bg-opacity-30 flex items-center justify-center text-[var(--color-secondary)]">
                          {i === 1 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          )}
                          {i === 2 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              />
                            </svg>
                          )}
                          {i === 3 && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                              />
                            </svg>
                          )}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">
                            {i === 1 && 'Scheduled Reminder'}
                            {i === 2 && 'Welcome Message'}
                            {i === 3 && 'Moderation Settings'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {i === 1 && 'Today at 3:00 PM'}
                            {i === 2 && 'Customized for new members'}
                            {i === 3 && 'Advanced configuration'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-1.5 w-full bg-[var(--color-primary)] bg-opacity-20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)]"
                      initial={{ width: '80%' }}
                      animate={{ width: isHovered ? '60%' : '25%' }}
                      transition={{ duration: 2.0 }}
                    ></motion.div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400 flex justify-between">
                    <span>Server Capacity</span>
                    <span className="text-[var(--color-accent)]">
                      {isHovered ? '60%' : '25%'}
                    </span>
                  </div>
                </div>
              </div>

              <p className="absolute bottom-2 left-2 z-50 text-sm bg-opacity-60 px-2  rounded">
                Our Commands Used data is a placeholder, not real data.
              </p>

              {/* Animated elements */}
              <motion.div
                className="absolute -right-6 -bottom-6 w-12 h-12 rounded-lg bg-[var(--color-accent)] flex items-center justify-center text-white"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -left-6 top-20 w-12 h-12 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1,
                }}
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 text-[#1a1a2e]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              fillOpacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,154.7C384,171,480,181,576,165.3C672,149,768,107,864,90.7C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
