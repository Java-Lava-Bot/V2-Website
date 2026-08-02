'use client';

import { ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

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
              Java Lava / cookies
            </div>

            <h1 className='text-[clamp(2.8rem,6vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]'>
              Cookies
              <br />
              <span className='text-[#a78bfa]'>Policy.</span>
            </h1>

            <p className='mx-auto mt-7 max-w-2xl text-base leading-7 text-white/45 sm:text-lg'>
              How Java Lava uses cookies and similar technologies across its
              website.
            </p>

            <div className='mt-6 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/25'>
              <ClockIcon className='h-4 w-4' />
              <span>Last updated: December 29, 2025</span>
            </div>
          </div>

          {/* Policy content */}
          <article className='space-y-5'>
            {/* Section 1 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#a78bfa]'>01</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  Acceptance of Terms
                </h2>
              </div>

              <p className='text-sm leading-7 text-white/45'>
                This Cookie Policy explains how Java Lava ("we", "us", and
                "our") uses cookies and similar technologies to recognize you
                when you visit our website at
                https://betajavalava.phillsphanbh3.me/ ("Website"). This policy
                explains what these technologies are and why we use them, as
                well as your rights to control our use of them.
              </p>

              <p className='mt-4 text-sm font-semibold leading-7 text-white/65'>
                WE WILL NEVER USE COOKIES TO STORE PERSONAL DATA WITHOUT YOUR
                CONSENT.
              </p>

              <p className='mt-4 text-sm leading-7 text-white/45'>
                By using our Website, you consent to the use of cookies in
                accordance with this Cookie Policy.
              </p>
            </section>

            {/* Section 2 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#a78bfa]'>02</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  Notification about personal data collection via cookies
                </h2>
              </div>

              <p className='text-sm font-semibold leading-7 text-white/65'>
                WE WILL NEVER USE COOKIES TO STORE PERSONAL DATA WITHOUT YOUR
                CONSENT.
              </p>
            </section>

            {/* Section 3 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#a78bfa]'>03</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  What Are Cookies?
                </h2>
              </div>

              <div className='space-y-4 text-sm leading-7 text-white/45'>
                <p>
                  Cookies are small data files that are placed on your computer
                  or mobile device when you visit a website. Cookies are widely
                  used by website owners to make their websites work, or to work
                  more efficiently, as well as to provide reporting information.
                </p>

                <p>
                  Cookies set by the website owner (in this case, Java Lava's
                  lead developer PhillsPhanbh3) are called "first party
                  cookies". Cookies set by parties other than the website owner
                  are called "third party cookies".
                </p>

                <p>
                  Third party cookies enable third party features or
                  functionality to be provided on or through the website (e.g.
                  our status page embed provided by Statuspage.io). The parties
                  that set these third party cookies can recognize your computer
                  both when it visits the website in question and also when it
                  visits certain other websites.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#a78bfa]'>04</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  Why do we use cookies?
                </h2>
              </div>

              <p className='text-sm leading-7 text-white/45'>
                We use first and third party cookies for several reasons. Some
                cookies are required for technical reasons in order for our
                Website to operate, and we refer to these as "essential" or
                "strictly necessary" cookies. Other cookies also help us analyze
                and understand how our Website is used, what features and
                functionality are popular, and improve the experience for
                visitors.
              </p>

              <p className='mt-4 text-sm leading-7 text-white/45'>
                The specific types of first and third party cookies served
                through our Website and the purposes they perform are described
                below.
              </p>
            </section>

            {/* Section 5 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#a78bfa]'>05</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  How can I control cookies?
                </h2>
              </div>

              <div className='space-y-4 text-sm leading-7 text-white/45'>
                <p>
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie rights by setting your
                  preferences in the Cookie Consent Manager.
                </p>

                <p>
                  The Cookie Consent Manager allows you to select which
                  categories of cookies you accept or reject. Essential cookies
                  cannot be rejected as they are strictly necessary to provide
                  you with services.
                </p>

                <p>
                  The Cookie Consent Manager can be found in the notification
                  banner and on our Website. If you choose to reject cookies,
                  you may still use our Website though your access to some
                  functionality and areas of our Website may be restricted.
                </p>

                <p>
                  You may also set or amend your web browser controls to accept
                  or refuse cookies. Please note that if you reject cookies, you
                  may not be able to use all of the features we offer, you may
                  not be able to store your preferences, and some of our pages
                  may not display properly.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section className='border border-white/10 bg-[#11101a] p-6 sm:p-7'>
              <div className='mb-5 flex items-center gap-4'>
                <span className='font-mono text-[10px] text-[#fb923c]'>06</span>

                <h2 className='text-xl font-semibold tracking-[-0.02em] text-white/90'>
                  What cookies are being used to track me or shown on the
                  website?
                </h2>
              </div>

              <p className='mb-5 text-sm leading-7 text-white/45'>
                We have implemented the following cookies on our Website due to
                our statuspage embed:
              </p>

              <div className='overflow-hidden border border-white/10 bg-black/10'>
                <div className='grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0'>
                  <div className='border-white/10 p-5 sm:border-r'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Name
                    </div>
                    <div className='text-sm text-white/70'>s7</div>
                  </div>

                  <div className='p-5'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Provider
                    </div>
                    <div className='break-all text-sm text-white/70'>
                      f2s16vld08pq.statuspage.io
                    </div>
                  </div>

                  <div className='border-t border-white/10 p-5 sm:border-r'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Purpose
                    </div>
                    <div className='text-sm leading-6 text-white/70'>
                      Gather data regarding site usage and user behavior on the
                      website.
                    </div>
                  </div>

                  <div className='border-t border-white/10 p-5'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Service
                    </div>
                    <div className='text-sm text-white/70'>Adobe Analytics</div>
                  </div>

                  <div className='border-t border-white/10 p-5 sm:border-r'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Type
                    </div>
                    <div className='text-sm text-white/70'>
                      html_local_storage
                    </div>
                  </div>

                  <div className='border-t border-white/10 p-5'>
                    <div className='mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-white/20'>
                      Expires in
                    </div>
                    <div className='text-sm text-white/70'>persistent</div>
                  </div>
                </div>
              </div>

              <p className='mt-6 text-sm leading-7 text-white/45'>
                We also route our website traffic through Cloudflare, which may
                set cookies for security and performance purposes. For more
                information on Cloudflare's cookie usage, please visit their{' '}
                <a
                  href='https://www.cloudflare.com/privacypolicy/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#a78bfa] underline decoration-[#a78bfa]/30 underline-offset-4 transition-colors hover:text-[#c4b5fd]'
                >
                  Privacy Policy
                </a>
                .
              </p>
            </section>
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
                className='inline-flex items-center gap-2 self-start border border-white/10 bg-white/[0.025] px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/45 transition-all duration-200 hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/[0.08] hover:text-[#c4b5fd] sm:self-auto'
              >
                Back to Home
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Footer label */}
          <div className='mt-8 flex items-center justify-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/15'>
            <ShieldCheckIcon className='h-3.5 w-3.5' />
            Java Lava / Privacy &amp; Cookies
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
