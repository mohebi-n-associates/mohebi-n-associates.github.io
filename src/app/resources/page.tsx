'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { QrCode, ArrowRight, Database, Code2, FileText, BookOpen } from 'lucide-react';

const resources = [
    {
        title: 'QR Code Generator',
        description: 'Generate QR codes for URLs, text, Wi-Fi credentials, contact information, and more. Useful for conference posters and presentations.',
        href: '/resources/qr-generator',
        icon: QrCode,
        color: 'blue',
    },
];

const externalResources = [
    {
        title: 'GitHub Repositories',
        description: 'Open-source analysis code, behavioral task implementations, and computational models from our published work.',
        href: 'https://github.com/mohebi-lab',
        icon: Code2,
        color: 'purple',
        external: true,
    },
    {
        title: 'Published Datasets',
        description: 'Neural recording datasets and behavioral data shared with the broader neuroscience community.',
        href: '/publications',
        icon: Database,
        color: 'cyan',
    },
    {
        title: 'Course Materials',
        description: 'Lecture notes, reading lists, and assignments from courses taught by lab members.',
        href: '/courses',
        icon: BookOpen,
        color: 'emerald',
    },
];

const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500/10 text-blue-400',
    purple: 'bg-purple-500/10 text-purple-400',
    cyan: 'bg-cyan-500/10 text-cyan-400',
    emerald: 'bg-emerald-500/10 text-emerald-400',
};

export default function ResourcesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 gradient-mesh" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">Tools & Data</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Resources
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Tools, datasets, code, and materials from our lab for the research community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tools */}
            <section className="py-12">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6">Lab Tools</h2>
                    <div className="grid gap-4 mb-16">
                        {resources.map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <motion.div
                                    key={resource.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={resource.href}
                                        className="glass p-6 rounded-2xl border border-slate-800/50 hover:border-blue-500/30 transition-all group block"
                                    >
                                        <div className="flex items-start gap-5">
                                            <div className={`p-3 rounded-xl ${colorClasses[resource.color]}`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                    {resource.title}
                                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </h3>
                                                <p className="text-slate-400 text-sm leading-relaxed">{resource.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    <h2 className="text-sm uppercase tracking-widest text-slate-500 mb-6">Academic Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {externalResources.map((resource, index) => {
                            const Icon = resource.icon;
                            return (
                                <motion.div
                                    key={resource.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={resource.href}
                                        target={resource.external ? '_blank' : undefined}
                                        className="glass p-6 rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-all group block h-full"
                                    >
                                        <div className={`p-2.5 rounded-lg ${colorClasses[resource.color]} inline-block mb-4`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                            {resource.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{resource.description}</p>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
