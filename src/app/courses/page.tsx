'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock, Tag } from 'lucide-react';
import { courses } from '@/data/courses';

const levelColors = {
    undergraduate: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    graduate: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function CoursesPage() {
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
                        <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">Teaching</p>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Courses
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            Courses taught by lab members at the University of Wisconsin-Madison.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Course List */}
            <section className="py-12">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-6">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 md:p-10 rounded-2xl border border-slate-800/50 hover:border-slate-700/50 transition-all"
                            >
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-sm font-mono font-medium">
                                        {course.code}
                                    </span>
                                    <span className={`px-3 py-1 rounded-lg text-xs font-medium border ${levelColors[course.level]}`}>
                                        {course.level === 'graduate' ? 'Graduate' : 'Undergraduate'}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-3">{course.title}</h2>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                                    <Clock className="w-4 h-4" />
                                    <span>{course.semester}</span>
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-6">{course.description}</p>

                                {course.topics.length > 0 && (
                                    <div>
                                        <h3 className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 mb-3">
                                            <Tag className="w-3 h-3" />
                                            Topics Covered
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {course.topics.map((topic, i) => (
                                                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/30 text-xs text-slate-400">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
