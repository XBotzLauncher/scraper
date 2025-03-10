const axios = require('axios');
const cheerio = require('cheerio');
 
async function themovD(linkhal) {
    try {
        const {
            data
        } = await axios.get(linkhal);
        const $ = cheerio.load(data);
 
        const poster = $('.blurred img.poster').attr('src') || '';
        const users = $('.user_score_chart').attr('data-percent') || '';
        const desk = $('.overview p').text().trim();
 
        const vote = [];
        $('.people.scroller li.card').each((index, element) => {
            const OrangUrl = `https://www.themoviedb.org${$(element).find('a').attr('href')}`;
            const orang2 = $(element).find('p a').text().trim();
            const char = $(element).find('.character').text().trim();
            const eps = $(element).find('.episode_count').text().trim();
 
            if (OrangUrl && orang2) {
                vote.push({
                    orang2,
                    char,
                    eps,
                    OrangUrl
                });
            }
        });
 
        const top = [];
        $('.leaderboard .edit_leader').each((index, element) => {
            const Toplink = `https://www.themoviedb.org${$(element).find('a').attr('href')}`;
            const Topnma = $(element).find('.info a').text().trim();
            const jumlh = $(element).find('.edit_count').text().split('\n')[0].trim();
            const profile = $(element).find('.avatar img').attr('src') || '';
 
            if (Toplink && Topnma) {
                top.push({
                    Topnma,
                    jumlh,
                    Toplink,
                    profile
                });
            }
        });
 
        return {
            poster,
            users,
            desk,
            vote,
            top
        };
    } catch (error) {
        return {
            error: 'Gagal mengambil data'
        };
    }
}
 
module.exports = themovD;