const tiktokStalk = require('../script/tiktokstalk.js');

(async () => {
  const username = `gamer_xl`;
  try {
    const data = await tiktokStalk(username);
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
})()