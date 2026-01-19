import { getPublications } from '@/lib/bibtex';
import { googleScholarUrl } from '@/data/publications';
import PublicationsClient from '@/components/PublicationsClient';

export default function PublicationsPage() {
    const publications = getPublications();

    return (
        <PublicationsClient
            publications={publications}
            googleScholarUrl={googleScholarUrl}
        />
    );
}
