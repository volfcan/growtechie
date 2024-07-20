"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import GoToTopButton from '@/components/GoToTopButton';
import { metadata } from './metadata'; // Import the metadata

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/jsm-logo.png" sizes="any" />
          <title>{metadata.title as string ?? 'Default Title'}</title> {/* Ensure title is string */}
          <meta name="description" content={metadata.description as string ?? 'Default description'} /> {/* Ensure description is string */}
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
            <GoToTopButton />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
