"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { FiDownload, FiSend, FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const titles = [
    "Full Stack Developer",
    "Frontend Specialist",
    "Backend Architect",
    "Creative Engineer",
    "UI/UX Visionary",
    "Next.js Expert",
    "Laravel Developer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="About" className="relative font-cairo min-h-screen w-full   flex items-center justify-center overflow-hidden bg-[var(--background)] px-16 py-20">

      {/* 1. Dynamic Background (Orb Lights) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[var(--primary)]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[var(--accent)]/10 blur-[120px] rounded-full"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16 z-10">

        {/* 2. Content Section */}
        <div className="flex-1 text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold border border-[var(--primary)]/20 mb-6 inline-block">
              Available for Freelance & Projects
            </span>

            <h1 className=" text-5xl md:text-7xl font-black text-[var(--text)] leading-tight mb-4">
              Mustafa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Nouh</span>
            </h1>

            <div className="h-16 mb-1">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titles[index]}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="text-2xl md:text-3xl font-medium text-[var(--paragraph)]"
                >
                  {titles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-lg text-[var(--paragraph)] max-w-2xl mb-10 leading-relaxed opacity-80">
              I design and develop high-performance digital experiences that blend functionality with aesthetics. Specialized in building scalable systems using modern web technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-row gap-4 mb-12">
              <motion.a
                href="/files/CV_Mustafa_Nouh.pdf"
                download="Mustafa_Nouh_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-2xl font-bold shadow-[0_10px_20px_-10px_var(--primary)] transition-all hover:shadow-[0_20px_40px_-15px_var(--primary)] cursor-pointer"
              >
                <FiDownload size={20} /> Download CV
              </motion.a>

              <motion.a
                href="#Contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-4 border-2 border-[var(--secondary)] text-[var(--text)] rounded-2xl font-bold hover:bg-[var(--secondary)] hover:text-[var(--background)] transition-all"

              >
                <FiSend size={20} /> Contact Me
              </motion.a>
            </div>

            {/* Glassmorphism Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, link: "https://github.com/mustafanouh", color: "#333" },
                { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/mustafa-nouh-92a93a293?utm_source=share_via&utm_content=profile&utm_medium=member_android", color: "#0077B5" },
                { icon: <FaXTwitter />, link: "https://x.com/Mustafa_Nouh_sy", color: "#000" },
                { icon: <FaWhatsapp />, link: "https://wa.me/963985690091", color: "#25D366" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  whileHover={{ y: -5, backgroundColor: item.color, color: "#fff" }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--foreground)]/5  {text-{item.color}} border border-[var(--foreground)]/10 backdrop-blur-md transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 3. Visual Section (The Avatar Shield) */}
        <div className="flex-1 relative flex justify-center items-center order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
          >
            {/* Background Animations */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary)] to-[var(--accent)] rounded-[2rem] -rotate-6 opacity-20 blur-2xl" />

            {/* Glass Image Frame */}
            <div className="relative w-full h-full p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="./img/mustafa-1.jpg"
                alt="Mustafa Nouh"
                className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 hover:scale-100"
              />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 md:left-0 p-4 bg-[var(--background)]/80 backdrop-blur-xl border border-[var(--foreground)]/10 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-ping" />
                <span className="text-sm font-bold text-[var(--text)]">+2 Years Exp.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;