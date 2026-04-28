import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { MouseGlow } from "@/components/MouseGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rajin Panthee | Senior Full Stack Java Developer",
  description: "Senior Full Stack Java Developer with 6+ years of experience in Microservices, Spring Boot, and AWS Cloud Architecture.",
  keywords: ["Java Developer", "Full Stack Engineer", "Microservices", "Spring Boot", "AWS", "Angular", "Software Engineer"],
  openGraph: {
    title: "Rajin Panthee | Senior Full Stack Java Developer",
    description: "Expertise in designing, developing, and deploying robust Java/J2EE applications across enterprise environments.",
    url: "https://rajinpanthee.com",
    siteName: "Rajin Panthee's Portfolio",
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
      className={`${inter.variable} antialiased`}
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
      <body className="antialiased font-sans text-slate-900">
        <MouseGlow />
        {/* Sidebar for Desktop, Navbar for Mobile */}
        <Sidebar />
        <div className="md:hidden">
          <Navbar />
        </div>
        
        {/* Main Content Area shifted for Sidebar */}
        <div className="md:pl-20 lg:pl-64 transition-all duration-500">
          {children}
        </div>
      </body>
    </html>
  );
}
