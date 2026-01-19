'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, User, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { people, Person } from '@/data/people';

const BASE_PATH = '/website';
const getImagePath = (src: string) => {
    if (src.startsWith('http')) return src;
    return src.startsWith('/') ? `${BASE_PATH}${src}` : src;
};

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
        className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all group h-full flex flex-col"
    >
        <div className="flex items-start gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-800 shrink-0 relative">
                {person.image ? (
                    <Image
                        src={getImagePath(person.image)}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <User className="w-8 h-8" />
                    </div>
                )}
            </div>
            <div>
                <h3 className="text-lg font-bold text-slate-100">{person.name}</h3>
                <p className="text-blue-400 text-sm font-medium">{person.role}</p>
            </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
            {person.bio}
        </p>

        <div className="flex gap-4 mt-auto">
            {person.email && (
                <Link href={`mailto:${person.email}`} className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Mail className="w-4 h-4" />
                </Link>
            )}
            {person.twitter && (
                <Link href={person.twitter} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Twitter className="w-4 h-4" />
                </Link>
            )}
            {person.github && (
                <Link href={person.github} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Github className="w-4 h-4" />
                </Link>
            )}
            {person.website && (
                <Link href={person.website} target="_blank" className="text-slate-500 hover:text-blue-400 transition-colors">
                    <Globe className="w-4 h-4" />
                </Link>
            )}
        </div>
    </motion.div>
);

export default function PeoplePage() {
    const pi = people.filter(p => p.group === 'principal_investigator');
    const currentMembers = people.filter(p => ['postdoc', 'grad_student', 'undergrad', 'pre_grad'].includes(p.group));
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
                        <div key={person.id} className="glass p-8 rounded-3xl border border-blue-500/20 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden bg-slate-800 shrink-0 relative">
                                {person.image ? (
                                    <Image
                                        src={getImagePath(person.image)}
                                        alt={person.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                                        <User className="w-16 h-16" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-slate-100 mb-2">{person.name}</h2>
                                <p className="text-blue-400 text-lg font-medium mb-4">{person.role}</p>
                                <p className="text-slate-300 leading-relaxed mb-6">{person.bio}</p>
                                <div className="flex gap-4">
                                    {person.email && <Link href={`mailto:${person.email}`}><Mail className="text-slate-400 hover:text-white" /></Link>}
                                    {person.twitter && <Link href={person.twitter}><Twitter className="text-slate-400 hover:text-white" /></Link>}
                                    {person.github && <Link href={person.github}><Github className="text-slate-400 hover:text-white" /></Link>}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {alumni.map(person => (
                            <div key={person.id} className="glass p-4 rounded-xl flex items-center gap-4 border border-slate-800">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 overflow-hidden relative">
                                    {person.image ? (
                                        <Image
                                            src={getImagePath(person.image)}
                                            alt={person.name}
                                            fill
                                            className="object-cover"
                                            sizes="40px"
                                        />
                                    ) : (
                                        <User className="w-5 h-5 text-slate-500" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200 text-sm">{person.name}</h4>
                                    <p className="text-xs text-slate-500">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
