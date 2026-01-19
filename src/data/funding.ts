export interface Agency {
    id: string;
    name: string;
    url?: string;
    logo?: string;
    description?: string;
}

export const fundingAgencies: Agency[] = [
    {
        id: 'nih',
        name: 'National Institutes of Health (NIH)',
        url: 'https://www.nih.gov',
        description: 'Grant R01...',
    },
    {
        id: 'bbrf',
        name: 'Brain & Behavior Research Foundation',
        url: 'https://www.bbrfoundation.org',
        description: 'NARSAD Young Investigator Grant',
    },
    {
        id: 'uw',
        name: 'University of Wisconsin-Madison',
        url: 'https://www.wisc.edu',
        description: 'Startup Funds',
    },
];
