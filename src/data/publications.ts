export interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    doi?: string;
    pdf?: string; // path to PDF
}

export const publications: Publication[] = [
    // Example entry - Replace with real data from legacy site
    {
        id: 'mohebi-2019-nature',
        title: 'Dissociable dopamine somatic and axon signals independently convey reward-prediction error and motivation',
        authors: ['Mohebi A', 'Pettibone JR', 'Hamid AA', 'Wong JM', 'Vinson LT', 'Patriarchi T', 'Tian L', 'Kennedy RT', 'Berke JD'],
        journal: 'Nature',
        year: 2019,
        doi: '10.1038/s41586-019-1233-0',
    },
    {
        id: 'mohebi-2023-review',
        title: 'The role of neuromodulators in decision making under uncertainty',
        authors: ['Mohebi A', 'Berke JD'],
        journal: 'Annual Review of Neuroscience',
        year: 2023,
    }
];
