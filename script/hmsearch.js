const axios = require("axios");
const cheerio = require("cheerio");
 
async function hmSearch(q) {
    try {
        const anu = `https://happymod.com/search.html?q=${q}`;
        const { data } = await axios.get(anu);
        const $ = cheerio.load(data);
 
        let result = [];
 
        $(".pdt-app-box").each((_, el) => {
            const title = $(el).find("h3").text().trim();
            const link = "https://happymod.com" + $(el).find('a').attr('href');
            const rate = $(el).find("span.a-search-num").text().trim();
 
            result.push({
                title,
                link,
                rate
            });
        });
        //console.log(result)
        return result;
    } catch (e) {
        console.log(e);
    }
}
 
module.exports = hmSearch