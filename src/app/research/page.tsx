'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Activity, Target, LucideIcon } from 'lucide-react';
import { researchAreas } from '@/data/research';

const iconMap: Record<string, LucideIcon> = {
    BrainCircuit,
    Activity,
    Target,
};

export default function ResearchPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Research Areas
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Our lab combines behavioral tasks, large-scale electrophysiology, and optogenetics to understand the neural mechanisms of decision making.
                </p>
            </motion.div>

            <div className="space-y-24">
                {researchAreas.map((area, index) => {
                    const Icon = iconMap[area.icon];
                    return (
                        <motion.div
                            key={area.id}
                            id={area.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                        >
                            <div className="flex-1">
                                <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-100 mb-4">{area.title}</h2>
                                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                                    {area.description}
                                </p>
                                <p className="text-slate-500 leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-slate-700/50 group">
                                    <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors" />
                                    {/* Placeholder for real research image */}
                                    <div className="flex items-center justify-center h-full text-slate-600">
                                        <span className="text-sm">Research Image / Diagram</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
