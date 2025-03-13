const axios = require('axios');
const FormData = require('form-data');

class TikTokSearch {
    async tiktokSearch(query, type = 'video', count = 10) {
        try {
            const payload = {
                keywords: query,
                count: count,
                cursor: 0,
                web: 1,
                hd: 1
            };

            const URI = type === 'photo' 
                ? 'https://tikwm.com/api/photo/search' 
                : 'https://tikwm.com/api/feed/search';

            const formData = new FormData();
            for (const key in payload) {
                formData.append(key, payload[key]);
            }
            const headers = {
                ...formData.getHeaders(),
            };

            const { data } = await axios.post(URI, formData, { headers });

            if (!data || !data.data || !Array.isArray(data.data.videos)) {
                throw new Error('Invalid response structure from TikTok API');
            }

            const baseURL = 'https://tikwm.com';

            const results = data.data.videos.map((item) => ({
                ...item,
                play: baseURL + item.play,
                wmplay: baseURL + item.wmplay,
                music: baseURL + item.music,
                cover: baseURL + item.cover,
                author: {
                    id: item.author.id,
                    unique_id: item.author.unique_id,
                    nickname: item.author.nickname,
                    avatar: baseURL + item.author.avatar
                }
            }));

            return results;
        } catch (error) {
            console.error(`Error in tiktokSearch: ${error.message}`);
            throw error;
        }
    }
}

module.exports = TikTokSearch;