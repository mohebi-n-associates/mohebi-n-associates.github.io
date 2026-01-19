export interface Person {
    id: string;
    name: string;
    role: string;
    bio: string; // Short bio
    image: string; // Path to image in public
    email?: string;
    twitter?: string;
    scholar?: string;
    github?: string;
    alumni?: boolean;
}

export const people: Person[] = [
    {
        id: 'ali-mohebi',
        name: 'Ali Mohebi',
        role: 'Principal Investigator',
        bio: 'Assistant Professor of Psychology. Investigating the neural basis of motivation and decision making.',
        image: '/images/people/ali-mohebi.jpg', // Placeholder, needs actual migration
        email: 'mohebial@wisc.edu',
        twitter: 'https://twitter.com/mohebial',
        github: 'https://github.com/mohebi-lab'
    },
    // Add more team members here
];
