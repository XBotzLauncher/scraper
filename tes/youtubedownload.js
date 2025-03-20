const savetube = require('../script/youtubedownload.js');

(async () => {
  const url = `https://youtu.be/XnNaOO5B_QE?si=aI4tz6VMUVXEvekd`;
  const format = "8k";
  try {
    const data = await savetube.download(url, format);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()