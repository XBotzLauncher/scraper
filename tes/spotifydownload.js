const fetchDownload = require('../script/spotifydownload.js');

(async () => {
  const url = `https://open.spotify.com/track/61NcooPUwSPSwSyzF8UfYv?si=Xmo2b1w6Q_SquZFoeTRtVw`;
  try {
    const data = await fetchDownload(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()