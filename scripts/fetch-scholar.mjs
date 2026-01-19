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

        // Extract the graph HTML
        // The graph usually resides in #gsc_rsb_cit but the user's snippet suggests grabbing the whole wrapper or recreating it.
        // The visual graph in Google Scholar is actually rendered via JS or CSS bars.
        // Let's grab the table that shows the years and citations which is usually #gsc_rsb_cit (Citation indices) 
        // AND #gsc_rsb_co (Co-authors) - wait, the graph is often a separate element .gsc_md_hist_b

        // In many scraper implementations, the graph is harder to grab exactly as is because it might be canvas or div bars.
        // However, the user's PHP snippet suggests fetching the div with id "gsc_rsb_cit" and "gsc_rsb_mnd" (Histogram).

        // Let's try to grab the histogram wrapper specifically if possible.
        // On the public profile, the histogram matches .gsc_md_hist_b or .gsc_g_hist_wrp

        // Looking at the user's snippet regex: 
        // /<div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit" role="region" aria-labelledby="gsc_prf_t-cit">(.*)<\/div><div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_mnd" role="region" aria-labelledby="gsc_prf_t-mnd">/is

        // It seems they want the citation stats table and maybe the graph wrapper.
        // Let's extract the citation Stats Table and the Histogram.

        const citationTableHtml = $('#gsc_rsb_cit').html() || '';

        // The histogram is usually inside #gsc_rsb_mnd ?? No, that's "Mandatory public service" sometimes? 
        // Actually the graph container is often just part of the sidebar.
        // Let's look for .gsc_md_hist_w (histogram wrapper).
        const graphHtml = $('.gsc_md_hist_w').html() || '';

        // We also need the CSS style block if it's there.
        const styleBlock = $('style').first().html() || '';

        // Create a simplified JSON payload
        const data = {
            citations,
            hIndex,
            html: `
        <style>${styleBlock}</style>
        <div class="gsc_rsb_s gsc_prf_pnl" id="gsc_rsb_cit">${citationTableHtml}</div>
        <div class="gsc_md_hist_w">${graphHtml}</div>
      `,
            lastUpdated: new Date().toISOString()
        };

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(data, null, 2));
        console.log(`Saved stats to ${OUTPUT_FILE}`);

    } catch (error) {
        console.error('Error fetching scholar data:', error);
        // Write fallback/empty data so build doesn't fail
        if (!fs.existsSync(OUTPUT_FILE)) {
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ citations: '...', hIndex: '...', html: '' }, null, 2));
        }
    }
}

fetchScholarData();
