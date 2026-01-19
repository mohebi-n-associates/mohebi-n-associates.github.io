'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, BarChart3, Star } from 'lucide-react';
import Link from 'next/link';
import { publications, googleScholarUrl } from '@/data/publications';
import scholarStats from '@/data/scholar-stats.json';

export default function PublicationsPage() {
    const selectedPubs = publications.filter(p => p.highlight);
    const otherPubs = publications.filter(p => !p.highlight);

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
                <div className="lg:col-span-2 space-y-16">
                    {/* Selected Publications */}
                    {selectedPubs.length > 0 && (
                        <section>
                            <div className="flex items-center gap-2 mb-8">
                                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                <h2 className="text-2xl font-bold text-slate-100">Selected Publications</h2>
                            </div>

                            <div className="space-y-6">
                                {selectedPubs.map((pub, index) => (
                                    <motion.div
                                        key={pub.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="glass p-6 rounded-xl border-l-4 border-blue-500 bg-blue-900/5 hover:bg-blue-900/10 transition-colors"
                                    >
                                        <h3 className="text-xl font-bold text-slate-100 mb-2">
                                            {pub.url ? (
                                                <Link href={pub.url} target="_blank" className="hover:text-blue-400 transition-colors">
                                                    {pub.title}
                                                </Link>
                                            ) : (
                                                pub.title
                                            )}
                                        </h3>
                                        <p className="text-slate-300 mb-2">{pub.authors.join(', ')}</p>
                                        <div className="flex flex-wrap items-center gap-4 text-sm">
                                            <span className="font-semibold text-blue-400">{pub.journal}</span>
                                            <span className="text-slate-500">|</span>
                                            <span className="text-slate-400">{pub.year}</span>
                                            {pub.doi && (
                                                <>
                                                    <span className="text-slate-500">|</span>
                                                    <Link href={`https://doi.org/${pub.doi}`} target="_blank" className="text-slate-400 hover:text-white flex items-center gap-1">
                                                        DOI <ExternalLink className="w-3 h-3" />
                                                    </Link>
                                                </>
                                            )}
                                            {pub.pdf && (
                                                <>
                                                    <span className="text-slate-500">|</span>
                                                    <Link href={pub.pdf} target="_blank" className="text-red-400 hover:text-red-300 flex items-center gap-1">
                                                        PDF <FileText className="w-3 h-3" />
                                                    </Link>
                                                </>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Full List */}
                    <section>
                        <div className="flex items-center gap-2 mb-8">
                            <FileText className="w-6 h-6 text-slate-400" />
                            <h2 className="text-2xl font-bold text-slate-200">Full Publication List</h2>
                        </div>

                        <div className="space-y-6">
                            {otherPubs.map((pub, index) => (
                                <motion.div
                                    key={pub.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="glass p-5 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors"
                                >
                                    <h4 className="text-lg font-semibold text-slate-200 mb-1">
                                        {pub.url ? (
                                            <Link href={pub.url} target="_blank" className="hover:text-blue-400 transition-colors">
                                                {pub.title}
                                            </Link>
                                        ) : (
                                            pub.title
                                        )}
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-2">{pub.authors.join(', ')}</p>
                                    <div className="flex flex-wrap items-center gap-3 text-xs">
                                        <span className="font-medium text-blue-400/80">{pub.journal}</span>
                                        <span className="text-slate-600">●</span>
                                        <span className="text-slate-500">{pub.year}</span>
                                        {pub.doi && (
                                            <Link href={`https://doi.org/${pub.doi}`} target="_blank" className="ml-auto text-slate-500 hover:text-blue-400">
                                                DOI
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar: Google Scholar Stats */}
                <div className="lg:col-span-1">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="sticky top-24 space-y-8"
                    >
                        {/* Stats Summary */}
                        <div className="glass p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                    <BarChart3 className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-100">Citation Metrics</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center p-4 rounded-xl bg-slate-800/50">
                                    <div className="text-3xl font-bold text-white mb-1">{scholarStats.citations}</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider">Citations</div>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-slate-800/50">
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

                        {/* Graph Embed */}
                        {scholarStats.html && (
                            <div className="glass p-6 rounded-2xl border border-slate-700/50 overflow-hidden">
                                <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Citation History</h4>
                                <div className="scholar-graph-container grayscale invert opacity-80 [&_td]:!text-slate-300 [&_a]:!text-blue-400">
                                    <div dangerouslySetInnerHTML={{ __html: scholarStats.html }} />
                                </div>

                                {/* Custom styles to override Google's table styles for dark mode */}
                                <style jsx global>{`
                            .scholar-graph-container table { width: 100% !important; }
                            .scholar-graph-container .gsc_g_t { font-size: 12px; }
                            /* Add more overrides as needed based on the actual HTML structure */
                        `}</style>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
