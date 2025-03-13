const SnackVideo = require('../script/snackvid.js');

(async () => {
  const url = ``;
  try {
    const data = await SnackVideo(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()