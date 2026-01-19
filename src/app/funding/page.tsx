'use client';

import { motion } from 'framer-motion';
import { ExternalLink, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import { fundingAgencies } from '@/data/funding';

export default function FundingPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Funding & Support
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Our research is made possible by the generous support of:
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {fundingAgencies.map((agency, index) => (
                    <motion.div
                        key={agency.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-white mb-6 flex items-center justify-center p-4">
                            {/* Replace with actual logo logic if available */}
                            <HeartHandshake className="w-12 h-12 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 mb-2">{agency.name}</h3>
                        {agency.description && <p className="text-slate-400 mb-6">{agency.description}</p>}

                        {agency.url && (
                            <Link href={agency.url} target="_blank" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                                Visit Website <ExternalLink className="w-4 h-4" />
                            </Link>
                        )}
                    </motion.div>
                ))}
            </div>

            <div className="glass p-8 rounded-2xl bg-blue-900/10 border border-blue-500/20 text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-100 mb-4">Support Our Research</h3>
                <p className="text-slate-300 mb-6">
                    If you are interested in supporting our mission to understand the brain mechanisms of learning and decision making, please contact us.
                </p>
                <Link href="/contact" className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">
                    Contact Us
                </Link>
            </div>
        </div>
    );
}
