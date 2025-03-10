const axios = require('axios');
const cheerio = require('cheerio');

async function cariGC(query) {
    try {
        const { data } = await axios.get(`https://groupsor.link/group/searchmore/${query.replace(/ /g, "-")}`);
        const $ = cheerio.load(data);
        const result = [];

        $(".maindiv").each((i, el) => {
            result.push({
                title: $(el).find("img").attr("alt")?.trim(),
                thumb: $(el).find("img").attr("src")?.trim(),
            });
        });

        $("div.post-info-rate-share > .joinbtn").each((i, el) => {
            if (result[i]) {
                result[i].link = $(el).find("a").attr("href")?.trim().replace("https://groupsor.link/group/join/", "https://chat.whatsapp.com/");
            }
        });

        $(".post-info").each((i, el) => {
            if (result[i]) {
                result[i].desc = $(el).find(".descri").text()?.replace("... continue reading", ".....").trim();
            }
        });

        return result;
    } catch (e) {
        console.log(e);
        return [];
    }
}

module.exports = cariGC