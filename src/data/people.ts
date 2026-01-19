export type PersonGroup = 'principal_investigator' | 'postdoc' | 'grad_student' | 'undergrad' | 'pre_grad' | 'alumni' | 'collaborator' | 'research_scientist';

export interface Person {
    id: string;
    name: string;
    role: string; // Display role e.g. "PhD Student"
    group: PersonGroup;
    bio: string;
    image?: string;
    email?: string;
    twitter?: string;
    scholar?: string;
    github?: string;
    website?: string;
}

export const people: Person[] = [
    {
        id: 'ali-mohebi',
        name: 'Ali Mohebi',
        role: 'Principal Investigator',
        group: 'principal_investigator',
        bio: 'Assistant Professor of Psychology. Investigating the neural basis of motivation and decision making.',
        image: '/images/people/ali.jpg',
        email: 'amohebi@wisc.edu',
        twitter: 'https://twitter.com/mohebial',
        github: 'https://github.com/mohebial'
    },
    {
        id: 'rob-spencer',
        name: 'Robert Spencer',
        role: 'Research Scientist',
        group: 'research_scientist',
        bio: 'Studying the role of dopamine in reward processing.',
        image: '/images/people/rob_spencer.jpg',
        email: 'rob.spencer@wisc.edu'
    },
    {
        id: 'jane-collaborator',
        name: 'Jane Smith',
        role: 'Professor, UCSF',
        group: 'collaborator',
        bio: 'Collaborator on dopamine dynamics project.',
        website: 'https://example.com'
    },
    {
        id: 'john-doe',
        name: 'John Doe',
        role: 'Former Lab Manager',
        group: 'alumni',
        bio: 'Currently a PhD student at MIT.',
    }
];
