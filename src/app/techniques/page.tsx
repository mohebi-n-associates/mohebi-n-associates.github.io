'use client';

import { motion } from 'framer-motion';
import { Microscope, Activity, Cpu } from 'lucide-react';

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
                {/* Electrophysiology */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                            <Activity className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-100 mb-4">In Vivo Electrophysiology</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            We perform large-scale extracellular recordings using high-density silicon probes (Neuropixels) to monitor the activity of hundreds of neurons simultaneously in behaving animals. This allows us to track neural dynamics across multiple brain regions with millisecond precision.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-slate-700/50">
                            <div className="absolute inset-0 bg-blue-500/5" />
                            <div className="flex items-center justify-center h-full text-slate-600">
                                Image: E-phys Setup
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Imaging */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row-reverse gap-12 items-center"
                >
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                            <Microscope className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-100 mb-4">Calcium Imaging</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            We use 1-photon and 2-photon calcium imaging to visualize the activity of genetically defined neuronal populations. By expressing fluorescent calcium indicators (GCaMP), we can track the activity of specific cell types during complex behaviors.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-slate-700/50">
                            <div className="absolute inset-0 bg-purple-500/5" />
                            <div className="flex items-center justify-center h-full text-slate-600">
                                Image: 2P Imaging
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Computational Models */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1">
                        <div className="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                            <Cpu className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-100 mb-4">Computational Modeling</h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            We develop reinforcement learning agents and neural network models to generate testable hypotheses about neural computation. We compare model behavior and internal representations with experimental data to understand the algorithms implemented by the brain.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-slate-700/50">
                            <div className="absolute inset-0 bg-cyan-500/5" />
                            <div className="flex items-center justify-center h-full text-slate-600">
                                Image: Model Diagram
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
