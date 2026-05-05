"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [lang, setLang] = useState(["ar","en"]);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="h-10 w-full animate-pulse bg-gray-200 rounded-lg" />;

    return (
        <div className="flex flex-col gap-3">
            <div>
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    مظهر التطبيق (Appearance)
                </label>

                <div className="grid grid-cols-3 gap-2 p-1 bg-gray-100 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700">
                    {[
                        { id: 'light', label: 'فاتح', icon: '☀️' },
                        { id: 'dark', label: 'داكن', icon: '🌙' },
                        { id: 'system', label: 'تلقائي', icon: '💻' }
                    ].map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setTheme(mode.id)}
                            className={`flex flex-col items-center gap-1 py-2 rounded-lg transition-all ${theme === mode.id
                                ? "bg-white dark:bg-slate-700 shadow-sm text-blue-600 dark:text-blue-400"
                                : "text-gray-500 hover:bg-gray-200 dark:hover:bg-slate-700"
                                }`}
                        >
                            <span className="text-xl">{mode.icon}</span>
                            <span className="text-xs font-medium">{mode.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label >Language</label>
                <select>
                    <option disabled>Defaulte</option>
                    <option value={"ar"}>العربية </option>
                    <option value={"en"}> English</option>
                </select>
            </div>


        </div>
    );
}