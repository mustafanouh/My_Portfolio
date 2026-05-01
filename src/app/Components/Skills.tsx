"use client";
import { motion } from "framer-motion";

// استيراد الأيقونات التقنية - تم تعديل المسميات لتطابق مقترحات Turbopack
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiLaravel, 
  SiMysql, 
  SiFirebase, 
  SiPostgresql, 
  SiJavascript, 
  SiPhp, 
  SiCplusplus, 
  SiRedux, 
 
} from "react-icons/si";


import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiCpu, 
  FiUserCheck 
} from "react-icons/fi";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      mainIcon: <FiCode className="text-blue-500" />,
      color: "from-blue-500/20 to-cyan-500/20",
      skills: [
        { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
      
      ]
    },
    {
      title: "Backend Development",
      mainIcon: <FiServer className="text-emerald-500" />,
      color: "from-emerald-500/20 to-teal-500/20",
      skills: [
        { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
        { name: "REST API", icon: <FiServer /> },
        { name: "Sanctum", icon: <SiLaravel className="opacity-50" /> },
        { name: "JWT", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "Meilisearch", icon: <FiCode className="scale-75" /> },
      ]
    },
    {
      title: "Database Systems",
      mainIcon: <FiDatabase className="text-orange-500" />,
      color: "from-orange-500/20 to-yellow-500/20",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      title: "Languages",
      mainIcon: <FiCpu className="text-purple-500" />,
      color: "from-purple-500/20 to-pink-500/20",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
        { name: "SQL", icon: <SiMysql /> },
      ]
    },
    {
      title: "Soft Skills & Tools",
      mainIcon: <FiUserCheck className="text-red-500" />,
      color: "from-red-500/20 to-orange-500/20",
      skills: [
        { name: "Problem Solving", icon: <FiCode /> },
        { name: "ICDL", icon: <FiUserCheck /> },
        { name: "Debugging", icon: <FiCode className="opacity-50" /> },
      ]
    }
  ];

  return (
    <section id="Skills" className="relative py-24 bg-[var(--background)] overflow-hidden">
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
              className={`p-8 rounded-[2rem] bg-gradient-to-br ${category.color} border border-[var(--foreground)]/10 backdrop-blur-md group hover:border-[var(--primary)]/30 transition-all duration-500 shadow-xl`}
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
};

export default Skills;