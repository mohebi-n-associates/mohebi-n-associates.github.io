'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { QrCode, ArrowRight } from 'lucide-react';

const resources = [
    {
        title: 'QR Code Generator',
        description: 'Generate QR codes for URLs, text, Wi-Fi credentials, contact information, and more.',
        href: '/resources/qr-generator',
        icon: QrCode,
    },
];

export default function ResourcesPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                        Resources
                    </h1>
                    <p className="text-xl text-slate-400">
                        Useful tools and resources for the lab and community.
                    </p>
                </div>

                <div className="grid gap-6">
                    {resources.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <motion.div
                                key={resource.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={resource.href}
                                    className="glass p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group block"
                                >
                                    <div className="flex items-start gap-6">
                                        <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                            <Icon className="w-8 h-8 text-blue-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                                {resource.title}
                                                <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </h2>
                                            <p className="text-slate-400 leading-relaxed">
                                                {resource.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
