"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Settings } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{ backgroundColor: 'oklch(from var(--background) l c h / 0.95)' }}
            className="bg-background  border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">

                    
                    <div className="font-cairo flex-shrink-0 text-2xl font-bold text-foreground">
                        Mustafa <span className="text-primary">Nouh</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    // الاعتماد على الشفافية (70%) للفقرات/الروابط كما طلبت
                                    className="text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
                                >
                                    {link.name}
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
                                    className="text-foreground/80 hover:text-primary  font-bold  text-lg px-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col space-y-4 border-t border-gray-200 dark:border-gray-800">
                                <Link
                                    href="/settings"
                                    onClick={() => setIsOpen(false)}
                                    className="bg-primary text-primary-foreground flex justify-center items-center py-3 rounded-xl active:bg-accent transition-colors"
                                >
                                    <Settings className="w-5 h-5 mr-2" />
                                    <span>Settings</span>
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