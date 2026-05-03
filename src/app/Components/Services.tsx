"use client";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaBrain, FaDatabase, FaServer } from "react-icons/fa";

const services = [
    {
        title: "Full-Stack Development",
        description: "Building scalable web applications using Laravel, React, and Next.js with a focus on performance.",
        icon: <FaCode />,
       
    },
    {
        title: "Real-time Solutions",
        description: "Implementing live features like instant messaging and real-time notifications using WebSockets.",
        icon: <FaRocket />,
    
    },
    {
        title: "AI & RAG Systems",
        description: "Integrating LLMs and RAG technology to create intelligent agents and automated workflows.",
        icon: <FaBrain />,
      
    },
    {
        title: "Backend Architecture",
        description: "Designing robust database schemas and secure APIs to handle complex business logic.",
        icon: <FaServer />,
    
    }
];

const Services = () => {
    return (
        <section id="services" className="font-cairo py-12 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Specialties</span>
                    </motion.h2>
                    <p className="text-[var(--paragraph)] max-w-2xl mx-auto opacity-70">
                        Transforming complex requirements into seamless digital experiences through modern technology.
                    </p>
                </div>
             

                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="relative group p-8 bg-white/5 border bg-slate-50   border-white/10 rounded-[2rem] overflow-hidden"
                        >
                            {/* تأثير الخلفية عند الـ Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br bg-slate-50 opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="text-4xl  text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform duration-500">
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