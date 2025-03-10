const axios = require('axios');

async function getPastebinSource(url) {
    try {
        const match = url.match(/pastebin\.com\/([a-zA-Z0-9]+)/);
        if (!match) {
            throw new Error("URL Pastebin tidak valid!");
        }

        const pasteId = match[1];
        const rawUrl = `https://pastebin.com/raw/${pasteId}`;

        const response = await axios.get(rawUrl);
        return response.data;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

module.exports = getPastebinSource