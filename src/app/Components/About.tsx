"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";

const About = () => {
  return (
    <section id="About" className="relative py-16 md:py-24 bg-[var(--background)] overflow-hidden">
      {/* Background Glow Effect - Adjusted for better mobile performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[var(--primary)]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-16 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text)] mb-4 md:mb-6 leading-tight">
              Engineering Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Experiences</span>
            </h2>
            <div className="w-16 md:w-20 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mx-auto lg:mx-0" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
            
            {/* Main Summary Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-5 md:space-y-6 text-center lg:text-left"
            >
              <p className="text-lg md:text-xl text-[var(--text)] font-medium leading-relaxed">
                Results-driven <span className="text-[var(--primary)]">Full Stack Web Developer</span> and ITE student with hands-on experience designing and delivering scalable web applications.
              </p>
              
              <div className="space-y-4 text-[var(--paragraph)] leading-relaxed opacity-90 text-base md:text-lg">
                <p>
                  Proficient in <span className="text-[var(--text)] font-semibold">Next.js and Laravel</span> with MySQL, and experienced in implementing secure authentication systems using JWT and Laravel Sanctum.
                </p>
                <p>
                  Proven ability to build responsive, user-focused interfaces alongside robust back-end architectures — demonstrated through real-world projects like a <span className="italic underline decoration-[var(--accent)]/40 text-[var(--text)]">School Management System</span>.
                </p>
                <p>
                  Committed to writing clean, maintainable code with a strong focus on performance, reliability, and long-term scalability.
                </p>
              </div>
            </motion.div>

            {/* Side Info / Quick Stats - Responsive Grid for Tablets */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 backdrop-blur-md rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start text-center sm:text-left lg:text-left gap-4">
                <div className="p-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl shrink-0">
                  <FiLayers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">Frontend</h4>
                  <p className="text-sm text-[var(--paragraph)]">Next.js, React, Tailwind</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start text-center sm:text-left lg:text-left gap-4">
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl shrink-0">
                  <FiDatabase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">Backend</h4>
                  <p className="text-sm text-[var(--paragraph)]">Laravel, MySQL, JWT</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-row items-center lg:items-start text-center sm:text-left lg:text-left gap-4">
                <div className="p-3 bg-white/10 text-[var(--text)] rounded-xl shrink-0">
                  <FiCode size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">Clean Code</h4>
                  <p className="text-sm text-[var(--paragraph)]">Scalability & Performance</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;