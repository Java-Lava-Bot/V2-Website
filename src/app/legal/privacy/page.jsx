'use client';

import {
  ClockIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

export default function PrivacyPolicy() {
  return (
    <>
      <StatusScript />
      <Header />

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

        {/* Subtle shared glows */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute left-[-14rem] top-32 h-[30rem] w-[30rem] rounded-full bg-[#a78bfa]/[0.045] blur-[120px]'
        />

        <div
          aria-hidden='true'
          className='pointer-events-none absolute right-[-14rem] top-[50rem] h-[30rem] w-[30rem] rounded-full bg-[#fb923c]/[0.035] blur-[120px]'
        />

        <div className='relative mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:px-10'>
          {/* Header */}
          <div className='mb-14 text-center'>
            <div className='mb-5 flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#a78bfa]'>
              <span className='h-2 w-2 bg-[#fb923c]' />
              Java Lava / privacy
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Privacy
              <br />
              <span className='text-[#a78bfa]'>Policy.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              How Java Lava handles your data, protects your privacy, and
              manages information collected through its services.
            </p>

            <div className='mt-6 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-white/25'>
              <ClockIcon className='h-4 w-4' />
              Last updated: May 19, 2026
            </div>
          </div>

          {/* Content */}
          <article className='overflow-hidden border border-white/10 bg-[#11101a]'>
            <div className='divide-y divide-white/10'>
              {/* Section 1 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5 flex items-start gap-5'>
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                    <ServerIcon className='h-5 w-5' />
                  </div>

                  <div>
                    <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                      Section 01
                    </div>

                    <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                      Information We Collect
                    </h2>
                  </div>
                </div>

                <div className='border border-white/10 bg-white/[0.02] p-5'>
                  <div className='mb-4 flex items-center gap-3'>
                    <ServerIcon className='h-5 w-5 text-[#a78bfa]' />

                    <h3 className='text-base font-semibold text-white/85'>
                      Automatically Collected Data
                    </h3>
                  </div>

                  <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-white/45'>
                    <li>Discord server ID and server name</li>
                    <li>User IDs for command execution</li>
                    <li>Command usage statistics and frequency</li>
                    <li>Error logs and debugging information</li>
                    <li>Server member counts for analytics</li>
                    <li>
                      Discord Automod Rule IDs for the automod-scam-prevention
                      command
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 2 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5 flex items-start gap-5'>
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                    <ShieldCheckIcon className='h-5 w-5' />
                  </div>

                  <div>
                    <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                      Section 02
                    </div>

                    <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                      How We Use Your Information
                    </h2>
                  </div>
                </div>

                <p className='mb-4 text-sm leading-6 text-white/45'>
                  We use collected information exclusively for:
                </p>

                <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-white/45'>
                  <li>Providing and maintaining bot functionality</li>
                  <li>Debugging errors and improving performance</li>
                  <li>Analyzing usage patterns to enhance features</li>
                  <li>
                    Ensuring compliance with Discord's Terms of Service and
                    Developer Terms of Service
                  </li>
                  <li>Preventing abuse and maintaining service security</li>
                  <li>Supporting the automod-scam-prevention command</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5 flex items-start gap-5'>
                  <div className='flex h-11 w-11 shrink-0 items-center justify-center border border-[#a78bfa]/20 bg-[#a78bfa]/[0.06] text-[#a78bfa]'>
                    <ShieldCheckIcon className='h-5 w-5' />
                  </div>

                  <div>
                    <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                      Section 03
                    </div>

                    <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                      Data Storage & Security
                    </h2>
                  </div>
                </div>

                <p className='mb-4 text-sm leading-6 text-white/45'>
                  Your data security is our priority:
                </p>

                <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-white/45'>
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We use industry-standard security practices</li>
                  <li>
                    Access to data is limited to authorized developers only
                  </li>
                  <li>Regular security audits and updates are performed</li>
                  <li>
                    Data retention follows Discord's recommended practices
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 04
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Data Sharing
                  </h2>
                </div>

                <p className='text-sm leading-7 text-white/45'>
                  <strong className='font-semibold text-white/80'>
                    We do not sell, trade, or share your personal information
                    with third parties.
                  </strong>{' '}
                  Data may only be disclosed when required by law or to protect
                  our rights and the safety of our users.
                </p>
              </section>

              {/* Section 5 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 05
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Data Retention
                  </h2>
                </div>

                <p className='mb-4 text-sm leading-6 text-white/45'>
                  We retain data only as long as necessary:
                </p>

                <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-white/45'>
                  <li>Command logs: 30 days for debugging purposes</li>
                  <li>Error reports: 90 days for analysis and fixes</li>
                  <li>
                    Usage statistics: anonymized and aggregated permanently
                  </li>
                  <li>Server configuration: until the bot is removed</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 06
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Your Rights
                  </h2>
                </div>

                <p className='mb-4 text-sm leading-6 text-white/45'>
                  You have the right to:
                </p>

                <ul className='list-disc space-y-2 pl-5 text-sm leading-6 text-white/45'>
                  <li>Request information about data we have collected</li>
                  <li>Request deletion of your server's data</li>
                  <li>Opt out of data collection by removing the bot</li>
                  <li>Contact us with privacy concerns or questions</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 07
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Discord Integration
                  </h2>
                </div>

                <p className='text-sm leading-7 text-white/45'>
                  Java Lava operates within Discord's ecosystem and is subject
                  to Discord's Privacy Policy and Terms of Service. We recommend
                  reviewing Discord's policies to understand how your Discord
                  data is handled.
                </p>
              </section>

              {/* Section 8 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 08
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Policy Updates
                  </h2>
                </div>

                <p className='text-sm leading-7 text-white/45'>
                  This privacy policy may be updated to reflect changes in our
                  practices or applicable laws. Significant changes will be
                  announced in our Discord server with at least 7 days notice.
                </p>
              </section>

              {/* Section 9 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#fb923c]'>
                    Section 09
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Automod Scam Prevention
                  </h2>
                </div>

                <p className='text-sm leading-7 text-white/45'>
                  This command collects the IDs of the Discord Automod Rules in
                  the server and stores them in our database for use by the
                  automod-scam-prevention command. These rules are uploaded to
                  Discord Automod so that, during rare service outages where
                  Java Lava is unable to perform scam prevention directly, your
                  server can continue to have protection against scams and
                  phishing attempts.
                </p>

                <p className='mt-4 text-sm leading-7 text-white/45'>
                  These IDs are only used for this command and are not shared
                  with third parties or used for unrelated purposes.
                </p>
              </section>

              {/* Section 10 */}
              <section className='p-6 sm:p-8'>
                <div className='mb-5'>
                  <div className='mb-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/20'>
                    Section 10
                  </div>

                  <h2 className='text-xl font-semibold tracking-[-0.02em]'>
                    Contact Us
                  </h2>
                </div>

                <p className='mb-4 text-sm leading-6 text-white/45'>
                  For privacy-related questions or requests:
                </p>

                <ul className='list-disc space-y-3 pl-5 text-sm leading-6 text-white/45'>
                  <li>
                    Discord:{' '}
                    <strong className='text-white/75'>
                      PhillsPhanbh3_the_bot_developer
                    </strong>
                  </li>

                  <li>
                    Support Server:{' '}
                    <a
                      href='https://discord.gg/tM8Y5acUta'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[#a78bfa] underline decoration-[#a78bfa]/30 underline-offset-4 transition-colors hover:text-[#c4b5fd]'
                    >
                      Join our community ↗
                    </a>
                  </li>

                  <li>Email: Available upon request through Discord</li>
                </ul>
              </section>
            </div>
          </article>

          {/* Navigation */}
          <div className='mt-12 border-y border-white/10 py-5'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <a
                href='/legal/tos'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                ← Terms of Service
              </a>

              <a
                href='/'
                className='inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 transition-colors hover:text-white'
              >
                Back to Home →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
