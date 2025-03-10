const getInfo = require('../script/youtubedownload.js');

(async () => {
  const url = `https://youtube.com/shorts/RsyhTNwjQOw?si=cIxeMHLB7Ge2-F3B`;
  try {
    const data = await getInfo(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()