'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, User, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { people, Person } from '@/data/people';

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
    >
        <h2 className="text-xl font-bold text-slate-200 shrink-0">{children}</h2>
        <div className="h-px bg-slate-800 flex-grow" />
    </motion.div>
);

const PersonCard = ({ person }: { person: Person }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all group h-full flex flex-col overflow-hidden"
    >
        <div className="w-full h-64 bg-slate-900 shrink-0 relative overflow-hidden">
            {person.image ? (
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-700">
                    <User className="w-20 h-20" />
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold text-white mb-1">{person.name}</h3>
            <p className="text-blue-400 text-sm font-medium mb-3">{person.role}</p>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">{person.bio}</p>
            <div className="flex gap-3 pt-3 border-t border-slate-800/50">
                {person.email && (
                    <Link href={`mailto:${person.email}`} className="text-slate-600 hover:text-blue-400 transition-colors">
                        <Mail className="w-4 h-4" />
                    </Link>
                )}
                {person.twitter && (
                    <Link href={person.twitter} target="_blank" className="text-slate-600 hover:text-blue-400 transition-colors">
                        <Twitter className="w-4 h-4" />
                    </Link>
                )}
                {person.github && (
                    <Link href={person.github} target="_blank" className="text-slate-600 hover:text-blue-400 transition-colors">
                        <Github className="w-4 h-4" />
                    </Link>
                )}
                {person.website && (
                    <Link href={person.website} target="_blank" className="text-slate-600 hover:text-blue-400 transition-colors">
                        <Globe className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    </motion.div>
);

export default function PeoplePage() {
    const pi = people.filter(p => p.group === 'principal_investigator');
    const currentMembers = people.filter(p => ['research_scientist', 'postdoc', 'grad_student', 'undergrad', 'lab_manager'].includes(p.group));
    const alumni = people.filter(p => p.group === 'alumni');
    const collaborators = people.filter(p => p.group === 'collaborator');

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
                        <p className="text-sm uppercase tracking-widest text-emerald-400 mb-4">Our Team</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            People
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Meet the researchers decoding the brain.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-6">
                    {/* Principal Investigator */}
                    {pi.length > 0 && (
                        <div className="mb-24">
                            {pi.map(person => (
                                <motion.div
                                    key={person.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="glass rounded-2xl border border-blue-500/10 max-w-5xl mx-auto overflow-hidden"
                                >
                                    <div className="flex flex-col md:flex-row">
                                        <div className="w-full md:w-80 h-80 bg-slate-900 shrink-0 relative">
                                            {person.image ? (
                                                <Image
                                                    src={person.image}
                                                    alt={person.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="320px"
                                                    priority
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-700">
                                                    <User className="w-24 h-24" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8 md:p-10 flex flex-col justify-center">
                                            <h2 className="text-3xl font-bold text-white mb-2">{person.name}</h2>
                                            <p className="text-blue-400 text-lg font-medium mb-4">{person.role}</p>
                                            <p className="text-slate-400 leading-relaxed mb-6">{person.bio}</p>
                                            <div className="flex gap-4">
                                                {person.email && (
                                                    <Link href={`mailto:${person.email}`} className="text-slate-500 hover:text-blue-400 transition-colors">
                                                        <Mail className="w-5 h-5" />
                                                    </Link>
                                                )}
                                                {person.twitter && (
                                                    <Link href={person.twitter} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                                                        <Twitter className="w-5 h-5" />
                                                    </Link>
                                                )}
                                                {person.github && (
                                                    <Link href={person.github} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                                                        <Github className="w-5 h-5" />
                                                    </Link>
                                                )}
                                                {person.website && (
                                                    <Link href={person.website} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                                                        <Globe className="w-5 h-5" />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Current Members */}
                    {currentMembers.length > 0 && (
                        <div className="mb-24">
                            <SectionHeading>Current Members</SectionHeading>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {currentMembers.map(person => <PersonCard key={person.id} person={person} />)}
                            </div>
                        </div>
                    )}

                    {/* Collaborators */}
                    {collaborators.length > 0 && (
                        <div className="mb-24">
                            <SectionHeading>Collaborators</SectionHeading>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {collaborators.map(person => <PersonCard key={person.id} person={person} />)}
                            </div>
                        </div>
                    )}

                    {/* Alumni */}
                    {alumni.length > 0 && (
                        <div className="mb-12">
                            <SectionHeading>Alumni</SectionHeading>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {alumni.map(person => (
                                    <motion.div
                                        key={person.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="glass rounded-xl border border-slate-800/50 hover:border-slate-700/50 transition-all overflow-hidden"
                                    >
                                        <div className="w-full h-44 bg-slate-900 relative">
                                            {person.image ? (
                                                <Image
                                                    src={person.image}
                                                    alt={person.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-700">
                                                    <User className="w-12 h-12" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h4 className="font-semibold text-white text-sm">{person.name}</h4>
                                            <p className="text-xs text-slate-500">{person.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
