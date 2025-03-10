const hmDown = require('../script/hmdownload.js');

(async () => {
  const url = `https://happymod.com/carx-street-mod/com.carxtech.sr/`;
  try {
    const data = await hmDown(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()