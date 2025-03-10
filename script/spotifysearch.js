const axios = require('axios');

const TOKEN_URL = "https://restapi-v2.vercel.app/api/other/spotify-token"; // Pastikan sesuai dengan API token yang benar

const getAccessToken = async () => {
  try {
    const response = await axios.get(TOKEN_URL);
    return response.data.response.access_token;
  } catch (error) {
    console.error("Error fetching token:", error.response?.data || error.message);
    return null;
  }
};

  async function fetchSearch(query) {
    const token = await getAccessToken();
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const tracks = response?.data?.tracks?.items || [];
      return {
        status: true,
        result: tracks.map((track) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          album: track.album.name,
          release_date: track.album.release_date,
          url: track.external_urls.spotify,
        })),
      };
    } catch (error) {
      console.error("Error fetching from Spotify API:", error.message);
      return { status: false, error: error.message };
    }
  }
  
  module.exports = fetchSearch