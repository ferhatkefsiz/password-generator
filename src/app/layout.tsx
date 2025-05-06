import type { Metadata } from "next";
import { cx } from "@/lib/utils";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import "./globals.css";
import Footer from "@/modules/Footer";

export const metadata: Metadata = {
  title: "Free Password Generator | Create Strong Passwords",
  description:
    "Easy and secure password generator that's completely free and safe to use. Generate strong passwords and passphrases for every online account with the strong Bitwarden password generator, and get the latest best practices on how to maintain password security and privacy online.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "antialiased",
        "selection:bg-zinc-700 selection:text-zinc-100 dark:selection:bg-zinc-100 dark:selection:text-zinc-700",
        geistSans.variable,
        geistMono.variable,
      )}
      suppressHydrationWarning
    >
      <body className="font-sans bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
