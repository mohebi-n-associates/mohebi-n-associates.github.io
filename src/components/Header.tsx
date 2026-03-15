'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'Research', href: '/research' },
    { name: 'Techniques', href: '/techniques' },
    { name: 'People', href: '/people' },
    { name: 'Publications', href: '/publications' },
    { name: 'Courses', href: '/courses' },
    { name: 'News', href: '/news' },
    { name: 'Resources', href: '/resources' },
    { name: 'Join Us', href: '/join' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-slate-800/50 py-3'
                    : 'bg-transparent py-5'
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="Mohebi Lab"
                        width={32}
                        height={32}
                        className="group-hover:scale-105 transition-transform"
                    />
                    <span className="text-lg font-bold text-white hidden sm:block">
                        Mohebi Lab
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                                    isActive
                                        ? 'text-white bg-white/5'
                                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-500 rounded-full"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-slate-800/50 p-6 lg:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                <Link
                                    href="/"
                                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                                        pathname === '/' ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    Home
                                </Link>
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                                            pathname === item.href
                                                ? 'text-white bg-white/5'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
