"use client";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiLaravel,
  SiMysql, SiFirebase, SiPostgresql, SiJavascript, SiPhp,
  SiCplusplus, SiRedux, SiTypescript, SiOpenjdk, SiGithubpages,
  SiReactquery, 
} from "react-icons/si";

import {
  FiCode, FiServer, FiDatabase, FiCpu, FiUserCheck,
  FiSearch, FiZap, FiActivity, FiBox
} from "react-icons/fi";
import { TbApi, TbLockCode } from "react-icons/tb";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      mainIcon: <FiCode className="text-[var(--accent)]" />,
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Zustand", icon: <FiBox className="text-[#433921]" /> },
        { name: "React Query", icon: <SiReactquery className="text-[#FF4154]" /> },
      ]
    },
    {
      title: "Backend Development",
      mainIcon: <FiServer className="text-[var(--accent)]" />,
      skills: [
        { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: "REST API", icon: <TbApi className="text-emerald-400" /> },
        { name: "Sanctum", icon: <TbLockCode className="text-[#FF2D20] opacity-80" /> },
        { name: "JWT", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "Meilisearch", icon: <FiSearch className="text-[#FF5C5C]" /> },
        { name: "Reverb", icon: <FiZap className="text-[#FF2D20]" /> },
      ]
    },
    {
      title: "Database Systems",
      mainIcon: <FiDatabase className="text-[var(--accent)]" />,
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Oracle", icon: <></> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      title: "Languages",
      mainIcon: <FiCpu className="text-[var(--accent)]" />,
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "Java", icon: <SiOpenjdk className="text-[#ED8B00]" /> },
        { name: "SQL", icon: <FiDatabase className="text-[#4479A1]" /> },
      ]
    },
    {
      title: "Soft Skills & Tools",
      mainIcon: <FiUserCheck className="text-[var(--accent)]" />,
      skills: [
        { name: "Problem Solving", icon: <FiCode className="text-gray-400" /> },
        { name: "Power BI", icon: <></> },
        { name: "Debugging", icon: <FiActivity className="text-red-400" /> },
        { name: "Collaboration", icon: <SiGithubpages className="text-white" /> },
        { name: "ICDL", icon: <FiUserCheck className="text-blue-400" /> },
      ]
    }
  ];

  return (
    <section id="Skills" className="font-cairo relative py-24 bg-[var(--background)] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text)] mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Arsenal</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5  bg-gray-50 border border-[var(--foreground)]/10 backdrop-blur-md group hover:border-[var(--primary)]/30 transition-all duration-500 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[var(--background)] rounded-2xl text-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg">
                  {category.mainIcon}
                </div>
                <h3 className="text-xl font-extrabold text-[var(--text)]">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-[var(--background)]/90 text-[var(--paragraph)] rounded-xl border border-white/5 hover:scale-105 hover:bg-[var(--background)] hover:text-[var(--text)] transition-all cursor-default text-sm font-bold shadow-sm"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; // نهاية الدالة

export default Skills;