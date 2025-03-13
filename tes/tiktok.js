const TikTokDownloader = require('../script/tiktok.js');

(async () => {
    try {
        const tiktokDownloader = new TikTokDownloader();

        const videoUrl = 'https://vt.tiktok.com/ZSMs4F9C2';
        const videoResult = await tiktokDownloader.downloadTikTok(videoUrl);
        console.log('video:', videoResult);

        const photoUrl = 'https://vt.tiktok.com/ZSMGWpNTV';
        const photoResult = await tiktokDownloader.downloadTikTok(photoUrl);
        console.log('photo:', photoResult);
    } catch (error) {
        console.error('Failed to download TikTok content:', error.message);
    }
})();