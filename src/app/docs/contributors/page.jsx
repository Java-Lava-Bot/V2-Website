'use client';

import {
  CommandLineIcon,
} from '@heroicons/react/24/outline';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import StatusScript from '../../components/StatusScript';
import { FaServer } from 'react-icons/fa';
import { GiCupcake, GiCommercialAirplane } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { BiSolidErrorCircle } from "react-icons/bi";
import { SiIcons8 } from "react-icons/si";

export default function ContributorsPage() {

  return (
    <>
      <StatusScript />
      <Header />

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Java Lava Contributors
            </h1>
          </div>

          {/* Voting Links */}
          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <FaServer className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              ZixeSea and Chrizz - ServerStats Developers
            </h3>
            <h5>
              The Serverstats Developers helped fix up our prefix issues back in alpha testing! I am very grateful for their help!
            </h5>
            <a
              href="https://serverstats.bot/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Serverstats discord bot website</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <GiCupcake className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              TrainerJeo - Muffin Bot Developer & Error Logging Specialist!
            </h3>
            <a
              href="https://muffindiscord.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Muffin Discord Bot Website</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <GiCommercialAirplane className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              ziggy._.mc - Db Bug Tracker Developer & Reminder system helper and debugger!
            </h3>
            <a
              href="https://www.ziggymc.me/zigydbot/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Zavro Discord Bot Website</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <IoBookSharp className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              ProCoderCat - Study Buddy expert & Developer!
            </h3>
            <a
              href="https://github.com/hankanderson0103-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>ProCoderCat's GitHub</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <SiIcons8 className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Lord_Nova - Emotes helper and debugger!
            </h3>
            <a
              href="https://github.com/sinisterMage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Lord_Nova's GitHub</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--color-Contributor1)]/10 to-[var(--color-Contributor2)]/10 rounded-2xl border border-[var(--color-Contributor1)]/20">
            <BiSolidErrorCircle className="h-12 w-12 text-[var(--color-secondary)] mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Our bug hunters and Beta Testers! The Devs would like to thank:
              <br />
              - kitfugll
              <br />
              - techadka78
              <br />
              - vastbethatguy
              <br />
              - nielsen1984
              <br />
              - pixitan
              <br />
              - sorceressrl
              <br />
              - svpremesn0wyy
              <br />
            </h3>
            <a
              href="https://discord.gg/d9vT5hz8H5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Kitfugll's Discord</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/eUYxMz4cW4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Adka's Discord</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/QzPPhb9XWR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Pixi's Discord</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/X6XdCygUtD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Sorceress's Discord</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a
              href="https://discord.gg/pVDwbUMa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-secondary)] text-white font-medium rounded-lg hover:bg-[var(--color-secondary)]/80 transition-colors"
            >
              <span>Sn0wyy's Discord</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <a
                href="/docs"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-gray-300 hover:bg-gray-800/70 hover:text-white transition-colors"
              >
                ← Back to docs
              </a>
              <div className="text-sm text-gray-500">
                8 Contributors • Last updated: January 2nd, 2026
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
