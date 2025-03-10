const axios = require('axios');

async function fetchDownload(url) {
    try {
      const getMetadata = await axios.get(`https://api.fabdl.com/spotify/get?url=${url}`);
      const metaData = getMetadata?.data?.result;
      if (!metaData) throw new Error('Failed to retrieve metadata.');

      const getTrack = await axios.get(`https://api.fabdl.com/spotify/mp3-convert-task/${metaData.gid}/${metaData.id}`);
      const dataTrack = getTrack?.data?.result;
      if (!dataTrack?.download_url) throw new Error('Failed to retrieve track download URL.');

      const trackUrl = `https://api.fabdl.com${dataTrack.download_url}`;

      return {
        status: true,
        result: {
          id: metaData.id,
          type: metaData.type,
          name: metaData.name,
          artists: metaData.artists,
          url: trackUrl
        }
      };
    } catch (error) {
      console.error("Error fetching content from Spotify:", error.message);
      return { status: false, error: error.message };
    }
  }
module.exports = fetchDownload