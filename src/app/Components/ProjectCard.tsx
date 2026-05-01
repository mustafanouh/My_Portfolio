"use client";
import React, { useState } from "react";
import { Myproject } from "./Myproject";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectCard = () => {
  const [currentActive, setcurenActive] = useState("all");
  const [arr, setArr] = useState(Myproject);

  const handleFilter = (category: string) => {
    setcurenActive(category);
    if (category === "all") {
      setArr(Myproject);
    } else {
      const filtered = Myproject.filter((item) => item.category === category);
      setArr(filtered);
    }
  };

  return (
    <main id="Projects" className="py-20 px-4 md:px-10 bg-[var(--background)]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--primary)] rounded-full mx-auto lg:mx-0"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section: Filters */}
          <section className="flex flex-wrap lg:flex-col gap-3 min-w-[200px]">
            {["all", "css", "javaScript", "Bootstrap", "react"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm capitalize
                  ${currentActive === cat
                    ? "bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/20 scale-105"
                    : "bg-[var(--foreground)]/5 text-[var(--paragraph)] hover:bg-[var(--foreground)]/10"
                  }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </section>

          {/* Right Section: Project Grid */}
          <section className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {arr.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                  key={item.imgpath}
                  className="group bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-[var(--primary)]/30 transition-colors"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.imgpath}
                      alt={item.projectTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={item.path} target="_blank" className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors">
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--text)] mb-2 capitalize">{item.projectTitle}</h3>
                    <p className="text-sm text-[var(--paragraph)] leading-relaxed mb-6 opacity-80 line-clamp-2">
                      {item.subTitle}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-3">
                        <a href={item.path} className="text-[var(--paragraph)] hover:text-[var(--primary)] transition-colors">
                          <FiGithub size={20} />
                        </a>
                        <a href={item.path} className="text-[var(--paragraph)] hover:text-[var(--primary)] transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      </div>

                      <a href={item.path} className="flex items-center gap-1 text-sm font-bold text-[var(--primary)] group-hover:gap-2 transition-all">
                        Live Demo <FiArrowRight />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectCard;