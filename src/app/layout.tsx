import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MouseGlow } from "@/components/MouseGlow";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | John Doe",
  description: "The portfolio of John Doe, an AI Engineer specializing in building local AI agents and high-performance web applications. Explore projects, skills, and experience in the field of Artificial Intelligence.",
  keywords: ["AI Engineer", "Portfolio", "LLM", "Local AI", "AI Agent", "Next.js", "React", "Python", "Machine Learning"],
  openGraph: {
    title: "AI Engineer Portfolio | John Doe",
    description: "The portfolio of John Doe, an AI Engineer specializing in building local AI agents and high-performance web applications.",
    url: "https://your-domain.com",
    siteName: "John Doe's Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Doe",
              jobTitle: "AI Engineer",
              url: "https://your-domain.com",
              sameAs: [
                "https://github.com/johndoe",
                "https://linkedin.com/in/johndoe",
              ],
              alumniOf: "University of Example",
              knowsAbout: [
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "Next.js",
                "React",
                "Python",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[--background-obsidian] text-slate-400 font-sans">
        <MouseGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}