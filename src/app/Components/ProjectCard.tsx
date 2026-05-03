"use client";
import React, { useState } from "react";
import { Myproject } from "./Myproject";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiArrowRight, FiLayout } from "react-icons/fi";

const categories = ["All", "Full Stack", "Web Design","Frameworks"];

const ProjectCard = () => {
  const [active, setActive] = useState("All");
  const [arr, setArr] = useState(Myproject);

  const handleFilter = (cat: string) => {
    setActive(cat);
    setArr(cat === "All" ? Myproject : Myproject.filter((p) => p.category === cat));
  };

  return (
    <main id="Projects" className= " font-cairo py-20 px-4 md:px-10  bg-[var(--background)]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Projects</span>
          </h2>
          <div className="w-16 h-[3px] bg-[var(--primary)] rounded-full mx-auto" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border " +
                (active === cat
                  ? "bg-[var(--text)] text-[var(--background)] border-transparent"
                  : "bg-transparent text-[var(--paragraph)] border-[var(--foreground)]/20 hover:bg-[var(--foreground)]/5")
              }
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {arr.map((item) => (
              <motion.div
                layout
                key={item.projectTitle}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 22, stiffness: 120 }}
                className="group bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-2xl overflow-hidden flex flex-col hover:border-[var(--foreground)]/20 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-36 bg-[var(--foreground)]/5">
                  {item.imgpath ? (
                    <img
                      src={item.imgpath}
                      alt={item.projectTitle}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <FiLayout size={28} className="text-[var(--foreground)]/20" />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full w-fit bg-[var(--foreground)]/10 text-[var(--paragraph)]">
                    {item.category}
                  </span>

                  <h3 className="text-sm font-bold text-[var(--text)] leading-snug">
                    {item.projectTitle}
                  </h3>

                  <p className="text-xs text-[var(--paragraph)] leading-relaxed line-clamp-2 flex-1">
                    {item.subTitle}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-1">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded border border-[var(--foreground)]/10 text-[var(--paragraph)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-[var(--foreground)]/10">
                  {item.path && item.path !== "#" ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[var(--paragraph)] hover:text-[var(--text)] transition-colors"
                    >
                      <FiGithub size={13} />
                      GitHub
                    </a>
                  ) : (
                    <span />
                  )}

                  {item.LivePath && item.LivePath !== "#" && item.LivePath !== "" && (
                    <a
                      href={item.LivePath}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-[var(--text)] hover:gap-2 transition-all"
                    >
                      Preview <FiArrowRight size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default ProjectCard;