"use client";
import { useRef, useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimationFrame,
   
} from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiLaravel,
    SiJavascript, SiPhp, SiMysql, SiFirebase
} from "react-icons/si";

const skills = [
    { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
    { name: "Laravel", icon: <SiLaravel />, color: "text-[#FF2D20]" },
    { name: "JavaScript", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
    { name: "PHP", icon: <SiPhp />, color: "text-[#777BB4]" },
    { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-[#FFCA28]" },
];

const SkillsMarquee = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrolledX = useMotionValue(0);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setContentWidth(containerRef.current.scrollWidth / 2);
        }
    }, []);

    const SPEED = 40; 

    useAnimationFrame((_, delta) => {
        if (contentWidth === 0) return;

        let moveBy = (SPEED * delta) / 1000;
        let newValue = scrolledX.get() - moveBy;

        if (newValue <= -contentWidth) {
            newValue = 0;
        }

        scrolledX.set(newValue);
    });

    return (
        <section className="relative w-full overflow-hidden bg-[var(--background)] py-4">
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

            <motion.div
                ref={containerRef}
                style={{ x: scrolledX }}
                className="flex whitespace-nowrap will-change-transform"
            >
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-6 items-center px-3">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 px-8 py-5 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-md"
                            >
                                <span className={`text-3xl md:text-4xl ${skill.color}`}>
                                    {skill.icon}
                                </span>
                                <span className="text-[var(--primary)] font-black text-lg md:text-xl tracking-tighter uppercase">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillsMarquee;