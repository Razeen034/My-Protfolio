import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import your new Navbar
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Developer and AI Agent Builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-slate-950 text-white">
        {/* 2. Place Navbar at the top */}
        <Navbar />
        
        {/* 3. Add padding-top so content doesn't hide under the fixed Navbar */}
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}