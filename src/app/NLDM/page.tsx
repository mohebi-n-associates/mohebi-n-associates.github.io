'use client';

import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    number: 1,
    title: 'Introduction to Neurobiology of Learning',
    description: 'Overview of the course, fundamental concepts of learning at the neural level, and historical perspectives.',
  },
  {
    number: 2,
    title: 'Synaptic Plasticity and Hebbian Learning',
    description: 'Long-term potentiation (LTP), long-term depression (LTD), and the molecular mechanisms underlying synaptic changes.',
  },
  {
    number: 3,
    title: 'Reinforcement Learning and Dopamine',
    description: 'The role of dopamine in reward prediction errors, temporal difference learning, and the mesolimbic pathway.',
  },
  {
    number: 4,
    title: 'Basal Ganglia and Action Selection',
    description: 'Circuit organization of the basal ganglia, direct and indirect pathways, and their roles in decision-making.',
  },
  {
    number: 5,
    title: 'Prefrontal Cortex and Executive Function',
    description: 'Working memory, cognitive control, and the role of prefrontal cortex in flexible decision-making.',
  },
  {
    number: 6,
    title: 'Neuromodulatory Systems',
    description: 'Dopamine, serotonin, norepinephrine, and acetylcholine — how neuromodulators shape learning and behavior.',
  },
  {
    number: 7,
    title: 'Pavlovian and Instrumental Conditioning',
    description: 'Neural circuits underlying classical and operant conditioning, and their computational models.',
  },
  {
    number: 8,
    title: 'Decision-Making Under Uncertainty',
    description: 'Explore-exploit tradeoffs, probabilistic reasoning, and neural representations of uncertainty.',
  },
  {
    number: 9,
    title: 'Computational Models of Decision-Making',
    description: 'Drift-diffusion models, Bayesian inference, and neural network models of choice behavior.',
  },
  {
    number: 10,
    title: 'Emotion, Motivation, and Learning',
    description: 'How affective states modulate learning rates, memory consolidation, and decision biases.',
  },
];

export default function NLDMPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Graduate Course
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Neurobiology of Learning <br className="hidden md:block" /> and Decision-Making
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            This course explores the neural mechanisms that underlie how organisms learn from
            experience and make decisions. We cover topics ranging from synaptic plasticity
            to computational models of choice behavior.
          </p>
        </div>

        {/* Course Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass p-6 rounded-2xl border border-slate-700/50 text-center"
          >
            <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="text-sm font-medium text-slate-400 mb-1">Schedule</h3>
            <p className="text-slate-100 font-semibold">Spring 2026</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 rounded-2xl border border-slate-700/50 text-center"
          >
            <FileText className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="text-sm font-medium text-slate-400 mb-1">Format</h3>
            <p className="text-slate-100 font-semibold">Lectures &amp; Discussions</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-6 rounded-2xl border border-slate-700/50 text-center"
          >
            <Video className="w-6 h-6 text-blue-400 mx-auto mb-3" />
            <h3 className="text-sm font-medium text-slate-400 mb-1">Materials</h3>
            <p className="text-slate-100 font-semibold">Slides, Readings &amp; Videos</p>
          </motion.div>
        </div>

        {/* Course Modules */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8">Course Modules</h2>
          <div className="space-y-4">
            {modules.map((mod, index) => (
              <motion.div
                key={mod.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {mod.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
                      {mod.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {mod.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recommended Readings */}
        <div className="glass p-8 md:p-12 rounded-3xl border border-slate-700/50 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Recommended Readings</h2>
          <ul className="space-y-4 text-slate-400 leading-relaxed">
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Dayan, P. &amp; Abbott, L.F. — <em className="text-slate-300">Theoretical Neuroscience</em></span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Sutton, R.S. &amp; Barto, A.G. — <em className="text-slate-300">Reinforcement Learning: An Introduction</em></span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Glimcher, P.W. — <em className="text-slate-300">Neuroeconomics: Decision Making and the Brain</em></span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <span>Selected primary research articles (provided per module)</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-400"
        >
          <p>
            For questions about the course, please{' '}
            <Link href="/join" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4">
              contact us
            </Link>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
