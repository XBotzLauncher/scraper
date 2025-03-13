const igdl = require('../script/instagram.js');

(async () => {
  const url = `https://www.instagram.com/reel/DDOqREuyi52/?igsh=cGFnd3h1azFoYzJk`;
  try {
    const data = await igdl(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()