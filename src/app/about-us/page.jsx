import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-6">
          Where did Java Lava start and what is it about?
        </h1>

        <p className="text-lg mb-4">
          Here at Java Lava, PhillsPhanbh3, Jeo, and Ziggy work hard on all
          things coding — we're passionate about it.
        </p>
        <p className="text-lg mb-4">
          Java Lava started one day in November of 2024 as an ambitious idea to
          create a public, verified Discord bot.
        </p>
        <p className="text-lg mb-4">
          PhillsPhanbh3 my lead developer didn’t know where to begin, but with the help of 2
          talented coder friends, Jeo and Ziggy, the project began to take off.
        </p>
        <p className="text-lg mb-4">
          Since then, Java Lava has grown to over 50 servers and continues
          expanding with the development of new systems and features.
        </p>
        <p className="text-lg mb-4">
          Right now, Java Lava is focused on moderation and automod
          functionality — but the goal is to evolve into an all-in-one bot like
          MEE6.
        </p>
        <p className="text-lg mb-6 font-semibold text-blue-300">
          We're building something new, bold, and exciting — and you're a part
          of that journey.
        </p>
        <p className="text-lg mb-6 font bold text-red-400">
          The best is yet to come!
        </p>
        <p className="text-lg mb-6 font-bold text-purple-200">
          With Java Lava v2 we have worked hard to improve performance, add new
          features, and create a better user experience overall.
        </p>
        <p className="text-lg mb-6 font-bold text-green-300">
          We're excited to continue this journey with you and can't wait to see
          what the future holds.
        </p>
        <p className="text-lg mb-6 font-bold text-yellow-300">
          We thank you for being a part of the Java Lava community!
        </p>
        <p className="text-md text-gray-300">
          With gratitude, <br />
          The Java Lava Devs – PhillsPhanbh3, Jeo, &amp; Ziggy
        </p>
      </main>
      <Footer />
    </>
  );
}