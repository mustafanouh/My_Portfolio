"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaBrain, FaServer } from "react-icons/fa";
import { useTranslations, useLocale } from "next-intl";

const Services = () => {
    const t = useTranslations("Services");
    const locale = useLocale();
    const isRtl = locale === 'ar';

    const services = [
        {
            title: t('items.fullstack.title'),
            description: t('items.fullstack.desc'),
            icon: <FaCode />,
        },
        {
            title: t('items.realtime.title'),
            description: t('items.realtime.desc'),
            icon: <FaRocket />,
        },
        {
            title: t('items.ai.title'),
            description: t('items.ai.desc'),
            icon: <FaBrain />,
        },
        {
            title: t('items.backend.title'),
            description: t('items.backend.desc'),
            icon: <FaServer />,
        }
    ];

    return (
        <section id="services" className="font-cairo py-12 md:py-24 bg-[var(--background)] overflow-hidden">
            <div className="container mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase"
                    >
                        {isRtl ? (
                            <> {t('title_my')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">{t('title_special')}</span> </>
                        ) : (
                            <> {t('title_my')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">{t('title_special')}</span> </>
                        )}
                    </motion.h2>
                    <p className="text-[var(--paragraph)] max-w-2xl mx-auto opacity-70 text-base md:text-lg">
                        {t('description')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`relative group p-8 bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/30 ${isRtl ? 'text-right' : 'text-left'}`}
                        >
                            {/* Decorative Background Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl" />

                            <div className="relative z-10">
                                <div className={`text-4xl text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-500 flex ${isRtl ? 'justify-start' : 'justify-start'}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[var(--text)] uppercase tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--paragraph)] text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;