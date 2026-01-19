import fs from 'fs';
import path from 'path';
import bibtexParse from '@orcid/bibtex-parse-js';

const bibPath = 'src/data/references.bib';

try {
    console.log(`Reading ${bibPath}...`);
    const content = fs.readFileSync(bibPath, 'utf-8');
    console.log(`Content length: ${content.length}`);

    console.log('Parsing...');
    const parsed = bibtexParse.toJSON(content);
    console.log('Parsed result type:', typeof parsed);
    console.log('Is Array?', Array.isArray(parsed));

    if (Array.isArray(parsed)) {
        console.log(`Entries found: ${parsed.length}`);
        console.log('First entry:', JSON.stringify(parsed[0], null, 2));
    } else {
        console.log('Result:', parsed);
    }

} catch (e) {
    console.error('Error:', e);
}
