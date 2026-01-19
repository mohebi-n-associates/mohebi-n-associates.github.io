'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Activity, Target, LucideIcon } from 'lucide-react';
import { researchAreas } from '@/data/research';

const iconMap: Record<string, LucideIcon> = {
  BrainCircuit,
  Activity,
  Target,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-purple-400">
              Decoding the Neural Dynamics <br /> of Decision Making
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              We investigate how neuromodulatory signals interaction with local circuit computations to drive learning and behavior.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/research" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 group">
                Explore Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/publications" className="px-8 py-4 rounded-full glass text-slate-200 font-semibold hover:bg-white/10 transition-all">
                Latest Publications
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Highlights - Carousel/Grid */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Research Areas</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => {
            const Icon = iconMap[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover p-8 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-blue-500" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-3">{area.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{area.description}</p>
                  <Link href={`/research#${area.id}`} className="text-blue-400 font-medium flex items-center gap-1 group/link hover:text-blue-300">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lab News / Updates Preview could go here */}
    </div>
  );
}
