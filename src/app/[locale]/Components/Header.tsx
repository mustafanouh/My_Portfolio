"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Settings } from 'lucide-react';
import { LuHouse, LuBriefcase, LuLayoutDashboard, LuUser, LuMail } from "react-icons/lu";
import { useTranslations } from 'next-intl';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('navigation');

   
    const menuRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { name: 'Home', href: '/', icon: <LuHouse /> },
        { name: 'Services', href: '#services', icon: <LuBriefcase /> },
        { name: 'Projects', href: '#projects', icon: <LuLayoutDashboard /> },
        { name: 'About', href: '#about', icon: <LuUser /> },
        { name: 'Contact', href: '#contact', icon: <LuMail /> },
    ];

    // 2. منطق إغلاق القائمة عند الضغط في الخارج
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // إذا كانت القائمة مفتوحة والضغطة تمت خارج عنصر الـ menuRef
            if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // إضافة المستمع عند فتح القائمة
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // تنظيف المستمع عند إغلاق القائمة أو إلغاء تحميل المكون
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        // 3. ربط الـ ref بالـ nav الرئيسي
        <nav
            ref={menuRef}
            style={{ backgroundColor: 'oklch(from var(--background) l c h / 0.95)' }}
            className="bg-background border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">

                    <div className="font-cairo flex-shrink-0 text-2xl font-bold text-foreground">
                        Mustafa <span className="text-[var(--accent)]">Nouh</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex space-x-6 ">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="mx-4 text-foreground/70 hover:text-brand-accent font-bold transition-colors duration-200 "
                                >
                                    {t(link.name)}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 border-l border-gray-300 dark:border-gray-700 pl-6">
                            <Link
                                href="/settings"
                                className="bg-primary text-white p-2 rounded-full hover:bg-secondary hover:shadow-[0_0_15px_var(--accent)] transition-all duration-300"
                            >
                                <Settings className="w-5 h-5 hover:rotate-90 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground focus:outline-none"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-6 bg-background animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-foreground/80 border-b pb-1 border-[var(--accent)] hover:text-primary flex items-center gap-2 font-bold text-lg px-2"
                                >
                                    <span className='text-[var(--accent)]'> {link.icon}</span>   {t(link.name)}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-800">
                                <Link
                                    href="/settings"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-primary-foreground flex justify-center items-center py-3 rounded-xl active:bg-accent transition-colors"
                                >
                                    <Settings className="w-5 h-5 mx-1  text-[var(--accent)] "/>
                                    <span className='font-bold' >{t('Settings')}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;