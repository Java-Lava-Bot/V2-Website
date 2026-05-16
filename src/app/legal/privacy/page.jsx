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

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 mb-6">
              <ShieldCheckIcon className="h-5 w-5 text-[var(--color-accent)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-accent)]">
                Privacy & Security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              How Java Lava handles your data and protects your privacy
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <ClockIcon className="h-4 w-4" />
              <span>Last updated: January 8, 2025</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  1. Information We Collect
                </h2>
                <div className="bg-gray-800/40 rounded-lg p-6 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <ServerIcon className="h-5 w-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-semibold text-white">
                      Automatically Collected Data
                    </h3>
                  </div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Discord server ID and server name</li>
                    <li>User IDs for command execution</li>
                    <li>Command usage statistics and frequency</li>
                    <li>Error logs and debugging information</li>
                    <li>Server member counts (for analytics)</li>
                    <li>Discord Automod Rule ID's for automod-scam-prevention command</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use collected information exclusively for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and maintaining bot functionality</li>
                  <li>Debugging errors and improving performance</li>
                  <li>Analyzing usage patterns to enhance features</li>
                  <li>Ensuring compliance with Discord's Terms of Service and Dev Terms of Service</li>
                  <li>Preventing abuse and maintaining service security</li>
                  <li>Discord Automod Rule ID's for automod-scam-prevention command</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  3. Data Storage & Security
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your data security is our priority:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
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

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  4. Data Sharing
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  <strong>
                    We do not sell, trade, or share your personal information
                    with third parties.
                  </strong>{' '}
                  Data may only be disclosed when required by law or to protect
                  our rights and the safety of our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  5. Data Retention
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We retain data only as long as necessary:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Command logs: 30 days for debugging purposes</li>
                  <li>Error reports: 90 days for analysis and fixes</li>
                  <li>
                    Usage statistics: Anonymized and aggregated permanently
                  </li>
                  <li>
                    Server configuration: Until bot is removed from server
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Request information about data we have collected</li>
                  <li>Request deletion of your server's data</li>
                  <li>Opt out of data collection by removing the bot</li>
                  <li>Contact us with privacy concerns or questions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  7. Discord Integration
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Java Lava operates within Discord's ecosystem and is subject
                  to Discord's Privacy Policy and Terms of Service. We recommend
                  reviewing Discord's policies to understand how your Discord
                  data is handled.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  8. Policy Updates
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  This privacy policy may be updated to reflect changes in our
                  practices or applicable laws. Significant changes will be
                  announced in our Discord server with at least 7 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-accent)] mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  For privacy-related questions or requests:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li>
                    Discord: <strong>PhillsPhanbh3_the_bot_developer</strong>
                  </li>
                  <li>
                    Support Server:{' '}
                    <a
                      href="https://discord.gg/tM8Y5acUta"
                      className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] underline transition-colors"
                    >
                      Join our community
                    </a>
                  </li>
                  <li>Email: Available upon request through Discord</li>
                </ul>
              </section>
            </div>
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <a
                href="/legal/tos"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
              >
                ← Terms of Service
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors"
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
