const axios = require('axios');
const cheerio = require('cheerio');

async function hmDown(url) {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        const $ = cheerio.load(data);

        const apkInfo = {
            title: $('meta[property="og:title"]').attr('content') || $('h1').text().trim() || "Tidak ditemukan",
            image: $('meta[property="og:image"]').attr('content') || $('.app-box .img img').attr('src') || "Tidak ditemukan",
            update_date: $('.app-box p').text().trim() || "Tidak ditemukan",
            description: $('.short-desc').text().trim().replace(/\s+/g, ' ') || "Tidak ditemukan",
            version: $("tr:contains('Version') td:nth-child(2)").text().trim() || "Tidak ditemukan",
            size: $("tr:contains('Size') td:nth-child(2)").text().trim() || "Tidak ditemukan",
            mod_info: $("tr.high:contains('Mod info') td:nth-child(2)").text().trim() || "Tidak ditemukan",
            developer: $("tr:contains('Developer') td:nth-child(2)").text().trim() || "Tidak ditemukan",
            category: $("tr:contains('Category') td:nth-child(2) a").text().trim() || "Tidak ditemukan",
            google_play: $("tr:contains('Get it on Google Play') td:nth-child(2) a").attr('href') || "Tidak ditemukan",
            original_apk: $("tr:contains('Download original apk') td:nth-child(2) a").attr('href') || "Tidak ditemukan",
            download_links: []
        };

        $('.download-btn').each((_, el) => {
            const link = $(el).attr('href');
            const text = $(el).text().trim();
            if (link) {
                apkInfo.download_links.push({ text, link: new URL(link, url).href });
            }
        });

        return apkInfo;
    } catch (error) {
        return { error: error.message };
    }
}

module.exports = hmDown