'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, GraduationCap, Microscope, BookOpen } from 'lucide-react';
import Link from 'next/link';

const positions = [
    {
        title: 'Postdoctoral Fellows',
        icon: Microscope,
        color: 'blue',
        description: 'We are looking for postdoctoral researchers with a strong background in systems neuroscience, computational modeling, or related fields. Experience with in vivo electrophysiology, calcium imaging, or behavioral modeling is preferred.',
        instructions: 'Prospective postdocs should email Ali directly with a CV, a brief statement of research interests, and contact information for 2-3 references.',
        action: { label: 'Email Application', href: 'mailto:amohebi@wisc.edu', icon: Mail },
    },
    {
        title: 'Graduate Students',
        icon: GraduationCap,
        color: 'purple',
        description: 'We welcome rotation students and prospective graduate students interested in neural circuits, neuromodulation, and computational approaches to neuroscience. Students can apply through the Department of Psychology or the Neuroscience Training Program (NTP) at UW-Madison.',
        instructions: 'Students interested in rotating in the lab are encouraged to reach out to Ali directly.',
        action: { label: 'Apply to Program', href: 'https://psych.wisc.edu/graduate-program/', icon: ArrowRight, external: true },
    },
    {
        title: 'Undergraduate Students',
        icon: BookOpen,
        color: 'cyan',
        description: 'We welcome motivated undergraduate students who are interested in gaining hands-on research experience. Research opportunities include assisting with behavioral experiments, data analysis, and computational modeling.',
        instructions: 'Please email us with your CV, unofficial transcript, and a brief description of why you want to join the lab.',
        action: { label: 'Inquire About Openings', href: 'mailto:amohebi@wisc.edu', icon: Mail },
    },
];

const colorClasses: Record<string, { bg: string; border: string; icon: string }> = {
    blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: 'text-blue-400' },
    purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: 'text-purple-400' },
    cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', icon: 'text-cyan-400' },
};

export default function JoinPage() {
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
                        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">Opportunities</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Join the Lab
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            We are always looking for motivated students and researchers to join our team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Positions */}
            <section className="py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-8">
                        {positions.map((pos, index) => {
                            const colors = colorClasses[pos.color];
                            return (
                                <motion.div
                                    key={pos.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`glass p-8 md:p-10 rounded-2xl border ${colors.border}`}
                                >
                                    <div className="flex items-start gap-5">
                                        <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center shrink-0 ${colors.icon}`}>
                                            <pos.icon className="w-7 h-7" />
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-white mb-3">{pos.title}</h2>
                                            <p className="text-slate-400 leading-relaxed mb-4">{pos.description}</p>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-6">{pos.instructions}</p>
                                            <Link
                                                href={pos.action.href}
                                                target={('external' in pos.action && pos.action.external) ? '_blank' : undefined}
                                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
                                            >
                                                <pos.action.icon className="w-4 h-4" />
                                                {pos.action.label}
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Environment */}
            <section className="py-24 border-t border-slate-800/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-2xl border border-slate-700/30 text-center"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Our Lab Environment</h3>
                        <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-6">
                            We are committed to fostering an inclusive, collaborative, and supportive research environment. Our lab values scientific rigor, intellectual curiosity, open communication, and work-life balance.
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
