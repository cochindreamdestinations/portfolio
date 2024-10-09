import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  
  title: 'Sachit Kurup | Musician',
  description: 'Young musician with talents in Vocal, Flute, Violin',
  twitter: {
    card: 'https://sachitkurup.vercel.app/hero-image.jpeg',
    url: 'https://sachitkurup.vercel.app',
    title: 'Sachit Kurup | Musician',
    description: 'Young musician with talents in Vocal, Flute, Violin',
  },
  openGraph: {
    title: 'Sachit Kurup | Musician',
    description: 'Young musician with talents in Vocal, Flute, Violin',
    url: 'https://sachitkurup.vercel.app',
    siteName: 'Cochin Dream Destinations Taxi Service',
    images: [
      {
        url: 'https://sachitkurup.vercel.app/hero-image.jpeg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://sachitkurup.vercel.app/hero-image.jpeg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    videos: [
      {
        url: 'https://nextjs.org/video.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    audio: [
      {
        url: 'https://nextjs.org/audio.mp3', // Must be an absolute URL
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="twitter:title" content="Sachit Kurup"></meta>
        <meta
          property="twitter:image"
          content="./images/hero-image.jpeg"
        ></meta>
        <meta property="twitter:card" content="/images/hero-image.jpeg"></meta>
        <meta property="og:title" content="Sachit Kurup"></meta>
        <meta property="og:site_name" content="sachitkurup.in"></meta>
        <meta property="og:url" content="sachitkurup.in"></meta>
        <meta
          property="og:description"
          content="Musician | Voilinst | Bansuri"
        ></meta>
        <meta property="og:type" content=""></meta>
        <meta
          property="og:image"
          content="sachitkurup.vercel.app/images/hero-image.jpeg"
        ></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
