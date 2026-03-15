export interface ResearchArea {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    keyQuestions: string[];
    approaches: string[];
}

export const researchAreas: ResearchArea[] = [
    {
        id: 'decision-making',
        title: 'Decision Making',
        description: 'Investigating the neural computations underlying how we make choices in uncertain environments.',
        longDescription: 'Our lab studies how the brain evaluates options, weighs evidence, and commits to actions under uncertainty. We combine behavioral paradigms with large-scale neural recordings to understand how value representations emerge across cortical and subcortical circuits during decision-making. By tracking neural activity across multiple brain regions simultaneously, we aim to reveal how distributed circuits coordinate to produce adaptive choices.',
        icon: 'BrainCircuit',
        keyQuestions: [
            'How does the brain represent and compare values of different options?',
            'What neural mechanisms underlie the speed-accuracy tradeoff in decisions?',
            'How do neuromodulators shape the decision process in real time?',
        ],
        approaches: ['Multi-region Neuropixels recordings', 'Behavioral modeling', 'Optogenetic circuit manipulation'],
    },
    {
        id: 'neuromodulation',
        title: 'Neuromodulation',
        description: 'Understanding how dopamine and other neuromodulators shape neural activity and behavior.',
        longDescription: 'Neuromodulators like dopamine play critical roles in learning, motivation, and cognitive flexibility. Our lab investigates how rapid dopamine dynamics in the striatum and prefrontal cortex modulate local circuit computations, and how disruptions in these signals contribute to neuropsychiatric conditions. We use fiber photometry and calcium imaging to measure neuromodulator dynamics at subsecond timescales during complex behaviors.',
        icon: 'Activity',
        keyQuestions: [
            'What information do rapid dopamine fluctuations encode beyond reward prediction errors?',
            'How do dopamine signals differ across brain regions and behavioral contexts?',
            'What is the relationship between tonic and phasic dopamine signaling?',
        ],
        approaches: ['Fiber photometry', 'Calcium imaging of dopamine neurons', 'Pharmacological manipulation'],
    },
    {
        id: 'learning',
        title: 'Reinforcement Learning',
        description: 'Studying how the brain learns from reward and punishment to optimize future actions.',
        longDescription: 'We develop and test computational models of reinforcement learning to understand how the brain updates predictions, learns action values, and adapts behavior based on reward history. By comparing model predictions with neural data recorded during learning, we reveal the algorithms implemented by biological circuits and identify where they diverge from classical theoretical frameworks.',
        icon: 'Target',
        keyQuestions: [
            'How does the brain compute and update reward prediction errors?',
            'What neural substrates implement different components of RL algorithms?',
            'How do model-based and model-free learning strategies interact in the brain?',
        ],
        approaches: ['Computational modeling', 'Neural data analysis', 'Neuropixels recordings during learning'],
    },
];
