"use client";
import React, { useState } from "react";
import { Myproject } from "./Myproject";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiArrowRight, FiLayout, FiArrowLeft } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

// التصنيفات كمفاتيح للترجمة
const categories = ["All", "Full Stack", "Web Design", "Frameworks"];

const ProjectCard = () => {
  const t = useTranslations("Projects");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  const [active, setActive] = useState("All");
  const [arr, setArr] = useState(Myproject);

  const handleFilter = (cat: string) => {
    setActive(cat);
    setArr(cat === "All" ? Myproject : Myproject.filter((p) => p.category === cat));
  };

  return (
    <main id="Projects" className="font-cairo py-20 px-4 md:px-10 bg-[var(--background)]">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">
            {t("title")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">{t("subtitle")}</span>
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
                "px-5 py-2 font-bold rounded-full text-sm transition-all duration-200 border " +
                (active === cat
                  ? "bg-[var(--text)] text-[var(--background)] border-transparent shadow-lg"
                  : "bg-transparent text-[var(--paragraph)] border-[var(--foreground)]/20 hover:bg-[var(--foreground)]/5")
              }
            >
              {cat === "All" ? t("all_projects") : t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {arr.map((item) => (
              <motion.div
                layout
                key={item.projectTitle}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="group bg-white/5 border dark:border-[#e5e7eb3d] border-[var(--foreground)]/10 rounded-3xl overflow-hidden flex flex-col hover:border-[var(--primary)]/30 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-44 bg-[var(--foreground)]/5">
                  {item.imgpath ? (
                    <img
                      src={item.imgpath}
                      alt={item.projectTitle}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <FiLayout size={32} className="text-[var(--foreground)]/10" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)]">
                      {t(`categories.${item.category}`)}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[var(--text)] leading-tight group-hover:text-[var(--primary)] transition-colors">
                    {item.projectTitle}
                  </h3>

                  <p className={`text-xs text-[var(--paragraph)] leading-relaxed line-clamp-2 flex-1 opacity-80 ${isRtl ? 'text-right' : 'text-left'}`}>
                    {item.subTitle}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold px-2 py-0.5 rounded-md border dark:border-white/5 border-black/5 bg-black/[0.02] dark:bg-white/[0.02] text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="flex items-center justify-between px-5 py-4 border-t dark:border-white/5 border-black/5 bg-black/[0.01] dark:bg-white/[0.01]">
                  {item.path && item.path !== "#" ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-semibold text-[var(--paragraph)] hover:text-[var(--primary)] transition-colors"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                  ) : <span />}

                  {item.LivePath && item.LivePath !== "#" && (
                    <a
                      href={item.LivePath}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-[var(--text)] hover:text-[var(--primary)] transition-all group/link"
                    >
                      {t("links.preview")}
                      {isRtl ? (
                        <FiArrowLeft className="group-hover/link:-translate-x-1 transition-transform" />
                      ) : (
                        <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                      )}
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