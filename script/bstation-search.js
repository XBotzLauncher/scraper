const axios = require('axios');
const cheerio = require('cheerio');

async function getBsTation(q) {
    try {
        const anu = `https://www.bilibili.tv/id/search-result?q=${q}`;
        const { data } = await axios.get(anu);
        const $ = cheerio.load(data);

        let result = [];

        $('.card-container').each((_, el) => {
            const search = $(el).find('p.card-container__title').text().trim();
            const videoUrl = "https://www.bilibili.tv" + $(el).find('a').attr('href');
            const imageUrl = $(el).find('img').attr('src');
            const views = $(el).find('span.meta__tips-text').text().trim();
            const description = $(el).find('p').text().trim();

            result.push({
                search,
                videoUrl,
                imageUrl,
                views,
                description
            });
        });
        return result;
    } catch (e) {
        console.log(e);
        return [];
    }
}

module.exports = getBsTation