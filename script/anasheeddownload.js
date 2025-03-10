const axios = require("axios");
const cheerio = require("cheerio");

async function getAnasheedInfo(url) {
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
            published,
        };
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return null;
    }
}

async function getAnasheedDownload(url) {
    try {
        const match = url.match(/\/(\d+)\//);
        if (!match) {
            throw new Error("Invalid URL format");
        }
        const id = match[1];

        const downloadUrl = `https://www.anasheed.info/download/${id}`;
        return downloadUrl;
    } catch (error) {
        console.error("Error fetching download link:", error.message);
        return null;
    }
}

async function getAnasheed(url) {
  try {
    const metadata = await getAnasheedInfo(url)
    const downloadAnasheed = await getAnasheedDownload(url)
    return {
      metadata,
      downloadAnasheed
    }
    } catch (error) {
      console.error("Error fetching download link:", error.message);
      return null;
  }
}

module.exports = { getAnasheed };