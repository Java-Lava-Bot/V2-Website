'use client';

import { useState, useEffect } from 'react';
import { BookOpenIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import StatusScript from '../../components/StatusScript';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DocsContentPage() {
  const [docContent, setDocContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [docMeta, setDocMeta] = useState({});

  useEffect(() => {
    // Fetch and process the index.md content
    fetchDocContent();
  }, []);

  const fetchDocContent = async () => {
    try {
      // Import the markdown content directly
      const markdownContent = `# Java Lava Advanced Setup Guide

# Welcome to the advanced setup guide for Java Lava! This guide will walk you through the detailed configuration and customization options available to optimize Java Lava for your Discord server.

## Welcome to Java Lava Bot

Welcome to the official Java Lava Discord bot documentation! This comprehensive guide will help you get the most out of your Discord server with our powerful moderation and community tools.

### Current Version: 2.00

Java Lava is currently on **version 2.0**, packed with improvements and new features to enhance your Discord server experience.

## What's New in Version 2.0?

Hey their @everyone! We have been working since AUGUST OF 2025. Me, @ziggy, Jeo, @ProCoderCat, ZixeSea, Chrizz, and our lovely team of @JL Beta Testers @JL Bug Hunter and @JL Beta Tester & Bug Hunter has been VERY VERY hard at work, we have resolved at least 100 bugs within this HUGE update. The reason why we had to do this is because if we had version 1 going all the time and just pushing out bug fixes and NOT making brand new features, we would be staying in version 1 FOREVER. so this is why I built version 2 with our contributors and @ziggy. I wanted to give a HUGE thank you to our @Contributors today. Now, without any extra rabbling on here is what we have decided to work on:

Permissions update!
We have made a system where our ban command that requires ban members discord permission. It requires that discord permission to even SHOW UP IN THE 1ST PLACE! THIS IS FOR ALL COMMANDS ON JAVA LAVA! IF you are looking for a certain command you can check out our documentation and when you press the more button, it shows you use cases AND even what permissions is required! 

SERVER OWNERS LISTEN UP this is a required step when adding Java Lava to your server AND setting up perms! HAVE A DEDICATED ⁠🤖・bot-cmds CHANNEL that way you can have your everyone role turned off with the use commands perm EXCEPT for that dedicated ⁠🤖・bot-cmds channel!
Added systems ➕
Prefix commands! /slash-commands ❗
Today marks the day of where we debut our prefix commands system of prefix commands! We use the j. prefix this way we don't get in the way of other bots. This also provides you a way of being able to type out moderation commands fast without having to use the slash commands! All slash commands EXCEPT for the automod commands should be in prefix forum as we are definitely going to be releasing a few patches after version 2 comes out as we this is a huge update! We'll be implementing more because we got some commands that aren't ready but are just about ready, most of our moderation commands are ready, and we will NOT be implementing the study buddy system with a prefix version.

Study Buddy system! 📚
Today marks where we debut of @Java Lava's Study Buddy. I have decided to help out the students that use Java Lava with a study buddy feature where they can talk to their friends while studying for upcoming tests, quizzes, midterms, and finals. I was actually thinking about this system with a great friend of mine and I said to my friend "If you had a suggestion for me to make a system into @Java Lava what would it be?" and she said a study buddy system. I told her that is a great idea, especially since I've got people that use my bot that are students so it would be a great feature! Here is how it works in a video I posted a few days ago! ⁠👀・sneak-peaks⁠ Please do notify us if you do see any issues with the study buddy system, there should NOT be any issues but still expect some as this is a brand new system! 

Moderation commands added and reworked! :ModeratorShield:
I have debuted a LOT of updates to our moderation commands. Afterall we are a moderation bot WITH student features. You know how we had that pesky bug of the moderation commands like timeout and all of those send the message about the user getting moderator action but it NEVER went through?! don't worry it works now! We have also added in multiple more moderation commands! Commands being /ban-temp, /ban-soft, /ban-remove, and the normal /ban, and a lot extras which you can check out at https://javalava.phillsphanbh3.me/docs/commands
Java Lava Bot | Discord Moderation & Fun
The ultimate Discord bot for moderation, community engagement, and entertainment
Java Lava Version 2 has released! THE LARGEST UPDATE IN THE HISTORY OF Java Lava#3011 part 2
Reworked automod commands 🛡️🤖
I have known that our automod commands are not at all great in the past in version 1, so due to this I have decided to take out all of our current automod commands, and rewrite them, so starting today our automod commands has been condensed down from 12 commands, to 4 commands, now we have a MODAL that pops up for after you run the command with the automod name that you want to put in, You can choose the channel the automod alert gets sent to. You can choose to block the message or not, and if you do, you got an optional set message section, or choose the premade one "Your message has been blocked due to containing prohibited content." We have a /automod-scam-prevention command which is going to be updated every single update, or even when a new scam comes out, and with this, we have a new role called the @Automod Scam Prevention cmd update role. This role will be updated whenever a it is updated!

Community commands now have more features! 👥
We have reworked the commands to where we got more commands, and more features, starting with our clicker command: we now allow you to save how many times you clicked our clicker button every 21 days, after 21 days the data gets reset from when you 1st started using our new clicker command.

We have a poll command with options for you to ask a question, then put up to 10 options! AND you have the ability to ping roles in it which you can view here: ⁠👀・sneak-peaks⁠

We are currently testing giveaway and welcome systems so those are not in the bot yet, still in alpha but are confirmed! We will output it in a later update like a patch about 2 weeks after v2 release!

New Section, Fun Commands! 🎉
We have moved our poke command from our community section to fun, with updated error logging, and even in the future support for you to poke ANYONE you want just like a popular discord bot that you may know.

We have our own meme command, Joke command, and 8ball commands. Our meme command has some interesting ones, our joke command is quite funny to an extent.

8ball command which you can ask the 8 ball a question and it responses to you with some interesting answers

Utility Commands! ⚕️
We have reworked the Reminder command to change up the embed, and we removed the urgent reminder system.

Reworked the ping command

Study Buddy system the huge one! This one I particularly have to give a huge shout out to @ProCoderCat, without him, this system wouldn't be possible at all. This dude worked for several hours coding it and I was testing it making sure it was absolutely right! You are a legend pro.

Updated Systems 💻
We have updated all of our error notifications that way it is more understandable for members, and now whenever a command gives out an error, it gives out a invite link preset in our bots via a link and then it uses ${supportinvite} and gives out the invite link!

We have continued to update our ephemeral: true to flags: 64, what this means for you is that our commands only shows to you, not to the entire server!

We have also improved the bot stability along with a auto restart system, this system will most of the time work, some of the time it does give out some issues but we make sure the bots stays online 99% of the time, we the Java Lava Development team are committed to helping out our bot users and we are making sure we do that with a 24/7 uptime and even more!

We have updated multiple moderation commands to be more reliable, some of our commands in version 1 were giving out issues but don't worry, they all work at this time!

We are did have a issue in the past where errors on the bots wouldn't log right but now we got it to where it logs to multiple different areas and if one of em doesn't log, then we work on patching that and do a unannounced bug patch of that!

Our documentation! We have updated our discord bot docs on our own website! multiple patches will be going out to this which is a rolling restart every time to prevent downtime on our website!

We have updated our reminder system, we have completely taken out the urgent section, this started to get bugged out during our v1.21 update which this will be back in v2.1 but we couldn't get it fixed in time for version 2.0

Deprecated systems 🛡️
We have removed our reminder urgent message system which will be implemented back into the bot in v2.1 like i said above!

We did depreciate the premium bot, it was fully deleted, it is now marked as depreciated as it might be making a come back once the bot hits 1.5k servers or more

We have disabled the old automod commands as due to the v2 update!

We have fully deprecated our old automod commands with it's support methods, now it is replaced with version 2's automod system!

Removed systems 🗑️
We have removed our old timeout system for v2

We have removed our old reminders system implementation with the old embed for a new one

We have removed our outdated error logging system to get our new error logging system!

We have removed our old automod commands completely!

Lastly, we have removed our old error message formats due to em being very confusing.

## Getting Started

Ready to add Java Lava to your Discord server? Here's what you need to know:

### Quick Setup

1. **Invite the Bot** - Use our [invitation link](https://discord.com/oauth2/authorize?client_id=1305190785536360519) to add Java Lava to your server
2. **Set Permissions** - Ensure the bot has the necessary permissions for moderation
3. **Configure Commands** - Set up your preferred settings using our setup commands
4. **Start Moderating** - Begin using Java Lava's powerful features!

### Detailed Configuration

1. **Invite Java Lava**: Click [here](https://discord.com/oauth2/authorize?client_id=1305190785536360519) to invite the bot to your server. Make sure to grant it the necessary permissions for optimal functionality.

2. **Set Up Roles**: Create a role for Java Lava with appropriate permissions, including managing messages, banning members, and reading message history.

3. **Configure Commands and what you need to get started**: Use the \`/setup\` command to configure Java Lava according to your server's needs. You can customize welcome messages, moderation settings, and more.

4. **Explore Features**: Familiarize yourself with Java Lava's features by checking out the command list using \`/help\`. Experiment with moderation commands, fun interactions, and community engagement tools.

5. **Let Java Lava Work**: Sit back and let Java Lava help you manage and grow your Discord community effectively!

6. **Stay Updated**: Keep an eye on our [Support server](https://discord.gg/tM8Y5acUta) for updates, new features, and support.

---

### Key Features

- **Advanced Moderation** - Comprehensive tools for managing your community
- **Custom Welcome Messages** - Personalized greetings for new members  
- **Community Engagement** - Fun commands and interactive features
- **Automated Reminders** - Never forget important events or announcements
- **24/7 Uptime** - Reliable service with 99.9% uptime

## Support & Community

Need help or want to connect with other Java Lava users?

- **Discord Server**: [Join our community](https://discord.gg/tM8Y5acUta)
- **Status Page**: [Check service status](https://javalava.statuspage.io/)
- **Documentation**: You're already here!

---

*Java Lava is developed with ❤️ by PhillsPhanbh3_the_bot_dev and the Java Lava team.*`;

      setDocContent(markdownContent);
      setDocMeta({
        title: 'Java Lava Documentation',
        description:
          'Complete guide to Java Lava Discord bot features and setup',
        lastUpdated: '03-31-2026',
        tags: ['documentation', 'bot-setup', 'getting-started'],
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading documentation:', error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <>
        <StatusScript />
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-center">
            <BookOpenIcon className="h-12 w-12 text-[var(--color-primary)] mx-auto mb-4" />
            <p className="text-gray-400">Loading documentation...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <StatusScript />
      <Header />

      <main className="min-h-screen bg-[var(--color-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <BookOpenIcon className="h-4 w-4" />
              <span>Documentation</span>
              <span className="text-gray-600">•</span>
              <span>Getting Started</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              {docMeta.lastUpdated && (
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <ClockIcon className="h-4 w-4" />
                  <span>Updated {docMeta.lastUpdated}</span>
                </div>
              )}

              {docMeta.tags && (
                <div className="flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-gray-400" />
                  <div className="flex gap-2">
                    {docMeta.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded text-xs text-[var(--color-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <article className="prose prose-invert prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{
                __html: docContent
                  .split('\n')
                  .map(line => {
                    // Convert markdown to basic HTML
                    if (line.startsWith('# ')) {
                      return `<h1>${line.substring(2)}</h1>`;
                    } else if (line.startsWith('## ')) {
                      return `<h2>${line.substring(3)}</h2>`;
                    } else if (line.startsWith('### ')) {
                      return `<h3>${line.substring(4)}</h3>`;
                    } else if (line.startsWith('- ')) {
                      return `<li>${line.substring(2)}</li>`;
                    } else if (line.startsWith('1. ')) {
                      return `<li>${line.substring(3)}</li>`;
                    } else if (line === '---') {
                      return '<hr>';
                    } else if (line.trim() === '') {
                      return '<br>';
                    } else {
                      // Handle bold text
                      let processedLine = line.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong>$1</strong>'
                      );
                      // Handle inline code
                      processedLine = processedLine.replace(
                        /`([^`]+)`/g,
                        '<code>$1</code>'
                      );
                      // Handle links
                      processedLine = processedLine.replace(
                        /\[([^\]]+)\]\(([^)]+)\)/g,
                        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:text-[var(--color-secondary)]">$1</a>'
                      );
                      return `<p>${processedLine}</p>`;
                    }
                  })
                  .join(''),
              }}
            />
          </article>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between">
              <div></div>
              <div className="flex items-center gap-4">
                <a
                  href="/docs"
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-lg text-[var(--color-primary)] hover:bg-[var(--color-primary)]/20 transition-colors"
                >
                  <BookOpenIcon className="h-4 w-4" />
                  <span>Back to Docs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
