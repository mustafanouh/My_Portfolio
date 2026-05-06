"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { useLocale, useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isRtl = locale === 'ar';

  // جلب العناوين ديناميكياً من ملف الترجمة
  const titles = t.raw("titles") as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section
      id="About"
      dir={isRtl ? "rtl" : "ltr"}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--background)] px-6 md:px-16 py-20"
    >
      {/* خلفية ديناميكية (الإضاءة الجانبية) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -left-[5%] w-[50%] h-[50%] bg-[var(--primary)]/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[5%] -right-[5%] w-[50%] h-[50%] bg-[var(--accent)]/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10">

        {/* قسم المحتوى النصي */}
        <div className={`flex-1 flex flex-col items-center lg:items-start ${isRtl ? 'lg:text-right' : 'lg:text-left'} text-center w-full order-2 lg:order-1`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
                 <span className="px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-bold border border-[var(--primary)]/20 mb-6 inline-block">

              {t("status")}

            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--text)] leading-[1.1] mb-4 tracking-tight">
              {t("name")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">{t("surname")}</span>
            </h1>

            {/* حاوية العناوين المتحركة */}
            <div className="min-h-[3rem] md:min-h-[4rem] mb-2 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.p
                  key={titles[index]}
                  initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-bold text-[var(--accent)]"
                >
                  {titles[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <p className="text-base md:text-lg text-[var(--paragraph)] max-w-2xl mb-10 leading-relaxed opacity-80">
              {t("description")}
            </p>

            {/* أزرار التفاعل */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <motion.a
                href="/files/CV_Mustafa_Nouh.pdf"
                download
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-2xl font-bold shadow-lg shadow-[var(--primary)]/25 transition-all"
              >
                <FiDownload size={20} /> {t("download_cv")}
              </motion.a>

              <motion.a
                href="#Contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[var(--text)]/10 text-[var(--text)] rounded-2xl font-bold hover:bg-[var(--text)] hover:text-[var(--background)] transition-all"
              >
                <FiSend size={20} /> {t("contact_me")}
              </motion.a>
            </div>

            {/* أيقونات التواصل الاجتماعي */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <FiGithub />, link: "https://github.com/mustafanouh", color: "#333" },
                { icon: <FiLinkedin />, link: "https://linkedin.com/in/mustafa-nouh", color: "#0077B5" },
                { icon: <FaXTwitter />, link: "https://x.com/Mustafa_Nouh_sy", color: "#000" },
                { icon: <FaWhatsapp />, link: "https://wa.me/963985690091", color: "#25D366" }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  whileHover={{ y: -5, color: item.color, borderColor: item.color }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--text)]/[0.03] border border-[var(--text)]/10 backdrop-blur-sm transition-all"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative flex justify-center items-center order-1 lg:order-2">
          <motion.div

            initial={{ scale: 0.8, opacity: 0 }}

            animate={{ scale: 1, opacity: 1 }}

            transition={{ duration: 1 }}

            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"

          >
            {/* تأثير الإضاءة خلف الصورة */}
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

                <span className="text-sm font-bold text-[var(--text)]">{t("experience")}  </span>

              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;