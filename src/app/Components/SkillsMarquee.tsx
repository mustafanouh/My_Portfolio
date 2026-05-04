"use client";
import { useRef, useState } from "react";
import {
    motion,
    useMotionValue,
    useAnimationFrame,
    useTransform
} from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiLaravel,
    SiJavascript, SiPhp, SiMysql, SiFirebase
} from "react-icons/si";

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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

// ✅ إصلاح 1: استخدام ITEMS_COUNT للتحكم في نقطة الـ wrap
const ITEMS_COUNT = 6; // عدد مرات التكرار — رفعناه من 4 إلى 6

const SkillsMarquee = () => {
    // ✅ إصلاح 2: إضافة حالة isPaused لإيقاف الحركة عند hover
    const [isPaused, setIsPaused] = useState(false);
    const baseX = useMotionValue(0);
    const directionFactor = useRef(1);

    // ✅ إصلاح 3: توحيد السرعة — حذف الضرب بـ 30 المتناقض
    const SPEED = 5; // بكسل/ثانية — قيمة واضحة وقابلة للتعديل

    useAnimationFrame((_, delta) => {
        if (isPaused) return; // ✅ توقف عند hover

        // ✅ delta بالمللي ثانية → نقسم على 1000 للحصول على الثانية
        const moveBy = directionFactor.current * SPEED * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    // ✅ إصلاح 4: حدود wrap تعتمد على نسبة التكرار
    // كل مجموعة = 100/ITEMS_COUNT% من الإجمالي
    const x = useTransform(baseX, (v) => {
        const singleGroupWidth = 100 / ITEMS_COUNT;
        return `${wrap(-singleGroupWidth * 2, 0, -(v % (100)))}%`;
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX } = e;
        const { innerWidth } = window;
        directionFactor.current = clientX > innerWidth / 2 ? 1 : -1;
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full  bg-[var(--background)]
                       overflow-hidden  border-white/5 cursor-ew-resize"
        >
            <div className="absolute inset-y-0 left-0 w-24 md:w-40
                            bg-gradient-to-r from-[var(--background)]
                            to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-40
                            bg-gradient-to-l from-[var(--background)]
                            to-transparent z-20 pointer-events-none" />

            <motion.div
                style={{ x }}
                className="flex gap-8 items-center whitespace-nowrap
                            will-change-transform"
            >
                {/* ✅ إصلاح 6: استخدام ITEMS_COUNT بدل الرقم الثابت 4 */}
                {[...Array(ITEMS_COUNT)].map((_, i) => (
                    <div key={i} className="flex gap-8 items-center">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 px-8 py-5
                                           bg-white/5 border border-white/10
                                           rounded-[2rem] backdrop-blur-md group
                                           hover:border-[var(--primary)]/40
                                           transition-all duration-500"
                            >
                                <span className={`text-3xl md:text-4xl ${skill.color}
                                    group-hover:scale-110 transition-transform`}>
                                    {skill.icon}
                                </span>
                                <span className="text-[var(--text)] font-black text-lg
                                                md:text-xl tracking-tighter uppercase">
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
