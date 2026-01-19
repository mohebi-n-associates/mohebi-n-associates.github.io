'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, BarChart3, Star, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { BibEntry } from '@/lib/bibtex';
import scholarStats from '@/data/scholar-stats.json';

interface PublicationsClientProps {
    publications: BibEntry[];
    featuredPublications: BibEntry[];
    googleScholarUrl: string;
}

export default function PublicationsClient({ publications, featuredPublications, googleScholarUrl }: PublicationsClientProps) {
    const selectedPubs = featuredPublications; // Use explicit list from file
    const allPubs = publications; // Full list includes everything as requested

    // Find max citations for graph scaling
    const maxCitations = Math.max(...scholarStats.graphData.map(d => d.citations), 1);

    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Publications
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Our research output and academic contributions.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content: Publications Lists */}
                <div className="lg:col-span-2 space-y-24">
                    {/* Featured Publications (Bolder Box) */}
                    {selectedPubs.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Star className="w-6 h-6 text-blue-400 fill-blue-400" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-100">Featured Research</h2>
                            </div>

                            <div className="grid grid-cols-1 gap-8">
                                {selectedPubs.map((pub, index) => (
                                    <motion.div
                                        key={`${pub.citationKey}-featured-${index}`}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-blue-500/20 translate-x-2 translate-y-2 rounded-xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                                        <div className="relative bg-slate-900 border-2 border-slate-700 hover:border-blue-500 p-8 rounded-xl transition-colors duration-300">
                                            <div className="flex flex-col md:flex-row gap-6 md:items-start">
                                                {/* Bold Icon Box */}
                                                <div className="hidden md:flex w-20 h-20 shrink-0 rounded-lg bg-slate-800 items-center justify-center border-2 border-slate-700 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                                                    <BookOpen className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-colors" />
                                                </div>

                                                <div className="flex-grow">
                                                    <h3 className="text-2xl font-bold text-slate-50 mb-3 group-hover:text-blue-400 transition-colors">
                                                        {pub.entryTags.url ? (
                                                            <Link href={pub.entryTags.url} target="_blank">
                                                                {pub.entryTags.title}
                                                            </Link>
                                                        ) : (
                                                            pub.entryTags.title
                                                        )}
                                                    </h3>
                                                    <p className="text-slate-300 text-lg mb-4 font-medium">
                                                        {pub.entryTags.author}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                                                        <span className="px-3 py-1 rounded bg-blue-600 text-white shadow-lg shadow-blue-900/50">
                                                            {pub.entryTags.journal}
                                                        </span>
                                                        <span className="text-slate-400">{pub.entryTags.year}</span>
                                                        {pub.entryTags.doi && (
                                                            <Link href={`https://doi.org/${pub.entryTags.doi}`} target="_blank" className="text-slate-400 hover:text-white flex items-center gap-1 group/link">
                                                                DOI <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                                                            </Link>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* List View from BibTeX */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
                            <FileText className="w-6 h-6 text-slate-400" />
                            <h2 className="text-2xl font-bold text-slate-200">Full Publication List</h2>
                        </div>

                        <div className="space-y-8">
                            {allPubs.map((pub, index) => (
                                <motion.div
                                    key={`${pub.citationKey}-${index}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group pl-6 border-l-2 border-slate-800 hover:border-blue-500 transition-colors relative"
                                >
                                    <span className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors" />

                                    <h4 className="text-lg font-bold text-slate-200 mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                                        {pub.entryTags.url ? (
                                            <Link href={pub.entryTags.url} target="_blank">
                                                {pub.entryTags.title}
                                            </Link>
                                        ) : (
                                            pub.entryTags.title
                                        )}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-2">{pub.entryTags.author}</p>
                                    <div className="flex flex-wrap items-center gap-x-3 text-sm text-slate-500">
                                        <span className="font-medium text-slate-300">{pub.entryTags.journal}</span>
                                        <span>•</span>
                                        <span>{pub.entryTags.year}</span>
                                        {pub.entryTags.volume && <span>• Vol {pub.entryTags.volume}</span>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-8">
                        {/* Stats */}
                        <div className="p-6 rounded-2xl border border-blue-500/20 bg-slate-900/80 shadow-xl backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-100">Citation Metrics</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-4 rounded-xl bg-slate-950 border border-slate-800">
                                    <div className="text-3xl font-bold text-white mb-1">{scholarStats.citations}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Citations</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-slate-950 border border-slate-800">
                                    <div className="text-3xl font-bold text-white mb-1">{scholarStats.hIndex}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">h-index</div>
                                </div>
                            </div>

                            <Link
                                href={googleScholarUrl}
                                target="_blank"
                                className="block w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center transition-colors shadow-lg shadow-blue-900/20"
                            >
                                View on Google Scholar
                            </Link>
                        </div>

                        {/* Graph */}
                        <div className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/80 shadow-xl backdrop-blur-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-4 h-4 text-slate-400" />
                                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Citation History</h4>
                            </div>

                            <div className="flex items-stretch gap-2 h-40 pt-4 pb-2 px-2">
                                {scholarStats.graphData.map((d) => {
                                    const heightPercent = maxCitations > 0 ? (d.citations / maxCitations) * 100 : 0;
                                    return (
                                        <div key={d.year} className="flex-1 flex flex-col justify-end items-center group relative">
                                            <div
                                                className="w-full bg-slate-700 rounded-t-sm group-hover:bg-blue-500 transition-colors relative"
                                                style={{ height: `${heightPercent}%` }}
                                            >
                                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-600 z-10">
                                                    {d.citations}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-1">
                                <span>{scholarStats.graphData[0]?.year}</span>
                                <span>{scholarStats.graphData[scholarStats.graphData.length - 1]?.year}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
