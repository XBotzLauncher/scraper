const ytdl = require("@distube/ytdl-core");
const axios = require("axios");

let sesionCookieCuySlebew;

async function getInfo(url) {
  try {
    console.log("Fetching video info:", url); // Cek apakah URL diterima

    if (!sesionCookieCuySlebew) {
      console.log("Fetching YouTube homepage for cookies...");
      const ytcache = await axios.get("https://www.youtube.com");
      sesionCookieCuySlebew = ytcache.headers["set-cookie"]?.join("; ") || "";
      console.log("Session Cookie:", sesionCookieCuySlebew || "No cookies received");
    }

    const config = {
      requestOptions: {
        headers: { Cookie: sesionCookieCuySlebew }
      }
    };

    console.log("Fetching video details...");
    const hasil = await ytdl.getInfo(url, config);
    
    if (!hasil || !hasil.videoDetails) {
      console.error("Failed to fetch video details, response:", hasil);
      return null;
    }

    console.log("Video details fetched successfully");
    return {
      status: true,
      result: { 
        information: {
            videoId: data.videoId,
            title: data.title,
            description: data.description || "Tidak ada deskripsi",
            viewCount: data.viewCount,
            likes: data.likes?.count || 0,
            ownerChannelName: data.ownerChannelName,
            publishDate: data.publishDate,
            uploadDate: data.uploadDate,
          },
          keywords: data.keywords || [],
          author: data.author?.name || "Unknown",
          storyboards: data.storyboards || [],
          formats: {
            video: formats.find(f => f.mimeType.includes("video")) || null,
            audio: formats.find(f => f.mimeType.includes("audio")) || null,
          },
      }
    };
  } catch (err) {
    console.error("Error fetching video info:", err.message);
    return null;
  }
}

module.exports = getInfo