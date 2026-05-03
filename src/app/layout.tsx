import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo, Inter } from "next/font/google"; // استيراد الخطوط
import "./globals.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Footer from "./Components/Footer";
import ProjectCard from "./Components/ProjectCard";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import SkillsMarquee from "./Components/SkillsMarquee";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// src/app/layout.tsx

// إعداد الخط (Configuration)
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "900"], // اختر الأوزان التي تحتاجها فقط
  variable: "--font-cairo", // تعريف متغير CSS للخط
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mustafa Nouh - Full-Stack Developer",
  description: "Crafting digital experiences with Next.js, React, and Tailwind CSS. Explore my portfolio showcasing innovative projects and expertise in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} ${inter.variable} antialiased`

        }
      >
        <Header />
        <Hero />
        <SkillsMarquee />

        <ProjectCard />
        <About />
        <Skills />
        <Services />
        <Contact />
        <Footer />
        {/* {children} */}
      </body>
    </html>
  );
}
