"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp,
    FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/mustafanouh' },
        { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/mustafanouh' },
        { name: 'X', icon: <FaXTwitter />, href: '#' },
        { name: 'Instagram', icon: <FaInstagram />, href: '#' },
        { name: 'WhatsApp', icon: <FaWhatsapp />, href: '#' },
    ];

    return (
        <footer className="relative pt-24 pb-12 bg-[var(--background)] overflow-hidden border-t border-white/5">
            {/* تأثير الإضاءة الخلفية المتوهجة - مركز في المنتصف أسفل الصفحة */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[300px] bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Responsive Grid System */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 text-center sm:text-left">

                    {/* قسم العلامة التجارية - يمتد على 5 أعمدة في الشاشات الكبيرة */}
                    <div className="lg:col-span-5 space-y-8 flex flex-col items-center sm:items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {/* الشعار المحدث ليكون أكثر بروزاً */}
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                                <span className="text-[var(--text)]">MUSTAFA</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">.</span>
                                <span className="text-[var(--text)]">NOUH</span>
                            </h2>
                            <p className="max-w-md text-base md:text-lg leading-relaxed text-[var(--paragraph)] opacity-70">
                                Informatics Engineer specializing in crafting high-end digital experiences.
                                Turning complex logic into elegant, scalable web solutions.
                            </p>
                        </motion.div>

                        {/* أيقونات التواصل الاجتماعي */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                            {socialLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 bg-white/5 border border-white/10 rounded-2xl text-[var(--text)] hover:text-[var(--primary)] hover:border-[var(--primary)]/40 transition-all duration-300 backdrop-blur-sm"
                                >
                                    <span className="text-xl md:text-2xl">{link.icon}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* روابط سريعة - Navigation */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[var(--primary)] mb-8 opacity-80">Explore</h3>
                        <ul className="space-y-4">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item}`} className="text-base text-[var(--paragraph)] hover:text-[var(--text)] transition-colors duration-300">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* قسم التخصصات - Expertise */}
                    <div className="lg:col-span-2">
                        <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[var(--accent)] mb-8 opacity-80">Expertise</h3>
                        <ul className="space-y-4">
                            {['Full-Stack Dev', 'UI/UX Design', 'API Architecture'].map((item) => (
                                <li key={item} className="text-base text-[var(--paragraph)] opacity-60">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* بطاقة التواصل السريع - CTA */}
                    <div className="lg:col-span-3 flex justify-center sm:justify-start">
                        <div className="w-full max-w-[280px] p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md">
                            <h4 className="text-xl font-bold text-[var(--text)] mb-4">Have a Vision?</h4>
                            <a
                                href="mailto:contact@mustafanouh.com"
                                className="group flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-black rounded-2xl hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all duration-300"
                            >
                                <FaEnvelope className="group-hover:rotate-12 transition-transform" />
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>

                {/* شريط الحقوق السفلي - Bottom Bar */}
                <div className="mt-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--paragraph)] opacity-40">
                        © {currentYear} MUSTAFA NOUH • CRAFTED WITH PASSION
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 bg-[var(--primary)] rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--paragraph)] opacity-50">Aleppo, Syria</span>
                        </div>
                        <div className="hidden md:block h-4 w-px bg-white/10" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--paragraph)] opacity-50">Next.js 15 & React 19</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;