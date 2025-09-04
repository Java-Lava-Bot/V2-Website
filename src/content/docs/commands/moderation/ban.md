---
icon: boot
label: Ban
order: 380
description: Ban command documentation
tags: [commands, moderation]
---

# Ban command(s)!

## What is the /ban command?

The /ban command is where you can make sure you get someone out of your discord server, this would permantly ban them out of your server and you can put in a optional reason.

## What is this /unban command!

This command is where you can remove a ban from a user, however the bad side of this command is that you need the user id which is through discord's developer mode. You can go to your user settings, then you can go to search and type in dev mode or find the advanced section and then find developer mode and enable that!

### Known issue!

1. We currently are aware of an issue where if you ban a member then Java Lava has a issue where if it doesn't have the right perms, then Java Lava will dm the member the ban embed but fail to ban them in the actual guild! We also are dealing with an issue where the command doesn't respond but DOES BAN THE MEMBER! That is known as a discord API error ``` DiscordAPIError[10062]: Unknown interaction ``` which you can read up on [this amazing source](https://docs.discord.food/datamining/errors) and this [google search!](https://www.google.com/search?q=what+does+a+discord+api+error+10062+mean%)

2. We are also currently aware of an issue where if you try to unban someone then it could give a issue where the unban doesn't work due to the bot not having the unban perm, the bot could also have that discord api error.