'use client';

import { motion } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { publications } from '@/data/publications';

export default function PublicationsPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Publications
                </h1>
                <p className="text-xl text-slate-400 text-center mb-16">
                    Selected publications from our lab.
                </p>

                <div className="space-y-6">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={pub.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-slate-800 text-slate-400 mt-1">
                                    <FileText className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-100 mb-1">{pub.title}</h3>
                                    <p className="text-slate-400 mb-2">{pub.authors.join(', ')}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                        <span className="text-blue-400 font-medium">{pub.journal}</span>
                                        <span className="text-slate-500">{pub.year}</span>
                                        {pub.doi && (
                                            <Link
                                                href={`https://doi.org/${pub.doi}`}
                                                target="_blank"
                                                className="flex items-center gap-1 text-slate-500 hover:text-white transition-colors"
                                            >
                                                <ExternalLink className="w-3 h-3" />
                                                DOI
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
