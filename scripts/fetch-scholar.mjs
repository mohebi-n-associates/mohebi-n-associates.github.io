import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

const SCHOLAR_URL = 'https://scholar.google.com/citations?user=cPpBQ8kAAAAJ&hl=en&oi=ao';
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/scholar-stats.json');

async function fetchScholarData() {
    console.log('Fetching Google Scholar data...');
    try {
        const response = await fetch(SCHOLAR_URL, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Extract Total Citations and h-index
        const citations = $('#gsc_rsb_cit td.gsc_rsb_std').eq(0).text();
        const hIndex = $('#gsc_rsb_cit td.gsc_rsb_std').eq(2).text();

        console.log(`Extracted: Citations=${citations}, h-index=${hIndex}`);

        // Extract the graph data
        const graphData = [];
        try {
            // The graph years are in .gsc_g_t
            const years = $('.gsc_g_t').map((i, el) => $(el).text()).get();
            // The citation counts are in .gsc_g_a (often z-index represents height, but text contains count)
            const counts = $('.gsc_g_a').map((i, el) => $(el).text()).get();

            // Combine them
            years.forEach((year, index) => {
                const count = counts[index];
                if (year && count) {
                    graphData.push({ year: parseInt(year), citations: parseInt(count) });
                }
            });

            console.log(`Extracted ${graphData.length} data points for the graph.`);
        } catch (e) {
            console.error('Error parsing graph:', e);
        }

        // Create a simplified JSON payload
        const data = {
            citations,
            hIndex,
            graphData,
            lastUpdated: new Date().toISOString()
        };

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
        console.log(`Saved stats to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error fetching scholar data:', error);
        // Write fallback/empty data so build doesn't fail
        if (!fs.existsSync(OUTPUT_FILE)) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ citations: '...', hIndex: '...', graphData: [] }, null, 2));
        }
    }
}

fetchScholarData();
