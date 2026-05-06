"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { useTranslations, useLocale } from "next-intl";
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuBriefcase, LuCpu, LuHouse, LuLayoutDashboard, LuMail, LuUser } from "react-icons/lu";

const Footer = () => {
    const t = useTranslations("Footer");
    const locale = useLocale();
    const isRtl = locale === 'ar';
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/mustafanouh' },
        { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mustafa-nouh-92a93a293' },
        { name: 'X', icon: <FaXTwitter />, href: 'https://x.com/Mustafa_Nouh_sy' },
        { name: 'WhatsApp', icon: <FaWhatsapp />, href: 'https://wa.me/963985690091' },
    ];

    const navLinks = [
        { name: t('nav.home'), href: '/', icon: <LuHouse /> },
        { name: t('nav.services'), href: '#services', icon: <LuBriefcase /> },
        { name: t('nav.skills'), href: '#Skills', icon: <LuCpu /> },
        { name: t('nav.projects'), href: '#projects', icon: <LuLayoutDashboard /> },
        { name: t('nav.about'), href: '#about', icon: <LuUser /> },
        { name: t('nav.contact'), href: '#contact', icon: <LuMail /> },
    ];

    // لجلب المصفوفة من JSON
    const expertiseList = t.raw('expertise_list') as string[];

    return (
        <footer className={`relative pt-24 pb-12 bg-[var(--background)] overflow-hidden border-t border-white/5 ${isRtl ? 'font-arabic' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>

            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--primary)]/8 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* ─── Main Grid ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16">

                    {/* ── Col 1: Brand + Bio + Socials ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 flex flex-col items-center sm:items-start gap-8 text-center sm:text-start"
                    >
                        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter leading-none ${isRtl ? 'tracking-normal' : ''}`}>
                            <span className="text-[var(--text)]">MUSTAFA</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"> . </span>
                            <span
                                className="text-transparent opacity-80"
                                style={{ WebkitTextStroke: '1px var(--text)' }}
                            >
                                NOUH
                            </span>
                        </h2>

                        <p className="max-w-sm text-base leading-relaxed text-[var(--paragraph)] opacity-60">
                            {t('bio')}
                        </p>

                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={link.name}
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    className="p-3.5 bg-white/5 border border-white/10 rounded-2xl text-[var(--text)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-all duration-300"
                                >
                                    <span className="text-xl">{link.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Col 2: Explore ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-start"
                    >
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-8 opacity-80">
                            {t('explore')}
                        </h3>
                        <ul className="space-y-4">
                            {navLinks.map((item, id) => (
                                <li key={id}>
                                    <Link
                                        href={item.href}
                                        className="text-sm items-center gap-2 flex text-[var(--paragraph)] opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all duration-300"
                                    >
                                        <span className="text-[var(--accent)]">{item.icon}</span> {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Col 3: Expertise ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-start"
                    >
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-8 opacity-80">
                            {t('expertise')}
                        </h3>
                        <ul className="space-y-4">
                            {expertiseList.map((item) => (
                                <li
                                    key={item}
                                    className="text-sm text-[var(--paragraph)] opacity-50"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* ── Col 4: CTA Card ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-3 flex justify-center sm:justify-end items-start"
                    >
                        <div className="w-full max-w-[260px] p-7 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md space-y-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--paragraph)] opacity-40 mb-1">
                                    {t('cta.status')}
                                </p>
                                <h4 className="text-lg font-black text-[var(--text)]">
                                    {t('cta.title')}
                                </h4>
                            </div>

                            <a
                                href="mailto:mustafa.nouh.nouh@gmail.com"
                                className="group flex items-center justify-center gap-2.5 w-full py-3.5 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-black rounded-xl hover:shadow-[0_0_24px_rgba(124,58,237,0.35)] transition-all duration-300"
                            >
                                <FaEnvelope className={`${isRtl ? 'group-hover:-rotate-12' : 'group-hover:rotate-12'} transition-transform duration-300`} />
                                {t('cta.hire_me')}
                            </a>

                            <a
                                href="https://wa.me/963985690091"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2.5 w-full py-3.5 bg-white/5 border border-white/10 text-[var(--text)] text-sm font-bold rounded-xl hover:border-[#25d366]/40 hover:text-[#25d366] transition-all duration-300"
                            >
                                <FaWhatsapp className="group-hover:scale-110 transition-transform duration-300" />
                                {t('cta.whatsapp')}
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* ─── Bottom Bar ─── */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--paragraph)] opacity-30 text-center">
                        {t('bottom.rights', { year: currentYear })}
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="h-1.5 w-1.5 bg-[#25d366] rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--paragraph)] opacity-40">
                            {t('bottom.location')}
                        </span>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;