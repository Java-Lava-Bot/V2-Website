'use client';

import { ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';

export default function TermsOfService() {
  return (
    <>
      <StatusScript />
      <Header />

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-6">
              <DocumentTextIcon className="h-5 w-5 text-[var(--color-primary)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-primary)]">
                Legal Document
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Java Lava Discord Bot Terms of Service
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <ClockIcon className="h-4 w-4" />
              <span>Last updated: January 8, 2025</span>
            </div>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By using Java Lava, you confirm that you are at least 13 years
                  old and meet the minimum age required by Discord's Terms of
                  Service. If you disagree with any part of these terms, please
                  remove the bot from your server.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  2. Usage Guidelines
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree to use Java Lava as intended and in compliance with
                  Discord's Terms of Service and Community Guidelines.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Do not exploit, reverse engineer, or attempt to modify the
                    bot
                  </li>
                  <li>
                    Do not use the bot for spam, harassment, or illegal
                    activities
                  </li>
                  <li>
                    Respect other users and maintain a positive community
                    environment
                  </li>
                  <li>
                    Report bugs and issues through our official support channels
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  3. Data Collection & Privacy
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Java Lava collects minimal data necessary for functionality:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Server names and member counts for analytics</li>
                  <li>Command usage statistics for improvement purposes</li>
                  <li>Error logs for debugging and stability</li>
                  <li>
                    User IDs for command execution and moderation features
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  For complete details on data handling, please review our{' '}
                  <a
                    href="/legal/policy"
                    className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] underline transition-colors"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  4. Service Availability
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Java Lava is provided "as is" without warranties of any kind.
                  We strive for 99.9% uptime but cannot guarantee uninterrupted
                  service. Planned maintenance will be announced in advance when
                  possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  5. Limitations & Liability
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Java Lava developers are not liable for any damages, data
                  loss, or server issues caused by bot usage. Users are
                  responsible for backup of their server data and settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  6. Enforcement & Termination
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to restrict or ban users/servers that
                  violate these terms or Discord's policies. Violations may
                  result in immediate termination of service without prior
                  notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  7. Changes to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms may be updated as the bot evolves. Changes will be
                  announced in our Discord server's announcements channel and
                  take effect immediately upon posting.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  8. Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions, concerns, or support:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>
                    Discord: <strong>PhillsPhanbh3_the_bot_developer</strong>
                  </li>
                  <li>
                    Support Server:{' '}
                    <a
                      href="https://discord.gg/6tF3UFWA6F"
                      className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] underline transition-colors"
                    >
                      Join our community
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors"
              >
                ← Back to Home
              </a>
              <a
                href="/legal/policy"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
              >
                Privacy Policy →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
