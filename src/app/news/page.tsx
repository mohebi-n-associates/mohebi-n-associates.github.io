'use client';

import { motion } from 'framer-motion';
import { newsItems, categoryColors, categoryLabels } from '@/data/news';

export default function NewsPage() {
    const groupedByYear = newsItems.reduce<Record<string, typeof newsItems>>((acc, item) => {
        const year = item.date.split('-')[0];
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
        return acc;
    }, {});

    const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

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
                        <p className="text-sm uppercase tracking-widest text-amber-400 mb-4">Updates</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Lab News
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Latest publications, awards, and events from our lab.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    {years.map((year) => (
                        <div key={year} className="mb-16">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <span className="text-2xl font-bold text-white">{year}</span>
                                <div className="h-px flex-1 bg-slate-800" />
                            </motion.div>

                            <div className="space-y-4 pl-6 border-l-2 border-slate-800">
                                {groupedByYear[year].map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="relative pl-8 pb-8"
                                    >
                                        {/* Timeline dot */}
                                        <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700" />

                                        <div className="glass p-6 rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-colors">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                                                    {categoryLabels[item.category]}
                                                </span>
                                                <span className="text-xs text-slate-600">{item.date}</span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                            {item.link && (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:text-blue-300 mt-3 inline-block transition-colors">
                                                    Read more &rarr;
                                                </a>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
