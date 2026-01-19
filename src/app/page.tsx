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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background - Calcium Imaging */}
        <div className="absolute inset-0 -z-10 bg-slate-950">
          <div className="absolute inset-0 bg-slate-950/60 z-10" /> {/* Dark Overlay */}
          {/* Calcium Imaging Background */}
          <img
            src="/images/calcium-background.png"
            alt="Calcium Imaging Background"
            className="w-full h-full object-cover opacity-60 animate-pulse-slow"
          />
        </div>

        {/* Lab Logo Badge - Top Right Corner */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-8 right-8 z-30 glass p-3 rounded-2xl border border-white/10 backdrop-blur-md"
        >
          <img
            src="/images/logo.png"
            alt="Mohebi & Associates Lab Logo"
            className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg"
          />
        </motion.div>

        <div className="container mx-auto px-6 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-100 drop-shadow-2xl">
              Decoding the Neural Dynamics <br /> of Decision Making
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg">
              We investigate how neuromodulatory signals interact with local circuit computations to drive learning and behavior.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/research" className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-lg shadow-blue-900/20">
                Explore Research
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/publications" className="px-8 py-4 rounded-full glass bg-white/10 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-md border border-white/20">
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

      {/* Meet the Team Preview */}
      <section className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-3xl border border-slate-700/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 z-0" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-left max-w-xl">
              <h2 className="text-3xl font-bold text-slate-100 mb-6">Meet the Team</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Our lab is a diverse group of researchers passionate about understanding the brain.
                We are a collaborative team of postdocs, graduate students, and undergraduates.
              </p>
              <Link href="/people" className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-300 transition-colors group">
                View All Members <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual stack of team member placeholders */}
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-slate-800 bg-slate-700 flex items-center justify-center text-xs text-slate-500">
                  Img
                </div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-slate-800 bg-blue-600 flex items-center justify-center text-sm font-bold text-white">
                +5
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
