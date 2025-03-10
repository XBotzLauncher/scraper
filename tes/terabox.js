const terabox = require('../script/terabox.js');

(async () => {
  const url = ``;
  try {
    const data = await terabox(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()