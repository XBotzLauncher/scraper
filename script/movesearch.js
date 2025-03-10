const axios = require('axios');
const cheerio = require('cheerio');

async function movsearch(query) {
    const url = `https://www.themoviedb.org/search/movie?query=${encodeURIComponent(query)}`;
    
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const film = [];
        
        $('a.result').each((index, element) => {
            const title = $(element).find('h2').text().trim();
            const name = $(element).find('span.title').text().trim();
            const href = $(element).attr('href');
            if (title && name && href) {
                film.push({
                    title: title,
                    name: name,
                    url: `https://www.themoviedb.org${href}`
                });
            }
        });
        return film;
    } catch (error) {
        return [];
    }
}
module.exports = movsearch;