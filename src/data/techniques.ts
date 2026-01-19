export interface Technique {
    id: string;
    title: string;
    description: string;
    icon: string; // Lucide icon name
    image?: string; // Path to image in public folder
    color: 'blue' | 'purple' | 'cyan';
}

export const techniques: Technique[] = [
    {
        id: 'electrophysiology',
        title: 'In Vivo Electrophysiology',
        description: 'We perform large-scale extracellular recordings using high-density silicon probes (Neuropixels) to monitor the activity of hundreds of neurons simultaneously in behaving animals. This allows us to track neural dynamics across multiple brain regions with millisecond precision.',
        icon: 'Activity',
        color: 'blue',
        // image: '/images/techniques/ephys.jpg' // Example of how to add an image
    },
    {
        id: 'imaging',
        title: 'Calcium Imaging',
        description: 'We use 1-photon and 2-photon calcium imaging to visualize the activity of genetically defined neuronal populations. By expressing fluorescent calcium indicators (GCaMP), we can track the activity of specific cell types during complex behaviors.',
        icon: 'Microscope',
        color: 'purple',
        // image: '/images/techniques/imaging.jpg'
    },
    {
        id: 'modeling',
        title: 'Computational Modeling',
        description: 'We develop reinforcement learning agents and neural network models to generate testable hypotheses about neural computation. We compare model behavior and internal representations with experimental data to understand the algorithms implemented by the brain.',
        icon: 'Cpu',
        color: 'cyan',
        // image: '/images/techniques/modeling.jpg'
    }
];
