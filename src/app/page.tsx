'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    ArrowRight, BrainCircuit, Activity, Target, Microscope, Cpu,
    BookOpen, Users, GraduationCap, FlaskConical, ChevronRight,
    LucideIcon, Quote
} from 'lucide-react';
import { researchAreas } from '@/data/research';
import { techniques } from '@/data/techniques';
import { newsItems, categoryColors, categoryLabels } from '@/data/news';
import { people } from '@/data/people';
import scholarStats from '@/data/scholar-stats.json';

const iconMap: Record<string, LucideIcon> = {
    BrainCircuit, Activity, Target, Microscope, Cpu,
};

const fadeInUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5 },
});

export default function Home() {
    const currentMembers = people.filter(p =>
        ['principal_investigator', 'research_scientist', 'postdoc', 'grad_student', 'undergrad'].includes(p.group)
    );
    const recentNews = newsItems.slice(0, 3);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[#0a0f1a]" />
                    <Image
                        src="/images/calcium-background.png"
                        alt=""
                        fill
                        className="object-cover opacity-30 animate-pulse-slow"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/70 via-transparent to-[#0a0f1a]" />
                    <div className="absolute inset-0 gradient-mesh" />
                </div>

                <div className="container mx-auto px-6 text-center z-20 py-20">
                    <div className="max-w-5xl mx-auto">
                        <motion.div {...fadeInUp(0)} className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-900/60 backdrop-blur-sm text-sm text-slate-300">
                            <FlaskConical className="w-4 h-4 text-blue-400" />
                            <span>Cognitive Neuroscience Lab</span>
                            <span className="text-slate-600">|</span>
                            <span className="text-slate-400">UW-Madison</span>
                        </motion.div>

                        <motion.div {...fadeInUp(0.1)} className="mb-6 flex justify-center">
                            <Image
                                src="/images/logo.png"
                                alt="Mohebi Lab"
                                width={80}
                                height={80}
                                className="drop-shadow-2xl"
                            />
                        </motion.div>

                        <motion.h1 {...fadeInUp(0.2)} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            <span className="text-slate-100">Decoding the Neural</span>
                            <br />
                            <span className="text-gradient">Dynamics of Decision Making</span>
                        </motion.h1>

                        <motion.p {...fadeInUp(0.3)} className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            We investigate how neuromodulatory signals interact with local circuit computations
                            to drive learning and adaptive behavior.
                        </motion.p>

                        <motion.div {...fadeInUp(0.4)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/research" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-lg shadow-blue-900/30">
                                Explore Our Research
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/publications" className="px-8 py-3.5 rounded-full bg-white/5 text-slate-200 font-semibold hover:bg-white/10 transition-all border border-slate-700/50 hover:border-slate-600">
                                View Publications
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-1 h-1.5 rounded-full bg-slate-400"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Impact Stats Bar */}
            <section className="relative border-y border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Total Citations', value: scholarStats.citations, icon: BookOpen },
                            { label: 'h-index', value: scholarStats.hIndex, icon: Target },
                            { label: 'Team Members', value: String(currentMembers.length), icon: Users },
                            { label: 'Research Areas', value: String(researchAreas.length), icon: BrainCircuit },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <stat.icon className="w-4 h-4 text-blue-400/60" />
                                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{stat.value}</span>
                                </div>
                                <span className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NLDM Course Banner */}
            <section className="py-12">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://mohebi-n-associates.github.io/NLDM"
                            className="glass p-8 md:p-10 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all group block relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                                <div className="p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                    <BookOpen className="w-8 h-8 text-blue-400" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        NLDM: Neurobiology of Learning and Decision-Making
                                    </h2>
                                    <p className="text-slate-400 leading-relaxed">
                                        Explore our graduate course covering neural mechanisms of learning, reward processing, and computational models of decision-making.
                                    </p>
                                </div>
                                <ArrowRight className="w-6 h-6 text-blue-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </div>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Research Areas */}
            <section className="py-24 relative">
                <div className="absolute inset-0 grid-pattern opacity-50" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm uppercase tracking-widest text-blue-400 mb-3">What We Study</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research Areas</h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {researchAreas.map((area, index) => {
                            const Icon = iconMap[area.icon];
                            return (
                                <motion.div
                                    key={area.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/research#${area.id}`}
                                        className="glass glass-hover p-8 rounded-2xl relative overflow-hidden group block h-full"
                                    >
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                                            <Icon className="w-32 h-32 text-blue-400" />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                                            <p className="text-slate-400 leading-relaxed text-sm mb-4">{area.description}</p>
                                            <span className="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Learn more <ChevronRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Techniques Overview */}
            <section className="py-24 border-t border-slate-800/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">Our Approach</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Techniques & Methods</h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {techniques.map((tech, index) => {
                            const Icon = iconMap[tech.icon];
                            const colorClasses: Record<string, string> = {
                                blue: 'text-blue-400 bg-blue-500/10',
                                purple: 'text-purple-400 bg-purple-500/10',
                                cyan: 'text-cyan-400 bg-cyan-500/10',
                            };
                            return (
                                <motion.div
                                    key={tech.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/techniques#${tech.id}`}
                                        className="glass glass-hover p-8 rounded-2xl group block h-full"
                                    >
                                        <div className={`w-12 h-12 rounded-xl ${colorClasses[tech.color]} flex items-center justify-center mb-6`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-3">{tech.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm line-clamp-3">{tech.description}</p>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/techniques" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                            View all techniques <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Publication */}
            <section className="py-24 border-t border-slate-800/30 relative">
                <div className="absolute inset-0 gradient-mesh" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm uppercase tracking-widest text-cyan-400 mb-3">Latest Work</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Publications</h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 md:p-10 rounded-2xl border border-blue-500/10 hover:border-blue-500/20 transition-colors"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/10 shrink-0 hidden md:block">
                                    <Quote className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 text-xs font-medium mb-3">
                                        Nature 2019
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                                        Dissociable dopamine dynamics for learning and motivation
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-4">
                                        Mohebi A, Pettibone JR, Hamid AA, Wong JM, Vinson LT, Patriarchi T, Tian L, Kennedy RT, Berke JD
                                    </p>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        This landmark study demonstrated that dopamine signals in the nucleus accumbens and dorsal striatum carry fundamentally different information during learning, challenging the unified view of dopamine as a reward prediction error signal.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="text-center mt-10">
                        <Link href="/publications" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-slate-700/50 text-sm text-slate-300 hover:bg-white/10 hover:border-slate-600 transition-all group">
                            View all publications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Preview */}
            <section className="py-24 border-t border-slate-800/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm uppercase tracking-widest text-emerald-400 mb-3">Our People</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet the Team</h2>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 md:p-14 rounded-3xl border border-slate-700/30 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                            <div className="flex flex-wrap justify-center gap-4 lg:gap-3">
                                {currentMembers.map((member) => (
                                    <div key={member.id} className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-slate-700/50 bg-slate-800 relative shrink-0">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                                sizes="80px"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-600">
                                                <Users className="w-6 h-6" />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="text-center lg:text-left flex-1">
                                <p className="text-lg text-slate-300 mb-3 leading-relaxed">
                                    Our lab is a collaborative team of researchers passionate about understanding the brain. We combine expertise in electrophysiology, imaging, and computational modeling.
                                </p>
                                <p className="text-slate-500 mb-6 text-sm">
                                    Led by Ali Mohebi, Assistant Professor in the Department of Psychology at UW-Madison.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                    <Link href="/people" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-slate-700/50 text-sm text-slate-300 hover:bg-white/10 hover:border-slate-600 transition-all group">
                                        <Users className="w-4 h-4" />
                                        Meet the team <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link href="/join" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-sm text-blue-300 hover:bg-blue-600/20 transition-all group">
                                        <GraduationCap className="w-4 h-4" />
                                        Join us <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Latest News */}
            <section className="py-24 border-t border-slate-800/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-end justify-between mb-12"
                    >
                        <div>
                            <p className="text-sm uppercase tracking-widest text-amber-400 mb-3">Stay Updated</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Latest News</h2>
                        </div>
                        <Link href="/news" className="hidden md:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                            All news <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {recentNews.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-6 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-colors group"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[item.category]}`}>
                                        {categoryLabels[item.category]}
                                    </span>
                                    <span className="text-xs text-slate-600">{item.date}</span>
                                </div>
                                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:hidden">
                        <Link href="/news" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group">
                            All news <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="py-24 border-t border-slate-800/30 relative">
                <div className="absolute inset-0 gradient-mesh" />
                <div className="container mx-auto px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <GraduationCap className="w-10 h-10 text-blue-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Lab</h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            We are always looking for curious and motivated researchers at all levels - from undergraduates to postdoctoral fellows - who are passionate about understanding the brain.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/join" className="px-8 py-3.5 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-900/30">
                                Open Positions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/courses" className="px-8 py-3.5 rounded-full bg-white/5 text-slate-200 font-semibold hover:bg-white/10 transition-all border border-slate-700/50 hover:border-slate-600 flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4" /> View Courses
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
