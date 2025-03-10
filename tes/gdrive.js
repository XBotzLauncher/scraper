const drive = require('../script/gdrive.js');

(async () => {
  const url = ``;
  try {
    const data = await drive(url);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()