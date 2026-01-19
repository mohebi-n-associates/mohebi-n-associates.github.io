'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Twitter, User } from 'lucide-react';
import Link from 'next/link';
// import Image from 'next/image';
import { people } from '@/data/people';

export default function PeoplePage() {
    const currentMembers = people.filter(p => !p.alumni);
    const alumni = people.filter(p => p.alumni);

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

            {/* Current Members Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                {currentMembers.map((person, index) => (
                    <motion.div
                        key={person.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all group"
                    >
                        <div className="aspect-square rounded-xl overflow-hidden bg-slate-800 mb-6 relative">
                            {/* Replace with next/image when real images are available */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-900">
                                <User className="w-20 h-20" />
                            </div>
                            {/* 
               <Image 
                 src={person.image} 
                 alt={person.name}
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-500"
               />
               */}
                        </div>

                        <h3 className="text-xl font-bold text-slate-100 mb-1">{person.name}</h3>
                        <p className="text-blue-400 font-medium mb-4">{person.role}</p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            {person.bio}
                        </p>

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
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Alumni Section (if any) */}
            {alumni.length > 0 && (
                <div className="border-t border-slate-800 pt-16">
                    <h2 className="text-2xl font-bold text-slate-200 mb-8 text-center">Alumni</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {alumni.map(person => (
                            <div key={person.id} className="glass p-4 rounded-xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
                                    <User className="w-6 h-6 text-slate-500" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-200">{person.name}</h4>
                                    <p className="text-sm text-slate-500">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
