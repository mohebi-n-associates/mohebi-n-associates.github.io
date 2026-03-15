'use client';

import { motion } from 'framer-motion';
import { ExternalLink, HeartHandshake, Mail } from 'lucide-react';
import Link from 'next/link';
import { fundingAgencies } from '@/data/funding';

export default function FundingPage() {
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
                        <p className="text-sm uppercase tracking-widest text-cyan-400 mb-4">Support</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Funding & Support
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Our research is made possible by the generous support of the following organizations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Agencies */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {fundingAgencies.map((agency, index) => (
                            <motion.div
                                key={agency.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 mx-auto mb-6 flex items-center justify-center">
                                    <HeartHandshake className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{agency.name}</h3>
                                {agency.description && (
                                    <p className="text-slate-400 text-sm mb-4">{agency.description}</p>
                                )}
                                {agency.url && (
                                    <Link
                                        href={agency.url}
                                        target="_blank"
                                        className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-1 transition-colors"
                                    >
                                        Visit <ExternalLink className="w-3 h-3" />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Support CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-2xl border border-blue-500/10 text-center max-w-3xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Support Our Research</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                            If you are interested in supporting our mission to understand the brain mechanisms of learning and decision making, please contact us.
                        </p>
                        <Link href="mailto:amohebi@wisc.edu" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                            <Mail className="w-4 h-4" /> Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
