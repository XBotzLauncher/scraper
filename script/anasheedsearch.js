const axios = require("axios");
const cheerio = require("cheerio");

async function searchAnasheed(query) {
    try {
        const url = `https://www.anasheed.info/browse/${encodeURIComponent(query)}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const results = [];

        $("li.panel-body").each((_, element) => {
            const title = $(element).find("a.lts h3").text().trim();
            const link = $(element).find("a.lts").attr("href");
            const singer = $(element).find("a.ltc h5").text().trim();
            const singerLink = $(element).find("a.ltc").attr("href");
            const image = $(element).find("img.ico").attr("src");
            const views = $(element).find("span.fa-bar-chart").parent().text().trim();

            results.push({
                title,
                link: link ? `${link}` : null,
                singer,
                singerLink: singerLink ? `${singerLink}` : null,
                image: image ? `https://www.anasheed.info${image}` : null,
                views
            });
        });

        return results;
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return [];
    }
}

module.exports = searchAnasheed