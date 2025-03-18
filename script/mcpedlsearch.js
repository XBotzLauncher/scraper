const axios = require('axios');
const cheerio = require('cheerio');

async function mcpedlSearch(searchQuery, maxResult = 10) {
    try {
        const url = `https://mcpedl.org/?s=${encodeURIComponent(searchQuery)}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = [];

        $('.g-block.size-20 article').each((i, el) => {
            if (results.length >= maxResult) return false;
            results.push({
                title: $(el).find('.entry-title a').text().trim() || 'No title',
                link: $(el).find('.entry-title a').attr('href') || 'No link',
                image: $(el).find('.post-thumbnail img').attr('data-srcset') 
                    || $(el).find('.post-thumbnail img').attr('src') 
                    || 'No image',
                rating: $(el).find('.rating-wrapper span').text().trim() || 'No rating'
            });
        });

        return { success: true, result: results };
    } catch (error) {
        return { success: false, result: [], error: error.message };
    }
}

module.exports = mcpedlSearch;