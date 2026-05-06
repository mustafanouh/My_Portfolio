"use client";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
    FaEnvelope,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactCard = ({
    item,
    index,
    isRtl
}: {
    item: any;
    index: number;
    isRtl: boolean;
}) => {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`group relative p-6 rounded-[2rem] border border-[var(--text)]/[0.08] bg-[var(--text)]/[0.03] dark:bg-white/5 backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-300 ${isRtl ? 'text-right' : 'text-left'}`}
        >
            {/* Glow bg on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                style={{ background: `radial-gradient(circle at ${isRtl ? '70%' : '30%'} 50%, ${item.glow}, transparent 70%)` }}
            />

            <div className={`relative z-10 flex items-center gap-5 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Icon Container */}
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                        border: `1px solid ${item.color}40`,
                        color: item.color,
                        boxShadow: `0 0 15px ${item.glow}`,
                    }}
                >
                    {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold tracking-[0.2em] opacity-50 mb-1 text-[var(--text)]">
                        {item.label}
                    </p>
                    <p
                        className="font-bold text-sm md:text-base truncate transition-colors duration-300"
                        style={{ color: item.href ? item.color : "var(--text)" }}
                    >
                        {item.value}
                    </p>
                </div>

                {/* Arrow */}
                {item.href && (
                    <div
                        className={`opacity-0 group-hover:opacity-100 transition-all duration-300 text-lg flex-shrink-0 ${isRtl ? '-translate-x-2 group-hover:translate-x-0 rotate-[-90deg]' : 'translate-x-2 group-hover:translate-x-0'}`}
                        style={{ color: item.color }}
                    >
                        ↗
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (item.href) {
        return (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
            </a>
        );
    }

    return content;
};

const Contact = () => {
    const t = useTranslations("Contact");
    const locale = useLocale();
    const isRtl = locale === 'ar';

    const contactItems = [
        {
            label: t('labels.email'),
            value: "Mustafa.Nouh.Nouh@gmail.com",
            icon: <FaEnvelope />,
            href: "mailto:Mustafa.Nouh.Nouh@gmail.com",
            color: "#EA4335", 
            glow: "rgba(234, 67, 53, 0.15)",
        },
        {
            label: t('labels.whatsapp'),
            value: "+963 985 690 091",
            icon: <FaWhatsapp />,
            href: "https://wa.me/963985690091",
            color: "#25D366", 
            glow: "rgba(37, 211, 102, 0.15)",
        },
        {
            label: t('labels.github'),
            value: "Mustafa Nouh",
            icon: <FaGithub />,
            href: "https://github.com/mustafanouh",
            color: "var(--text)",
            glow: "rgba(128, 128, 128, 0.1)",
        },
        {
            label: t('labels.linkedin'),
            value: "Mustafa Nouh",
            icon: <FaLinkedin />,
            href: "https://www.linkedin.com/in/mustafa-nouh-92a93a293",
            color: "#0A66C2", 
            glow: "rgba(10, 102, 194, 0.15)",
        },
        {
            label: t('labels.x'),
            value: "@Mustafa_Nouh_sy",
            icon: <FaXTwitter />,
            href: "https://x.com/Mustafa_Nouh_sy",
            color: "var(--text)",
            glow: "rgba(0, 0, 0, 0.1)",
        },
        {
            label: t('labels.location'),
            value: t('location_val'),
            icon: <FaMapMarkerAlt />,
            href: null,
            color: "#F97316", // Orange
            glow: "rgba(249, 115, 22, 0.15)",
        },
    ];

    return (
        <section id="Contact" className="relative py-24 bg-[var(--background)] overflow-hidden transition-colors duration-500">
            {/* Background glows - تقليل الشفافية لتناسب الوضعين */}
            <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[var(--primary)]/10 dark:bg-[var(--primary)]/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`mb-16 text-center ${isRtl ? 'sm:text-right' : 'sm:text-left'}`}>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs font-bold tracking-[0.4em] text-[var(--primary)] mb-4 opacity-70 uppercase"
                        >
                            {t('badge')}
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-[var(--text)]"
                        >
                            {t('title_pre')}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                                {t('title_accent')}
                            </span>
                        </motion.h2>
                        <p className="text-[var(--paragraph)] text-lg max-w-xl opacity-70">
                            {t('description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {contactItems.map((item, index) => (
                            <ContactCard key={item.label} item={item} index={index} isRtl={isRtl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;