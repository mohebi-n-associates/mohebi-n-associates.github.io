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
        <div className="h-px bg-slate-700 flex-grow max-w-[50px]" />
        <h2 className="text-2xl font-bold text-slate-200">{children}</h2>
        <div className="h-px bg-slate-700 flex-grow" />
    </motion.div>
);

const PersonCard = ({ person }: { person: Person }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all group h-full flex flex-col overflow-hidden"
    >
        {/* Large image at top */}
        <div className="w-full h-72 bg-slate-800 shrink-0 relative overflow-hidden">
            {person.image ? (
                <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-600">
                    <User className="w-24 h-24" />
                </div>
            )}
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-100 mb-1">{person.name}</h3>
                <p className="text-blue-400 text-sm font-medium">{person.role}</p>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {person.bio}
            </p>

            <div className="flex gap-4 mt-auto pt-4 border-t border-slate-700/50">
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
    </motion.div>
);

export default function PeoplePage() {
    const pi = people.filter(p => p.group === 'principal_investigator');
    const currentMembers = people.filter(p => ['research_scientist', 'postdoc', 'grad_student', 'undergrad', 'lab_manager'].includes(p.group));
    const alumni = people.filter(p => p.group === 'alumni');
    const collaborators = people.filter(p => p.group === 'collaborator');

    return (
        <div className="container mx-auto px-6 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                    Our Team
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    Meet the researchers decoding the brain.
                </p>
            </motion.div>

            {/* Principal Investigator */}
            {pi.length > 0 && (
                <div className="mb-24">
                    {pi.map(person => (
                        <div key={person.id} className="glass rounded-3xl border border-blue-500/20 max-w-5xl mx-auto overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                                {/* Large PI image */}
                                <div className="w-full md:w-96 h-96 bg-slate-800 shrink-0 relative">
                                    {person.image ? (
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 384px"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-600">
                                            <User className="w-32 h-32" />
                                        </div>
                                    )}
                                </div>
                                {/* Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold text-slate-100 mb-2">{person.name}</h2>
                                    <p className="text-blue-400 text-lg font-medium mb-4">{person.role}</p>
                                    <p className="text-slate-300 leading-relaxed mb-6">{person.bio}</p>
                                    <div className="flex gap-4">
                                        {person.email && (
                                            <Link href={`mailto:${person.email}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                                                <Mail className="w-6 h-6" />
                                            </Link>
                                        )}
                                        {person.twitter && (
                                            <Link href={person.twitter} target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors">
                                                <Twitter className="w-6 h-6" />
                                            </Link>
                                        )}
                                        {person.github && (
                                            <Link href={person.github} target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        )}
                                        {person.website && (
                                            <Link href={person.website} target="_blank" className="text-slate-400 hover:text-blue-400 transition-colors">
                                                <Globe className="w-6 h-6" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
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
                <div>
                    <SectionHeading>Alumni</SectionHeading>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {alumni.map(person => (
                            <motion.div
                                key={person.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass rounded-xl border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
                            >
                                <div className="w-full h-48 bg-slate-800 relative">
                                    {person.image ? (
                                        <Image
                                            src={person.image}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-600">
                                            <User className="w-16 h-16" />
                                        </div>
                                    )}
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-slate-200 text-base mb-1">{person.name}</h4>
                                    <p className="text-sm text-slate-500">{person.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
