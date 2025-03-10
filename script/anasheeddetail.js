const axios = require("axios");
const cheerio = require("cheerio");

async function getAnasheedDetail(url) {
    try {
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(data);

        const image = $(".info-table .thumb img").attr("src");
        const title = $(".info-table .player h1").text().trim();
        const views = $(".info-table .player .info li i.fa-bar-chart").parent().text().trim();
        const published = $(".info-table .player .info li i.fa-calendar").parent().text().trim();

        return {
            title,
            image: image ? `https://www.anasheed.info${image}` : null,
            views,
            published
        };
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
    }
}

module.exports = getAnasheedDetail