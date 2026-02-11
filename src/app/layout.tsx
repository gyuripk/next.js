import type { Metadata } from "next";
import Link from "next/link";
import styles from "./layout.module.css"; //post css로 작성한 css module
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Nanum_Gothic } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const sans = Open_Sans({ subsets: ["latin"] });
const gothic = Nanum_Gothic({
  weight: "700", // variable font아니라서 두께 설정해줘야함
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cool products site",
  description: "This is a cool site for selling good products",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
