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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--color-policies)]/10 border border-[var(--color-policies)]/20 mb-6">
              <ShieldCheckIcon className="h-5 w-5 text-[var(--color-policies)] mr-2" />
              <span className="text-sm font-medium text-[var(--color-policies)]">
                Cookies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cookies Policy
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              How Java Lava uses cookies and similar technologies
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <ClockIcon className="h-4 w-4" />
              <span>Last updated: December 29, 2025</span>
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div className="bg-gray-900/30 rounded-2xl p-8 border border-gray-800/50 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  This Cookie Policy explains how Java Lava ("we", "us", and
                  "our") uses cookies and similar technologies to recognize you
                  when you visit our website at https://javalava.phillsphanbh3.me/
                  ("Website"). This policy explains what these technologies are and why we
                  use them, as well as your rights to control our use of them.

                  WE WILL NEVER USE COOKIES TO STORE PERSONAL DATA WITHOUT YOUR CONSENT.
                  By using our Website, you consent to the use of cookies in
                  accordance with this Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  2. Notification about personal data collection via cookies
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  WE WILL NEVER USE COOKIES TO STORE PERSONAL DATA WITHOUT YOUR CONSENT.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  3. What Are Cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small data files that are placed on your computer or mobile
                  device when you visit a website. Cookies are widely used by website
                  owners to make their websites work, or to work more efficiently, as well as to
                  provide reporting information.

                  Cookies set by the website owner (in this case, Java Lava's lead developer PhillsPhanbh3) are called
                  "first party cookies". Cookies set by parties other than the website owner
                  are called "third party cookies". Third party cookies enable third party
                  features or functionality to be provided on or through the website (e.g. our status page embed provided by
                  Statuspage.io). The parties that set these third party cookies can
                  recognize your computer both when it visits the website in question and also
                  when it visits certain other websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  4. Why do we use cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We use first and third party cookies for several reasons. Some cookies are
                  required for technical reasons in order for our Website to operate, and we
                  refer to these as "essential" or "strictly necessary" cookies. Other cookies
                  also help us analyze and understand how our Website is used, what
                  features and functionality are popular, and improve the experience for
                  visitors. The specific types of first and third party cookies served
                  through our Website and the purposes they perform are described below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  5. How can I control cookies?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  You have the right to decide whether to accept or reject cookies. You can
                  exercise your cookie rights by setting your preferences in the Cookie
                  Consent Manager. The Cookie Consent Manager allows you to select which
                  categories of cookies you accept or reject. Essential cookies cannot be
                  rejected as they are strictly necessary to provide you with services.
                  
                  The Cookie Consent Manager can be found in the notification banner and on our Website.
                  If you choose to reject cookies, you may still use our Website though your access to some
                  functionality and areas of our Website may be restricted. You may also set or amend your
                  web browser controls to accept or refuse cookies. Please note that if you reject cookies, you 
                  may not be able to use all of the features we offer, you may not be able to store your preferences,
                  and some of our pages may not display properly.                  
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  6. What cookies is being used to track me/be shown on the website?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We have implemented the following cookies on our Website due to our statuspage embed:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Name: s7
                  </li>
                  <li>
                    Purpose: Gather data regarding site usage and user behavior on the website.
                  </li>
                  <li>
                    Provider: f2s16vld08pq.statuspage.io
                  </li>
                  <li>  
                    Service: Adobe Analytics
                  </li>
                  <li>  
                    Type: html_local_storage
                  </li>
                  <li>  
                    Expires in: persistent
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-4"></p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We also do route our website traffic through Cloudflare, which may set cookies for security and performance purposes. For more information on Cloudflare's cookie usage, please visit their <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    className="text-[var(--color-accent)] hover:text-[var(--color-secondary)] underline transition-colors"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--color-policies)] mb-4">
                  7. Data Retention
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
