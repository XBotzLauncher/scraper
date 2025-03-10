const getInfo = require('../script/youtubedownload.js');

(async () => {
  const url = `https://youtube.com/shorts/c4f-UWa_X88?si=DL68bceb7gekZ5Jx`;
  try {
    const data = await getInfo(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()