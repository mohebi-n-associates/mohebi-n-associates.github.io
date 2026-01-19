'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JoinPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                        Join the Lab
                    </h1>
                    <p className="text-xl text-slate-400">
                        We are always looking for motivated students and researchers to join our team.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* Postdocs */}
                    <div className="glass p-8 rounded-2xl border border-slate-700/50">
                        <h2 className="text-2xl font-bold text-slate-100 mb-4">Postdoctoral Fellows</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Prospective postdocs should email Ali directly with a CV, a brief statement of research interests, and contact information for 2-3 references. We are looking for individuals with a strong background in systems neuroscience, computational modeling, or related fields.
                        </p>
                        <Link href="mailto:mohebial@wisc.edu" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            <Mail className="w-5 h-5" /> Email Application
                        </Link>
                    </div>

                    {/* Graduate Students */}
                    <div className="glass p-8 rounded-2xl border border-slate-700/50">
                        <h2 className="text-2xl font-bold text-slate-100 mb-4">Graduate Students</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Prospective graduate students can apply through the <a href="https://psych.wisc.edu/" className="text-blue-400 hover:underline">Department of Psychology</a> or the <a href="https://ntp.neuroscience.wisc.edu/" className="text-blue-400 hover:underline">Neuroscience Training Program (NTP)</a> at UW-Madison. Students interested in rotating in the lab are encouraged to contact Ali.
                        </p>
                        <Link href="https://psych.wisc.edu/graduate-program/" target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            Apply to Program <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Undergrads */}
                    <div className="glass p-8 rounded-2xl border border-slate-700/50">
                        <h2 className="text-2xl font-bold text-slate-100 mb-4">Undergraduate Students</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            We welcome motivated undergraduate students who are interested in gaining research experience. Please email us with your CV, unofficial transcript, and a brief description of why you want to join the lab.
                        </p>
                        <Link href="mailto:mohebial@wisc.edu" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors">
                            <Mail className="w-5 h-5" /> Inquire About Openings
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
