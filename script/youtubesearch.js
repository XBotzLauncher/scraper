const yts = require('yt-search');

async function ytsearch(query) {
  try {
    const ytResults = await yts.search(encodeURIComponent(query));
    const ytTracks = ytResults.videos.map(video => ({
      title: video.title,
      channel: video.author.name,
      duration: video.duration.timestamp,
      imageUrl: video.thumbnail,
      link: video.url
      
    }));
    return ytTracks
  } catch (error) {
    console.error(error.message)
  }
}

module.exports = ytsearch