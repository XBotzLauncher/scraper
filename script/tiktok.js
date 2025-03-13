const axios = require('axios');

class TikTokDownloader {
    async downloadTikTok(url) {
        try {
            if (!url || typeof url !== 'string' || !url.includes('tiktok.com')) {
                throw new Error('Invalid TikTok URL');
            }

            const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`;
            const { data } = await axios.get(apiUrl);

            if (data.code !== 0 || !data.data) {
                throw new Error('Failed to fetch TikTok content: ' + data.msg);
            }

            const baseURL = 'https://tikwm.com';

            const isVideo = data.data.play && !data.data.play.endsWith('.mp3');
            const isPhoto = !isVideo && data.data.images && data.data.images.length > 0;

            if (isVideo) {
                return {
                    type: 'video',
                    id: data.data.id,
                    play: data.data.play,
                    wmplay: data.data.wmplay,
                    cover: data.data.cover,
                    duration: data.data.duration,
                    author: data.data.author,
                    music: data.data.music,
                    stats: {
                        play_count: data.data.play_count,
                        digg_count: data.data.digg_count,
                        comment_count: data.data.comment_count,
                        share_count: data.data.share_count,
                        download_count: data.data.download_count,
                    },
                };
            } else if (isPhoto) {
                return {
                    type: 'photo',
                    id: data.data.id,
                    images: data.data.images.map((image) => image),
                    cover: data.data.cover,
                    author: data.data.author,
                    music: data.data.music,
                    stats: {
                        play_count: data.data.play_count,
                        digg_count: data.data.digg_count,
                        comment_count: data.data.comment_count,
                        share_count: data.data.share_count,
                        download_count: data.data.download_count,
                    },
                };
            } else {
                throw new Error('Unsupported TikTok content type');
            }
        } catch (error) {
            console.error(`Error in downloadTikTok: ${error.message}`);
            throw error;
        }
    }
}

module.exports = TikTokDownloader;