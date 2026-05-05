"use client";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactItems = [
    {
        label: "EMAIL",
        value: "Mustafa.Nouh.Nouh@gmail.com",
        icon: <FaEnvelope />,
        href: "mailto:Mustafa.Nouh.Nouh@gmail.com",
        color: "#EA4335",
        glow: "rgba(234, 67, 53, 0.25)",
    },
    {
        label: "WHATSAPP",
        value: "+963 985 690 091",
        icon: <FaWhatsapp />,
        href: "https://wa.me/963985690091",
        color: "#25d366",
        glow: "rgba(37,211,102,0.25)",
    },
    {
        label: "GITHUB",
        value: "Mustaf Nouh",
        icon: <FaGithub />,
        href: "https://github.com/mustafanouh",
        color: "#abaeb2",
        glow: "rgba(226,232,240,0.15)",
    },
    {
        label: "LINKEDIN",
        value: "Mustaf Nouh",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/mustafa-nouh-92a93a293?utm_source=share_via&utm_content=profile&utm_medium=member_android    ",
        color: "#0a66c2",
        glow: "rgba(10,102,194,0.25)",
    },
    {
        label: "X",
        value: "@Mustafa_Nouh_sy",
        icon: <FaXTwitter />,
        href: "https://x.com/Mustafa_Nouh_sy",
        color: "#000000",
        glow: "rgba(255,255,255,0.1)",
       
    },
    {
        label: "LOCATION",
        value: "Syria 🇸🇾",
        icon: <FaMapMarkerAlt />,
        href: null,
        color: "#f97316",
        glow: "rgba(249,115,22,0.25)",
    },
];

const ContactCard = ({
    item,
    index,
}: {
    item: (typeof contactItems)[0];
    index: number;
}) => {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative p-6 rounded-[2rem] border border-white/[0.06] bg-gray-50 backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-300"
            style={
                {
                    "--card-glow": item.glow,
                    "--card-color": item.color,
                } as React.CSSProperties
            }
        >
            {/* Glow bg on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                style={{ background: `radial-gradient(circle at 30% 50%, ${item.glow}, transparent 70%)` }}
            />

            {/* Top border glow */}
            <div
                className="absolute top-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
            />

            <div className="relative z-10 flex items-center gap-5">
                {/* Icon */}
                <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                        boxShadow: `0 0 20px ${item.glow}`,
                    }}
                >
                    {item.icon}
                </div>

                {/* Text */}
                <div className="min-w-0">
                    <p className="text-xs font-bold tracking-[0.2em] opacity-40 mb-1">
                        {item.label}
                    </p>
                    <p
                        className="font-bold text-base truncate transition-colors duration-300"
                        style={{ color: item.href ? item.color : "var(--paragraph, #e2e8f0)" }}
                    >
                        {item.value}
                    </p>
                </div>

                {/* Arrow */}
                {item.href && (
                    <div
                        className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 text-lg flex-shrink-0"
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
            <a href={item.href} target="_blank" rel="noopener noreferrer">
                {content}
            </a>
        );
    }

    return content;
};

const Contact = () => {
    return (
        <section
            id="Contact"
            className="relative py-24 bg-[var(--background)] overflow-hidden"
        >
            {/* Background glows */}
            <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 -left-20 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    {/* Header */}
                    <div className="mb-16 text-center sm:text-left">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-xs font-bold tracking-[0.4em] text-[var(--primary)] mb-4 opacity-70"
                        >
                            GET IN TOUCH
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-4"
                        >
                            LET'S{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
                                CONNECT
                            </span>
                        </motion.h2>
                        <p className="text-[var(--paragraph)] text-lg max-w-xl opacity-60">
                            Have a project in mind or just want to say hi? Reach out through any of these channels.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {contactItems.map((item, index) => (
                            <ContactCard key={item.label} item={item} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;