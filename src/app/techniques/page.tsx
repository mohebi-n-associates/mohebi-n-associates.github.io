'use client';

import { motion } from 'framer-motion';
import { Microscope, Activity, Cpu, LucideIcon } from 'lucide-react';
import { techniques } from '@/data/techniques';

const iconMap: Record<string, LucideIcon> = {
    Microscope,
    Activity,
    Cpu,
};

const colorMap = {
    blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'bg-blue-500/5' },
    purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'bg-purple-500/5' },
    cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'bg-cyan-500/5' },
};

export default function TechniquesPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Techniques
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    We employ a multi-disciplinary approach to dissect neural circuits.
                </p>
            </motion.div>

            <div className="space-y-24">
                {techniques.map((tech, index) => {
                    const Icon = iconMap[tech.icon];
                    const colors = colorMap[tech.color];

                    return (
                        <motion.div
                            key={tech.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
                        >
                            <div className="flex-1">
                                <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6 ${colors.text}`}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-100 mb-4">{tech.title}</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-slate-700/50">
                                    <div className={`absolute inset-0 ${colors.border}`} />
                                    {tech.image ? (
                                        <img
                                            src={tech.image}
                                            alt={tech.title}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-600">
                                            <span>Image: {tech.title}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
