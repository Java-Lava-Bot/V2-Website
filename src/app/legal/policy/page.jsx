import Link from "next/link";

export default function Privacy_Policy() {

    return (
        <>
        <header className="bg-gradient-to-r from-blue-900 to-gray-900 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <Link href="/" className="text-2xl font-bold text-white">Java Lava</Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
          <Link href="/about-us.html" className="text-gray-300 hover:text-white transition">About Us</Link>
          <Link href="/legal/tos" className="text-gray-300 hover:text-white transition">Terms</Link>
          <Link href="/legal/policy" className="text-gray-300 hover:text-white transition">Privacy</Link>
          <Link href="https://discord.gg/ZZbuatGPHr" className="text-gray-300 hover:text-white transition">Support</Link>
          <Link href="https://discord.com/oauth2/authorize?client_id=1305190785536360519"
            className="text-gray-300 hover:text-white transition">Invite</Link>
        </div>
        <div className="md:hidden">
          <button id="mobile-menu-button" className="text-white focus:outline-none">☰</button>
        </div>
      </div>
    </div>
    <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2 text-gray-300">
      <Link href="/" className="block hover:text-white">Home</Link>
      <Link href="/about.html" className="block hover:text-white">About Us</Link>
      <Link href="/Terms-of-service.html" className="block hover:text-white">Terms</Link>
      <Link href="/Privacy-Policy.html" className="block hover:text-white">Privacy</Link>
      <Link href="https://discord.gg/ZZbuatGPHr" className="block hover:text-white">Support</Link>
      <Link href="https://discord.com/oauth2/authorize?client_id=1305190785536360519"
        className="block hover:text-white">Invite</Link>
    </div>
  </header>

  
  <main className="max-w-4xl mx-auto px-6 py-12">
    
    <div className="text-left mb-6">
      <Link href="/" className="inline-flex items-center text-blue-400 hover:text-white transition font-medium text-lg">
        ← Back to Home
      </Link>
    </div>

    <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Java Lava Bot Privacy Policy</h1>

    <p className="text-center text-blue-300 mb-4">Terms updated: 4/17/2025 — Effective: 4/18/2025</p>

    <section className="space-y-6 text-lg text-gray-200">

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">1. Acceptance of These Terms</h2>
        <p>
          By using Java Lava, you confirm that you are at least 13 years old and meet the minimum age required by Discord's Terms of Service.
          If you disagree with any part of these terms, please remove the bot from your server.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">2. Usage Guidelines</h2>
        <p>
          You agree to use Java Lava as intended. Do not exploit, reverse engineer, or modify the bot.
          Abuse or misuse of the bot may lead to restrictions or bans.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">3. Data & Privacy</h2>
        <p>
          Java Lava logs server names, member counts, and command usage for debugging and feature improvement.
          Errors are reported to developers through logs hosted on our provider. For full details, see our <Link href="/Privacy-Policy.html" className="text-blue-400 underline">Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">4. Disclaimers</h2>
        <p>
          The bot is provided "as is" without warranties. Bugs may exist and features may break during updates.
          Code access may be provided by request, but may take up to 2–4 weeks due to ongoing development.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">5. Limitation and Termination</h2>
        <p>
          Java Lava complies with Discord's Developer Policies and Terms. Developers are not liable for any damages caused by bot removal or bans.
          We reserve the right to blacklist users or servers from using the bot if terms are violated.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">6. Updates to Terms</h2>
        <p>
          These terms may change as the bot evolves. Notifications will be posted in our support server's #bot-updates channel.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-blue-300">7. Contact Information</h2>
        <p>
          Questions or concerns? DM <strong>PhillsPhanbh3_the_bot_developer</strong> on Discord or reach out via our support server.
        </p>
      </div>

    </section>
  </main>
        </>
        
    )
}