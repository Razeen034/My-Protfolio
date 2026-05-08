import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import {
  ScrollProgress,
  MouseSpotlight,
  FloatingOrbs,
} from "@/components/effects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rajinpanthee.com"),
  title: "Rajin Panthee | Senior Full Stack Java Developer",
  description:
    "Senior Full Stack Java Developer with 6+ years of experience in Microservices, Spring Boot, and AWS Cloud Architecture.",
  keywords: [
    "Java Developer",
    "Full Stack Engineer",
    "Microservices",
    "Spring Boot",
    "AWS",
    "Angular",
    "Software Engineer",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rajin Panthee | Senior Full Stack Java Developer",
    description:
      "Expertise in designing, developing, and deploying robust Java/J2EE applications across enterprise environments.",
    url: "https://rajinpanthee.com",
    siteName: "Rajin Panthee's Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rajin Panthee",
              jobTitle: "Senior Full Stack Java Developer",
              url: "https://rajinpanthee.com",
              sameAs: [
                "https://github.com/rajinpanthee",
                "https://linkedin.com/in/rajinpanthee",
              ],
              alumniOf: "East Central University",
              knowsAbout: [
                "Java",
                "Spring Boot",
                "Microservices",
                "AWS",
                "Angular",
                "Kafka",
                "Cloud Architecture",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="ambient-bg" aria-hidden />
        <FloatingOrbs />
        <div className="grain" aria-hidden />
        <MouseSpotlight />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
