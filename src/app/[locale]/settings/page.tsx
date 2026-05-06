"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { HiSun, HiMoon, HiDesktopComputer } from "react-icons/hi";
import { HiCheck } from "react-icons/hi2";
import { MdLanguage, MdPalette } from "react-icons/md";

const themes = [
    { id: "light", icon: HiSun, labelKey: "light" },
    { id: "dark", icon: HiMoon, labelKey: "dark" },
    { id: "system", icon: HiDesktopComputer, labelKey: "system" },
];

const languages = [
    { value: "ar", label: "العربية", sub: "Arabic", flag: "🇸🇦" },
    { value: "en", label: "English", sub: "الإنجليزية", flag: "🇬🇧" },
];

export default function SettingsComponent() {
    const t = useTranslations("Settings");
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentLocale = pathname.split("/")[1];

    const handleLanguageChange = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale;
        router.push(segments.join("/"));
    };

    if (!mounted) {
        return (
            <div className="h-64 w-full animate-pulse bg-[var(--background)] rounded-3xl" />
        );
    }

    return (
        <div className="flex flex-col  bg-transparent max-w-md mx-auto">

            {/* ── قسم المظهر ── */}
            <section className="relative p-6 bg-[var(--background)]    shadow-xl shadow-gray-200/20 dark:shadow-black/40">
                <p className="flex items-center gap-2 text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-5 px-1">
                    <MdPalette className="text-sm" />
                    {t("appearance_title")}
                </p>

                <div className="grid grid-cols-3 gap-3 p-1.5 bg-gray-50 dark:bg-black/20 rounded-2xl border border-gray-100 dark:border-white/5">
                    {themes.map(({ id, icon: Icon, labelKey }) => {
                        const active = theme === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setTheme(id)}
                                className={`group relative flex flex-col items-center gap-2 py-4 rounded-xl text-[11px] font-bold transition-all duration-300 ${active
                                        ? "bg-white dark:bg-brand-primary text-brand-primary dark:text-white shadow-md scale-[1.02]"
                                        : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-white/50 dark:hover:bg-white/5"
                                    }`}
                            >
                                <Icon className={`text-xl transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
                                <span className="uppercase">{t(labelKey)}</span>
                                {active && (
                                    <span className="absolute -bottom-1 w-1 h-1 bg-brand-primary dark:bg-white rounded-full" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ── قسم اللغة ── */}
            <section className="relative p-6 bg-[var(--background)]  shadow-xl shadow-gray-200/20 dark:shadow-black/40">
                <p className="flex items-center gap-2 text-[10px] font-black text-brand-accent uppercase tracking-[0.2em] mb-5 px-1">
                    <MdLanguage className="text-sm" />
                    {t("language_title")}
                </p>

                <div className="flex flex-col gap-3">
                    {languages.map(({ value, label, sub, flag }) => {
                        const active = currentLocale === value;
                        return (
                            <button
                                key={value}
                                onClick={() => handleLanguageChange(value)}
                                className={`group flex items-center justify-between px-5 py-4 rounded-[1.25rem] border-2 transition-all duration-300 ${active
                                        ? "border-brand-primary/20 bg-brand-primary/[0.03] dark:bg-brand-primary/10"
                                        : "border-transparent bg-gray-50 dark:bg-black/20 hover:border-gray-200 dark:hover:border-white/10"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl bg-white dark:bg-dark-surface shadow-sm border border-gray-100 dark:border-white/5 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-105'}`}>
                                        {flag}
                                    </div>
                                    <div className={currentLocale === 'ar' ? 'text-right' : 'text-left'}>
                                        <p className={`text-sm font-bold ${active ? "text-brand-primary dark:text-brand-accent" : "text-gray-700 dark:text-gray-300"}`}>
                                            {label}
                                        </p>
                                        <p className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">{sub}</p>
                                    </div>
                                </div>

                                <div className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${active
                                        ? "bg-brand-primary border-brand-primary dark:bg-brand-accent dark:border-brand-accent scale-100"
                                        : "border-gray-200 dark:border-white/10 scale-90 opacity-50"
                                    }`}>
                                    <HiCheck className={`text-white dark:text-brand-secondary text-sm ${active ? "opacity-100" : "opacity-0"}`} />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}