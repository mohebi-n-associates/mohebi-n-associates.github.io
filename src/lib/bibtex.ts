import fs from 'fs';
import path from 'path';
// @ts-expect-error - no types available
import bibtexParse from '@orcid/bibtex-parse-js';

export interface BibEntry {
    citationKey: string;
    entryType: string;
    entryTags: {
        title: string;
        author: string;
        journal?: string;
        year?: string;
        volume?: string;
        number?: string;
        pages?: string;
        doi?: string;
        url?: string;
        keywords?: string;
        [key: string]: string | undefined;
    };
}

export function getPublications() {
    const bibPath = path.join(process.cwd(), 'src/data/references.bib');
    if (!fs.existsSync(bibPath)) return [];

    try {
        const bibContent = fs.readFileSync(bibPath, 'utf-8');
        const parsed = bibtexParse.toJSON(bibContent) as BibEntry[];

        if (!Array.isArray(parsed)) {
            console.error('BibTeX parsing failed: result is not an array');
            return [];
        }

        // Normalize and sort by year (descending)
        return parsed.sort((a, b) => {
            const yearA = parseInt(a.entryTags.year || '0');
            const yearB = parseInt(b.entryTags.year || '0');
            return yearB - yearA;
        });
    } catch (error) {
        console.error('Error parsing BibTeX file:', error);
        return [];
    }
}
