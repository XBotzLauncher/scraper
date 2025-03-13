const axios = require('axios')
const cheerio = require('cheerio')

class SnackVideo {
    constructor(url) {
        this.url = url;
    }

    getScript(html) {
        const $ = cheerio.load(html);
        let data = [];
        $("script").each((_, a) => {
            data.push($(a).html());
        });
        return data[5];
    }

    decodeUnicode(str) {
        return str.replace(/\\u(\w{4})/g, (match, group) => String.fromCharCode(parseInt(group, 16)));
    }

    async fetchData() {
        const { data: html } = await axios.get(this.url);
        const getScript = this.getScript(html);

        const _contentUrl = getScript.split('contentUrl:"');
        return this.decodeUnicode(_contentUrl[1].split('",commentUrl:"')[0]);
    }
}

module.exports = SnackVideo