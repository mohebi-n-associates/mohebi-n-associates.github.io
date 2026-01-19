export interface Publication {
    id: string;
    title: string;
    authors: string[];
    journal: string;
    year: number;
    doi?: string;
    url?: string; // Link to paper
    pdf?: string; // path to PDF
    highlight?: boolean; // Show in selected publications
}

export const googleScholarUrl = "https://scholar.google.com/citations?user=cPpBQ8kAAAAJ&hl=en&oi=ao";

export const publications: Publication[] = [
    {
        id: 'pub1',
        title: "Dissociable dopamine dynamics for learning and motivation",
        authors: ["Mohebi A", "Pettibone JR", "Hamid AA", "Wong JM", "Vinson LT", "Patriarchi T", "Tian L", "Kennedy RT", "Berke JD"],
        journal: "Nature",
        year: 2019,
        doi: "10.1038/s41586-019-1235-y",
        highlight: true,
        url: "https://www.nature.com/articles/s41586-019-1235-y"
    },
    {
        id: 'pub2',
        title: "Mesolimbic dopamine conveys both adaptive and invigoration signals",
        authors: ["Hamid AA*", "Pettibone JR*", "Mabrouk OS", "Hetrick V", "Schmidt R", "Vander Weele CM", "Kennedy RT", "Aragona BJ", "Berke JD"],
        journal: "Nature Neuroscience",
        year: 2016,
        doi: "10.1038/nn.4195",
        highlight: true,
    },
    {
        id: 'pub3',
        title: "Rapid changes in forebrain dopamine during reinforcement learning",
        authors: ["Mohebi A", "Berke JD"],
        journal: "Current Opinion in Behavioral Sciences",
        year: 2018,
        doi: "10.1016/j.cobeha.2018.01.009",
    }
];
