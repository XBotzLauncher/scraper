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
      information: hasil.videoDetails, 
      formats: hasil.formats,
    };
  } catch (err) {
    console.error("Error fetching video info:", err.message);
    return null;
  }
}

module.exports = getInfo