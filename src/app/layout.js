import './globals.css';
import ScrollToTop from './components/ScrollToTop';
import { Inter, JetBrains_Mono } from 'next/font/google';
import favicon from './public/Java_Lava_Logo/favicon.ico';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Java Lava Bot | Discord Moderation & Fun',
  description:
    'The ultimate Discord bot for moderation, community engagement, and entertainment',
  icons: {
    icon: '/Java_Lava_Logo/favicon.ico',
  },
  metadataBase: new URL('https://javalava.com'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>

      {/* Hydration mismatch fix */}
      <body
        suppressHydrationWarning
        className={`bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen selection:bg-[var(--color-primary)] selection:text-white ${inter.className}`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

/*
import './globals.css';
import ScrollToTop from './components/ScrollToTop';
import { Inter, JetBrains_Mono } from 'next/font/google';
import favicon from './public/Java_Lava_Logo/favicon.ico';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Java Lava Bot | Discord Moderation & Fun',
  description:
    'The ultimate Discord bot for moderation, community engagement, and entertainment',
  icons: {
    icon: favicon.src,
  },
  metadataBase: new URL('https://javalava.com'),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body
        className={`bg-[var(--color-dark)] text-[var(--color-light)] min-h-screen selection:bg-[var(--color-primary)] selection:text-white ${inter.className}`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
*/