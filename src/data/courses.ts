export interface Course {
    id: string;
    code: string;
    title: string;
    semester: string;
    description: string;
    level: 'undergraduate' | 'graduate';
    topics: string[];
    links?: { label: string; url: string }[];
}

export const courses: Course[] = [
    {
        id: 'systems-neuro',
        code: 'PSYCH 454',
        title: 'Systems Neuroscience',
        semester: 'Spring 2026',
        description: 'An advanced undergraduate course examining how neural circuits give rise to behavior. Topics span sensory processing, motor control, decision-making, and the role of neuromodulators in shaping brain function. Students engage with primary literature and develop skills in critically evaluating neuroscience research.',
        level: 'undergraduate',
        topics: ['Neural circuits & connectivity', 'Sensory systems', 'Motor control & planning', 'Decision-making under uncertainty', 'Neuromodulation & dopamine', 'Methods in systems neuroscience'],
    },
    {
        id: 'comp-neuro',
        code: 'PSYCH/NTP 735',
        title: 'Computational Approaches to Neuroscience',
        semester: 'Fall 2025',
        description: 'A graduate seminar exploring computational frameworks for understanding neural function. Covers reinforcement learning theory, Bayesian models of perception, neural network models, and quantitative methods for analyzing large-scale neural data. Includes hands-on programming assignments in Python.',
        level: 'graduate',
        topics: ['Reinforcement learning & TD models', 'Bayesian inference in the brain', 'Neural network models', 'Dimensionality reduction for neural data', 'Population coding & decoding', 'Model fitting & comparison'],
    },
    {
        id: 'intro-neuro',
        code: 'PSYCH 302',
        title: 'Introduction to Behavioral Neuroscience',
        semester: 'Fall 2025',
        description: 'An introductory survey of behavioral neuroscience covering the biological basis of behavior. Topics include neuroanatomy, neural communication, sensory and motor systems, motivation, emotion, learning and memory, and neurological disorders.',
        level: 'undergraduate',
        topics: ['Neuroanatomy & neural communication', 'Sensory & motor systems', 'Motivation & reward', 'Learning & memory', 'Emotion & stress', 'Neurological & psychiatric disorders'],
    },
];
