'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Activity, Target, LucideIcon, Lightbulb, FlaskConical } from 'lucide-react';
import Link from 'next/link';
import { researchAreas } from '@/data/research';

const iconMap: Record<string, LucideIcon> = {
    BrainCircuit,
    Activity,
    Target,
};

export default function ResearchPage() {
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
                        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">Research</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Research Areas
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Our lab combines behavioral tasks, large-scale electrophysiology, calcium imaging, and computational modeling to understand the neural mechanisms of learning and decision making.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="space-y-32">
                        {researchAreas.map((area, index) => {
                            const Icon = iconMap[area.icon];
                            return (
                                <motion.div
                                    key={area.id}
                                    id={area.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className="scroll-mt-24"
                                >
                                    <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-start`}>
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                                                    <Icon className="w-7 h-7" />
                                                </div>
                                                <div className="h-px flex-1 bg-gradient-to-r from-slate-700 to-transparent" />
                                            </div>

                                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{area.title}</h2>
                                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                                {area.longDescription}
                                            </p>

                                            {/* Key Questions */}
                                            <div className="mb-8">
                                                <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-blue-400 mb-4">
                                                    <Lightbulb className="w-4 h-4" />
                                                    Key Questions
                                                </h3>
                                                <ul className="space-y-3">
                                                    {area.keyQuestions.map((q, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-slate-400">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                                                            <span className="leading-relaxed">{q}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Approaches */}
                                            <div>
                                                <h3 className="flex items-center gap-2 text-sm uppercase tracking-widest text-purple-400 mb-4">
                                                    <FlaskConical className="w-4 h-4" />
                                                    Approaches
                                                </h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {area.approaches.map((approach, i) => (
                                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/50 text-sm text-slate-300">
                                                            {approach}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Visual */}
                                        <div className="flex-1 w-full">
                                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-slate-700/30">
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
                                                <div className="absolute inset-0 grid-pattern" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Icon className="w-24 h-24 text-slate-800" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    {index < researchAreas.length - 1 && (
                                        <div className="divider-gradient mt-24" />
                                    )}
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
                        <h3 className="text-2xl font-bold text-white mb-4">Interested in our research?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Explore our publications for detailed findings, or learn about opportunities to join our team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/publications" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                                View Publications
                            </Link>
                            <Link href="/join" className="px-6 py-3 rounded-full bg-white/5 text-slate-300 font-semibold hover:bg-white/10 transition-colors border border-slate-700/50">
                                Join the Lab
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
