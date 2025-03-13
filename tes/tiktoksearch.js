const TikTokSearch = require('../script/tiktoksearch');

(async () => {
    try {
        const tiktokSearch = new TikTokSearch();

        const videoResults = await tiktokSearch.tiktokSearch('bmw m4', 'video', 5);
        console.log('Video Results:', videoResults);

        const photoResults = await tiktokSearch.tiktokSearch('bmw m4', 'photo', 5);
        console.log('Photo Results:', photoResults);
    } catch (error) {
        console.error('Failed to fetch TikTok content:', error.message);
    }
})();