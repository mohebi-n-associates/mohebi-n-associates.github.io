export interface ResearchArea {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name or image path
}

export const researchAreas: ResearchArea[] = [
    {
        id: 'decision-making',
        title: 'Decision Making',
        description: 'Investigating the neural computations underlying how we make choices in uncertain environments.',
        icon: 'BrainCircuit',
    },
    {
        id: 'neuromodulation',
        title: 'Neuromodulation',
        description: 'Understanding how dopamine and other neuromodulators shape neural activity and behavior.',
        icon: 'Activity',
    },
    {
        id: 'learning',
        title: 'Reinforcement Learning',
        description: 'Studying how the brain learns from reward and punishment to optimize future actions.',
        icon: 'Target',
    },
];
