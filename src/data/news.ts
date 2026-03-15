export interface NewsItem {
    id: string;
    date: string;
    title: string;
    description: string;
    category: 'publication' | 'award' | 'talk' | 'lab' | 'media' | 'grant';
    link?: string;
}

export const newsItems: NewsItem[] = [
    {
        id: 'floeder-2025',
        date: '2025-01',
        title: 'New paper published in eLife',
        description: 'Our latest work on dopamine dynamics during probabilistic decision-making is now published in eLife.',
        category: 'publication',
    },
    {
        id: 'mohebi-2024-nn',
        date: '2024-06',
        title: 'Paper published in Nature Neuroscience',
        description: 'New findings on the role of striatal dopamine heterogeneity in reinforcement learning published in Nature Neuroscience.',
        category: 'publication',
    },
    {
        id: 'simpson-2024',
        date: '2024-03',
        title: 'Collaborative work published in Neuron',
        description: 'Our collaborative study on neural circuit mechanisms of reward processing is now available in Neuron.',
        category: 'publication',
    },
    {
        id: 'narsad-grant',
        date: '2023-09',
        title: 'NARSAD Young Investigator Grant awarded',
        description: 'Ali Mohebi receives the NARSAD Young Investigator Grant from the Brain & Behavior Research Foundation to study dopamine circuit dysfunction.',
        category: 'grant',
    },
    {
        id: 'nih-r01',
        date: '2023-06',
        title: 'NIH R01 Grant awarded',
        description: 'The lab receives NIH R01 funding to investigate neuromodulatory mechanisms of adaptive decision-making.',
        category: 'grant',
    },
    {
        id: 'lab-launch',
        date: '2023-01',
        title: 'Mohebi Lab opens at UW-Madison',
        description: 'The lab officially begins operations in the Department of Psychology at the University of Wisconsin-Madison.',
        category: 'lab',
    },
];

export const categoryLabels: Record<NewsItem['category'], string> = {
    publication: 'Publication',
    award: 'Award',
    talk: 'Talk',
    lab: 'Lab News',
    media: 'Media',
    grant: 'Funding',
};

export const categoryColors: Record<NewsItem['category'], string> = {
    publication: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    award: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    talk: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    lab: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    media: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    grant: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};
