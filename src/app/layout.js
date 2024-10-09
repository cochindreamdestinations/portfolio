import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sachit Kurup ",
  description: "Musician | Flute player | Violinst",
  openGraph: {
    title: "Sachit Kurup",
    content: "/images/hero-image.jpeg",
  },
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
