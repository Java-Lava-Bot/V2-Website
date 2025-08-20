"use client";

import { useEffect } from "react";
import StatusScript from "../components/StatusScript";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DocsPage() {
    useEffect(() => {
        // Set current year in footer if exists
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);
    
    return (
        <>
            <StatusScript />
            <Header />

            <main className="relative z-10">
                <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Java Lava Documentation
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                            Everything you need to know about Java Lava Discord bot features, commands, and updates.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Start from beginning card */}
                        <a href="/docs/Home" className="group relative block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Beginning</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore all that we can offer in our Java Lava docs </p>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">Start here →</span>
                        </a>

                        {/* Commands card */}
                        <a href="/docs/commands" className="group relative block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Commands</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore all Java Lava bot commands including moderation, community, music, and utility commands.</p>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">Browse commands →</span>
                        </a>

                        {/* Updates card */}
                        <a href="/docs/updates" className="group relative block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Updates</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Stay informed about the latest features, improvements, and bug fixes in Java Lava bot.</p>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">View changelog →</span>
                        </a>

                        {/* Setup Guide card */}
                        <a href="/docs/setup" className="group relative block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3"><i className="fas fa-network-wired mr-2"></i>Setup Guide</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Learn how to add Java Lava to your Discord server and configure it for optimal use.</p>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">Read guide →</span>
                        </a>
                        {/* FAQ */}
                        <a href="/docs/faq" className="group relative block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3"><i className="fas fa-question"></i> FAQ</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">Get to know some of our frequently asked questions!</p>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline">Read guide →</span>
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}