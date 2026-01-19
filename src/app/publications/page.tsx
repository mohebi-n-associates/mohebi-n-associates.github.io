import { getPublications, getFeaturedPublications } from '@/lib/bibtex';
import { googleScholarUrl } from '@/data/publications';
import PublicationsClient from '@/components/PublicationsClient';

export default function PublicationsPage() {
    const publications = getPublications();
    const featuredPublications = getFeaturedPublications();

    return (
        <PublicationsClient
            publications={publications}
            featuredPublications={featuredPublications}
            googleScholarUrl={googleScholarUrl}
        />
    );
}
