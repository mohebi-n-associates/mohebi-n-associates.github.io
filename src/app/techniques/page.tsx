'use client';

import { motion } from 'framer-motion';
import { Microscope, Activity, Cpu, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { techniques } from '@/data/techniques';

const iconMap: Record<string, LucideIcon> = {
    Microscope,
    Activity,
    Cpu,
};

const colorMap = {
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', accent: 'from-blue-500/10', border: 'border-blue-500/20' },
    purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', accent: 'from-purple-500/10', border: 'border-purple-500/20' },
    cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', accent: 'from-cyan-500/10', border: 'border-cyan-500/20' },
};

export default function TechniquesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 gradient-mesh" />
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">Methods</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Techniques
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We employ a multi-disciplinary approach combining cutting-edge recording technologies with sophisticated computational analysis to dissect neural circuits.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Techniques */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="space-y-24">
                        {techniques.map((tech, index) => {
                            const Icon = iconMap[tech.icon];
                            const colors = colorMap[tech.color];

                            return (
                                <motion.div
                                    key={tech.id}
                                    id={tech.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="scroll-mt-24"
                                >
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                                        <div className="flex-1">
                                            <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.text}`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-white mb-4">{tech.title}</h2>
                                            <p className="text-lg text-slate-300 leading-relaxed">
                                                {tech.description}
                                            </p>
                                        </div>
                                        <div className="flex-1 w-full">
                                            <div className={`relative aspect-video rounded-2xl overflow-hidden glass border ${colors.border}`}>
                                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} to-transparent`} />
                                                <div className="absolute inset-0 grid-pattern" />
                                                {tech.image ? (
                                                    <img
                                                        src={tech.image}
                                                        alt={tech.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Icon className="w-20 h-20 text-slate-800" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-slate-800/30">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Want to learn these techniques?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            We welcome motivated researchers who want to develop expertise in these cutting-edge approaches.
                        </p>
                        <Link href="/join" className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors">
                            Join Our Lab
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
