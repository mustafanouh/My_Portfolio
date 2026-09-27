"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiLaravel,
    SiJavascript,
    SiPhp,
    SiMysql,
    SiFirebase,
} from "react-icons/si";

const skills = [
    {
        name: "React",
        icon: <SiReact />,
        color: "text-[#61DAFB]",
    },
    {
        name: "Next.js",
        icon: <SiNextdotjs />,
        color: "text-white",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        color: "text-[#06B6D4]",
    },
    {
        name: "Laravel",
        icon: <SiLaravel />,
        color: "text-[#FF2D20]",
    },
    {
        name: "JavaScript",
        icon: <SiJavascript />,
        color: "text-[#F7DF1E]",
    },
    {
        name: "PHP",
        icon: <SiPhp />,
        color: "text-[#777BB4]",
    },
    {
        name: "MySQL",
        icon: <SiMysql />,
        color: "text-[#4479A1]",
    },
    {
        name: "Firebase",
        icon: <SiFirebase />,
        color: "text-[#FFCA28]",
    },
];

const SkillsMarquee = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    const [contentWidth, setContentWidth] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const SPEED = 45;

    useEffect(() => {
        const element = marqueeRef.current;

        if (!element) return;

        const updateWidth = () => {
            setContentWidth(element.scrollWidth / 2);
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(element);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    useAnimationFrame((_, delta) => {
        if (!contentWidth || isHovered) return;

        const distance = (SPEED * delta) / 1000;
        const currentX = x.get();

        const nextX = currentX - distance;

        x.set(nextX <= -contentWidth ? 0 : nextX);
    });

    return (
        <section
            className="
                relative
                w-full
                overflow-hidden
                bg-[var(--background)]
                py-6
            "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Left fade */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-10
                    w-20
                    md:w-36
                    bg-gradient-to-r
                    from-[var(--background)]
                    via-[var(--background)]/80
                    to-transparent
                "
            />

            {/* Right fade */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    right-0
                    z-10
                    w-20
                    md:w-36
                    bg-gradient-to-l
                    from-[var(--background)]
                    via-[var(--background)]/80
                    to-transparent
                "
            />

            <motion.div
                ref={marqueeRef}
                style={{ x }}
                className="
                    flex
                    w-max
                    items-center
                    whitespace-nowrap
                    will-change-transform
                "
            >
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-4
                            px-2
                            md:gap-6
                            md:px-3
                        "
                    >
                        {skills.map((skill) => (
                            <div
                                key={`${copy}-${skill.name}`}
                                className="
                                    group
                                    flex
                                    shrink-0
                                    items-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-5
                                    py-3
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-white/20
                                    hover:bg-white/[0.08]
                                    md:gap-4
                                    md:rounded-[1.5rem]
                                    md:px-7
                                    md:py-4
                                "
                            >
                                <span
                                    className={`
                                        ${skill.color}
                                        text-2xl
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                        md:text-3xl
                                    `}
                                >
                                    {skill.icon}
                                </span>

                                <span
                                    className="
                                        text-sm
                                        font-bold
                                        tracking-tight
                                        text-[var(--primary)]
                                        md:text-base
                                    "
                                >
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