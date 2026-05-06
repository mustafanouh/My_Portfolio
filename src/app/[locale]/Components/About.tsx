"use client";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  return (
    <section id="About" className="font-cairo relative py-12 md:py-24 bg-[var(--background)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-[var(--primary)]/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-10 md:mb-16 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text)] mb-4 md:mb-6 leading-tight">
              {t('header_main')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">{t('header_accent')}</span>
            </h2>
            <div className={`w-16 md:w-20 h-1.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mx-auto ${isRtl ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0'}`} />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">

            {/* Main Summary Content */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`lg:col-span-2 space-y-5 md:space-y-6 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <p className="text-lg md:text-xl text-[var(--text)] font-medium leading-relaxed">
                {t('summary_pre')}
                <span className="text-[var(--primary)]">{t('role')}</span>
                {t('summary_post')}
              </p>

              <div className="space-y-4 text-[var(--paragraph)] leading-relaxed opacity-90 text-base md:text-lg">
                <p>
                  {t('p1_pre')}
                  <span className="text-[var(--text)] font-semibold">Next.js & Laravel</span>
                  {t('p1_post')}
                </p>
                <p>
                  {t('p2_pre')}
                  <span className="italic underline decoration-[var(--accent)]/40 text-[var(--text)]">{t('school_project')}</span>
                </p>
                <p>{t('p3')}</p>
              </div>
            </motion.div>

            {/* Side Info / Quick Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 hidden md:block gap-6 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 backdrop-blur-md rounded-3xl p-6 md:p-8"
            >
              {/* Stats Item: Frontend */}
              <div className={`flex flex-col sm:flex-row items-center gap-4 ${isRtl ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="p-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-xl shrink-0">
                  <FiLayers size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">{t('stats.frontend')}</h4>
                  <p className="text-sm text-[var(--paragraph)]">Next.js, React, Tailwind</p>
                </div>
              </div>

              {/* Stats Item: Backend */}
              <div className={`flex flex-col sm:flex-row items-center gap-4 ${isRtl ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="p-3 bg-[var(--accent)]/10 text-[var(--accent)] rounded-xl shrink-0">
                  <FiDatabase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">{t('stats.backend')}</h4>
                  <p className="text-sm text-[var(--paragraph)]">Laravel, MySQL, JWT</p>
                </div>
              </div>

              {/* Stats Item: Clean Code */}
              <div className={`flex flex-col sm:flex-row items-center gap-4 ${isRtl ? 'sm:flex-row-reverse text-right' : 'text-left'}`}>
                <div className="p-3 bg-white/10 text-[var(--text)] rounded-xl shrink-0">
                  <FiCode size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text)]">{t('stats.clean_code')}</h4>
                  <p className="text-sm text-[var(--paragraph)]">{t('stats.clean_desc')}</p>
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